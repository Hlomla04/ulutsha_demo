// Ulutsha LwaseMancotsheni — Screen Navigation
// Maps tab index to screen name
const screenMap = [
  'landing',
  'login',
  'register',
  'dashboard',
  'contributions',
  'submitclaim',
  'myclaims',
  'admin',
  'adminmembers',
  'adminclaims'
];

/**
 * Show a specific screen and highlight its tab.
 * @param {string} name - The screen name (e.g. 'landing', 'login')
 */
function go(name) {
  // Hide all screens
  document.querySelectorAll('.screen').forEach(function(s) {
    s.classList.remove('active');
  });

  // Deactivate all tabs
  document.querySelectorAll('.screen-tab').forEach(function(t) {
    t.classList.remove('active');
  });

  // Show the target screen
  var el = document.getElementById('s-' + name);
  if (el) {
    el.classList.add('active');
  }

  // Highlight the matching tab
  var idx = screenMap.indexOf(name);
  var tabs = document.querySelectorAll('.screen-tab');
  if (idx >= 0 && tabs[idx]) {
    tabs[idx].classList.add('active');
  }

  // Scroll to top
  window.scrollTo(0, 0);
}
