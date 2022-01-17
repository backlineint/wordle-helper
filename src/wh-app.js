import { html, css, LitElement } from 'lit';

import { WhTile } from './components/wh-tile';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class WhApp extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        border: solid 1px gray;
        padding: 16px;
        max-width: 800px;
      }
    `
  }

  static get properties() {
    return {
      /**
       * The name to say "Hello" to.
       */
      name: { type: String },

      /**
       * The number of times the button has been clicked.
       */
      count: { type: Number }
    }
  }

  constructor() {
    super()
    this.name = 'World'
    this.count = 0
  }

  render() {
    return html`
      <wh-tile letter="B" evaluation="absent"></wh-tile>
      <h1>Hello, ${this.name}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `
  }

  _onClick() {
    this.count++
  }
}

window.customElements.define('wh-app', WhApp);
