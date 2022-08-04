// console.log("Window Location:",window.location);
const myKey = window.location.search;
// console.log("Keys & Value:",myKey)
const urlParams = new URLSearchParams(myKey);
const id = urlParams.get('id')
console.log(id)

getData(id)

function getData(id) {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/comment/"+id,
        //xử lý khi thành công
        success: function (data) {
            console.log("data")
            console.log(data)
            showData(data);
            showCountComment(data);
        },
        error: function (err) {
            console.log(err)
        }
    })
}

function showData(data) {

    let str = "";
    for (const c of data) {
        str += ` 
         
                            
                            <div class="comment-list">
                                <div class="single-comment justify-content-between d-flex">
                                    <div class="user justify-content-between d-flex">
                                        <div class="desc">
                                            <h5><a href="#">${c.appUser.idUser}</a></h5>
                                            <p class="date">${c.dateComment}</p>
                                            <p class="comment">
                                                ${c.content}
                                            </p>
                                        </div>
                                    </div>
                                    <div class="reply-btn">
                                           <a href="" class="btn-reply text-uppercase">reply</a> 
                                    </div>
                                </div>
                            </div>`;
    }

    document.getElementById("showComment").innerHTML = str;
}

function getCountComment() {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/comment/countComment",
        //xử lý khi thành công
        success: function (data) {
            console.log("data")
            console.log(data)
        },
        error: function (err) {
            console.log(err)
        }
    })
}

function showCountComment(data){
    let count = "";
    for (const c of data) {
        count+=
            `
            <h4>${getCountComment() + "Comment"}</h4>
            `
    }
    document.getElementById("countComment").innerHTML = count
}

