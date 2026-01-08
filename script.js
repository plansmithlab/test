document.addEventListener('DOMContentLoaded', function() {
    // 스무스 스크롤
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    // CTA 버튼 클릭
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            document.querySelector('#menu').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // 스크롤 애니메이션
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    // 메뉴 카드 애니메이션
    document.querySelectorAll('.menu-card').forEach((card, index) => {
        card.classList.add('scroll-fade');
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });

    // 통계 애니메이션
    document.querySelectorAll('.stat-item').forEach((stat, index) => {
        stat.classList.add('scroll-fade');
        stat.style.transitionDelay = `${index * 0.15}s`;
        observer.observe(stat);
    });

    // 네비게이션 바 스크롤 효과
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }

        lastScroll = currentScroll;
    });

    // 메뉴 카드 호버 효과 강화
    document.querySelectorAll('.menu-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    console.log('Aroma Coffee 웹사이트가 로드되었습니다 ☕');
});
