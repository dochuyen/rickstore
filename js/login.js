let loginForm = document.getElementById("login-form");
let loginBtn = document.getElementById("login-btn");
let errorMessage = document.getElementsByClassName("error-message");
let LoginBox = document.querySelector(".login-box")
let registedBox = document.querySelector(".Register")
let backLogin = document.querySelector(".icon-back")
// 
// Login
let ipUsername = document.querySelector(".username-input")
let ipEmail = document.querySelector(".email-input")
let ipPassword = document.querySelector(".password-input")
// registed
let ipUsernameRegisted = document.querySelector(".usernameRegisted-input")
let ipEmailRegisted = document.querySelector(".emailRegisted-input")
let ipPasswordRegisted = document.querySelector(".passwordRegisted-input")
let addToArrayButton = document.getElementById("register-btn")
// let Register = document.querySelector('.Register');

let Login = () => {
    let name = ipUsername.value;
    let email = ipEmail.value;
    let password = ipPassword.value;
    // lấy data
    const getLocalJson = localStorage.getItem('dataLogin');
    const getLocal = JSON.parse(getLocalJson)

    getLocal.forEach(item => {
        if (name.length === 0 || email.length === 0 || password.length === 0) {
            document.querySelector(".error-Green").innerHTML = ""
        } else if (name !== item.name) {
            document.querySelector(".error-Green").innerHTML = "Tên tài khoản không chính xác"
        }
        else if (email !== item.email) {
            document.querySelector(".error-Green").innerHTML = "Email không chính xác"
        }
        else if (password !== item.password) {
            document.querySelector(".error-Green").innerHTML = "Mật khẩu không chính xác"
        }
        else {
            localStorage.username = name;
            window.location.replace('index.html')
        }
    });


    // check validate
    if (checkemptyError([ipUsername, ipEmail, ipPassword])) return check = false;
    if (!checkEmailError(ipEmail)) return check = false;
    else return check = true;

}

// data
let data = []
function saveLocalsorate(data) {
    // chuyển thành chuỗi json
    let jsonLogin = JSON.stringify(data);
    // lưu vào localstorate
    localStorage.setItem('dataLogin', jsonLogin);
}
function getLocalsorate() {
    const getLocalJson = localStorage.getItem('dataLogin');
    const getLocal = JSON.parse(getLocalJson)

}



// xử lý đăng ký và lưu thôngt tin 
let handerRegisted = () => {
    let name = ipUsernameRegisted.value;
    let email = ipEmailRegisted.value;
    let password = ipPasswordRegisted.value;
    handerClearIp = () => {
        name = ''
        email = ''
        password = ''
    }
    let validate = () => {
        if (checkemptyError([ipUsernameRegisted, ipEmailRegisted, ipPasswordRegisted])) return check = false;
        if (!checkEmailError(ipEmailRegisted)) return check = false;
        else return check = true;
    }
    if (validate()) {
        data.push({ name: name, email: email, password: password });
        saveLocalsorate(data)
        console.log(data);
        ipUsernameRegisted.value = '';
        ipEmailRegisted.value = '';
        ipPasswordRegisted.value = '';
        backToLogin()
    }
}

///chuyển sang registed
let openRegister = () => {
    handerClearIp()
    LoginBox.style.display = "none";
    registedBox.style.display = "block";
}
//back về login
let backToLogin = () => {
    handerClearIp()
    LoginBox.style.display = "block";
    registedBox.style.display = "none";
}
let handerClearIp=()=>{
    ipUsernameRegisted.value = '';
    ipEmailRegisted.value = '';
    ipPasswordRegisted.value = '';
    ipUsername.value = '';
    ipEmail.value = '';
    ipPassword.value = '';
}