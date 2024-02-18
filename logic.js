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


var floor = Bodies.rectangle(0, window.innerHeight, 10000, 100, { 
  render:{
fillStyle: 'gray'
  },
  isStatic: true
  
});
Composite.add(engine.world, [floor]);
var xAxis = Bodies.rectangle(0, window.innerHeight, 10000, 10, { isStatic: true });
var yAxis = Bodies.rectangle(100, 0, 10, 10000, { isStatic: true });
Composite.add(engine.world, [xAxis,  yAxis]);

Engine.run(engine);

Render.run(render);
var runner = Runner.create();

let btn = document.getElementById("btn");

btn.onclick = function() {

     Matter.Body.setVelocity( tomato, {x: 15, y: 0});

     setTimeout(function() {
     let newTomato = Bodies.circle(200, 165, 35,  {
        render: {
            sprite: {
                texture:
                "images/tomato.svg"
            }
        }
        });
        Composite.add(engine.world, [newTomato]);
        tomato = newTomato;
    }, 1000);
        

};
