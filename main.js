function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();

// THE CODE BELOW IS FOR IMAGE MAGNIFY
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = "assets/project-1-full.png";
  modalImg.alt = this.alt;
  captionText.innerHTML = this.alt;
};

// When the user clicks on <span> (x), close the modal
modal.onclick = function () {
  img01.className += " out";
  setTimeout(function () {
    modal.style.display = "none";
    img01.className = "modal-content";
  }, 400);
};

var img = document.getElementById("myImg1");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = "assets/project-2-full.png";
  modalImg.alt = this.alt;
  captionText.innerHTML = this.alt;
};

// When the user clicks on <span> (x), close the modal
modal.onclick = function () {
  img01.className += " out";
  setTimeout(function () {
    modal.style.display = "none";
    img01.className = "modal-content";
  }, 400);
};

// JavaScript for the floating action button
document.addEventListener("DOMContentLoaded", function () {
  var floatingActionButton = document.querySelector('.floating-action-button');

  floatingActionButton.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Show or hide the floating action button based on scroll position
  window.addEventListener('scroll', function () {
    if (window.scrollY > 500) { // Adjust the scroll position threshold as needed
      const opacity = Math.min(1, (window.scrollY - 500) / 120); // Smooth transition over 200px scroll distance, mainin ukuran window vertikal nya
      floatingActionButton.style.opacity = opacity;
      floatingActionButton.style.display = 'block';

    } else {
      floatingActionButton.style.display = 'none';
    }
  });
});
