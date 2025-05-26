// desktop sidebar toggle code
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const sections = document.querySelectorAll('section');

    // Toggle sidebar visibility
    sidebar.classList.toggle('hide'); // Remove this if you are merging the functionality.
    sidebar.classList.toggle('show'); // Toggle 'show' class

    // Toggle sections' margin
    sections.forEach(section => {
        section.classList.toggle('shift');
    });
}

document.getElementById('desktop-sidebar-toggle').addEventListener('click', toggleSidebar);




//mobile sidebar toggle code
document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const mobileToggle = document.getElementById("mobile-sidebar-toggle");

    if (mobileToggle && sidebar) {
        mobileToggle.addEventListener("click", function () {
            sidebar.classList.toggle("show");
            this.classList.toggle("active");
        });
    }
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
const textArray = ["IT Student", "Fresh Graduate", "Graphic Design", "Web Development"];
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




// for snow falling in About Section
document.addEventListener('DOMContentLoaded', () => {
  const snowContainer = document.getElementById('snow');
  const aboutSection = document.getElementById('About');
  const skillsSection = document.getElementById('Skills');
  const snowflakeCount = 100;

  // Only create snow if elements exist
  if (snowContainer && aboutSection && skillsSection) {
    for (let i = 0; i < snowflakeCount; i++) {
      const flake = document.createElement('div');
      flake.className = 'snowflake';

      const size = Math.random() * 4 + 2;
      flake.style.width = `${size}px`;
      flake.style.height = `${size}px`;

      flake.style.left = `${Math.random() * 100}%`;

      flake.style.opacity = Math.random() * 0.5 + 0.3;
      
      const colors = ['#ffffff', '#e0f7ff', '#f0f8ff', '#ffeefc'];
      flake.style.background = colors[Math.floor(Math.random() * colors.length)];

      const duration = Math.random() * 5 + 5;
      const delay = Math.random() * 10;
      flake.style.animationDuration = `${duration}s`;
      flake.style.animationDelay = `${delay}s`;

      snowContainer.appendChild(flake);
    }
  }
});





// for the skills, services and certificates
// Show Skills
document.getElementById('toolsBtn').addEventListener('click', function() {
    // Show skills
    document.getElementById('skillsContent').classList.remove('fade-out');
    document.getElementById('skillsContent').classList.add('fade-in');

    // Hide services and certificates
    document.getElementById('servicesContent').classList.remove('fade-in');
    document.getElementById('servicesContent').classList.add('fade-out');

    setTimeout(() => {
        document.getElementById('skillsContent').style.display = 'grid';
        document.getElementById('servicesContent').style.display = 'none';
    }, 200);

    // Button active state
    this.classList.add('active');
    document.getElementById('servicesBtn').classList.remove('active');
});

// Show Services
document.getElementById('servicesBtn').addEventListener('click', function() {
    // Show services
    document.getElementById('servicesContent').classList.remove('fade-out');
    document.getElementById('servicesContent').classList.add('fade-in');

    // Hide skills and certificates
    document.getElementById('skillsContent').classList.remove('fade-in');
    document.getElementById('skillsContent').classList.add('fade-out');

    setTimeout(() => {
        document.getElementById('servicesContent').style.display = 'block';
        document.getElementById('skillsContent').style.display = 'none';
    }, 200);

    // Button active state
    this.classList.add('active');
    document.getElementById('toolsBtn').classList.remove('active');
});



// STARS BACKGROUND SCRIPT ON EDUCATION SECTION
document.addEventListener('DOMContentLoaded', () => {
  const starContainer = document.getElementById('stars');
  const starCount = 190;

  if (starContainer) {
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      const size = Math.random() * 1 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;

      // Add random animation delay and duration
      const delay = Math.random() * 1.5;         // 0 to 1.5s
      const duration = 1.5 + Math.random() * 0.5;       // 1.5s to 2s
      star.style.animationDelay = `${delay}s`;
      star.style.animationDuration = `${duration}s`;

      starContainer.appendChild(star);
    }
  }
});





// Form submission handling in Contacts
// this will send to my email
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    // Change button text to loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        alert('Message sent successfully!');
        form.reset();
      } else {
        throw new Error('Network response was not ok');
      }
    }).catch(error => {
      alert('There was a problem sending your message. Please try again.');
    }).finally(() => {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    });
  });
  