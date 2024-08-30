const rick = document.querySelector("#tombol")
const roll = document.querySelector("#rickroll")
const indukRick = document.querySelector("#prank")
rick.addEventListener("click", function(){
    roll.style.display = "block";
    roll.play()
    if(rick.innerHTML === "IDENTITAS MURID"){
        rick.innerHTML = "EXIT"
    } else if (rick.innerHTML === "EXIT"){
        document.exitFullscreen()
        rick.innerHTML = "IDENTITAS MURID"
        roll.style.display = "none"
        roll.pause();
    } 
    
    if(indukRick.requestFullscreen()) {
        indukRick.requestFullscreen();
    } else if(indukRick.webkitRequestFullscreen()){
        indukRick.webkitRequestFullscreen();
    }  
})