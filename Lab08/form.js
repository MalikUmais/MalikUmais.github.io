
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const namePattern = /^[a-zA-Z\s]{5,50}$/;
    const emailPattern = /^(.+)@[a-zA-Z]{3,}\.([a-z]{3,})$/;
    const phonePattern = /^03\d{2}-\d{7}$/;
    const experiencePattern = /^\d{1,2}$/;

    const fullname = document.getElementById("fullname");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const experience = document.getElementById("experience");

    function validateField(field, pattern) {
        if (!pattern.test(field.value)) {
            field.style.backgroundColor = "red";
            return false;
        } else {
            field.style.backgroundColor = "#27526e";
            return true;
        }
    }

    const isNameValid = validateField(fullname, namePattern);
    const isEmailValid = validateField(email, emailPattern);
    const isPhoneValid = validateField(phone, phonePattern);
    const isExpValid = validateField(experience, experiencePattern);

    if (isNameValid && isEmailValid && isPhoneValid && isExpValid) {
        form.submit();
        alert("Form submitted successfully!");
    } else {
        alert("Please fix invalid fields.");
    }
});
