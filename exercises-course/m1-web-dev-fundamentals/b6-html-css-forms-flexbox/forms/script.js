const submitBtn = document.getElementById('btn-submit');
const fullnameInput = document.getElementById('fullname');
const emailInput = document.getElementById('email');
const motivationInput = document.getElementById('motivation');


submitBtn.addEventListener('click' , function(e){
    e.preventDefault();

    const isFullNameSizeOk = fullnameInput.value.length > 9 && fullnameInput.value.length < 41;
    const isEmailSizeOk = emailInput.value.length > 9 && emailInput.value.length < 41;
    const isMotivationSizeOk = motivationInput.value.length < 500;

    if (!isEmailSizeOk || !isFullNameSizeOk || !isMotivationSizeOk) {
        alert('Invalid data!')
    } else {
        alert('Thank you!')
    }
})



