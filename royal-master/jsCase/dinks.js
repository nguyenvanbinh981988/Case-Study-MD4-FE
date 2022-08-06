let token = localStorage.getItem("token");
let idUser = localStorage.getItem("idUser");
console.log("hello")
getDataDrink();
function getDataDrink(){
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json'
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader ("Authorization", "Bearer " + token);
        },
        url: "http://localhost:8080/user/drinks",
        success: function (data) {
            showDataDrink(data);
        },
        error: function (err) {
            console.log(err)
            location.href = "Login.html"
        }
    })
}
function showDataDrink(data){
    let str="";
    for (let i=0;i<data.length;i++){
        str+=`
         <tr>
                            <input type="text" class="idDrink" value="${data[i].idDrink}" hidden>
                            <td>
                                <img src="${data[i].imgDrink}" alt="">
                                <a href="#" class="user-link">${data[i].nameDrink}</a>
                                <span class="user-subhead">Admin</span>
                            </td>
                            <td style="text-align: center">
                               ${data[i].priceDrink}
                            </td>
                        
                            <td style="text-align: center" class="quantityExist">
                                ${data[i].quantityDrink}
                            </td>
                            <td class="text-center information">
                                <span class="label label-default" style="background: green; padding: 8px 12px;">Active</span>
                            </td>
                            <td style="text-align: center">
                            <button onclick="selectItemDrinksMinus(${i},${data[i].quantityDrink})"   class="minusBtn " style="background: azure"><i class="fa-solid fa-minus"></i></button>
                            <span style="padding: 0 12px;font-size: 15px;">
                            <div style="display: inline-block;width: 15px" class="quantitySelect">0</div>
                            </span>                       
                            <button onclick="selectItemDrinksAdd(${i},${data[i].quantityDrink})" class="addBtn "><i class="fa-solid fa-plus"></i></button> 
                             </td>
        `
    }
    document.getElementById("bodyListDrink").innerHTML=str;
}
let quantitySelect = document.getElementsByClassName("quantitySelect");
let quantityExist = document.getElementsByClassName("quantityExist");
let information = document.getElementsByClassName("text-center information");
let arrayLocalSelect=[];
function localSelect (){
    for (let i=0;i<quantitySelect.length;i++){
        arrayLocalSelect.push(quantitySelect[i].innerHTML);
    }
    localStorage.setItem("listSelect",arrayLocalSelect);
}
localSelect();
let dataLocalSelect = localStorage.getItem("listSelect");
console.log(dataLocalSelect);
function selectItemDrinksAdd(i,q){
    let str="";
    str+=`<span class="label label-default" style="background: #ccc;padding: 7px;color:red">UnActive</span>`
    // alert(q)
    let kq = Number(quantitySelect[i].innerText);
    kq++;
    quantitySelect[i].innerText=kq;
    let kq1 = Number(quantityExist[i].innerText)
    kq1--;
    quantityExist[i].innerText=kq1;
    if(kq1<=0){
        kq1=0;
        quantitySelect[i].innerText=q;
        quantityExist[i].innerText=kq1;
        information[i].innerHTML =str;
    }
}
function selectItemDrinksMinus(i,q){
    let str="";
    str+=`  <span class="label label-default" style="background: green; padding: 8px 12px;">Active</span>`
    let kq = Number(quantitySelect[i].innerText);
    kq--;
    quantitySelect[i].innerText=kq ;
    if(kq<=0){
        kq=0
        quantitySelect[i].innerText=kq;
        quantityExist[i].innerText=q;
    }
    else if(kq>0){
        let kq1 = Number(quantityExist[i].innerText)
        kq1++;
        quantityExist[i].innerText=kq1;
        information[i].innerHTML =str;

    }

}
let array=[];
class listSelect{
    idUser
    idDrink
    nameDrink
    quantitySelect
    constructor(idUser,idDrink,nameDrink,quantitySelect){
        this.idUser = idUser;
        this.idDrink = idDrink;
        this.nameDrink = nameDrink;
        this.quantitySelect = quantitySelect;
    }
}
let idDrinks = document.getElementsByClassName("idDrink")
let nameDrinks = document.getElementsByClassName("user-link");
function pay(){
    for(let i=0;i<quantitySelect.length;i++){
        let a=   Number(quantitySelect[i].innerHTML);
        if(a!==0){
            let b = Number(idDrinks[i].value)
            let c = nameDrinks[i].innerHTML;
            array.push(new listSelect(idUser,b,c,a));
        }
    }
    console.log(array);
    let str=" ";
    for(let i=0;i<array.length;i++){
        str+=`
                 <div class="form-group">
                        <label>${array[i].nameDrink}</label>
                        <input type="email" value="${array[i].quantitySelect}" class="form-control" readonly required>
                  </div>
          `
    }
    document.getElementById("modal_body").innerHTML= str;
}
function resetSelect(){
    array=[];
}

function saveDataUserSelect(){
    let array1 = [];
    for(let i=0;i<array.length;i++){
        let appUserSelect = {
            appUser:{
                idUser:array[i].idUser
            },
            drink:{
                idDrink:array[i].idDrink
            },
            nameDrink:array[i].nameDrink,
            quantity:array[i].quantitySelect
        }
        array1.push(appUserSelect);
    }
    console.log(array1);
    $.ajax({
        type: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader ("Authorization", "Bearer " + token);
        },
        url: "http://localhost:8080/user/pay",
        data: JSON.stringify(array1),
        //xử lý khi thành công
        success: function (data) {
        },
        error: function (err) {
            console.log(err)
        }
    })
}