// Переключение светлой и тёмной темы. Выбор сохраняется в localStorage.
var root = document.documentElement;
var savedTheme = localStorage.getItem('theme');
var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

root.setAttribute('data-theme', savedTheme || (prefersDark ? 'dark' : 'light'));

document.addEventListener('DOMContentLoaded', function () {
  var button = document.querySelector('.theme-toggle');

  button.addEventListener('click', function () {
    var newTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
});
