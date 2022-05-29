class Widget1 {
  constructor(width,height) {
    this.width = width || 50;
    this.height = height || 50;
    this.$elem = null;
  }
  render($where){
    if (this.$elem) {
      this.$elem.style.cssText =`width:${this.width}px; height: ${this.height}px;`;
      $where.append(this.$elem)
    }
  }
}

class Button1 extends Widget {
  constructor(width,height,label) {
    super( width, height );
    this.label = label || "Default";
    this.$elem =  document.createElement("BUTTON");
    this.$elem.textContent = this.label;
  }
  render($where) {
    super.render( $where );
    this.$elem.onclick =  this.onClick.bind( this );
  }
  onClick(evt) {
    console.log( "Button 1'" + this.label + "' clicked!" );
  }
}



var btn2 = new Button1( 225, 70, "Hello1" );
btn2.render( document.body );
