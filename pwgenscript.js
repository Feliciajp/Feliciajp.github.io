function password_generate() {
    if (document.getElementById("small").checked == true) {
        var small = "abcdefghijklmnopqrstuvwxyz";
    } else {
        var small = "";
    }
    if (document.getElementById("big").checked == true) {
        var big = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else {
        var big = "";
    }
    if (document.getElementById("num").checked == true) {
        var num = "0123456789";
    } else {
        var num = "";
    }
    if (document.getElementById("symbol").checked == true) {
        var symbol = "!@#$%^&*";
    } else {
        var symbol = "";
    }
    var character = small + big + num + symbol;
    var l = document.getElementById("password_longer").value;
    var cl = character.length;
    var pass = "";

    for(var i=0; i<l; i++){
    pass += character[Math.floor(Math.random()*cl)];
    }
    document.getElementById("password").value = pass;
}

function password_copy() {
    var text = document.getElementById("password");
    text.select();
    document.execCommand("copy");
}

function password_longer_count() {
    var password_longer = document.getElementById("password_longer").value;
    document.getElementById("number").innerHTML = password_longer;
}
