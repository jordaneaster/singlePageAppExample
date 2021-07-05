import AbstractView from "./AbstractView.js"; 

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("My Inspiration");
  }

  async getHtml() {
    return `
        <h1>How I Got Here...</h1>
        <p>My Inspiration..</p>
        `;
  }
}
