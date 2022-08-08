function deleteRoom(id){
    console.log(id)
    console.log(id)
    console.log(id)
    console.log(id)
    console.log(id)
    console.log(id)
    $.ajax({
        type: "Post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/room/"+id,
        data: JSON.stringify(id),
        //xử lý khi thành công
        success: function (data) {
            console.log(data.content)
            location.href = "showAllRoom.html";
        },
        error: function (err) {
            console.log(err)
        }
    })
}