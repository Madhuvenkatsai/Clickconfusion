// script.js
// Intentionally confusing logic and annoyances

// Login Form Handling
function handleLogin(event) {
    event.preventDefault(); // Prevent standard submission
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!/^[0-9]+$/.test(username)) {
        alert("Student ID must contain ONLY numbers.");
        return false;
    }

    if (!/^[a-zA-Z0-9]+$/.test(password)) {
        alert("Password must contain ONLY letters and numbers.");
        return false;
    }

    const terms = document.getElementById('terms');
    if (!terms || !terms.checked) {
        alert("You MUST NOT read the terms to proceed. Check the box.");
        return false;
    }

    // Fake loading delay
    const btn = document.querySelector('.btn-tiny-submit');
    if(btn) {
        const originalText = btn.innerText;
        btn.innerText = "Authenticating with mainframe...";
        setTimeout(() => {
            // Success? Take them to Dashboard
            window.location.href = "dashboard.html";
        }, 2500);
    }
    
    return false;
}

// Random annoyances for the dashboard
function triggerChaos() {
    // Spawn multiple alert boxes
    alert("Warning: Memory leak detected.");
    alert("Just kidding.");
    alert("But seriously, your session might expire soon.");
    
    // Randomly misalign the sidebar
    const sidebar = document.getElementById('bouncy-sidebar');
    if (sidebar) {
        sidebar.style.marginTop = (Math.random() * 100) + "px";
        sidebar.style.marginLeft = "-" + (Math.random() * 50) + "px";
    }

    // Change background color
    document.body.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
}

// Intercept clicks on links sometimes just to be annoying
document.addEventListener("DOMContentLoaded", () => {
    const allLinks = document.querySelectorAll('a');
    
    allLinks.forEach(link => {
        // If it's not a special link
        if(!link.hasAttribute('onclick') && link.href && !link.href.includes('#')) {
            link.addEventListener('click', (e) => {
                // 10% chance to just cancel the navigation and do nothing
                if(Math.random() < 0.1) {
                    e.preventDefault();
                    console.log("Navigation randomly cancelled for UX demonstration.");
                }
            });
        }
    });

    // Make the runaway buttons actually runaway (more extreme than the CSS)
    const runaways = document.querySelectorAll('.hover-runaway-extreme');
    runaways.forEach(btn => {
        btn.addEventListener('mouseover', function() {
            this.style.position = 'absolute';
            this.style.top = Math.random() * (window.innerHeight - 50) + 'px';
            this.style.left = Math.random() * (window.innerWidth - 100) + 'px';
        });
    });
});
