var Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies,
  Body = Matter.Body;
  Runner = Matter.Runner,
  Composite = Matter.Composite;

var engine = Engine.create();

var render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: window.innerWidth,
    height: window.innerHeight,
    wireframes: false,
    background: 'white'
  }
});


var ground = Bodies.rectangle(200, 200, 200, 60, { isStatic: true });
Composite.add(engine.world, [ ground]);

let tomato = Bodies.circle(200, 165, 35,  {
  render: {
      sprite: {
          texture:
          "images/tomato.svg"
      }
  }
  });
  Composite.add(engine.world, [tomato]);


var floor = Bodies.rectangle(0, window.innerHeight, 10000, 200, { 
  render:{
fillStyle: 'gray'
  },
  isStatic: true
  
});
Composite.add(engine.world, [floor]);
var xAxis = Bodies.rectangle(100, window.innerHeight-100, 10000, 10, { 
  render:{
  
    fillStyle: 'black'
  },
    isStatic: true });
var yAxis = Bodies.rectangle(100, 0, 10, 10000, { 
  render:{
  
    fillStyle: 'black'
  },isStatic: true });
Composite.add(engine.world, [xAxis,  yAxis]);

Engine.run(engine);

Render.run(render);
var runner = Runner.create();

let btn = document.getElementById("btn");

var velocity;
var angle;

var slider1 = document.getElementById("myRange1");
var output1 = document.getElementById("demo1");
output1.innerHTML = slider1.value; // Display the default slider value
velocity = slider1.value/2;
calculateVelocityComponents();
// Update the current slider value (each time you drag the slider handle)
slider1.oninput = function() {
  output1.innerHTML = this.value;
  velocity = this.value/2;
  calculateVelocityComponents();
}
var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("demo2");
output2.innerHTML = slider2.value; // Display the default slider value
angle = slider2.value;
calculateVelocityComponents();
// Update the current slider value (each time you drag the slider handle)
slider2.oninput = function() {
  output2.innerHTML = this.value;
  angle = this.value;
  calculateVelocityComponents();
}
function calculateVelocityComponents() {
  var cosA = Math.cos(angle * Math.PI / 180);
  var sinA = Math.sin(angle * Math.PI / 180);
  var velocityX = velocity * cosA;
  var velocityY = velocity * sinA;

  // Do something with velocityX and velocityY here
  btn.onclick = function() {

    Matter.Body.setVelocity( tomato, {x: velocityX, y: -velocityY});

    setTimeout(function() {
    let newTomato = Bodies.circle(200, 165, 35,  {
       render: {
           sprite: {
               texture:
               "images/tomato.svg"
           }
       }
       });
       
       Composite.remove(engine.world, [tomato]);
       Composite.add(engine.world, [newTomato]);
       
       tomato = newTomato;
   }, 2000);
  };
}


        






