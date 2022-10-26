import { html, LitElement} from 'lit-element';

export class MyWebcomponent extends LitElement{
 static get properties() {
    return{
       state:{type:Object}
    }       
    }
    constructor(){
      super();
      this.state={ seconds:0}
      this.interval=setInterval(()=>(this.state={
        seconds:this.state.seconds+1
      }),2000)
      
    }
 render(){
    return html`
     <div>
     <h1> contador:${(this.state.seconds)}
    `;
}
}
customElements.define('my-count', MyWebcomponent);