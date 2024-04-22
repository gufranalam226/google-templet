console.log("connected")
let count= 1;
const crousel = document.querySelectorAll(".slides")

for(let i=0; i<crousel.length; i++){
    crousel[i].style.left = `${(i)*100}%`;
  console.log(crousel[i])
 
}


const slidingFunction=()=>{
    crousel.forEach((crousel)=>{
        crousel.style.transform = `translateX(-${count*100}%)`
    })
    if(count>=2){
        count=0
    }
    else{

        count++;
    }
    console.log(count)
}

setInterval(slidingFunction, 5000)

