import './style.css';

document.addEventListener('DOMContentLoaded', () => {
    const appDiv = document.getElementById('app');
    if (appDiv) {
        appDiv.textContent = 'Hello, Webpack!';
        appDiv.className = 'app';
    } else {
        console.error('App div not found');
    }
});

