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

// --------- Code for color preview ----------- //

let r = document.querySelector("#Rlevel")
let g = document.querySelector("#Glevel")
let b = document.querySelector("#Blevel")
let colorArr = [r.value,g.value,b.value]
setColor(colorArr, " "); // set color when starting up site 

r.addEventListener("input", () => {
    setColor(colorArr, "red") ; 
}) ; 
g.addEventListener("input", () => {
    setColor(colorArr, "green") ; 
}) ; 
b.addEventListener("input", () => {
    setColor(colorArr, "blue")
}) 


/* --------------- HELPER FUNCTIONS ---------- */ 

function setBubble(slider, bubble) {
    const val = slider.value ; 
    const min = slider.min ; 
    const max = slider.max ; 

    const offset = Number(((val - min) * 100) / (max - min)) ; 

    bubble.textContent = val ; 
    
    bubble.style.left = `calc(${offset}% - 14px)` ; 
}


function setColor(arr, colorSlider){
    //update slider depending on color 
    if(colorSlider == "red"){
        arr[0] = r.value ; 
    } else if(colorSlider == "green"){
        arr[1] = g.value ; 
    } else if(colorSlider == "blue"){
        arr[2] = b.value ; 
    }else{
        document.querySelectorAll(".colorPreview")[0].style.backgroundColor = `rgb(${arr}` ; 
    }
    document.querySelectorAll(".colorPreview")[0].style.backgroundColor = `rgb(${arr})` ; 
}