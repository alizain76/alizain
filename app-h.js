// Navigation mobile
// var el = document.getElementById('menu_btn');
// if(el){
//   el.addEventListener('click',  function(e){
//     let menuMobile = document.querySelector('#menu_mobile');
//     alert('ok');
//     document.body.classList.add('body_mobile')
//     menuMobile.setAttribute('element', 'true')
//     menuMobile.style.display = null
//   });
// }else{
//      // alert('test');
// }



document.querySelector('#menu_btn').addEventListener('click', function(e){
    let menuMobile = document.querySelector('#menu_mobile');
 
    document.body.classList.add('body_mobile')
    menuMobile.setAttribute('element', 'true')
    menuMobile.style.display = null

    let coverMenu = document.querySelector('.cover-menu')
    coverMenu.setAttribute('element', 'true')
    coverMenu.style.display = null
  });
  

  
  [document.querySelector('#cover-menu'), document.querySelector('#close_menu')].forEach(item => {
    item.addEventListener('click', event => {
        let coverMenu = document.querySelector('.cover-menu')
        coverMenu.setAttribute('element', 'false')
        coverMenu.style.display = "none"
    
        let menuMobile = document.querySelector('#menu_mobile');
      
        menuMobile.setAttribute('element', 'false')
        window.setTimeout(function(){
            menuMobile.style.display = "none"
        }, 200)
        document.body.classList.remove('body_mobile')
    })
})




  
  document.querySelectorAll('#menu_mobile .menu-item-has-children  > a').forEach(item => {
    item.addEventListener('click', function(e){
        e.preventDefault()
        let subMenu = this.nextElementSibling
        let titleMenu = document.querySelector('.title_menu')
        subMenu.classList.add('display_tag')
        
        let subMenuHeight = subMenu.offsetHeight
        document.querySelector('nav.nav_mobile_container').style.height = subMenuHeight+"px"
        titleMenu.classList.add('display_tag')
        titleMenu.querySelector('span').innerHTML = this.innerHTML;
  
        let navigationMobile =  document.querySelector('ul.navigation_mobile')
        let navigationMobileHeight = parseInt(navigationMobile.style.left, 10)
  
        let liThis = this.parentElement
        let ulChildren =  liThis.parentElement.children

        for (i = 0; i < ulChildren.length; i++) {
            ulChildren.item(i).style.display = "none";
        }
        liThis.style.display = ""
        if(navigationMobileHeight) {
            navigationMobileHeight -=  100
            navigationMobile.style.left = navigationMobileHeight+"%"
        } else {
            navigationMobile.style.left = "-100%"
        }
    })
  })
  
  
  document.querySelector('#back').addEventListener('click', function(e){
    e.preventDefault()
    let navigationMobile =  document.querySelector('ul.navigation_mobile')
    let navigationMobileHeight = parseInt(navigationMobile.style.left, 10)
    navigationMobile.style.left = navigationMobileHeight + 100 + "%"
    let displayTag = document.querySelectorAll('#menu_mobile ul.sub-menu.display_tag')
    let lastDisplayTag = displayTag[displayTag.length - 1];
  
    let ulChildren = lastDisplayTag.parentElement.parentElement.children
    
    let ulChildrenHeight = 0
  
    for (i = 0; i < ulChildren.length; i++) {
        ulChildren.item(i).style.display = ""
        ulChildrenHeight += ulChildren.item(i).offsetHeight
    }
  
    document.querySelector('nav.nav_mobile_container').style.height = ulChildrenHeight+"px"
    let aTag = lastDisplayTag.parentElement.parentElement.previousElementSibling
    let titleMenu = document.querySelector('.title_menu')
    if(aTag == null) {
        titleMenu.classList.remove('display_tag')
    } else {
        titleMenu.querySelector('span').innerHTML = aTag.textContent;
    }
    lastDisplayTag.classList.remove('display_tag')
})