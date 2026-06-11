// coldqubit.org · surface behavior
// Two effects: the scroll-reveal navbar name, and hero stats parsed live
// from GitHub (org repos, MAINTAINERS.md, license, release/stage).

// Show the navbar name only while the hero "coldqubit" is off screen.
(function () {
  var nav = document.getElementById('topnav');
  var heroName = document.querySelector('.hero h1');
  if (!nav || !heroName || !('IntersectionObserver' in window)) return;
  new IntersectionObserver(function (entries) {
    nav.classList.toggle('scrolled', !entries[0].isIntersecting);
  }, { threshold: 0 }).observe(heroName);
})();

// Hero stats, parsed from GitHub. The HTML values are static fallbacks;
// anything that fails (offline, rate limit) keeps the baked-in value.
// Responses cache in sessionStorage for 10 minutes to respect the
// unauthenticated GitHub API limit (60 req/h per IP).
(function () {
  var ORG = 'coldqubit';
  var TTL = 10 * 60 * 1000;

  function cached(url, asText) {
    var key = 'cq:' + url;
    try {
      var hit = JSON.parse(sessionStorage.getItem(key));
      if (hit && Date.now() - hit.t < TTL) return Promise.resolve(hit.v);
    } catch (e) { /* fall through to network */ }
    return fetch(url).then(function (r) {
      if (!r.ok) throw new Error(String(r.status));
      return asText ? r.text() : r.json();
    }).then(function (v) {
      try { sessionStorage.setItem(key, JSON.stringify({ t: Date.now(), v: v })); } catch (e) { /* quota */ }
      return v;
    });
  }

  function set(id, value) {
    var el = document.getElementById(id);
    if (el && value != null) el.textContent = value;
  }

  // Active projects: public, non-fork, non-archived repos that are products
  // (the .github org-management repo is the home itself, not a project).
  cached('https://api.github.com/orgs/' + ORG + '/repos?per_page=100&type=public').then(function (repos) {
    var projects = repos.filter(function (r) {
      return !r.fork && !r.archived && r.name !== '.github';
    });
    if (!projects.length) return;
    set('s-projects', String(projects.length).padStart(2, '0'));
    var names = projects.map(function (r) { return r.name; }).sort().join(' · ');
    set('s-projects-sub', names + ' · more planned');
  }).catch(function () {});

  // Maintainers: count the rows of the "Current maintainers" table in
  // shotgate's MAINTAINERS.md, the project's source of truth for the roster.
  cached('https://raw.githubusercontent.com/' + ORG + '/shotgate/main/MAINTAINERS.md', true).then(function (md) {
    var section = md.split(/^## Current maintainers/m)[1];
    if (!section) return;
    section = section.split(/^## /m)[0];
    var rows = section.split('\n').filter(function (l) {
      return /^\|\s*\[/.test(l); // table rows whose first cell is a [link]
    });
    if (rows.length) set('s-maintainers', rows.length);
  }).catch(function () {});

  // License: SPDX id of the flagship repo.
  cached('https://api.github.com/repos/' + ORG + '/shotgate').then(function (r) {
    var spdx = r.license && r.license.spdx_id;
    if (spdx && spdx !== 'NOASSERTION') set('s-license', spdx);
  }).catch(function () {});

  // Stage: dev-status classifier + latest release tag.
  cached('https://raw.githubusercontent.com/' + ORG + '/shotgate/main/pyproject.toml', true).then(function (t) {
    var st = t.match(/Development Status :: \d+ - ([A-Za-z/ ]+)"/);
    if (st) set('s-stage', st[1].trim().toLowerCase());
  }).catch(function () {});
  cached('https://api.github.com/repos/' + ORG + '/shotgate/releases/latest').then(function (r) {
    if (r.tag_name) set('s-stage-sub', 'latest release ' + r.tag_name);
  }).catch(function () {});
})();
