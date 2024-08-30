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
    for (let i = 0; i < content.length; i++) {
        if (window.location.hash == "") {
            content[0].style.display = 'block';
            break;
        } else if (content[i].id == window.location.hash.slice(1)) {
            content[i].style.display = 'block';
            break;
        }
    }
};