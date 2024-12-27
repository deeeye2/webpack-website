import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  const appDiv = document.getElementById('app');
  appDiv.textContent = 'Hello, Webpack!';
  appDiv.className = 'app';
});

