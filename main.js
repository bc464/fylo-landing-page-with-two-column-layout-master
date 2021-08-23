const btn = document.querySelector('.btn');
const btn1 = document.querySelector(".btn1");
let inputEmail = document.querySelector(".input");
let inputBottom = document.querySelector(".input1");
const faultMessage = document.querySelector(".error-mail-start");
const faultMessageBottom = document.querySelector(".error-mail-end");
let isRequired = value => value === "" ? false : true;
let isEmailValid = (email) => {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
};
const checkEmail = () => {
	let valid = false;
	const email = inputEmail.value.trim();
		if(!isRequired(email)) {
		inputEmail.style.border = "1px solid hsl(354, 100%, 88%)";
		faultMessage.style.display = "block";
		inputEmail.style.opacity = "1";
		} else if (!isEmailValid(email)) {
		inputEmail.style.border = "1px solid hsl(354, 100%, 88%)";
		faultMessage.style.display = "block";
		inputEmail.style.opacity = "1";
		} else {
		inputEmail.style.border = "1px solid rgba(0, 0, 0, 0.1)";
		faultMessage.style.display = "none";
		inputEmail.style.opacity = "0.5";
		valid = true;
		}
		return valid;
	}
	const checkEmailBottom = () => {
	let valid = false;
	const email = inputBottom.value.trim();
		if(!isRequired(email)) {
		inputBottom.style.border = "1px solid hsl(354, 100%, 88%)";
		faultMessageBottom.style.display = "block";
		inputBottom.style.opacity = "1";
		} else if (!isEmailValid(email)) {
		inputBottom.style.border = "1px solid hsl(354, 100%, 88%)";
		faultMessageBottom.style.display = "block";
		inputBottom.style.opacity = "1";
		} else {
		
		inputBottom.style.border = "1px solid rgba(0, 0, 0, 0.1)";
		faultMessageBottom.style.display = "none";
		inputBottom.style.opacity = "0.6";
		valid = true;
		}
		return valid;
	}
btn.addEventListener('click', checkEmail);
btn1.addEventListener('click', checkEmailBottom);