// Local
const base_url = "http://localhost/learnindia/";

// host URl 
const host_url = "http://localhost/learnindia/learnindia_API/v1/";
// Live 
// const base_url = "https://leocan.co/subFolder/learnindia/";

$(document).ready(()=>{
    $('.navbar-nav').on('click', 'li', function(){
        $('.navbar-nav li').removeClass('active');
        $(this).addClass('active');
    });

    if (window.location.href == base_url ) {
        setKeyToSuccess();
    }


})


// Show loader 
function showLoader(){
    $(".fulfilling-bouncing-circle-spinner").show();
}
function hideLoader(){
    $(".fulfilling-bouncing-circle-spinner").hide();
}

// Header Redirection 
$("#homePage").on("click", function (event) {
    window.location = 'home';
});
$("#aboutUsPage").on("click", function (event) {
    window.location = 'aboutUs';
});
$("#blogPage").on("click", function (event) {
    window.location = 'blog';
});
$("#surveyPage").on("click", function (event) {
    window.location = 'survey';
});
$("#TermPage").on("click", function (event) {
    window.location = 'Term';
});
$("#contactPage").on("click", function (event) {
    window.location = 'contactUs';
});

// footer Redirection


// Key to success page content 
function setKeyToSuccess(){
    showLoader();
    $.ajax({
        url: host_url + 'fetchKeyToSuccess',
        method: 'get',
        beforeSend: function (data) {
            showLoader();
        },
        complete: function (data) {
            hideLoader();
        },
        error: function (data) {
            alert("Something went wrong");
            hideLoader();
        },
        success: function (data) {
            hideLoader();
            if (data.success) {
                $("#keyToSuccessContent").html(data.Response.content);
            }
        },
    });
}
