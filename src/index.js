import './less/index.less'

// Your code goes here!

//load
window.onload = function(evt) {
    console.log(`event ${evt.type} fired! Ready to go!`) 
    const heading = document.querySelector('h1')
    heading.textContent = 'Ready to go!'

    //copy
    window.addEventListener('copy', () =>{
        navigator.clipboard.readText()
            .then(text => {
                heading.textContent += text
            })
    })

    //click
    document.body.addEventListener('click', evt => {
        evt.target.classList.toggle('mirror')
    })

    //dblclick
    document.body.addEventListener('dblclick', evt => {
        evt.target.innerHTML = ' '
    })
    
    //keydown
    window.addEventListener('keydown', evt =>{
        if (evt.key == 6){
            document.body.innerHTML = 'You ran order 66'
        }
    })

    //mousemove
    document.body.addEventListener('mousemove', evt =>{
        const {clientX, clientY} = evt 
        //console.log(`mouse is at ${clientX}, ${clientY}`)
    })

    
    //mouseenter
    //mouseleave
    const destinations = document.querySelectorAll('.destination')
    for (let destination of destinations){
        destination.addEventListener('mouseenter', () => {
            destination.style.fontWeight = 'bold'
        })
        destination.addEventListener('mouseleave', ()=> {
            setTimeout(() => {
                destination.style.fontWeight = 'initial'
            }, 500)
        })
    }
} 