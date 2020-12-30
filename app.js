// -------- Code for sliders ------------
const allSliders = document.querySelectorAll(".slider_container")
const gridContainer = document.querySelector(".grid_container")

// add bubble for each slider 
allSliders.forEach((container) => {
    const slider = container.querySelector(".slider") ; 
    const bubble = container.querySelector(".bubble") ; 
    
    slider.addEventListener("input", ()=>{
        setBubble(slider, bubble) ; //line 45 for definition of setBubble()
    })

    //set bubble on DOM load
    setBubble(slider, bubble) ; 
})

// --------- Code for color preview ----------- //

let r = document.querySelector("#Rlevel")
let g = document.querySelector("#Glevel")
let b = document.querySelector("#Blevel")
let colorArr = [r.value,g.value,b.value]

//line 58 for function definiton of setColor()
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

// --------------- Grid Code -------------------// 

//creates the grid
let res = document.querySelector("#resSlider")
makeGrid(res.value)
res.addEventListener("input", () => {
    makeGrid(res.value)
})

/* --------------- HELPER FUNCTIONS ---------- */ 

// line 11 onwards for implementation
function setBubble(slider, bubble) {

    const val = slider.value ; 
    const min = slider.min ; 
    const max = slider.max ; 

    const offset = Number(((val - min) * 100) / (max - min)) ; 

    bubble.textContent = val ; 
    
    bubble.style.left = `calc(${offset}% - 14px)` ; 
}

// line 28 onwards for implementation 
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
 // 
function makeGrid(resolution) {
    let area = resolution**2 ; 
    if(area>gridContainer.querySelectorAll("div").length){
        //let gridWidth = document.getElementById("#grid_container").clientWidth ; 
        for(i = 0 ; i <= resolution ; i++){
            let gridSquare = document.createElement("div") ; 
            gridContainer.style.gridTemplateColumns = `repeat(${resolution}, 1fr)` ; 
            gridContainer.style.gridTemplateRows = `repeat(${resolution}, 1fr)` ;
            gridContainer.insertAdjacentElement("beforeend", gridSquare)
        }
        let squares = gridContainer.querySelectorAll("div") ; 
        squares.forEach(square => square.addEventListener("mouseover", colorSquare))
    /*  squares.forEach(square, () => {
            square.style.padding = gridWidth / resolution ; 
        })*/
    }else{
        //remove the divs in this case 
        for(j=area ; j >= resolution ; j--){
            gridContainer.querySelectorAll("div")[j].remove() ; 
        }
    }
}

function colorSquare(arr) {
    /* takes in array containing rgb values and sets color of element to the color 
    corresponding to those values  */
    this.style.backgroundColor = `rgb(${arr})` ; 
}   

function resetGrid() {
    let gridSquare = document.querySelectorAll(".grid_container") ; 
    gridSquare.forEach(square, () => {
        square.style.backgroundColor = white ; 
    })
}