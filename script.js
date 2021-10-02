//  querySelector - selects elements by class name/ element name eg. h3
//  querySelectorAll - selects all elements with the class name given and puts them in a nodelist/ HTMLCollection array
const panels = document.querySelectorAll('.panel') 

panels.forEach((panel)=>{
    // addEventListener(event, function)
    panel.addEventListener('click',() => { 
        console.log("Image clicked ");
        removeActiveClasses()
        // classList - Displays list of classes , add - method adds a class
        panel.classList.add('active');
    })
})
function removeActiveClasses(){
    panels.forEach((panel)=>{
        panel.classList.remove('active');
    })
}