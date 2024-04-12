/* Sorts guitars based on price or relevance in the guitars page */
function sortGuitars(sort) {
    if (sort=='relevance') {
        location.reload(); // Simply reload to go back to default order.
    }
    if (sort.includes('price')) {
        var negator = ""; // Used to negate flex order for descending price
        if (sort.includes('desc')) {
            negator="-";
        }
        document.querySelectorAll('div.guitarblock').forEach(guitarblock => {
            // Set flex order of element to price of guitar (or negative price for descending)
            guitarblock.style.order = negator + guitarblock.getAttribute('data-value');
        });
    }
}

/* Changes the guitar image based on the given selected color */
function changeGuitarColor(color) {

    // Change image and name to match selected color.
    const currentImage = document.getElementById("individualguitarimage");
    const currentName = document.getElementById("breadcrumbtitle");

    if (color=='sunburst') {
        currentImage.src="images/guitars/veterola-sunburst.jpg";
        currentName.innerHTML = "Veterola - Sunburst";
    }

    if (color=='seablue') {
        currentImage.src="images/guitars/veterola-seablue.jpg";
        currentName.innerHTML = "Veterola - Tide";
    }

    if (color=='lime') {
        currentImage.src="images/guitars/veterola-lime.jpg";
        currentName.innerHTML = "Veterola - Lime";
    }
}

/* Validates the contact form (only email) and stores name */
function validateContactForm() {
    let email = document.forms["contact"]["email"].value;
    if (email.search("@") == -1 || email.search(".") == -1) {
        alert("Email must contain @ and . characters");
        return false;
    }

    // Save name for use in confirmation page
    var name = document.forms["contact"]["fullname"].value;
    localStorage.setItem("userfullname", name);
}

/* Shows / hides the select guitar model selection in the contact form */
function showGuitarModelSelection() {
    document.getElementById("selectguitarmodel").style.display = "block";
}
function hideGuitarModelSelection() {
    document.getElementById("selectguitarmodel").style.display = "none";
}

/* Simply formats the contact confirmation page to include the name of the user entered in the contact form */
function displayContactConfirmation() {
    let message = document.getElementById("confirmationmessage")
    message.innerHTML = "Thank you " + localStorage.getItem("userfullname") + ", for your message. We will get back to you shortly.";
}

// Adapted from w3schools tutorial: https://www.w3schools.com/howto/howto_js_collapsible.asp
// Code below is for collapse buttons for FAQ section of the contact page
function setupCollapseButtons () {
    document.querySelectorAll('.collapsebutton').forEach(button => {
    // Add listener for click event.

    button.addEventListener('click', () => {

        // Get the content that the button shows (next sibling)
        const collapsecontent = button.nextElementSibling;

        // Toggle active status
        button.classList.toggle('collapsebutton--active');

        // Show collapsable content if button is active
        if (button.classList.contains('collapsebutton--active')) {

            // Set max height to the height of the content (in px)
            collapsecontent.style.maxHeight = collapsecontent.scrollHeight + 'px';

        } else { // hide content if not active
            collapsecontent.style.maxHeight = 0;
        }
    });
    });
}


