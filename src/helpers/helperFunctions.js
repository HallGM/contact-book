function addContact(contact, contactsElement) {
    const li = document.createElement('li')
    Object.values(contact).forEach(item => {
      li.appendChild(addDivItem(item));
    });
    contactsElement.appendChild(li);
  }
  
  function addDivItem(text) {
    const newElement = document.createElement("div");
    newElement.textContent = text;
    return newElement;
  }

  module.exports = {addContact, addDivItem}