const questions = [
  {
    q: "2+2",
    a: 4,
    options: [5, 4, 3, 2],
  },
  {
    q: "2*2*0",
    a: 0,
    options: [22, 4, 0, 2],
  },
  {
    q: "3+3-3",
    a: 3,
    options: [9, 3, 33, 333],
  },
  {
    q: "4*4/2",
    a: 8,
    options: [8, 16, 4, 44],
  },
];


let para=document.querySelector(".ques")
console.log(para)
let inp=document.querySelectorAll(".option")
console.log(inp)
let lable=document.querySelectorAll("label")
console.log(lable)
let score=document.querySelectorAll("p")[1]
console.log(score)

let a=0;
let s=setInterval(function (){
  para.innerHTML=questions[a].q
  a++;

  if(a==4){
    clearInterval(s)
  }


},1000)



