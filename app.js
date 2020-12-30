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
makeGrid(res.value) // definition on line 78
res.addEventListener("input", () => {
    makeGrid(res.value)
})

let resetButton = document.querySelector(".reset")

resetButton.addEventListener("click",() =>{
    resetGrid() ; // definition on line 111
} )

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
 // implementation on line 42
function makeGrid(resolution) {
    let area = resolution**2 ; 
    if(area>gridContainer.querySelectorAll("div").length){
        gridContainer.querySelectorAll("div").forEach( (square) => square.remove()) // reset grid before making new one
        for(i = gridContainer.querySelectorAll("div").length ; i <= area ; i++){
            let gridSquare = document.createElement("div") ; 
            //make grid
            gridContainer.style.gridTemplateColumns = `repeat(${resolution}, 1fr)` ; 
            gridContainer.style.gridTemplateRows = `repeat(${resolution}, 1fr)` ;
            gridContainer.insertAdjacentElement("beforeend", gridSquare)
        }
        let squares = gridContainer.querySelectorAll("div") ; 
        squares.forEach(square => square.addEventListener("mouseover", ()=>{
            colorSquare(colorArr, square) // add functionality for etch a sketch
        }))
    }else if(area < gridContainer.querySelectorAll("div").length){
        //remove the divs in this case 
        gridContainer.querySelectorAll("div").forEach( (square) => square.remove())
        makeGrid(resolution) ;  // no squares will be present so calling this function 
                                // again will add them with no undesired behaviour
    }
}

//implementation on line 96
function colorSquare(arr, squareElem) {
    /* takes in array containing rgb values and sets color of element to the color 
    corresponding to those values  */
    squareElem.style.backgroundColor = `rgb(${arr})` ; 
}   

//implementation on line 50
function resetGrid() {
    let squares = gridContainer.querySelectorAll("div") ; 
    squares.forEach( (square) => square.style.backgroundColor = "white" )
}