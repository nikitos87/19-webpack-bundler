import "./index.css";
import JS_IMAGE from "./assets/js.png";

console.log("Hello, World!");

const body = document.querySelector("body");

const someHeader = document.createElement("h2");
someHeader.textContent = "I love JavaScript";
const jsImage = document.createElement("img");
jsImage.setAttribute("src", JS_IMAGE);

body.append(someHeader);
body.append(jsImage);
