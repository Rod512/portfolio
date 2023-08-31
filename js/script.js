// auto typed
let typed = new Typed(".auto-typed",{
    strings:["front-end web developer","competitive programmer","photographer"],
    typeSpeed: 150,
    backSpeed : 150,
    loop : true
})

// window scroll
window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY > 0)
})

// responsive nav

const menu = document.querySelector('.nav-link') 
const openMenu = document.querySelector('#open-menu')
const closeMenu = document.querySelector('#close-menu')

const openNav = () =>{
    menu.style.display = 'flex'
    closeMenu.style.display = 'inline-block'
    openMenu.style.display = 'none'
}

const closeNav = () =>{
    menu.style.display = 'none'
    closeMenu.style.display = 'none'
    openMenu.style.display = 'inline-block'
}

openMenu.addEventListener('click',openNav)
closeMenu.addEventListener('click',closeNav)