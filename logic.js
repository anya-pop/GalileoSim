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
    height: window.innerHeight - 40,
    wireframes: false,
    background: 'white'
  }
});


var bottomWall = Bodies.rectangle(0, window.innerHeight-35, (window.innerWidth)*2, 40, { isStatic: true});
var ground = Bodies.rectangle(200, 610, 200, 60, { isStatic: true });
Composite.add(engine.world, [ ground]);
let boxA = Bodies.rectangle(200, 200, 80, 80, {
  render: {
      sprite: {
          texture:
          "images/tomato.svg"
      }
  }
  });
  Composite.add(engine.world, boxA);

Composite.add(engine.world, [bottomWall]);
var xAxis = Bodies.rectangle(0, window.innerHeight-100, 10000, 50, { isStatic: true });
var yAxis = Bodies.rectangle(0, 0, 50, 10000, { isStatic: true });
Composite.add(engine.world, [xAxis,  yAxis]);

Engine.run(engine);

Render.run(render);
// create runner
var runner = Runner.create();

let btn = document.getElementById("btn");

btn.onclick = function() {

     Matter.Body.setVelocity( boxA, {x: 20, y: -20});

};
