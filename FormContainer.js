class FormContainer extends HTMLElement {
    constructor() {
      super();
      
      // Crear un shadow root
      this.attachShadow({ mode: 'open' });
      
      // Agregar el HTML y el CSS del componente
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: none;
            visibility: hidden;
            opacity: 0;
            transition: opacity 0.3s ease, visibility 0.3s ease;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            z-index: 1000;
          }
          
          :host(.active) {
            display: block;
            visibility: visible;
            opacity: 1;
          }
          
          .form-content {
            position: relative;
            margin: auto;
            top: 25%;
            background: white;
            padding: 20px;
            border-radius: 5px;
            width: 50%;
          }
        </style>
        <div class="form-content">
          <slot></slot>
        </div>
      `;
    }
}