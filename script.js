// Set initial language
document.documentElement.lang = 'en';

// Function to toggle language
function toggleLanguage() {
    const html = document.documentElement;
    const currentLang = html.lang;
    html.lang = currentLang === 'en' ? 'ar' : 'en';
    
    // Save language preference
    localStorage.setItem('preferred-language', html.lang);
}

document.addEventListener('DOMContentLoaded', function() {
    // Load saved language preference
    const savedLang = localStorage.getItem('preferred-language');
    if (savedLang) {
        document.documentElement.lang = savedLang;
    }

    // Add smooth scrolling effect
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // إضافة تأثيرات ظهور العناصر عند التمرير
    const menuItems = document.querySelectorAll('.menu-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    menuItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.5s ease-out';
        observer.observe(item);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const loader = document.querySelector('.page-loader');
    const content = document.querySelector('.page-content');
    
    // تحميل جميع الصور المرئية والخلفية
    function preloadImages() {
        const imagesToLoad = [];
        
        // الصور المرئية
        document.querySelectorAll('img').forEach(img => {
            const promise = new Promise((resolve) => {
                if (img.complete) {
                    resolve();
                } else {
                    img.onload = resolve;
                    img.onerror = resolve;
                }
            });
            imagesToLoad.push(promise);
        });

        // صور الخلفية
        const sections = ['sandwiches', 'bakery', 'hot-drinks', 'hot-coffee', 
                        'fresh-juice', 'extras', 'cold-coffee', 'snacks', 'desserts'];
        
        sections.forEach(section => {
            const promise = new Promise((resolve) => {
                const img = new Image();
                img.src = `image/${section}.jpg`;
                img.onload = resolve;
                img.onerror = resolve;
            });
            imagesToLoad.push(promise);
        });

        return Promise.all(imagesToLoad);
    }

    // تحميل الصور وإظهار المحتوى
    preloadImages().then(() => {
        setTimeout(() => {
            content.classList.add('visible');
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }, 500);
    });
});

