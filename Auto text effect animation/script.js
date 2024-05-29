const containerEl = document.querySelector('.container')

const carrer = ["Web Developer","Full Stack Developer","Student","Programmer"]

let carrerIndex = 0

let characterIndex = 0

updateText()

function updateText(){
    characterIndex++
    containerEl.innerHTML = `
    <h1>I am ${carrer[carrerIndex].slice(0,1) === 'A' ? 'an' : 'a'} ${carrer[carrerIndex].slice(0,characterIndex)}<h1/>
    `
    if (characterIndex === carrer[carrerIndex].length) {
        carrerIndex++
        characterIndex = 0
    }
    if (carrerIndex === carrer.length) {
        carrerIndex = 0
    }
    setTimeout(updateText,200);
}
