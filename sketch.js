//creating variables 
var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=200;
var score =0;























//creating a function setup 
function setup() {
  createCanvas(700, 700);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);











  //creating a for loop condition 
   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

  //creating 1st for loop condition 
    for (var j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,75));
    }

    //creating second for loop condition 
    for (var j = 50; j <=width-10; j=j+50) 
    {
      plinkos.push(new Plinko(j,175));
    }

    //creating third for loop condiotion 
    for (var j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,275));
    }
    
    //creating fourth for loop condition 
    for (var j = 50; j <=width-10; j=j+50) 
    {
         plinkos.push(new Plinko(j,375));
    }
}
 

//creating a function draw 
function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
  Engine.update(engine);
  ground.display();
 
  
  //creating for loop condition 
  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
     
   }
  
  
  
  
  
  
  
   if(frameCount%60===0){
     particles.push(new Particle(random(100, 700), 10,10));
     score++;
   }
 
  
  
  
  
  
  
  
  
   for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
  
  
  
  
  
  
  
  
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}