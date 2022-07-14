import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './ListCardMovie-styles.js';
import '@card-title/card-title/card-title.js';
/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<list-card-movie></list-card-movie>
```

##styling-doc

@customElement list-card-movie
*/
export class ListCardMovie extends LitElement {
  static get is() {
    return 'list-card-movie';
  }

  // Declare properties
  static get properties() {
    return {
      listCards: { type: Array, },
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.listCards = [];
  }
  setAttribute(data){
    this.listCards=data.listCards;

  }
  static get styles() {
    return [
      styles,
      getComponentSharedStyles('list-card-movie-shared-styles')
    ];
  }
  eventMovie(data){
    console.log(data)
  }

  // Define a template
  render() {
    return html`
      <div>
        <h2>Movies</h2>
        <div class="row row-cols-auto justify-content-md-center" >
          ${this.listCards.map(
            (i) => html`<div class="col">
              <card-title 
                title=${i.title}
                info=${i.info}
                image=${i.image} 
               @selection-movie=${(data)=>this.eventMovie(data)}></card-title>
            </div>
            `)}
        </div>
      </div>
    `;
  }
}
