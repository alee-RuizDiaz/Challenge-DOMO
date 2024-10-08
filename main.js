const menuToggle = document.querySelector('.menu-toggle');
const popupMenu = document.querySelector('.popup-menu');

// Lógica de mostrar/ocultar menú 
menuToggle.addEventListener('click', () => {
    if (popupMenu.classList.contains('active')) {
        popupMenu.classList.add('closing');
        setTimeout(() => {
            popupMenu.classList.remove('active');
            popupMenu.classList.remove('closing'); 
        }, 300); 
    } else {
        popupMenu.classList.add('active');
        
        setTimeout(() => {
            popupMenu.classList.remove('closing'); 
        }, 10);
    }

});

// Cierre de popup cuando se hace clic fuera del menú
window.addEventListener('click', function(event) {
    if (!menuToggle.contains(event.target) && !popupMenu.contains(event.target)) {
        if (popupMenu.classList.contains('active')) {
            popupMenu.classList.add('closing'); 
            setTimeout(() => {
                popupMenu.classList.remove('active');
                popupMenu.classList.remove('closing'); 
            }, 300);
        }
    }
});



