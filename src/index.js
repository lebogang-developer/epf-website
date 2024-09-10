 // Get form elements
 var contactForm = document.getElementById('contactForm');
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');
  
    // Error messages
    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError');
    var messageError = document.getElementById('messageError');
  
    // Form validation
    contactForm.addEventListener('submit', function(event) {
      var isValid = true;
  
      // Name validation
      if (nameInput.value.trim() === '') {
        nameError.classList.remove('hidden');
        isValid = false;
      } else {
        nameError.classList.add('hidden');
      }
  
      // Email validation
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailInput.value)) {
        emailError.classList.remove('hidden');
        isValid = false;
      } else {
        emailError.classList.add('hidden');
      }
  
      // Message validation
      if (messageInput.value.trim() === '') {
        messageError.classList.remove('hidden');
        isValid = false;
      } else {
        messageError.classList.add('hidden');
      }
  
      // Prevent form submission if validation fails
      if (!isValid) {
        event.preventDefault();
      }
    });