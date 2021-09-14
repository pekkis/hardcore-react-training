import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("pekkis-duckling-suckler")
export class PekkisDucklingSuckler extends LitElement {
  static styles = css`
    div {
      background-color: black;
      color: white;
      padding: 1em;
      border-radius: 10px;
    }

    p:first-child {
      margin-top: 0;
    }

    p:last-child {
      margin-bottom: 0;
    }
  `;

  @property()
  name = "Somebody";

  render() {
    return html`<div>
      <p>
        I am pretty sure that somewhere, someone, is
        <em>suckling on a juicy duckling.</em> But I do assure you that it is
        not me, <strong>${this.name}</strong>.
      </p>
      <p>This black box is a <em>native</em> web component, by the way.</p>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "pekkis-duckling-suckler": PekkisDucklingSuckler;
  }

  namespace JSX {
    interface IntrinsicElements {
      "pekkis-duckling-suckler": { name?: string };
    }
  }
}
