window.onload = function() {
    function hideAllSections() {
        content.forEach(element => {
            element.style.display = 'none';
        });
    }

    const navLinks = document.querySelectorAll('.navbar ul li a');
    const content = document.querySelectorAll('content');

    navLinks.forEach(element => {
        element.addEventListener('click', () => {
            hideAllSections();
            const selection = document.getElementById(element.href.split("#").slice(-1)[0]);
            selection.style.display = 'block';

        });
    });

    hideAllSections();
    content[0].style.display = 'block';
};