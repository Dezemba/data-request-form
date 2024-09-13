
const form = document.getElementById('form-style-3');
const date = document.getElementById('date');
const gname = document.getElementById('gname');
const email = document.getElementById('email');
const cellphone = document.getElementById('cellphone');
const organization = document.getElementById('Organization');


function checkInputs() {
	// trim to remove the whitespaces
  const date = date.value.trim();
	const gnameValue = gname.value.trim();
	const emailValue = email.value.trim();
	const cellphoneValue = cellphone.value.trim();
	const organizationValue = organization.value.trim();
	
	if(gnameValue === '') {
		setErrorFor(gname, 'Username cannot be blank');
	} else {
		setSuccessFor(gname);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(cellphoneValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(cellphone);
	}
	
	if(organization === '') {
		setErrorFor(organization, 'Password2 cannot be blank');
	} else{
		setSuccessFor(organization);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


 
