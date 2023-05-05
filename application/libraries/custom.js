// Local
const base_url = "http://localhost/learnindia/";

// host URl 
const host_url = "http://localhost/learnindia/learnindia_API/v1/";
// Live 
// const base_url = "https://leocan.co/subFolder/learnindia/";

// Image URL 
const image_url = "http://localhost/learnindia_adminpanel/learnindia_API/uploads/";

$(document).ready(() => {
    $('.navbar-nav').on('click', 'li', function () {
        $('.navbar-nav li').removeClass('active');
        $(this).addClass('active');
    });

    if (window.location.href == base_url) {
        setKeyToSuccess();
        setGauidanceHelp();
    }


})


// Show loader 
function showLoader() {
    $(".fulfilling-bouncing-circle-spinner").show();
}
function hideLoader() {
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
function setKeyToSuccess() {
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

// How career guidance can help you?
function setGauidanceHelp() {
    var image = document.images[3];
    var image2 = document.images[4];

    $.ajax({
        url: host_url + 'fetchGuidenceContent',
        method: 'get',
        beforeSend: function () {
            showLoader();
        },
        complete: function () {
            // showLoader();
            hideLoader();
        },
        error: function () {
            alert("Something went wrong");
            hideLoader();
            // showLoader();
        },
        success: function (data) {
            // showLoader();
            hideLoader();
            if (data.success) {
                console.log("data :",data);
                $("#careerHelpContent").html(data.Response.content);

                // // create new Image objects for the images
                let img1 = new Image();
                let img2 = new Image();

                img1.onload = function () {
                    image.src = this.src;
                };

                img2.onload = function () {
                    image2.src = this.src;
                };

            $("#appendImages").append(`<img id="careerHelpImg1" class="setLoader" decoding="async" src="${image_url}${data.Response.image}">`)
            $("#appendImages").append(`<img id="careerHelpImg2" class="setLoader" decoding="async" src="${image_url}${data.Response.image2}">`)

                // // set the src attribute of the Image objects
                img1.src = `${image_url}${data.Response.image}`;
                img2.src = `${image_url}${data.Response.image2}`;

            }
        },
    });
}
