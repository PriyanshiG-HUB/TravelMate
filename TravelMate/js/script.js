// Random Travel Destination Feature
const destinations = [
    "Bali Beach - Sun, Sand, and Serenity",
    "Phuket - Tropical Paradise",
    "Angkor Wat - Ancient Wonder",
    "Kyoto - Spiritual Journey",
    "Paris - City of Light",
    "Rome - History & Culture"
];

const randomBtn = document.getElementById("randomBtn");
const randomDisplay = document.getElementById("randomDisplay");

if(randomBtn){
    randomBtn.addEventListener("click", () => {
        const randomIndex = Math.floor(Math.random() * destinations.length);
        randomDisplay.textContent = destinations[randomIndex];
    });
}

// Contact Form Submission
const contactForm = document.getElementById("contactForm");
if(contactForm){
    contactForm.addEventListener("submit", function(e){
        e.preventDefault();
        const name = document.getElementById("name").value;
        const confirmationMessage = document.getElementById("confirmationMessage");
        confirmationMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
        contactForm.reset();
    });
}

// Fade-in sections on scroll
const faders = document.querySelectorAll('.destination-section, .contact-card');

const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    fader.classList.add('fade-in');
    appearOnScroll.observe(fader);
});

// Scroll to section from Hero button
function scrollToSection(id){
    const section = document.getElementById(id);
    section.scrollIntoView({behavior: "smooth"});
}
