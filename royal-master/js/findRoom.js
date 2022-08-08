function findRoomB() {
    let roomType = document.getElementById("findRoomType").value;
    let roomKind = document.getElementById("findRoomKind").value;
    let minPriceRoom = document.getElementById("findMinPrice").value;
    let maxPriceRoom = document.getElementById("findMaxPrice").value;

    location.href="findRoom.html?"

    $.ajax({
        type: "Get", headers: {
            'Accept': 'application/json', 'Content-text': 'application/json'
        }, url: 'http://localhost:8080/room', //xử lý khi thành công
        success: function (data) {
            find(data.content)
        }, error: function (err) {
            console.log(err)
        }
    })


    function find(data) {
        for (let i = 0; i < data.length; i++) {
            if (data[i].roomType != roomType || data[i].roomKind != roomKind || data[i].priceRoom < minPriceRoom || data[i].priceRoom > maxPriceRoom) {
                data.splice(i, 1)
            }
        }
    }
}