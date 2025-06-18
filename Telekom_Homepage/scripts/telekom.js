// JavaScript for the Telekom Homepage
// JS to open or close the menu
const hamburgerIcon = document.getElementById("hamburger-icon");
const menu = document.querySelector(".menu");

hamburgerIcon.addEventListener("click", () => {
  menu.classList.toggle("open");
});

let currentIndex = 0; // Keep track of the current image index
const totalImages = 11; // Total number of images

const images = [
  "./assets/picture1.jpg",
  "./assets/picture2.JPG",
  "./assets/picture3.JPG",
  "./assets/picture4.JPG",
  "./assets/picture5.JPG",
  "./assets/picture6.JPG",
  "./assets/picture7.JPG",
  "./assets/picture8.JPG",
  "./assets/picture9.JPG",
  "./assets/picture10.JPG",
  "./assets/picture11.JPG",
];

// Function to toggle the visibility of the image list
function toggleImageList() {
  const imageList = document.getElementById("image-list");
  imageList.style.display =
    imageList.style.display === "none" ? "block" : "none";
}

// Function to change the main image and update the button text
function changeImage(imageSrc) {
  const mainImage = document.getElementById("main-image");
  mainImage.src = imageSrc; // Change the image

  // Update the button text
  currentIndex = images.indexOf(imageSrc); // Corrected index handling
  const button = document.querySelector(".title-button");
  button.textContent = `${currentIndex + 1}/${totalImages}`;

  // Closing the image list after selecting an image
  document.getElementById("image-list").style.display = "none";
}

// Function to navigate to the next or previous image
function changeImageByIndex(direction) {
  if (direction === "next") {
    currentIndex = (currentIndex + 1) % totalImages;
  } else if (direction === "prev") {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  }
  const newImageSrc = images[currentIndex];
  changeImage(newImageSrc);
}

// Function to toggle the visibility of the modal form
function toggleForm() {
  const modal = document.getElementById("form-modal");
  // Toggle the display of the modal
  if (modal.style.display === "none" || modal.style.display === "") {
    modal.style.display = "flex"; // Show the modal
  } else {
    modal.style.display = "none"; // Hide the modal
  }
}

document.querySelector('.devices-link').addEventListener('click', function(event) {
  var dropdown = this.nextElementSibling; // Get the dropdown menu
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block'; // Toggle display
  event.preventDefault(); // Prevent default link behavior
});


 // Get the "Уреди" list item and the dropdown menu
 const menuItem = document.querySelector('.menu-item');
 const dropdownMenu = menuItem.querySelector('.dropdown-menu1');
 
 // Add click event listener to the menu item
 menuItem.addEventListener('click', function(event) {
   // Prevent the link from navigating (if needed)
   event.preventDefault();
   
   // Toggle visibility of the dropdown
   dropdownMenu.style.display = dropdownMenu.style.display === 'flex' ? 'none' : 'flex';
 });
 
 // Optional: Close the dropdown when clicking anywhere else on the page
 document.addEventListener('click', function(event) {
   if (!menuItem.contains(event.target)) {
     dropdownMenu.style.display = 'none';
   }
 });

// Function to show and hide sections based on the selected category
function showSection(section) {
  // Hide all sections by default
  const allSections = document.querySelectorAll('.mobile-phones, .tv-section, .computer-section');
  allSections.forEach(sec => sec.classList.add('hidden'));

  // Show the selected section
  const selectedSection = document.getElementById(section);
  if (selectedSection) {
    selectedSection.classList.remove('hidden');
  }
}




