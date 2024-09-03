function getHash() {
    return window.location.hash.slice(1);
}

function headerLinking() {
    var navLinks = document.querySelectorAll('header div');
    var content = document.querySelectorAll('content');

    function hideAllSections() {
        content.forEach(element => {
            element.style.display = 'none';
        });

        navLinks.forEach(element => {
            element.className = '';
        });
    }

    navLinks.forEach(element => {
        element.addEventListener('click', () => {
            var site_link = element.getAttribute('data-link');
            
            hideAllSections();
            element.className = 'active';
            window.location.hash = site_link;
            document.getElementById(site_link).style.display = 'block';
        });
    });

    if (getHash() == "") {
        content[0].style.display = 'block';
        navLinks[0].className = 'active';
        window.location.hash = 'home';

    } else {
        document.getElementById(getHash()).style.display = 'block';
        navLinks.forEach(element => {
            if (element.getAttribute('data-link') == getHash()) {
                element.className = 'active';
            }
        });
    }
}

function footerLinking() {
    var navLinks = document.querySelectorAll('footer div');

    navLinks.forEach(element => {
        element.addEventListener('click', () => {
            var site_link = element.getAttribute('data-link');
            window.open(site_link);
        });
    });
}

window.onload = function() {
    headerLinking();
    footerLinking();
}