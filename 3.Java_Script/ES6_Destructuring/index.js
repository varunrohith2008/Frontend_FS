const password = document.getElementById('passwordin');
password.addEventListener('input', function () {
    const password = passwordin.value;
    if (password.length < 8) {
        passwordin.style.borderColor = 'red';
    } else {
        passwordin.style.borderColor = 'green';
    }
});

const mobiles = document.getElementById('mobileno');
mobiles.addEventListener('input', function () {
    const mobiles = mobileno.value;
    if (mobiles.length === 10) {
        mobileno.style.borderColor = 'green';
    } else {
        mobileno.style.borderColor = 'red';
    }
});

const ages = document.getElementById('agevalue');
ages.addEventListener('input', function () {
    const ages = agevalue.value;
    if (ages <= 18) {
        agevalue.innerHTML="above 18 only";
    } else {
        agevalue.style.borderColor = 'green';
    }
});


const textvalues = document.getElementById('textvalue');
const paras = document.getElementById('para');
textvalues.addEventListener('input', function () {
    const textvalues = textvalue.value;
    if (textvalues.length <= 20) {
        paras.innerHTML = 'Must be above 80 characters';
        paras.style.color = 'red';
    } else {
        paras.style.color = 'green';
    }
});


const submitvalue = document.getElementById('submits');
submitvalue.addEventListener('click', function (e) {
    e.preventDefault();
    if (submitvalue.value === '') {
        alert('Please fill every sections , it is mandatory');
        return;
    } else {
        alert('Form Submitted , Enjoy!');
    }
    document.getElementById("form").reset();
});