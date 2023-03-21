// selecting html elements
let emailElement = document.querySelector('#email');
let messageElement=document.querySelector('#message');

//attaching 'click listener'
let submitButton = document.querySelector('#submit-button');

//getting user entered values
submitButton.addEventListener('click', function(e) {
	e.preventDefault();
	let emailValue = emailElement.value;
	let messageValue = messageElement.value;

	//javascript validations
	if(emailValue.includes('@')) {
		// good value
			alert("Thank you.");
		} else {
			alert("Please check your email address.")
	}
})


