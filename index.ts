// Import stylesheets
import './style.css';

// Write TypeScript code!
const version = '0.0.1';
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Ciao Gabriele!</h1>
<footer>
  <a href="https://medium.com/@creativomoc/stackblitz-with-github-and-firebase-fastest-way-to-develop-version-control-build-and-deploy-a-73c311eb07ea" target="blank"> → tutorial</a>
  <aside>${version}</aside>
</footer>`;