

function getEdit(id) {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/admin/" + id,
        //xử lý khi thành công
        success: function (data) {
            showEdit(data);
        },
        error: function (err) {
            console.log(err)
        }
    })

}

function showEdit(appUser) {
    document.getElementById("nameUserEdit").value = appUser.nameUser;
    document.getElementById("cccdUserEdit").value = appUser.cccdUser;
    document.getElementById("phoneUserEdit").value = appUser.phoneUser;
    document.getElementById("emailEdit").value = appUser.email;
    document.getElementById("idUser").value = appUser.idUser;
    let s =""
    for (let i = 0; i < appUser.roles.length; i++) {
        alert(appUser.roles[i].nameRole)
        s += `  
       <option>${appUser.roles[i].nameRole}</option>
         `
    }
    document.getElementById("roles").innerHTML = s

    function checkEdit() {
        let idUser = $("#id").val();
        let nameUser = $("#nameUserEdit").val();
        let cccdUser = $("#cccdUserEdit").val();
        let phoneUser = $("#phoneUserEdit").val();
        let email = $("#email").val();
        let roles = $("#roles").val();
        let appUser = {
            idUser: idUser,
            nameUser: nameUser,
            cccdUser: cccdUser,
            phoneUser: phoneUser,
            email: email,
            roles: roles
        }
        callEdit(appUser);

    }

    function callEdit(appUser) {
        $.ajax({
            type: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            url: "http://localhost:8080/admin",
            data: JSON.stringify(appUser),
            //xử lý khi thành công
            success: function (data) {
                getData();
            },
            error: function (err) {
                console.log(err)
            }
        })
    }
}
