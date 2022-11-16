

class ExampleComponent extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    
     // Create a shadow root
    const shadow = this.attachShadow({mode: 'open'});

    // Create Elements
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'wrapper');
    
    // Create Style
    
    }
}

// Define the new element
customElements.define('example-component', ExampleComponent);

