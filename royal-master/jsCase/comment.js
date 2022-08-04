getData()

function getData() {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/comment",
        //xử lý khi thành công
        success: function (data) {
            console.log("data")
            console.log(data)
            showData(data.content);
            showCountComment(data.content);
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
<!--                                        <div class="thumb">-->
<!--                                            <img src="image/blog/c1.jpg" alt="">-->
<!--                                        </div>-->
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
                            </div>	
<!--                            <div class="comment-list left-padding">-->
<!--                                <div class="single-comment justify-content-between d-flex">-->
<!--                                    <div class="user justify-content-between d-flex">-->
<!--                                        <div class="thumb">-->
<!--                                            <img src="image/blog/c2.jpg" alt="">-->
<!--                                        </div>-->
<!--                                        <div class="desc">-->
<!--                                            <h5><a href="#">Elsie Cunningham</a></h5>-->
<!--                                            <p class="date">December 4, 2017 at 3:12 pm </p>-->
<!--                                            <p class="comment">-->
<!--                                                Never say goodbye till the end comes!-->
<!--                                            </p>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                    <div class="reply-btn">-->
<!--                                           <a href="" class="btn-reply text-uppercase">reply</a> -->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>	-->
<!--                            <div class="comment-list left-padding">-->
<!--                                <div class="single-comment justify-content-between d-flex">-->
<!--                                    <div class="user justify-content-between d-flex">-->
<!--                                        <div class="thumb">-->
<!--                                            <img src="image/blog/c3.jpg" alt="">-->
<!--                                        </div>-->
<!--                                        <div class="desc">-->
<!--                                            <h5><a href="#">Annie Stephens</a></h5>-->
<!--                                            <p class="date">December 4, 2017 at 3:12 pm </p>-->
<!--                                            <p class="comment">-->
<!--                                                Never say goodbye till the end comes!-->
<!--                                            </p>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                    <div class="reply-btn">-->
<!--                                           <a href="" class="btn-reply text-uppercase">reply</a> -->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>	-->
<!--                            <div class="comment-list">-->
<!--                                <div class="single-comment justify-content-between d-flex">-->
<!--                                    <div class="user justify-content-between d-flex">-->
<!--                                        <div class="thumb">-->
<!--                                            <img src="image/blog/c4.jpg" alt="">-->
<!--                                        </div>-->
<!--                                        <div class="desc">-->
<!--                                            <h5><a href="#">Maria Luna</a></h5>-->
<!--                                            <p class="date">December 4, 2017 at 3:12 pm </p>-->
<!--                                            <p class="comment">-->
<!--                                                Never say goodbye till the end comes!-->
<!--                                            </p>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                    <div class="reply-btn">-->
<!--                                           <a href="" class="btn-reply text-uppercase">reply</a> -->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>	-->
<!--                            <div class="comment-list">-->
<!--                                <div class="single-comment justify-content-between d-flex">-->
<!--                                    <div class="user justify-content-between d-flex">-->
<!--                                        <div class="thumb">-->
<!--                                            <img src="image/blog/c5.jpg" alt="">-->
<!--                                        </div>-->
<!--                                        <div class="desc">-->
<!--                                            <h5><a href="#">Ina Hayes</a></h5>-->
<!--                                            <p class="date">December 4, 2017 at 3:12 pm </p>-->
<!--                                            <p class="comment">-->
<!--                                                Never say goodbye till the end comes!-->
<!--                                            </p>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                    <div class="reply-btn">-->
<!--                                           <a href="" class="btn-reply text-uppercase">reply</a> -->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>	                                             				-->
<!--                        `;
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

