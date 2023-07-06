//  Designed By Muhammad Trisna Zanuar Rahmadan Nur Faisal HAdi Saputra
//  6/7/2023
const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phonenumber = document.getElementById('phonenumber');

form.addEventListener('submit', e => {
    e.preventDefault();

    asuraimu();
});

const bacot = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const tai = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const cok = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const asuraimu = () => {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const phonenumberValue = phonenumber.value.trim();


    if(nameValue === '') {
        bacot(name, 'Name is required');
    } else {
        tai(name);
    }

    if(emailValue === '') {
        tai(email, 'Email is required');
    } else if (!cok(emailValue)) {
        bacot(email, 'Provide a valid email address');
    } else {
        tai(email);
    }

    if(phonenumberValue === '') {
        bacot(phonenumber, 'Phone number is required');
    } else if (phonenumberValue.length < 11 || phonenumberValue.length > 13) {
        bacot(phonenumber, 'Phone Number invalid.')
    } else {
        tai(phonenumber);
    }

};

var i = 0; 			
var images = [];	
var time = 2000;	
	 
images[0] = "2.jpg";
images[1] = "3.jpg";
images[2] = "4.jpg";
images[3] = "5.jpg";

images[4] = "6.jpg";
images[5] = "7.jpg";
images[6] = "8.jpg";
images[7] = "9.jpg";

images[8] = "10.jpg";
images[9] = "11.jpg";
images[10] = "12.jpg";
images[11] = "13.jpg";

images[12] = "22.jpg";
images[13] = "15.jpg";
images[14] = "16.jpg";
images[15] = "17.jpg";

images[16] = "18.jpg";
images[17] = "19.jpg";
images[18] = "20.jpg";
images[19] = "21.jpg";


function gantigambar(){
	document.slide.src = images[i];
	if(i < images.length - 1){
	  i++; 
	} else { 
		i = 0;
	}
	setTimeout(" gantigambar()", time);
}
window.onload= gantigambar;