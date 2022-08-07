function login() {
    let username = document.getElementById("inputUserName").value
    let password = document.getElementById("inputPassword").value;


    let appUser = {
        nameUser: username,
        passwordUser: password
    }
    $.ajax({
        type: "POST",
        headers: {
            //kiểu dữ liệu nhận về
            // 'Accept': 'application/json',
            // kiểu truyền đi
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/login",
        data: JSON.stringify(appUser),
        //xử lý khi thành công
        success: function (data) {
            console.log(data);
            localStorage.setItem("token", data.token);
            localStorage.setItem("idUser",data.id);
            localStorage.setItem("nameUser",data.userName)
            location.href = "index.html"
        },
        error: function (err) {
            console.log(err)
        }
    })
}
function register(){
    let username = document.getElementById("nameUser").value;
    let cccdUser =document.getElementById("cccdUser").value;
    let phoneUser = document.getElementById("phoneUser").value;
    let email = document.getElementById("email").value;
    let passwordUser= document.getElementById("passwordUser").value;
    let appUser = {
        nameUser: username,
        cccdUser: cccdUser,
        phoneUser :phoneUser,
        email:email,
        passwordUser:passwordUser
    }
    $.ajax({
        type: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/register",
        data: JSON.stringify(appUser),
        //xử lý khi thành công
        success: function (){
            location.href = "Login.html"
        },
        error: function (err) {
            console.log(err)
        }
    })
}