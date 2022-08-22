import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

const routes = {
  "/": "Home",
  "/about": "About",
  "/contact": "Contact",
};

const appDiv = document.querySelector("#app");
appDiv.innerHTML = routes[window.location.pathname];

window.onNavigate = (pathname) => {
  console.log("Navigating to", pathname);
  window.history.pushState({}, pathname, window.location.origin + pathname);
  appDiv.innerHTML = routes[pathname];
};

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector("#counter"));
