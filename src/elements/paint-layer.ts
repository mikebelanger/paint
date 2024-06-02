import { customElement, property } from 'lit/decorators.js';
import { css, CSSResultGroup, html, LitElement, TemplateResult } from 'lit';
import { DRAWING_CONTEXT } from '../data/drawing-context';
import type { Layer } from '../models/layer';

@customElement('paint-layer-section')
export class PaintLayer extends LitElement {
  @property()
  name?: string

  @property() drawingContext = DRAWING_CONTEXT;
  @property() editable: boolean = false;

  static get styles(): CSSResultGroup {
    return css`
      .layer-container {
        display: flex;
        align-items: center;
        flex-direction: column;
        height: 100%;
        justify-content: space-between;
      }
      .layer {
        border-width: 3px;
        border-color: white;
        border-style: solid;
        width: 100%;
        padding: 1em 1em;
        margin: 0.25em;
      }
    `;
  }

  constructor() {
    super();
    this.editable = false;
  }

  setEditable(to: boolean) {
    this.editable = to;
  }

  render(): TemplateResult {
    let outputHTML: TemplateResult[] = [];

    this.drawingContext.layers.forEach((layer: Layer, layer_id: string) => {
      outputHTML.push(
        this.editable
         ? html`<input @change=${this.setEditable(false)} type="text" value=${layer.name}></input>`
         : html`<section id=${layer_id} @click=${this.setEditable(true)} class="layer">${layer.name}</section>`
      )
    });

    return html`
      <div class="layer-container">
        ${outputHTML}
        <paint-layer-toolbox></paint-layer-toolbox>
      </div>
      `
  };
}