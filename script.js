// ===============================
// Modern JS for arshadbot03.github.io
// ===============================

// 🌙 Dark / Light Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
}

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        localStorage.setItem("theme",
            body.classList.contains("dark-mode") ? "dark" : "light"
        );
    });
}

// ===============================
// 📌 Sticky Navbar with Scroll Effect
// ===============================
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("nav-scrolled");
    } else {
        navbar.classList.remove("nav-scrolled");
    }
});

// ===============================
// 🔽 Smooth Scrolling
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });
    });
});

// ===============================
// ✨ Scroll Reveal Animation
// ===============================
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

// ===============================
// 📝 Form Validation
// ===============================
const form = document.getElementById("contact-form");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            showToast("Please fill all fields!");
            return;
        }

        if (!validateEmail(email)) {
            showToast("Enter a valid email address!");
            return;
        }

        showToast("Message sent successfully! 🚀");
        form.reset();
    });
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ===============================
// 🔔 Toast Notification
// ===============================
function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerText = message;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("show");
    }, 100);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// ===============================
// ⬆ Back To Top Button
// ===============================
const topBtn = document.createElement("button");
topBtn.innerText = "↑";
topBtn.className = "back-to-top";
document.body.appendChild(topBtn);

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

// ===============================
// 📅 Dynamic Footer Year
// ===============================
const footerYear = document.getElementById("year");
if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
}

