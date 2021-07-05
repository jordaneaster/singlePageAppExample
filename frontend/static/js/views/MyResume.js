import AbstractView from "./AbstractView.js"; 

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Jordan Erik Easter - Resume");
  }

  async getHtml() {
    return `
        <h1>My Resume </h1>
        <p>Here is my resume...</p>
        `;
  }
}
