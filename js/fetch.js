const contactImg = document.querySelector("#contact-img");
const contactName = document.querySelector("#contact-name");
const contactAddress = document.querySelector("#contact-address");
const contactEmail = document.querySelector("#contact-email");
const contactPhone = document.querySelector("#contact-phone");
const contactSocial = document.querySelectorAll(".contact-social");

function getData() {
  fetch("https://randomuser.me/api/?nat=us")
    .then((res) => res.json())
    .then((data) => {
      const contactInfo = data.results[0];

      contactImg.src = contactInfo.picture.large;
      contactName.innerHTML = `${contactInfo.name.first} ${contactInfo.name.last}`;
      contactAddress.innerHTML = `${contactInfo.location.street.number} ${contactInfo.location.street.name}`;
      contactEmail.innerHTML = `${contactInfo.email}`;
      contactPhone.innerHTML = `${contactInfo.phone}`;
      contactSocial.forEach((socialContact) => {
        socialContact.innerHTML = `@${contactInfo.name.first.toLowerCase()}${contactInfo.name.last.toLowerCase()}`;
      });
    });
}

document.querySelector("#contact-img").addEventListener("click", getData);
