//login page js
$(document).ready(function() {
    initializePage();
})

//$('#username').focus();

function initializePage() {
    console.log("page initialized");
    $('#submit').click(verify);
}

function verify(e) {
    console.log("verifying");

    e.preventDefault(); // prevent PageReLoad
    var ValidEmail = $('#username').val() === 'admin'; // User validate
    var ValidPassword = $('#password').val() === 'password'; // Password validate

    if (ValidEmail === true && ValidPassword === true) { // if ValidEmail & ValidPassword
        console.log("correct");

        $('.valid').css('display', 'block');
        window.location = "/index"; // go to user screen
        // $("h4#userna").text('admin');
        // $("img#userimg").attr("src",'images/admin.png');
    }
    else {
        console.log("incorrect");
        $('.error').css('display', 'block'); // show error msg
    }
}