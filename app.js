// -------- Code for sliders ------------
const allSliders = document.querySelectorAll(".slider_container")


// add bubble for each slider 
allSliders.forEach((container) => {
    const slider = container.querySelector(".slider") ; 
    const bubble = container.querySelector(".bubble") ; 
    
    slider.addEventListener("input", ()=>{
        setBubble(slider, bubble) ; 
    })

    //set bubble on DOM load
    setBubble(slider, bubble) ; 
})

const allRGB_sliders = document.querySelectorAll(".RGBSliders") ; 

let r = document.querySelector("#Rlevel")
let g = document.querySelector("#Glevel")
let b = document.querySelector("#Blevel")
console.log(r.value)
r.addEventListener("input", () => {
    setColor() ; 
}) ; 
g.addEventListener("input", () => {
    setColor ; 
}) ; 
b.addEventListener("input", () => {
    setColor()
}) 
// Color Preview Box



/* --------------- HELPER FUNCTIONS ---------- */ 

function setBubble(slider, bubble) {
    const val = slider.value ; 
    const min = slider.min ; 
    const max = slider.max ; 

    const offset = Number(((val - min) * 100) / (max - min)) ; 

    bubble.textContent = val ; 
    
    bubble.style.left = `calc(${offset}% - 14px)` ; 
}

function setColor(){
    document.getElementById("#colorPreview").style.backgroundColor = `rgb(${r.value}, ${g.value}, ${b.value})` ; 
}