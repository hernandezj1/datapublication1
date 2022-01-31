function yep(){
    var dt = new Date();
    let selectedElement = document.getElementById("datetime")
    console.log(selectedElement)
    selectedElement.innerText = dt.getMinutes();
}

function hide(){
    let selectedElement2 = document.getElementById("element")
    console.log(selectedElement2)
    selectedElement2.style.display="none";
}
