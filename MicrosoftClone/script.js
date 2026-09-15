let ham = document.querySelector(".hamburger");

let list = document.querySelector(".list");
let ls = list.classList;
let  flag= true;

ham.addEventListener("click",()=>{
  if(flag===true){
    ls.remove("-translate-x-44");
    flag = false;
  }
  else{
    ls.add("-translate-x-44");
    flag = true;
  }
})