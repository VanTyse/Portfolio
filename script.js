const menu = document.querySelector('.menu-bar');
const closeButton = document.querySelector('.close-btn')
const navItems = document.querySelector('.nav-items');
navItems.state = true;

window.addEventListener('click', function(event){
    if(event.target.id != 'nav-items' && event.target.id != 'menu-bar'){
        navItems.style.right = '-100%'
        closeButton.style.display = 'none'
        menu.style.display = 'block'
        navItems.state = !navItems.state
    }
})

menu.addEventListener('click', () => {
    if(navItems.state){
        navItems.style.right = '0';
        menu.style.display = 'none'
        closeButton.style.display = 'block';
    }
    navItems.state = !navItems.state
})

closeButton.addEventListener('click', () => {
    if(!navItems.state){
        navItems.style.right = '-100%'
        menu.style.display = 'block'
        closeButton.style.display = 'none';
    }
    navItems.state = !navItems.state
})

console.log(navItems.state);
