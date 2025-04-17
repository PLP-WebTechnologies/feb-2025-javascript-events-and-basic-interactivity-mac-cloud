const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const successMsg = document.getElementById("successMsg");

const validateEmail = (email) => /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);

nameInput.addEventListener("input", () => {
  nameError.textContent = nameInput.value.trim() === "" ? "Name is required" : "";
});

emailInput.addEventListener("input", () => {
  emailError.textContent = validateEmail(emailInput.value) ? "" : "Invalid email format";
});

messageInput.addEventListener("input", () => {
  messageError.textContent = messageInput.value.trim() === "" ? "Message is required" : "";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let valid = true;

  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required";
    valid = false;
  }

  if (!validateEmail(emailInput.value)) {
    emailError.textContent = "Invalid email format";
    valid = false;
  }

  if (messageInput.value.trim() === "") {
    messageError.textContent = "Message is required";
    valid = false;
  }

  if (valid) {
    successMsg.textContent = "Form submitted successfully!";
    form.reset();
  } else {
    successMsg.textContent = "";
  }
});
