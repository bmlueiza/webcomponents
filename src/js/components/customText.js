export default class CustomText extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<p>lorem</p>`;
  }
}

customElements.define("custom-text", CustomText);
