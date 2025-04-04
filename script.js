// sidebar toggle code
document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const toggleBtn = document.getElementById("sidebar-toggle");
    const body = document.body;

    toggleBtn.addEventListener("click", function () {
        sidebar.classList.toggle("active"); // Show/hide sidebar
        body.classList.toggle("active"); // Push content
    });
});


       
       // Smooth scrolling to sections
        const menuLinks = document.querySelectorAll('.list a');

        menuLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1); // Get section ID
                const targetSection = document.getElementById(targetId);
        
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop + 50, // Adjust for spacing
                        behavior: 'smooth'
                    });
                }
            });
        });



        // FOR SCROLLING WHEN BUTTON CLICK
        function scrollToSection(sectionId) {
            const section = document.querySelector(sectionId);
            window.scrollTo({
                top: section.offsetTop,  // Scroll to the section's top position
                behavior: 'smooth'       // Smooth scroll
            });
        }




// for the highlight in sidebar
    document.addEventListener("DOMContentLoaded", function () {
        const sections = document.querySelectorAll("section");
        const menuLinks = document.querySelectorAll(".list a");
    
        function changeActiveSection() {
            let scrollPosition = window.scrollY;
    
            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 100; // Adjusted offset
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute("id");
    
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    menuLinks.forEach((link) => {
                        link.classList.remove("active");
                        if (link.getAttribute("href").substring(1) === sectionId) {
                            link.classList.add("active");
                        }
                    });
                }
            });
        }
    
        window.addEventListener("scroll", changeActiveSection);
    });
    



// for name typewriter in home
const textArray = ["Information Technology", "Graphic Design", "Web Development", "UI/UX Design"];
let textIndex = 0;
let charIndex = 0;
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenWords = 1000; // Delay before switching words
const dynamicText = document.querySelector(".dynamic-text");

function typeText() {
    if (charIndex < textArray[textIndex].length) {
        dynamicText.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingSpeed);
    } else {
        setTimeout(eraseText, delayBetweenWords);
    }
}

function eraseText() {
    if (charIndex > 0) {
        dynamicText.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, erasingSpeed);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(typeText, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeText, typingSpeed);
});



// for changing to skills to services
document.getElementById('toolsBtn').addEventListener('click', function() {
    document.getElementById('skillsContent').classList.remove('fade-out');
    document.getElementById('skillsContent').classList.add('fade-in');
    document.getElementById('servicesContent').classList.remove('fade-in');
    document.getElementById('servicesContent').classList.add('fade-out');
    
    setTimeout(() => {
        document.getElementById('skillsContent').style.display = 'grid';
        document.getElementById('servicesContent').style.display = 'none';
    }, 200);

    this.classList.add('active');
    document.getElementById('servicesBtn').classList.remove('active');
});

document.getElementById('servicesBtn').addEventListener('click', function() {
    document.getElementById('servicesContent').classList.remove('fade-out');
    document.getElementById('servicesContent').classList.add('fade-in');
    document.getElementById('skillsContent').classList.remove('fade-in');
    document.getElementById('skillsContent').classList.add('fade-out');
    
    setTimeout(() => {
        document.getElementById('servicesContent').style.display = 'block';
        document.getElementById('skillsContent').style.display = 'none';
    }, 200);

    this.classList.add('active');
    document.getElementById('toolsBtn').classList.remove('active');
});