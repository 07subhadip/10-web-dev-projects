const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover",(event)=>{
    const x = (event.pageX - btnEl.offsetLeft);
    const y = (event.pageY - btnEl.offsetTop);

    btnEl.style.setProperty("--xPos",x + "px")
    btnEl.style.setProperty("--yPos",y + "px")
});

btnEl.addEventListener("mouseleave",(event)=>{
    const x = (event.pageX - btnEl.offsetLeft);
    const y = (event.pageY - btnEl.offsetTop);

    // Calculate whether the mouse is closer to the left or right side of the button
    const closerToLeft = x < (btnEl.offsetWidth / 2);

    // Calculate whether the mouse is closer to the top or bottom of the button
    const closerToTop = y < (btnEl.offsetHeight / 2);

    // Set the xPos and yPos accordingly
    if (closerToLeft) {
        btnEl.style.setProperty("--xPos", "0%");
    } else {
        btnEl.style.setProperty("--xPos", "100%");
    }

    if (closerToTop) {
        btnEl.style.setProperty("--yPos", "0%");
    } else {
        btnEl.style.setProperty("--yPos", "100%");
    }
})