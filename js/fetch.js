import { skillsData } from "./skills.js";
const contactImg = document.querySelector("#contact-img");
const contactName = document.querySelector("#contact-name");
const contactAddress = document.querySelector("#contact-address");
const contactEmail = document.querySelector("#contact-email");
const contactPhone = document.querySelector("#contact-phone");
const contactSocial = document.querySelectorAll(".contact-social");
const liSkills = document.querySelectorAll(".skills_img");
let randomArray = [];

/* SORT SKILLS */
function generateRandomArray() {
  const randomArray = [];
  let random;

  while (randomArray.length < 6) {
    random = Math.floor(Math.random() * 32);
    if (!randomArray.includes(random)) {
      randomArray.push(random);
    }
  }
  return randomArray;
}

function sortSkills() {
  randomArray = generateRandomArray();

  liSkills.forEach((skill, index) => {
    skill.src = skillsData[randomArray[index]].img;
  });
}

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

function updateContact() {
  sortSkills();
  getData();
}

document.querySelector("#contact-img").addEventListener("click", updateContact);
