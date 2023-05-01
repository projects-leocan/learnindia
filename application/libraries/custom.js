// Local
const base_url = "http://localhost/learnindia/";
// Live 
// const base_url = "https://leocan.co/subFolder/learnindia/";

$(document).ready(()=>{
    $('.navbar-nav').on('click', 'li', function(){
        $('.navbar-nav li').removeClass('active');
        $(this).addClass('active');
    });
})

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