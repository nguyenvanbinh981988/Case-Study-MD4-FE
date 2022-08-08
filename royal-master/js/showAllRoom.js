//--------------Hiển thị danh mục các phòng------------------------

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
    let a = "";
    a += `<tr>
                            <th>Tên phòng</th>
                            <th>số lượng người</th>
                            <th>Phòng thuộc khu</th>
                            <th>Tình trạng phòng</th>
                            <th>Giá phòng</th>
                            <th>Mô tả về phòng</th>
                            <th>Ảnh</th>
                            <th></th>
                             <th>chỉnh sửa</th>
                        </tr>`;
    for (let i = 0; i < data.length; i++) {
        let picI = "";
        for (let j = 0; j < data[i].pictures.length; j++) {
            picI += `<td><img src= ${data[i].pictures[j].img} alt="" style="width: 150px; height: 150px"><br>
                    `;
        }
        console.log(picI)
        str += `       <tr>
                            <td>${data[i].nameRoom}</td>
                            <td>${data[i].roomType}</td>
                            <td>${data[i].roomKind}</td>
                            <td>${data[i].statusRoom}</td>
                            <td>${data[i].priceRoom} VND</td>  
                            <td>${data[i].view}</td> 
                                            ${picI}   
                <td><button "><a href="edit.html?id=${data[i].id}">Edit</a> </button>
                <button type="button" onclick="deleteRoom(${data[i].idRoom})" >Delete</button></td>            
                        </tr>`;
    }
    let total = a + str;
    document.getElementById("showAllRoom").innerHTML = total;
}


//------------------------------------------------------------------------------


