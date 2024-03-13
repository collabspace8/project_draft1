function $$(name){
    return document.getElementById(name);
}

function RegisterAccount(){
    var fullname = $$('reg-fullname');
    var email = $$('reg-email');
    var phone = $$('reg-phonenumber');
    var username = $$('reg-username');
    var password = $$('reg-password');
    var acces = $$('reg-useraccess');

    var data = {
        fullname: fullname.value,
        email: email.value,
        phone: phone.value,
        username: username.value,
        password: password.value,
        acces: acces.value
    }
    var jsonString = JSON.stringify(data);
    console.log(jsonString)

    fullname.value = "";
    email.value = "";
    phone.value = "";
    username.value = "";
    password.value = "";
    acces.selectedIndex = -1;
}
function RegisterCancel(){
    window.location.href = "../index.html";
}


function LoginBtn(){
    var username = $$('login-user');
    var password = $$('login-password');

    if (username.value === "admin" && password.value === "admin") {
        alert("Login success")
        window.location.href = "owner-dashboard.html";
    } else {
        alert("Login failed")
    }
}

function OwnerPropertyAdd(){
    window.location.href = "owner-add-property.html";
}

function AddPropertyAddBtn(){
    var apPropertyName = $$('ap-propertyname');
    var apPropertyDesc = $$('ap-propertydesc');
    var apLocation = $$('ap-location');
    var apPrice = $$('ap-price');

    var data = {
        propertyname: apPropertyName.value,
        propertydesc: apPropertyDesc.value,
        location: apLocation.value,
        price: apPrice.value
    }
    var jsonString = JSON.stringify(data)
    alert("Property saved!")
    console.log(jsonString)
    apPropertyName.value = "";
    apPropertyDesc.value = "";
    apLocation.value = "";
    apPrice.value = "";
}
function AddPropertyBackBtn(){
    window.location.href = "owner-property.html";
}
var delModal  = document.querySelector('.show-modal-container');
function ShowModalContainer(){
    
    if (delModal.classList.contains('showmodal')) {
        delModal.classList.remove('showmodal');
    } else {
        delModal.classList.add('showmodal');
    }
}

function DeleteModalYes(){
    delModal.classList.remove('showmodal');
    alert("Item delete success");
}
function DeleteModalNo(){
    delModal.classList.remove('showmodal');
    alert("Delete Cancel");
}