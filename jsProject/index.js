// hiện thi danh sách phòng
let token = localStorage.getItem("token");
console.log(token)
getData();
function getData(){
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json'
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader ("Authorization", "Bearer " + token);
        },
        url: "http://localhost:8080/user/room",
        success: function (data) {
            show(data)
            titleQuantity(data)
        },
        error: function (err) {
            console.log(err)
            location.href = "Login.html"
        }
    })
}
function show(data){
    let str =" ";
    for (const r of data){
        str +=`  <div class="col-lg-3 col-sm-6">
                        <div class="accomodation_item text-center">
                            <div class="hotel_img">
                                <img src="${r.pictures[0].img}" alt="">
                                <a href="blog-single.html?id=${r.idRoom}" class="btn theme_btn button_hover">Chi tiết Phòng</a>
                            </div>
                            <a href="#"><h4 class="sec_h4">Double Deluxe Room</h4></a>
                            <h5>${r.priceRoom}</h5>
                        </div>
                    </div>
                 `
    }
    document.getElementById("roomList").innerHTML=str;
}
function titleQuantity(data){
    for (let i=0;i<data.length;i++){
        if(data[i].roomType===3){
            document.getElementsByClassName("sec_h4")[i].innerHTML="hello"
        }
        else{
            document.getElementsByClassName("sec_h4")[i].innerHTML="333"
        }
    }
}
function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};