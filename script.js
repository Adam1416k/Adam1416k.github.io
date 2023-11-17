window.addEventListener('scroll', function() {
    const boxes = document.querySelectorAll('.box');
    const windowHeight = window.innerHeight;

    boxes.forEach(function(box) {
        const boxTop = box.getBoundingClientRect().top;
        const boxBottom = box.getBoundingClientRect().bottom;

        // Om boxens överkant är närmare än fönstrets höjd -50px (skapar en liten fördröjning) OCH
        // om boxens nederkant är större än 0 (d.v.s. boxen är fortfarande inom synfältet)
        if (boxTop < windowHeight - 50 && boxBottom > 0) {
            box.style.opacity = '1';
            box.style.transform = 'translateY(0)';
        } else {
            box.style.opacity = '0';
            box.style.transform = 'translateY(50px)';
        }
    });
});

document.querySelector('.menu-button').addEventListener('click', function() {
    var menu = document.querySelector('.menu');
    this.classList.toggle('active'); // växla klassen för knappen
    menu.classList.toggle('active');
});
