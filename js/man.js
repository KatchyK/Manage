$(".art").owlCarousel({
    items: 3,
    loop: true,
    autoplay: true,
    margin: 50,
    dots: true,
    arrows: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
        nav: true,
        loop: true,
      },
      600: {
        items: 2,
        nav: true,
        loop: true,
      },
      900: {
          items: 3,
          nav: true,
          loop: true,
        }
    },
  });

  const menuOpen = document.querySelector('.ri-menu-line')
const menuClose = document.querySelector('.ri-close-line')
const menu = document.querySelector('nav ul')
const menuitems = document.querySelectorAll("nav ul li")

console.log(menuitems)

menuOpen.addEventListener("click", function(){
    menu.style.top = "40%"
    menuOpen.style.display = "none"
    menuClose.style.display = "block"
})

function closeMenu(){
    menu.style.top = "-40%"
    menuOpen.style.display = "block"
    menuClose.style.display = "none"
}

menuClose.addEventListener("click", function(){
    closeMenu()
    // menu.style.top = "-40%"
    // menuOpen.style.display = "block"
    // menuClose.style.display = "none"
})

menuitems.forEach(function(menuitem){
    menuitem.addEventListener("click", function(){
        closeMenu()
        // menu.style.top = "-40%"
        // menuOpen.style.display = "block"
        // menuClose.style.display = "none"
    })
})
  