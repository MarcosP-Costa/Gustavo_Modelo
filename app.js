document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================================================
    // STICKY HEADER
    // ==========================================================================
    const header = document.getElementById('site_header');
    
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once at load

    // ==========================================================================
    // MOBILE NAVIGATION MENU
    // ==========================================================================
    const menuToggle = document.getElementById('menu_toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('open');
            navMenu.classList.toggle('open');
        });

        // Close menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('open');
                navMenu.classList.remove('open');
                
                // Set active link visually
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            });
        });
    }

    // ==========================================================================
    // ACTIVE NAV LINK ON SCROLL
    // ==========================================================================
    const sections = document.querySelectorAll('section');
    
    const activeMenuOnScroll = () => {
        let scrollPosition = window.scrollY + 120; // offset header height

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };

    window.addEventListener('scroll', activeMenuOnScroll);

    // ==========================================================================
    // PORTFOLIO FILTER
    // ==========================================================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioCards = document.querySelectorAll('.portfolio-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            portfolioCards.forEach(card => {
                // Get category
                const category = card.getAttribute('data-category');

                if (filterValue === 'all' || category === filterValue) {
                    // Show card with transition
                    card.classList.remove('hide');
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    // Hide card with transition
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    // Wait for transition before hiding completely
                    setTimeout(() => {
                        card.classList.add('hide');
                    }, 300);
                }
            });
        });
    });

    // ==========================================================================
    // CONTACT FORM SUBMISSION (WHATSAPP FORMATTED REDIRECT)
    // ==========================================================================
    const contactForm = document.getElementById('contact_form');
    const submitBtn = document.getElementById('btn_submit_form');

    if (contactForm && submitBtn) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.7';

            // Get form values
            const name = document.getElementById('form_name').value;
            const email = document.getElementById('form_email').value;
            const social = document.getElementById('form_social').value;
            const service = document.getElementById('form_service').value;
            const message = document.getElementById('form_message').value;

            // Construct formatted message
            let whatsappMessage = `Olá, estou interessado em trabalhar com o Gustavo Sidelove\n`;
            whatsappMessage += `*Nome:* ${name}\n`;
            whatsappMessage += `*Seu E-Mail:* ${email}\n`;
            if (social.trim() !== '') {
                whatsappMessage += `*Social/Site:* ${social}\n`;
            }
            whatsappMessage += `*Tipo de Trabalho:* ${service}\n`;
            whatsappMessage += `*Proposta/Detalhes:* ${message}`;

            // Encode message for URL
            const encodedMessage = encodeURIComponent(whatsappMessage);
            const whatsappUrl = `https://api.whatsapp.com/send?phone=5511959212998&text=${encodedMessage}`;

            // Simulate API request delay
            setTimeout(() => {
                // Open WhatsApp link in new tab
                window.open(whatsappUrl, '_blank');
                
                // Reset Form
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.opacity = '1';
            }, 800);
        });
    }

    // ==========================================================================
    // ADVANCED MICRO-INTERACTIONS (SCROLL REVEAL EFFECT)
    // ==========================================================================
    const revealElements = document.querySelectorAll('.service-card, .portfolio-card, .stat-card, .about-photo-wrapper, .about-info, .training-card');

    const checkReveal = () => {
        const triggerBottom = window.innerHeight * 0.85;

        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            
            if (elTop < triggerBottom) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    };

    // Initial styles for animations
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(25px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });

    window.addEventListener('scroll', checkReveal);
    // Run once at load
    setTimeout(checkReveal, 200);
});
