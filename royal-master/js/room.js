//--------------Hiển thị danh mục các phòng------------------------

$.ajax({
    type: "Get", headers: {
        'Accept': 'application/json', 'Content-text': 'application/json'
    }, url: 'http://localhost:8080/room', //xử lý khi thành công
    success: function (data) {
        console.log(data.content)
        console.log(data.content)
        console.log(data.content)
        showRoom(data.content);
        showHotelDv()
    }, error: function (err) {
        console.log(err)
    }
})

function showRoom(data) {
    let str = "";
    for (let i = 0; i < data.length; i++) {
        let picI = data[i].pictures[0].img
        str += `<div class="col-md-3">
                                   <div class="blog_info text-right">
                                        <div class="post_tag">
                                            <h2>${data[i].nameRoom}</h2>
                                            <h6>số lượng người : ${data[i].roomType}</h6>
                                            <h6>Loại phòng : ${data[i].roomKind}</h6>
                                            <h6>Giá phòng : ${data[i].priceRoom} VND</h6>
                    
                                        </div>
                                    </div>
                               </div>
                                <div class="col-md-9">
                                    <div class="blog_post">
                                        <img src=${picI} alt="">
                                        <div class="blog_details">
                                            <a href="#"><h2>Mô tả chi tiết về phòng</h2></a>
                                            <h6>${data[i].view}</h6>
                                            <a href="roomBook.html?id=${data[i].idRoom}" class="view_btn button_hover">Đặt phòng</a>
                                        </div>
                                    </div>
                                </div><br><br><br><br>`
    }
    document.getElementById("showRoom").innerHTML = str;
}


//--------------Hiển thị danh mục các dịch vụ------------------------

function showHotelDv() {
    $.ajax({
        type: "Get", headers: {
            'Accept': 'application/json', 'Content-text': 'application/json'
        }, url: 'http://localhost:8080/hotelSv', //xử lý khi thành công
        success: function (data) {
            console.log(data.content)
            show(data.content);
        }, error: function (err) {
            console.log(err)
        }
    })


    function show(data) {
        let str = "";
        for (let i = 0; i < data.length; i++) {
            let picH = data[i].pictures[0].img
            console.log(picH)
            str += `<div class="media post_item">
                                    <div class="media-body">
                                        <h6>${data[i].nameHotelSv}</h6>
                                    </div>
                                    <br>
                                    <img src=${picH} alt="post" style="width: 200px">
                                      </div>`
        }
        document.getElementById("showHotelSv").innerHTML = str;
    }
}



