const leftButton = document.querySelector("#left")
const rightButton = document.querySelector("#right")
const pictureHolder = document.querySelector("#picture_holder")

let position = -1220;

leftButton.addEventListener("click", (e) => {
    if(position<0){
        position+=610;
        pictureHolder.style.transform = `translate(${position}px)`;
    }
})

rightButton.addEventListener("click", (e) => {
    if(position>-2440){
        position-=610;
        pictureHolder.style.transform = `translate(${position}px)`;
    }

})