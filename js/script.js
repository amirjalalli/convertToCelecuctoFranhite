let $ = document;
let  fValue = $.querySelector(".F")
let cValue = $.querySelector(".C")
const converter = $.querySelector("#converter")
const result = $.querySelector(".result")
const convertButton = $.querySelector(".convertButton")
const resetButton = $.querySelector(".resetButton")
const changeButton = $.querySelector(".changeButton")

function convert (){
    // console.log("convert")
    if(converter.value === "") {
        result.innerHTML = "insert correct value";
        result.style.color = "#993300"
    }else {
         if (fValue.innerHTML === "°F") {
            let resultValue = (converter.value * 1.8) + 32
            result.innerHTML = `${converter.value} °C to ${resultValue.toFixed(2)} °F `
            result.style.color = "rgb(255 , 255 , 103)"
         }else {
            let resultValue = (converter.value - 32 ) * 5 / 9
            result.innerHTML = `${converter.value} °F to ${resultValue.toFixed(2)} °C `
            result.style.color = "rgb(255 , 255 , 103)"
         }
    }
}
function reset () {
    // console.log("reset")
    result.innerHTML = ''
    // converter.setAttribute("value", "")
    converter.value = ""
}
function swap (){
    // console.log("swap")    
    if (fValue.innerHTML === "°F"){
        fValue.innerHTML = "°C"
        cValue.innerHTML = "°F"
        converter.setAttribute("placeholder","°F")
        document.title = "°F to °C"
    }else {
        fValue.innerHTML = "°F"
        cValue.innerHTML = "°C"
        converter.setAttribute("placeholder","°C")
            document.title = "°C to °F"
    }
}



convertButton.addEventListener("click", convert)
resetButton.addEventListener("click", reset)
changeButton.addEventListener("click", swap)