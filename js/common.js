// Load Header and Footer
document.addEventListener('DOMContentLoaded', function() {
    // Load Header
    fetch('/components/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            initDarkMode();
            initMobileMenu();
        })
        .catch(error => console.error('Error loading header:', error));

    // Load Footer
    fetch('/components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
});

// Dark mode toggle
function initDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const mobileDarkModeToggle = document.getElementById('mobileDarkModeToggle');
    const html = document.documentElement;
    
    function toggleDarkMode() {
        html.classList.toggle('dark');
        const isDark = html.classList.contains('dark');
        const icon = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        if(darkModeToggle) darkModeToggle.innerHTML = icon;
        if(mobileDarkModeToggle) mobileDarkModeToggle.innerHTML = icon;
    }

    if(darkModeToggle) darkModeToggle.addEventListener('click', toggleDarkMode);
    if(mobileDarkModeToggle) mobileDarkModeToggle.addEventListener('click', toggleDarkMode);

    // Check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        html.classList.add('dark');
        const icon = '<i class="fas fa-sun"></i>';
        if(darkModeToggle) darkModeToggle.innerHTML = icon;
        if(mobileDarkModeToggle) mobileDarkModeToggle.innerHTML = icon;
    }
}

// Mobile menu toggle
function initMobileMenu() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    if(mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            const isOpen = mobileMenu.classList.contains('active');
            mobileMenuButton.innerHTML = isOpen ? 
                '<i class="fas fa-times text-gray-600 dark:text-gray-300"></i>' : 
                '<i class="fas fa-bars text-gray-600 dark:text-gray-300"></i>';
        });
    }
}
