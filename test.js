//Javascript code for navigation bar & for home section
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    function setActiveLink() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    }

    function handleScroll() {
        if (window.scrollY > nav.offsetTop) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
        setActiveLink();
    }

    setActiveLink();
    window.addEventListener('scroll', handleScroll);
});
//End of nav & home


//Javascript code for career section's read more button
document.addEventListener('DOMContentLoaded', function() {
    const detailsButton = document.getElementById('detailsButton');
    const detailsSection = document.getElementById('detailsSection');

    detailsButton.addEventListener('click', function() {
        if (detailsSection.style.display === 'none') {
            detailsSection.style.display = 'block';
        } else {
            detailsSection.style.display = 'none';
        }
    });
});
//End of career section


//Javascript code for testimonial sliding
document.addEventListener('DOMContentLoaded', () => {
    const testimonialsList = document.querySelector('.testimonials-list');
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    let currentIndex = 0;
    const totalItems = testimonialItems.length;
    const transitionDuration = 300;
    const slideInterval = 9000;

    const showTestimonial = (index) => {
        testimonialsList.style.transform = `translateX(-${index * 100}%)`;
    };

    const showNextTestimonial = () => {
        currentIndex = (currentIndex + 1) % totalItems;
        showTestimonial(currentIndex);
    };

    const showPrevTestimonial = () => {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        showTestimonial(currentIndex);
    };

    nextButton.addEventListener('click', showNextTestimonial);
    prevButton.addEventListener('click', showPrevTestimonial);

});
//End for testimonials

//Slide photos
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Remove the "active" class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Increment slideIndex and reset if necessary
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    // Display the current slide and set the corresponding dot to active
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    
    // Set a timeout to call showSlides again after 2 seconds
    setTimeout(showSlides, 10000); // Change image every 2 seconds
}
