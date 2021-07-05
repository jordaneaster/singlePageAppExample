import AbstractView from "./AbstractView.js"; 

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("My Projects");
  }

  async getHtml() {
    return `
        <div>
    <h1>Construction Projects</h1>
<p>
    project: "CandleWood Suites @ Aberdeen Proving Ground",
    city: "Columbia",
    state: "Maryland",
</p>
<p>
    project: "University Of Maryland Capitol Regional Medical Center",
      city: "Largo",
      state: "Maryland", 
</p>
<p>
    project: "Ball State University North Residence Hall",
      city: "Munice",
      state: "Indiana",
</p>
<p>
    project:
        "Steel Erection Project Engineering - Ascent @ The Top Of The Hill",
      city: "Cleveland Heights/ East Columbus[WareHouse]",
      state: "Ohio",
</p>
</div>
        `;
  }
}
