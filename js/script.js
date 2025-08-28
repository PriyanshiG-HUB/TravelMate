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
// Contact form submission handler
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            document.getElementById("confirmationMessage").textContent =
                "✅ Thank you! Your message has been sent.";
            this.reset();
        });
    }
});
// Search function
function searchContent() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    let sectionId = "";

    if (query.includes("beach")) {
        sectionId = "beach";
    } else if (query.includes("temple")) {
        sectionId = "temple";
    } else if (query.includes("country")) {
        sectionId = "country";
    } else {
        alert("No matching destinations found. Try 'beach', 'temple', or 'country'.");
        return;
    }

    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}
