function showError(input, message) {
    let getParrenVariable = input.parentElement;
    let error = getParrenVariable.querySelector('.error-message');
    
    if (error) { // Kiểm tra xem phần tử error có tồn tại không
        error.innerHTML = message;
    }
}

function showSuccess(input) {
    let getParrenVariable = input.parentElement;
    let error = getParrenVariable.querySelector('.error-message')
    console.log(error);
    error.innerHTML = '';
}




// check định dạng email 
function checkEmailError(input) {
    const regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$/;

    input.value = input.value.trim();
    if (regexEmail.test(input.value) === false && input.value !== '') {
        showError(input, 'xin hay nhập đúng định dạng email ')
        return false
    } else if (regexEmail.test(input.value)) {
        showSuccess(ipEmail)
        return true
    }
}

///// check không được để trống
function checkemptyError(listinput) {
    let isEmptyError = false;
    listinput.forEach(input => {
        input.value = input.value.trim()
        if (input.value === '') {
            isEmptyError = true;
            showError(input, 'không được để trống');
        } else {
            console.log(input);
            showSuccess(input);
        }
    });
    return isEmptyError;
}
function checkLengthError(input, min, max, mesenger) {
    input.value = input.value.trim();
    let isLengError = false;
    if (input.value.length >= 1 && input.value.length < min) {
        showError(input, ` phải có ít nhất ${min} ${mesenger}`);
        return isLengError = true;
    }
    if (input.value.length > max) {
        showError(input, `tối đa không quá ${max} ${mesenger}`);
        return isLengError = true;
    }
    return isLengError;
}