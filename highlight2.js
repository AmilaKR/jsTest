var colorList = [];

function highlightSelectedLevel(element, level, name){
    document.querySelectorAll("*").forEach(e => {
        if(e.isEqualNode(element)){
            e.setAttribute('spider', level); 
            e.setAttribute('title', name);
        }
    })
    console.log("Added");
}

function removeHighlights(highlightSelector, highlightPattern){
    document.querySelectorAll("'" + highlightSelector + "'").forEach(e=>{ 
        if(e.textContent.match("'" + highlightPattern + "'"))
        { 
            e.removeAttribute('spider'); 
            e.removeAttribute('title');
        }
        });
    console.log("Removed");
}

function removeElementHighlights(element){
    element.removeAttribute('spider'); 
    element.removeAttribute('title');
    console.log("Removed");
}

function removeAllHighlights(){
    document.querySelectorAll("*").forEach(e=>{ 
            e.removeAttribute('spider'); 
            e.removeAttribute('title');
        });
    console.log("Removed");
}

function getRandomColors() {
    colorList = [];
    for (var j = 1; j <= 50; j++) {
        var color = '#';
        var letters = '0123456789ABCDEF';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        colorList.push({ j, color })
    }
}

function getStyleList() {
    var styleString = "";
    getRandomColors();
    colorList.forEach(color => {
        if(color.j < 51){
            styleString = styleString + "[spider=\""+ color.j +"\"] {background-color: " + color.color + "; border-style: solid; border-radius: 10px; border-color: " + color.color + "; }"
        }else{
            styleString = styleString + "[spider*=\"a-\"] {background-color: " + color.color + "; border-style: solid; border-radius: 10px; border-color: " + color.color + "; }"
        }
    })
    return styleString;
}

function elementHighlight(element, level = null, name = null, action){
    highlightSelectedLevel(element, level, name);
    switch (action) {
        case "add":
            highlightSelectedLevel(element, level, name);
            break;
        case "remove":
            removeElementHighlights(element)
            break;
        default:
            removeAllHighlights();
            break;
    }
}

function hotReloadHighlight(xPath, level = null, name = null, action){
    var ele = document.querySelector(xPath);
    
    switch (action) {
        case "add":
            highlightSelectedLevel(ele, level, name);
            break;
        case "remove":
            removeAllHighlights();
            break;
        default:
            removeAllHighlights();
            break;
    }
}

var el = document.createElement('style');
el.innerHTML = getStyleList();
document.getElementsByTagName('head')[0].appendChild(el);
