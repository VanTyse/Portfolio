const menu = document.querySelector('.menu-bar');
const closeButton = document.querySelector('.close-btn')
const navItems = document.querySelector('.nav-items');
navItems.state = true;

window.onclick = function(event){
    if(event.target.id != 'nav-items' && event.target.parentElement.id != 'menu-bar' && event.target.id != 'menu-bar'){
        navItems.style.right = '-120%'
        navItems.state = !navItems.state
    }
}

menu.addEventListener('click', () => {
    if(navItems.state){
        navItems.style.right = '0';
    }
    navItems.state = !navItems.state
})
