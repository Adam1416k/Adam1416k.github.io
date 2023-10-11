document.getElementById('menu-toggle').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    var menuToggle = document.getElementById('menu-toggle');

    if (menu.classList.contains('hidden')) {
        // Visa menyn först, sedan lägg till övergångseffekten
        menu.classList.remove('hidden');
        setTimeout(function() {
            menuToggle.classList.add('active');
        }, 10);
    } else {
        menuToggle.classList.remove('active');
        // Först lägger vi till fade out effekten
        menu.style.opacity = '0';
        // Efter övergångseffekten, göm menyn
        setTimeout(function() {
            menu.classList.add('hidden');
            menu.style.opacity = '1'; // Återställ opacitet för nästa gång menyn öppnas
        }, 300);  // Detta värde bör matcha övergångens tid (0.3s = 300ms)
    }
});
