//--------------Hiển thị danh mục các phòng------------------------

$.ajax({
    type: "Get", headers: {
        'Accept': 'application/json', 'Content-text': 'application/json'
    }, url: 'http://localhost:8080/room', //xử lý khi thành công
    success: function (data) {
        console.log(data.content)
        showRoom(data.content);
        showHotelDv()
    }, error: function (err) {
        console.log(err)
    }
})

function showRoom(data) {
    let str = "";
    let a = "";
    a += `<tr>
                            <th>Tên phòng</th>
                            <th>số lượng người</th>
                            <th>Phòng thuộc khu</th>
                            <th>Tình trạng phòng</th>
                            <th>Giá phòng</th>
                            <th>Mô tả về phòng</th>
                            <th>chỉnh sửa</th>
                            <th>Ảnh</th>

                        </tr>`;
    for (let i = 0; i < data.length; i++) {
        let picI = "";
        for (let j = 0; j < data[i].pictures.length; j++) {
            picI += `<td><img src= ${data[i].pictures[i].img} alt="" style="width: 150px"><br>
                     <button "><a href="edit.html?id=${data[i].pictures[i].id}">Edit</a> </button>
                <button onclick="Deleteblog(${data[i].pictures[i].id})" >Delete</button></td>`
        }
        console.log(picI)
        str += `       <tr>
                            <td>${data[i].nameRoom}</td>
                            <td>${data[i].roomType}</td>
                            <td>${data[i].roomKind}</td>
                            <td>${data[i].statusRoom}</td>
                            <td>${data[i].priceRoom} VND</td>  
                            <td>${data[i].view}</td>
                <td><button "><a href="edit.html?id=${data[i].id}">Edit</a> </button>
                <button onclick="Deleteblog(${data[i].id})" >Delete</button></td>    
                                            ${picI}            
                        </tr>`
    }
    let total = a + str;
    document.getElementById("showAllRoom").innerHTML = total;
}