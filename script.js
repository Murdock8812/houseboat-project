/**
 * A20 - Houseboat Reservation Project Logic
 * Handles Date Validation, Form Warnings, and Nav Highlighting
 */

document.addEventListener("DOMContentLoaded", function() {
    console.log("Project A20 Logic: Successfully Connected.");

    // --- 1. GLOBAL DATE VALIDATION ---
    // Prevents users from selecting past dates on Home or Booking pages
    const datePicker = document.querySelector("input[type='date']");
    if (datePicker) {
        const today = new Date().toISOString().split('T')[0];
        datePicker.setAttribute('min', today);
    }


    // --- 2. HOME PAGE: QUICK SEARCH WARNING ---
    const homeSearchBtn = document.querySelector(".btn-search");
    if (homeSearchBtn) {
        homeSearchBtn.onclick = function() {
            const dateVal = document.querySelector("input[type='date']").value;
            if (!dateVal) {
                alert("⚠️ Warning: Please select a travel date to check availability.");
            } else {
                alert("🔍 Searching for available houseboats on " + dateVal + "...");
            }
        };
    }


    // --- 3. BOOKING PAGE: VALIDATION & RESERVATION ---
    const submitBooking = document.getElementById("submitBooking");
    if (submitBooking) {
        submitBooking.onclick = function(e) {
            e.preventDefault(); // Prevents page reload

            // Get form elements
            const name = document.getElementById("fullName");
            const email = document.getElementById("emailAddr");
            const phone = document.getElementById("phoneNumber");
            const date = document.getElementById("bookDate");
            const pkg = document.getElementById("packageType");
            const guests = document.getElementById("guestCount");

            // Reset any previous warning styles
            [name, email, phone, date, pkg].forEach(el => {
                if(el) el.style.border = "1px solid #ddd";
            });

            // Logical Warnings (Validation)
            if (name.value.trim().length < 3) {
                showWarning("Please enter your full name.", name);
            } 
            else if (!email.value.includes("@") || email.value.length < 5) {
                showWarning("Please enter a valid email address.", email);
            } 
            else if (phone.value.trim().length < 10) {
                showWarning("Please enter a valid 10-digit phone number.", phone);
            } 
            else if (date.value === "") {
                showWarning("Please select a check-in date.", date);
            } 
            else if (pkg.value === "") {
                showWarning("Please select a houseboat package.", pkg);
            } 
            else {
                // Success Scenario
                alert("✅ RESERVATION CONFIRMED!\n\nName: " + name.value + 
                      "\nPackage: " + pkg.value + 
                      "\nDate: " + date.value + 
                      "\nGuests: " + guests.value +
                      "\n\nA confirmation email has been sent to " + email.value);
                
                document.getElementById("resForm").reset();
            }
        };
    }


    // --- 4. CONTACT PAGE: MESSAGE VALIDATION ---
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.onsubmit = function(e) {
            e.preventDefault();
            const cName = document.getElementById("contactName").value;
            const cMsg = document.getElementById("contactMsg").value;

            if (cName.trim() === "" || cMsg.trim() === "") {
                alert("⚠️ Warning: Please fill in all fields before sending.");
            } else {
                alert("📧 Thank you, " + cName + ". Your message has been sent to our support team.");
                contactForm.reset();
            }
        };
    }


    // --- 5. UI HELPER: NAV LINK HIGHLIGHTER ---
    // Automatically highlights the active page in the navigation menu
    const activePage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === activePage) {
            link.style.color = "#feba02";
            link.style.borderBottom = "2px solid #feba02";
            link.style.paddingBottom = "5px";
        }
    });


    // Helper Function for Warnings
    function showWarning(msg, element) {
        alert("⚠️ Warning: " + msg);
        element.style.border = "2px solid #fc0b0b";
        element.focus();
    }
});