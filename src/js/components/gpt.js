async function getUserData() {
  try {
    const response = await fetch(
      "https://5fb46367e473ab0016a1654d.mockapi.io/articles"
    );
    if (!response.ok) {
      throw new Error(`Error en fetch de datos: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error", error);
    throw error; // Re-lanza el error para manejarlo más adelante si es necesario
  }
}

export default class CustomList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    try {
      const data = await getUserData(); // Espera a que getUserData() resuelva la promesa

      const ul = document.createElement("ul");
      data.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.title;
        ul.appendChild(li);
      });

      this.shadowRoot.appendChild(ul); // Añade la lista al shadow DOM
    } catch (error) {
      console.log("error", error);
      // Aquí podrías manejar el error de otra manera, como mostrar un mensaje al usuario
    }
  }
}

customElements.define("custom-list", CustomList);
