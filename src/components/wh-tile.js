import { html, css, LitElement } from 'lit'

export class WhTile extends LitElement {
  static get styles() {
    return css`
      :host {
        display: inline-block;
      }
      .tile {
        width: 100%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        line-height: 2rem;
        font-weight: bold;
        vertical-align: middle;
        box-sizing: border-box;
        color: var(--tile-text-color);
        text-transform: uppercase;
        user-select: none;
      }
      .tile::before {
        content: '';
        display: inline-block;
        padding-bottom: 100%;
      }

      /* Allow tiles to be smaller on small screens */
      @media (max-height: 600px) {
        .tile {
          font-size: 1em;
          line-height: 1em;
        }
      }
    `
  }

  static get properties() {
    return {
      /**
       * The letter displayed in the tile.
       */
      letter: { type: String },

      /**
       * If the guess is correct, absent, or present.
       */
      evaluation: { type: String }
    }
  }

  constructor() {
    super()
    // this.name = 'World'
    // this.count = 0
  }

  render() {
    return html`
      <div class="tile">${this.letter}</div>
    `
  }

  // _onClick() {
  //   this.count++
  // }
}

window.customElements.define('wh-tile', WhTile);