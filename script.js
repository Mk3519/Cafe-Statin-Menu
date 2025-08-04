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

// تعطيل كافة وظائف التفتيش
(function() {
    // منع استخدام زر الماوس الأيمن
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });

    // منع مفاتيح التحكم والتفتيش
    document.addEventListener('keydown', function(e) {
        if (
            // F12
            e.keyCode === 123 || 
            // Ctrl+Shift+I, Cmd+Option+I
            (e.ctrlKey && e.shiftKey && e.keyCode === 73) ||
            (e.metaKey && e.altKey && e.keyCode === 73) ||
            // Ctrl+Shift+C, Cmd+Option+C
            (e.ctrlKey && e.shiftKey && e.keyCode === 67) ||
            (e.metaKey && e.altKey && e.keyCode === 67) ||
            // Ctrl+Shift+J, Cmd+Option+J
            (e.ctrlKey && e.shiftKey && e.keyCode === 74) ||
            (e.metaKey && e.altKey && e.keyCode === 74) ||
            // Ctrl+U, Cmd+U
            (e.ctrlKey && e.keyCode === 85) ||
            (e.metaKey && e.keyCode === 85)
        ) {
            e.preventDefault();
            return false;
        }
    });

    // منع فتح أدوات المطور
    setInterval(function() {
        if (window.devtools.isOpen) {
            window.location.reload(true);
        }
    }, 1000);

    // تعطيل خيارات التطوير
    window.devtools = {
        isOpen: false,
        orientation: undefined
    };
    
    // مراقبة تغييرات حجم النافذة (يمكن أن تشير إلى فتح أدوات المطور)
    window.addEventListener('resize', function() {
        if ((window.outerHeight - window.innerHeight) > 100) {
            window.devtools.isOpen = true;
        }
    });
})();

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

