import AbstractView from "./AbstractView.js"; 

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Jordan Erik Easter - Java/JavaScript/React/Html");
  }

  async getHtml() {
    return `
        <h1>Jordan Erik Easter - Java/JavaScript/React/Html</h1>
        <p>Welcome to My Page!</p>
        `;
  }
}
