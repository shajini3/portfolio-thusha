/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200});



// Form validation
document.getElementById('contact-form').addEventListener('submit', function (event) {
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');

    var isValid = true;

    // Name validation
    if (nameInput.value.trim() === '') {
      isValid = false;
      showError(nameInput, 'Name is required');
    } else {
      hideError(nameInput);
    }

    // Email validation
    if (emailInput.value.trim() === '') {
      isValid = false;
      showError(emailInput, 'Email is required');
    } else if (!isValidEmail(emailInput.value.trim())) {
      isValid = false;
      showError(emailInput, 'Invalid email address');
    } else {
      hideError(emailInput);
    }

    // Message validation
    if (messageInput.value.trim() === '') {
      isValid = false;
      showError(messageInput, 'Message is required');
    } else {
      hideError(messageInput);
    }

    if (!isValid) {
      event.preventDefault();
    }
  });

  // Helper functions for showing and hiding error messages
  function showError(input, message) {
    var errorContainer = input.nextElementSibling;
    if (!errorContainer || !errorContainer.classList.contains('error-message')) {
      errorContainer = document.createElement('span');
      errorContainer.classList.add('error-message');
      input.parentNode.insertBefore(errorContainer, input.nextSibling);
    }
    errorContainer.textContent = message;
  }

  function hideError(input) {
    var errorContainer = input.nextElementSibling;
    if (errorContainer && errorContainer.classList.contains('error-message')) {
      errorContainer.parentNode.removeChild(errorContainer);
    }
  }

  // Helper function for email validation using regular expression
  function isValidEmail(email) {
    var emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailPattern.test(email);
  }


  var toggleButton = document.getElementById('toggle-button');
  var additionalInfo = document.getElementById('additional-info');
  
  toggleButton.addEventListener('click', function () {
    if (additionalInfo.style.display === 'none') {
      additionalInfo.style.display = 'block';
      toggleButton.textContent = 'Hide Additional Information';
    } else {
      additionalInfo.style.display = 'none';
      toggleButton.textContent = 'Show Additional Information';
    }
  });
  
  var images = document.querySelectorAll('.slider-image');
  var currentIndex = 0;
  
  function changeSlide(n) {
    currentIndex += n;
  
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
      currentIndex = 0;
    }
  
    for (var i = 0; i < images.length; i++) {
      if (i === currentIndex) {
        images[i].style.display = 'block';
      } else {
        images[i].style.display = 'none';
      }
    }
  }
  
  var prevButton = document.getElementById('prev-button');
  var nextButton = document.getElementById('next-button');
  
  prevButton.addEventListener('click', function () {
    changeSlide(-1);
  });
  
  nextButton.addEventListener('click', function () {
    changeSlide(1);
  });
  