const inputEl = document.querySelector('.input')

inputEl.checked = JSON.parse(localStorage.getItem("mode"))

updateBody()

function updateBody(){
    if (inputEl.checked) {
        document.body.style.backgroundColor = "black"
    }else{
        document.body.style.backgroundColor="white"
    }
}

inputEl.addEventListener("change",()=>{
    updateBody()
    updateLocalStorage()
})

function updateLocalStorage(){
    localStorage.setItem("mode",JSON.stringify(inputEl.checked))
}