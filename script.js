document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = mobileMenu.querySelectorAll('a');

    // Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        
        // Animate hamburger to X
        const spans = hamburger.querySelectorAll('span');
        if (mobileMenu.classList.contains('active')) {
            spans[0].style.transform = 'translateY(7px) rotate(45deg)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close mobile menu on link click
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });

    // Smooth Scroll for anchor links
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

    // =====================================
    // Modal Gallery & Carousel Logic
    // =====================================
    const modal = document.getElementById('galleryModal');
    const modalClose = document.querySelector('.modal-close');
    const carouselTrack = document.getElementById('carouselTrack');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const modalTitle = document.getElementById('modalTitle');
    const carouselError = document.getElementById('carouselError');
    
    let currentImages = [];
    let currentIndex = 0;

    // Abrir Galería
    window.openGallery = function(cardElement) {
        const folder = cardElement.getAttribute('data-folder');
        const imagesStr = cardElement.getAttribute('data-images');
        const title = cardElement.querySelector('h3').innerText;
        
        if (!imagesStr) return;
        
        // Limpiar el texto, separar por comas y quitar espacios
        currentImages = imagesStr.split(',').map(img => img.trim()).filter(img => img !== "");
        currentIndex = 0;
        modalTitle.innerText = title;
        
        renderCarousel(folder);
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevenir scroll de fondo
    };

    function renderCarousel(folder) {
        carouselTrack.innerHTML = '';
        
        if (currentImages.length === 0) {
            carouselTrack.style.display = 'none';
            carouselError.style.display = 'block';
            return;
        }

        carouselTrack.style.display = 'flex';
        carouselError.style.display = 'none';

        currentImages.forEach((imgName) => {
            const img = document.createElement('img');
            // Construir la ruta hacia la carpeta correspondiente
            img.src = `assets/${folder}/${imgName}`;
            img.alt = imgName;
            
            // Si la imagen falla en cargar (el usuario aún no la ha puesto)
            img.onerror = function() {
                this.src = 'https://via.placeholder.com/800x600/1e1e1e/a0a0a0?text=Foto+no+encontrada+('+imgName+')';
            };

            carouselTrack.appendChild(img);
        });
        
        // Ocultar botones si hay 1 o 0 imágenes
        if(currentImages.length <= 1) {
            prevBtn.style.display = 'none';
            nextBtn.style.display = 'none';
        } else {
            prevBtn.style.display = 'flex';
            nextBtn.style.display = 'flex';
        }

        updateCarouselPosition();
    }

    function updateCarouselPosition() {
        carouselTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Botones Siguiente / Anterior
    nextBtn.addEventListener('click', () => {
        if (currentIndex < currentImages.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Volver al inicio
        }
        updateCarouselPosition();
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = currentImages.length - 1; // Ir al final
        }
        updateCarouselPosition();
    });

    // Cerrar Modal
    function closeGallery() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    modalClose.addEventListener('click', closeGallery);
    modal.addEventListener('click', (e) => {
        // Cerrar si se hace clic fuera del contenido
        if (e.target === modal) closeGallery();
    });
});
