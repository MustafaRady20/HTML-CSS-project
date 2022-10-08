const bar=document.querySelector(".bar-icon");
const ul=document.querySelector(".links ul");

bar.addEventListener("click",()=>{
    ul.classList.toggle("active")
    bar.classList.toggle("active")
})

// if(window.screenX===1200)
// {
//         ul.classList.toggle("active")
//     bar.classList.toggle("active")

// }