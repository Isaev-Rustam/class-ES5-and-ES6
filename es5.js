
function Widget(width,height) {
  this.width = width || 50;
  this.height = height || 50;
  this.$elem = null;
}

Widget.prototype.render = function($where){
  if (this.$elem) {
    this.$elem.style.cssText =`width:${this.width}px; height: ${this.height}px;`;
    $where.append(this.$elem)
  }
};

function Button(width, height, label) {
  Widget.call( this, width, height );
  this.label = label || "Default";
  this.$elem =  document.createElement("BUTTON");
  this.$elem.textContent = this.label;
}
// Заставить `Button` "наследовать" от `Widget`
Button.prototype = Object.create( Widget.prototype );

// переопределить базовую "унаследованную" версию `render(..)`
Button.prototype.render = function($where) {
  // вызов "super"
  Widget.prototype.render.call( this, $where );
  this.$elem.onclick =  this.onClick.bind( this );
};

Button.prototype.onClick = function(evt) {
  console.log( "Button '" + this.label + "' clicked!" );
};



var btn1 = new Button( 225, 70, "Hello" );
btn1.render( document.body );

