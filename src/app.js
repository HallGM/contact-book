const Contact = require("./models/contact.js");
const { addContact } = require("./helpers/helperFunctions.js");

document.addEventListener("DOMContentLoaded", () => {
  // Form
  const form = document.querySelector("#form");
  // Contacts
  const contactsElement = document.querySelector("#contacts");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const contact = new Contact(
      this.name.value,
      this.relationship.value,
      this.phoneNumber.value,
      this.email.value
    );
    addContact(contact, contactsElement);
    this.reset();
  });

  form.deleteButton.addEventListener("click", function () {
    contactsElement.innerHTML = "";
  });
});
