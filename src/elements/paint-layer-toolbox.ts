import { customElement } from 'lit/decorators.js';
import { css, CSSResultGroup, html, LitElement, TemplateResult } from 'lit';

@customElement('paint-layer-toolbox')
export class PaintLayerToolbox extends LitElement {
  static get styles(): CSSResultGroup {
    return css`
      .layer-toolbox {
        display: flex;
        align-items: center;
        background-color: grey;
      }

      .layer-tool-icon {
        size: 2rem;
      }
    `;
  }

  constructor() {
    super();
  }

  createRenderRoot() {
    return this; // Render template into light DOM
  }

  getButton(): TemplateResult | void {
    return html`
    <p class="layer-tool-icon">+</p>
    `;
  }

  
  render(): TemplateResult {
    return html`
      <div class="layer-toolbox">
        ${this.getButton()}
      </div>
    `
  }
}