const myKey = window.location.search;
const urlParams = new URLSearchParams(myKey);
const idRoom = urlParams.get('id')


$.ajax({
    type: "Get",
    headers: {
        'Accept': 'application/json', 'Content-text': 'application/json'
    }, url: 'http://localhost:8080/room/' + idRoom,
    //xử lý khi thành công
    success: function (data) {
        console.log(data)
        createRoomBook(data);
    }, error: function (err) {
        console.log(err)
    }
})

function createRoomBook(data) {
    let str = "";
    let a = `<table>
             <tr>
             <div class="post_tag">
                                            <h2>${data.nameRoom}</h2>
                                            <h6>số lượng người : ${data.roomType}</h6>
                                            <h6>Loại phòng : ${data.roomKind}</h6>
                                            <h6>Giá phòng : ${data.priceRoom} VND</h6>
                                            <h6>Mô tả : ${data.view} VND</h6>
                                        </div>`
    let z =`</tr></table> `
    for (let i = 0; i < data.pictures.length; i++) {
        str += ` 
 

<div class="col-lg-3 col-sm-6" style="position: center">
                        <div class="accomodation_item text-center">
                            <div class="hotel_img">
                                <img src=${data.pictures[i].img} alt="" style="width: 200px;height: 200px ">
                            </div>
                        </div>
                    </div>`;
    }
    let total = a + str +z
    document.getElementById("roomBook").innerHTML=total
}


//--------------------------Đặt phòng ---------------------------

function createRoomB() {

    let checkIn = new Date(document.getElementById("checkIn").value);
    let checkOut = document.getElementById("checkOut").value;
    let nameGuest = document.getElementById("nameGuest").value;
    let cccdGuest = document.getElementById("cccdGuest").value;
    let bankAccount = document.getElementById("bankAccount").value;

    const myKey = window.location.search;
    const urlParams = new URLSearchParams(myKey);
    const idRoom = urlParams.get('id')
    $.ajax({
        type: "Get",
        headers: {
            'Accept': 'application/json', 'Content-text': 'application/json'
        }, url: 'http://localhost:8080/room/' + idRoom,
        //xử lý khi thành công
        success: function (data) {
            console.log(data)
            console.log(data)
            console.log(data)
            console.log(data)
            console.log(data)
            createBook(checkIn,checkOut,nameGuest,cccdGuest,bankAccount,data);
        }, error: function (err) {
            console.log(err)
        }
    })
}

    //----------------------------------dat phong----------------------------


    function createBook(checkIn,checkOut,nameGuest,cccdGuest,bankAccount,data) {
        // let idUser = localStorage.setItem("id")
        let idUser = 1
        let ro = data
        $.ajax({
            type: "Get",
            headers: {
                'Accept': 'application/json', 'Content-text': 'application/json'
            }, url: 'http://localhost:8080/admin/' + idUser,
            //xử lý khi thành công
            success: function (data) {
                createB(checkIn, checkOut, nameGuest, cccdGuest, bankAccount,ro, data);
            }, error: function (err) {
                console.log(err)
            }
        })
    }

        function createB(checkIn,checkOut,nameGuest,cccdGuest,bankAccount,data,data1){
        let price = data.priceRoom
           let obj = {
               room:data,
               appUser:data1,
               nameGuest:nameGuest,
               cccdGuest:cccdGuest,
               bankAccount:bankAccount,
               checkIn:checkIn,
               checkOut:checkOut,
               price:price
            }
        $.ajax({
            type: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            url: "http://localhost:8080/roomBook",
            data: JSON.stringify(obj),
            //xử lý khi thành công
            success: function (data) {
                console.log(data.content)
            },
            error: function (err) {
                console.log(err)
            }
        })
    }
