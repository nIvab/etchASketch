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




let r = document.querySelector("#Rlevel").value
let g = document.querySelector("#Glevel").value
let b = document.querySelector("#Blevel").value

const allRGB_sliders = document.querySelectorAll(".RGBSliders") ; 

allRGB_sliders.map( (container) => {
    const slider = container.querySelector(".slider") ; 
    
    slider.addEventListener("input", ()=>{
        
    })

}

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

function changeColorPreview(red, green, blue) {
    /* Dynamically changes the color of the color preview box
    the input parameters should be the input range objects */
    let redVal = red.value ;
    let greenVal = green.value ; 
    let blueVal = blue.value ; 

    document.getElementById("colorPreview").style.backgroundColor = `rgb(${r},${g},${b})` ; 

}