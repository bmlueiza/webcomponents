async function getUserData() {
  try {
    const response = await fetch(
      "https://5fb46367e473ab0016a1654d.mockapi.io/articles"
    );
    if (!response.ok) {
      throw new Error(`Error en fetch de datos data: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error", error);
  }
}

export default class CustomList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    (async () => {
      try {
        const data = getUserData();
        const ul = document.createElement("ul");
        //Crear un template literal para crear un listado de elementos
        ul.innerHTML = data.map((item) => `<li>${item.title}</li>`).join("");
        this.shadowRoot.appendChild(ul);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }
}

customElements.define("custom-list", CustomList);
