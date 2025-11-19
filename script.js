
        // Генерація зірок
        function createStars() {
            const starsContainer = document.getElementById('stars');
            const numberOfStars = 150;

            for (let i = 0; i < numberOfStars; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.animationDelay = Math.random() * 3 + 's';
                star.style.opacity = Math.random() * 0.7 + 0.3;
                starsContainer.appendChild(star);
            }
        }

        createStars();

        // Плавна прокрутка
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Обробка форми
        document.getElementById('contactForm').addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Дякуємо за звернення! Ми зв\'яжемося з вами найближчим часом.');
            this.reset();
        });

        // Функція для прокрутки до контактів
        function scrollToContact() {
            document.getElementById('contact').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
       


        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.feature-card, .info-box, .teacher-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease-out';
            observer.observe(el);
        });
