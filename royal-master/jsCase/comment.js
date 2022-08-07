// // console.log("Window Location:",window.location);
// const myKey = window.location.search;
// // console.log("Keys & Value:",myKey)
// const urlParams = new URLSearchParams(myKey);
// const id = urlParams.get('id')
// console.log(id)

let id = localStorage.getItem("id");


getData(id)
let countcomment=0;
function getData(id) {
    console.log(id)
    console.log(id)
    console.log(id)
    console.log(id)
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
            getCountComment(id)
        },
        error: function (err) {
            console.log(err)
        }
    })
}

function showData(data) {
    console.log("tttttttt")
    console.log("tttttttt")
    console.log("tttttttt")
    let str = "";
    for (const c of data) {
        str += `            <div class="comment-list">
                                <div class="single-comment justify-content-between d-flex">
                                    <div class="user justify-content-between d-flex">
                                        <div class="desc">
                                            <h5><a href="#">${c.appUser.nameUser}</a></h5>
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

function getCountComment(id) {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/comment/countComment/"+ id,
        //xử lý khi thành công
        success: function (data) {
            console.log("count comment")
            console.log(data)
            countcomment=data;
        },
        error: function (err) {
            console.log(err)
        }
    })
}

function showCountComment(data){
    let count = "";
        count+=
            `
            <h4>${data.length} Comment</h4>
            `
    document.getElementById("countComment").innerHTML = count
}

function create() {
    let curDate = new Date();
    let idUser=localStorage.getItem("idUser")
    let content = document.getElementById("content").value
    // let dateComment = document.getElementById("date").value
    let room = localStorage.getItem("id")
    let comment = {
        // dateComment:dateComment,
        appUser: {
            idUser: idUser
        },
        content: content,
        room : {
            idRoom : room
        }
    }
    $.ajax({
        type: "POST",
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/comment",

        data: JSON.stringify(comment),
        //xử lý khi thành công
        success: function (data) {
            location.reload()
            getData(id);

        },
        error: function (err) {
            console.log(err)
        }
    })
}


