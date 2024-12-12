let slideIndex = 0;
const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("dot");

function showSlides() {
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].classList.remove("active");
    }

    
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");

    
    setTimeout(showSlides, 3000);
}

showSlides();

function performSearch() {
    const query = document.getElementById("search-bar").value;
    if (query) {
        console.log("Searching for:", query);
    } else {
        alert("Please enter a search term.");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const togglePassword = document.getElementById('togglePassword');
    const password = document.getElementById('password');

    togglePassword.addEventListener('click', function(e) {
       
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
      
        this.classList.toggle('ri-eye-off-line');
    });
});
    document.getElementById('navbar').innerHTML = fetch('K-ERAnav.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('navbar').innerHTML = data;
      });
  
   document.getElementById('footer').innerHTML = fetch('K-ERAfooter.html')
     .then(response => response.text())
    .then(data => {
         document.getElementById('footer').innerHTML = data;
       });


