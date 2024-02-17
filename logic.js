var Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies,
  Body = Matter.Body;

var engine = Engine.create();

var render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 800,
    height: 400,
    wireframes: false
  }
});

var topWall = Bodies.rectangle(400, 50, 720, 20, { isStatic: true });
var leftWall = Bodies.rectangle(50, 210, 20, 300, { isStatic: true });
var rightWall = Bodies.rectangle(750, 210, 20, 300, { isStatic: true });
var bottomWall = Bodies.rectangle(400, 350, 720, 20, { isStatic: true });

var box = Bodies.rectangle(90, 120, 40, 40);

World.add(engine.world, [topWall, leftWall, rightWall, bottomWall, box]);

Engine.run(engine);

Render.run(render);

let btn = document.getElementById("btn");

btn.onclick = function() {

     Matter.Body.setVelocity( box, {x: 20, y: -20});

};
