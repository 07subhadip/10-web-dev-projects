const imgContainerEl = document.querySelector(".img-container")

const btnEl = document.querySelector(".btn")

btnEl.addEventListener("click",()=>{
    imageNumber = Math.floor(Math.random()*10+5)
    addNewImages()
})

function addNewImages(){
    for (let index = 0; index < imageNumber; index++) {
        const newImgEl = document.createElement("img")
        newImgEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*1000000)}`;

        imgContainerEl.appendChild(newImgEl)
    }   
}