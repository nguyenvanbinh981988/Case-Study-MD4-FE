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
let listuser=null;
$.ajax({
    type: "GET",
    headers: {
        //kiểu dữ liệu nhận về
        // 'Accept': 'application/json',
        // kiểu truyền đi
        'Content-Type': 'application/json'
    },
    url: "http://localhost:8180/appuser",
    //xử lý khi thành công
    success: function (data) {
        listuser=data;
    },
    error: function (err) {
        console.log(err)
    }
})
function register(){
    let arrUser = document.getElementsByTagName("input")
    console.log(arrUser)
    let userName = arrUser[3].value
    let cmt = arrUser[4].value
    let phone = arrUser[5].value
    let eMail = arrUser[6].value
    let pass = arrUser[7].value
    if (userName=="" || cmt=="" || phone=="" || eMail==""||pass==""){
        alert("Nhập đầy đủ các trường")
        return;
    }
    if (isNaN(cmt)){
        alert("Nhập Cmt không có chữ")
        return;
    }
    if (isNaN(phone)){
        alert("Nhập đúng số điện thoại")
        return;
    }


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
    let check=true;
    let messageUserName="";
    let messagePhoneNumber="";
    let messageEmail="";

    for (let i = 0; i < listuser.length; i++) {
        if (listuser[i].username==username){
            messageUserName="Tài khoản đã tồn tại"
            document.getElementById("messageUserName").innerText = messageUserName;
            check=false;
        }
        if (listuser[i].phoneUser==phoneUser){
            messagePhoneNumber="Số điện thoại đã có người sử dụng";
            document.getElementById("messagePhoneNumber").innerText = messagePhoneNumber;
            check=false;
        }
        if (listuser[i].email==email){
            messageEmail="Email đã có người sử dụng";
            document.getElementById("messageEmail").innerText = messageEmail;
            check=false;
        }
    }


    if (check){
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
                alert("đăng kí thành công")
                location.href = "Login.html"
                console.log("okoko")
                console.log("okoko")
                console.log("okoko")
            },
            error: function (err) {
                console.log(err)
            }
        })
    }
}
