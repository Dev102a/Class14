var student = {
  name:"Ben",
  class: 7,
  role_number: 15,
  favourite_subject: "science",
  marks: [70,62,98,81,100]
}
var ball = {
  X:80,
  Y:80,
  R:80,
  Xspeed:1,
 color: ["red","blue","yellow"]
}
function setup() {
  createCanvas(400, 400);
  console.log(student.name)
  console.log(student.class)
  console.log(student.role_number)
  console.log(student.favourite_subject)
  console.log(student.marks)
  student.role_number = 25
  console.log(student.role_number)
}

function draw() {
  background(220);
  circle(ball.X,ball.Y,ball.R)
  ball.X += ball.Xspeed
fill(ball.color[1])
}