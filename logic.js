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
    width: window.innerWidth,
    height: window.innerHeight - 40,
    wireframes: false,
    background: 'white'
  }
});


var bottomWall = Bodies.rectangle(0, window.innerHeight-35, (window.innerWidth)*2, 40, { isStatic: true});

var box = Bodies.rectangle(90, 120, 40, 40);

World.add(engine.world, [bottomWall, box]);

Engine.run(engine);

Render.run(render);

let btn = document.getElementById("btn");

btn.onclick = function() {

     Matter.Body.setVelocity( box, {x: 20, y: -20});

};
