
    let token = localStorage.getItem("token");
    $.ajax({
    type: "GET",
    headers: {
    'Accept': 'application/json'
},
    beforeSend: function (xhr) {
    xhr.setRequestHeader ("Authorization", "Bearer " + token);
},
    url: "http://localhost:8080/",
    success: function (data) {
    show(data)
},
    error: function (err) {
    console.log(err)
}
})

    function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
}).join(''));

    return JSON.parse(jsonPayload);
}

    console.log("parseJwt(token)");
    console.log(parseJwt(token));

    function show(data) {
    let str = "";
    for (const u of data) {
    str += `<tr>
                        <td>${u.idUser}</td>
                        <td>${u.nameUser}</td>
                        <td>${u.passwordUser}</td>
                    </tr>`
}
    document.getElementById("show").innerHTML = str;
}

