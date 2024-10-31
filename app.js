document.querySelector('#btn-open-menu').addEventListener('click', function(e){

    let menuTopRight = document.querySelector('#menu-top-right');

    if(menuTopRight.getAttribute('element') =='false' ) {
        this.querySelector('i').style.transform = "rotate(180deg)"
        menuTopRight.setAttribute('element', 'true')
        menuTopRight.style.display = null
    } else {
        this.querySelector('i').style.transform = ""
        console.log(this.querySelector('i'))
        menuTopRight.setAttribute('element', 'false')
        window.setTimeout(function(){
            menuTopRight.style.display = "none"
        }, 200)
    }
        
})