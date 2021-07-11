const Contact = require('./models/contact.js');

const contacts = []

document.addEventListener("DOMContentLoaded", () => {

  // Form
  const form = document.querySelector("#form");
  // contacts
  const ul = document.querySelector("#contacts");

  //   submit new contact
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    contactInfo = [
      this.name.value,
      this.relationship.value,
      this.phoneNumber.value,
      this.email.value,
    ];
    contactInfo.forEach((item) => {
      ul.appendChild(addDivItem(item));
    });
    this.reset();
  });

  form.deleteButton.addEventListener("click", function () {
    ul.innerHTML = "";
  });
});

function addDivItem(text) {
  const newElement = document.createElement("div");
  newElement.textContent = text;
  return newElement;
}
