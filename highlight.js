function highlightSelectedLevel(element){
    document.querySelectorAll("*").forEach(e => {
        if(e.isEqualNode(element)){
            e.setAttribute('spider', '1'); 
            e.setAttribute('title', 'name');
        }
    })
}

console.log("a");