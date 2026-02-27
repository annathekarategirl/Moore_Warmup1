var sceneNumber=1
function advanceScene(){
    img=document.getElementById("img")
    cap=document.getElementById("cap")
    switch(sceneNumber){
        case 1:
            img.src="images/forest2.jpg"
            cap.textContent="Lost."
            sceneNumber++
            break;
        case 2:
            img.src="images/forest3.jpg"
            cap.textContent="Looking up. You are stuck here."
            document.getElementById('ending').classList.remove("hidden")
            document.getElementById("button").disabled=true
            break;
    }
}
document.getElementById("advance").onclick=advanceScene

//make a hidden class for the div which in css is defined then disable the classs at the end