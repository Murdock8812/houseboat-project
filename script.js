document.addEventListener("DOMContentLoaded", function () {

    let dateInput = document.querySelector("input[type='date']");

    if (dateInput) {

        let today = new Date().toISOString().split("T")[0];
        dateInput.min = today;

    }

  
    let bookingBtn = document.getElementById("submitBooking");

    if (bookingBtn) {

        bookingBtn.onclick = function (e) {

            e.preventDefault();

        
            let name = document.getElementById("fullName");
            let email = document.getElementById("emailAddr");
            let phone = document.getElementById("phoneNumber");
            let date = document.getElementById("bookDate");
            let pkg = document.getElementById("packageType");
            let guests = document.getElementById("guestCount");

            name.style.border = "1px solid #ddd";
            email.style.border = "1px solid #ddd";
            phone.style.border = "1px solid #ddd";
            date.style.border = "1px solid #ddd";
            pkg.style.border = "1px solid #ddd";


            
            if (name.value.trim().length < 3) {

                alert("Please enter your full name.");
                name.style.border = "2px solid red";
                name.focus();

            }

            
            else if (email.value.indexOf("@") == -1 || email.value.length < 5) {

                alert("Please enter a valid email address.");
                email.style.border = "2px solid red";
                email.focus();

            }

           
            else if (phone.value.trim().length < 10) {

                alert("Please enter a valid 10-digit phone number.");
                phone.style.border = "2px solid red";
                phone.focus();

            }

          
            else if (date.value == "") {

                alert("Please select a check-in date.");
                date.style.border = "2px solid red";
                date.focus();

            }

            
            else if (pkg.value == "") {

                alert("Please select a houseboat package.");
                pkg.style.border = "2px solid red";
                pkg.focus();

            }

            else {

                alert(
                    "✅ RESERVATION CONFIRMED!\n\nName: " + name.value +
                    "\nPackage: " + pkg.value +
                    "\nDate: " + date.value +
                    "\nGuests: " + guests.value +
                    "\n\nA confirmation email has been sent to " + email.value
                );

                document.getElementById("resForm").reset();

            }

        };

    }


   
    let contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.onsubmit = function (e) {

            e.preventDefault();

            let cName = document.getElementById("contactName").value;
            let cMsg = document.getElementById("contactMsg").value;

            if (cName.trim() == "" || cMsg.trim() == "") {

                alert("Please fill in all fields before sending.");

            }
            else {

                alert("Thank you, " + cName + ". Your message has been sent.");

                contactForm.reset();

            }

        };

    }



    let currentPage = window.location.pathname.split("/").pop();

    if (currentPage == "") {

        currentPage = "index.html";

    }

    let links = document.querySelectorAll(".nav-links a");

    for (let i = 0; i < links.length; i++) {

        let linkPage = links[i].getAttribute("href");

        if (linkPage == currentPage) {

            links[i].style.color = "#feba02";
            links[i].style.borderBottom = "2px solid #feba02";
            links[i].style.paddingBottom = "5px";

        }

    }


    
    let menuBtn = document.querySelector(".menu-btn");
    let closeBtn = document.querySelector(".close-btn");
    let navMenu = document.querySelector(".nav-links");


    if (menuBtn && closeBtn && navMenu) {

     
        menuBtn.onclick = function () {

            navMenu.classList.add("show");

        };


        
        closeBtn.onclick = function () {

            navMenu.classList.remove("show");

        };


        
        let navItems = navMenu.querySelectorAll("a");

        for (let i = 0; i < navItems.length; i++) {

            navItems[i].onclick = function () {

                navMenu.classList.remove("show");

            };

        }

    }

});
