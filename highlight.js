
var colorList = [];

function highlightSelectedLevel(element){
    document.querySelectorAll("*").forEach(e => {
        if(e.isEqualNode(element)){
            e.setAttribute('spider', '1'); 
            e.setAttribute('title', 'name');
        }
    })
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

function elementHighlight(element){
    highlightSelectedLevel(element);
}

function xPathHighlight(tag, text){
    var ele = document.querySelectorAll(tag);
    ele.forEach(e => {
        if(e.textContent == text){
            highlightSelectedLevel(e);
        }
    })
}

var el = document.createElement('style');
el.innerHTML = getStyleList();
document.getElementsByTagName('head')[0].appendChild(el);
