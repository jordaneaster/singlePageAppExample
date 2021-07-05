import AbstractView from "./AbstractView.js"; 

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("My Git Repositories");
  }

  async getHtml() {
    return `
        <h1> My Git Repos </h1></h1>
        <p>Git Repos..</p>
        `;
  }
}
