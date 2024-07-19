export default class HelloWorld extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<h2>${this.getAttribute("contenido")}</h2>`;
  }
}

customElements.define("hello-world", HelloWorld);
