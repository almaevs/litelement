import { html, LitElement} from 'lit-element';

export class MyWebcomponent extends LitElement{
 static get properties() {
    return{
       counter:{type:Number}    
    }       
    }
    constructor(){
      super();
      this.counter=0;      
    }
 render(){
    return html`
     <div> Tenemos ${this.counter} clics</div>
     <div><button @click="${this.incrementar}">+1</button>
     <button @click="${this.decrementar}">-1</button>
     </div>
    `;
    }
    incrementar(){
        this.counter++;
    }
    decrementar(){
        this.counter--;
    }
}
customElements.define('my-counter', MyWebcomponent);