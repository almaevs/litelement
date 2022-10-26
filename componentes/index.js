import { html, LitElement} from 'lit-element';

export class MyWebcomponent extends LitElement{
 static get properties() {
    return{
      person : { type: Object}
    }       
    }
    constructor(){
      super();
      this.person = {name:"Almita", edad:"25"}
      
    }

 render(){
    return html`
    <p>Welcome to the Lit tutorial!</p>
    <p>Este es el nombre ${this.person.name} 
    <p>Esta es la edad ${this.person.edad} 
    `;
}
}
customElements.define('my-element', MyWebcomponent);