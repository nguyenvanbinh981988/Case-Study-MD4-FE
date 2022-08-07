//call lấy dữ liệu từ database
$.ajax({
    type: "Get", headers: {
        'Accept': 'application/json', 'Content-text': 'application/json'
    }, url: 'http://localhost:8080/room', //xử lý khi thành công
    success: function (data) {
        console.log(data.content)
        showRoom(data.content);
    }, error: function (err) {
        console.log(err)
    }
    })

function showRoom(data) {
    let str = "";
    for (let i = 0; i < data.length; i++) {
        let picI = data[i].pictures[0].img
        console.log(picI)
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
                                            <a href="#" class="view_btn button_hover">Đặt phòng</a>
                                        </div>
                                    </div>
                                </div>`
            }
    document.getElementById("showRoom").innerHTML = str;
    }
