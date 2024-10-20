document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Here you would typically send the form data to a server
        // For this example, we'll just log it and show a thank you message
        console.log('Form submitted:', { name, email, message });

        // Show thank you message
        contactForm.innerHTML = '<h3>Thank you for your message!</h3><p>I\'ll get back to you soon.</p>';
    });

    // Project details modal
    const projectButtons = document.querySelectorAll('.project-details');
    projectButtons.forEach(button => {
        button.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            showProjectModal(projectId);
        });
    });
});



