// hiện thi danh sách phòng
let token = localStorage.getItem("token");
console.log("hello")
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
        url: "http://localhost:8080/user/rooms",
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
    for (let i=0;i<data.length;i++){
        str +=`  <div class="col-lg-3 col-sm-6">
                        <div class="accomodation_item text-center">
                            <div class="hotel_img">
                                <img width="262px" height="270px" src="${data[i].picture1}" alt="">
                                <a href="#" class="btn theme_btn button_hover">Book Now</a>
                            </div>
                            <a href="#"><h4 class="sec_h4" ></h4></a>
                            <h5>${data[i].priceRoom}<small>/night</small></h5>
                        </div>
                    </div>
                 `
    }
    document.getElementById("displayListRoom").innerHTML=str;
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