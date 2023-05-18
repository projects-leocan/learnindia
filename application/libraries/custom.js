// Local
const base_url = "http://localhost/learnindia/";

// host URl 
const host_url = "http://localhost/learnindia_API/v1/";
// Live 
// const base_url = "https://leocan.co/subFolder/learnindia/";

// Image URL 
const image_url = "http://localhost/learnindia_API/uploads/";

$(document).ready(() => {
    $('.navbar-nav').on('click', 'li', function () {
        $('.navbar-nav li').removeClass('active');
        $(this).addClass('active');
    });

    if (window.location.href == base_url) {
        setKeyToSuccess();
        setGauidanceHelp();
        setJourneyContent();
        setCounsellingContent();
        setSucessContent();
    }

    if (window.location.href == base_url + 'home') {
        setKeyToSuccess();
        setGauidanceHelp();
        setJourneyContent();
        setCounsellingContent();
        setSucessContent();
    }

    if (window.location.href == base_url + 'aboutUs') {
        setAboutContent();
        setInnerAboutContent();
        setEducationLogo();
        setTeamMembers();
    }
    if (window.location.href == base_url + 'blog') {
        setBlogContent();
        setInnerBlogContent();
        setCareerArticles();
        setServeyContent();
    }
    if (window.location.href == base_url + 'survey') {
        setServeyContent();
        setQuestionnaire();
    }
    if (window.location.href == base_url + 'Term') {
        setTermContent();
        setTermInnerContent();
        setNewTermsCondition();
    }
    if (window.location.href == base_url + 'contactUs') {
        setContactUSContent();
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



//  Career journey section 
function setJourneyContent() {
    $.ajax({
        url: host_url + 'fetchJourneyContent',
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
                $("#careerJourneyContent").html(data.Response.content);
            }
        },
    });
}

//  Career journey section 
function setCounsellingContent() {
    showLoader();
    $.ajax({
        url: host_url + 'fetchCounselingContent',
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
                $("#counsellingHeading").html(data.Response.heading);
                $("#counsellingContent").html(data.Response.content);
            }
        },
    });
}

// Our Student Success Stories!
function setSucessContent() {
    showLoader();
    $.ajax({
        url: host_url + 'fetchSuccessStory',
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
                data.Response.map((currentStory) => {
                    let storyContent = `
                    <div class="col-6 temonial-1">
                        <img src="img/right-quotation-mark.png" alt="right-quotation-mark">
                        <h4 id="studentName">${currentStory.student_name}</h4>
                        <p id="studentStory">
                        ${currentStory.content}
                        </p>
                        <div class="button">Read More</div>
                    </div>`;

                    $("#addSuccessStory").append(storyContent);
                })

            }
        },
    });
}

// ABOUT US 
function setAboutContent() {
    $.ajax({
        url: host_url + 'fetchAbout',
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
                $("#aboutMain").html(data.Response.content);
            }
        },
    });
}

function setInnerAboutContent() {
    $.ajax({
        url: host_url + 'fetchAboutInner',
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
                $("#aboutInner").html(data.Response.content);
            }
        },
    });
}

function setEducationLogo() {
    $.ajax({
        url: host_url + 'fetchEducationLogo',
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
                data.Response.map((logo) => {
                    $("#setEducationLogo").append(` <img src="${image_url}${logo.image}" alt="school">`);
                })
            }
        },
    });
}

function setTeamMembers() {
    $.ajax({
        url: host_url + 'fetchTeamMember',
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
                data.Response.map((currentTeacher) => {
                    $("#appendTeamMembers").append(`
                    <div class="img-1">
                        <img src="${image_url}${currentTeacher.image}" alt="smith">
                        <span>${currentTeacher.teacher_name}</span>
                    </div>`);
                })
            }
        },
    });
}

// BLOG SECTION
function setBlogContent() {
    $.ajax({
        url: host_url + 'fetchBlogContent',
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
                $("#blogContent").html(data.Response.content);
            }
        },
    });
}

function setInnerBlogContent() {
    $.ajax({
        url: host_url + 'fetchblogInnerContent',
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
                $("#blogInnerContent").html(data.Response.content);
            }
        },
    });
}

function setCareerArticles() {
    $.ajax({
        url: host_url + 'fetchCareerArticles',
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
                data.Response.map((currentArticle, index) => {
                    $("#appendArticleContent").append(`
                    <div class="col-4 blog-box" style="margin-top: 100px">
                        <img src="${image_url}${currentArticle.image}" class="card-img-top" alt="blog-1">
                        <div class="card-body">
                            <h5 class="card-title">${currentArticle.heading}</h5>
                            <p class="card-text">${currentArticle.content}</p>
                        </div>
                    </div>`);
                })
            }
        },
    });
}

function setServeyContent() {
    $.ajax({
        url: host_url + 'fetchServeyContent',
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
                $("#setServeyContent").html(data.Response.content);
            }
        },
    });
}

function setTermContent() {
    $.ajax({
        url: host_url + 'fetchTerms',
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
                $("#setTermsContent").html(data.Response.content);
            }
        },
    });
}

function setTermInnerContent() {
    $.ajax({
        url: host_url + 'fetchTermsContent',
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
                $("#setTermsInner").html(data.Response.content);
            }
        },
    });
}

function setNewTermsCondition() {
    $.ajax({
        url: host_url + 'fetchTerms_condition',
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
                data.Response.map((currentTerms, index) => {
                    $("#addNewTerms").append(`<div class="text-details">
                    <h4>${index + 1}. ${currentTerms.heading}</h4>
                    <p> ${currentTerms.content}</p>
                </div>`);
                })
            }
        },
    });
}

function setContactUSContent() {
    $.ajax({
        url: host_url + 'fetchContact',
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
                $("#setContactUsContent").html(data.Response.content);
                $("#setAddress").html(data.Response.address);
                $("#setContactNo").append(data.Response.contact_num);
                $("#setEmail").append(data.Response.email);
            }
        },
    });
}

$("#submitContactForm").on("click", () => {

    let username = $("#fname").val();
    let email = $("#email").val();
    let message = $("#message").val();

    let data = new FormData();
    data.append("user_name", username);
    data.append("email", email);
    data.append("meassge", message);

    $.ajax({
        url: host_url + 'fillContactForm',
        data: data,
        type: "POST",
        cache: false,
        processData: false,
        contentType: false,
        dataType: false,
        beforeSend: function (data) {
            showLoader();
        },
        complete: function (data) {
            hideLoader();
        },
        error: function (e) {
            showAlert("Failed to Data Add.");
            hideLoader();
        },
        success: function (data) {
            hideLoader();
            if (data.Status == "Success") {
                Swal.fire({
                    title: '',
                    text: `Thank you for contacting us! We will get back to you shortly.`,
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#F28123'
                }).then((result) => {
                    $("#fname").val("");
                    $("#email").val("");
                    $("#message").val("");
                })
            }
            else {
                Swal.fire(`${data.Message}`);
            }
        },
    });
})


function setQuestionnaire() {
    $.ajax({
        url: host_url + 'fetchQuestionnaire',
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
                $("#setQuestion").html(data.Response.content);

                data.Response.forEach((response, index) => {

                    let options = response.options.split(", "); // Split the options by comma separator

                    let optionsHtml = options.map((option) => {
                        return `
                <input type="radio" class="${option}" name="fav_language_${response.id}"  id="${response.id}" value="${option}">
                <label for="${option}">${option}</label><br>`;
                    }).join("");

                    $("#setQuestion").append(`
              <div class="survey-qna">
                ${response.question}
                ${optionsHtml}
              </div>
            `);
                });
            }
        },
    });
}

$("#submitCareerSurvey").on("click", () => {

    let fname = $("#fname").val();
    let email = $("#email").val();
    let gender = $("#gender").val();
    let lname = $("#lname").val();
    let dob = $("#dob").val();
    let grade = $("#grade").val();

    let json_response = {};

    $(".survey-qna").each(function (index) {
        let question = $(this).find("p").text();
        let selectedAnswer = $(this).find("input[type='radio']:checked").val();

        // Add a key-value pair with a numbering prefix to the JSON object
        json_response[`Question ${index + 1}`] = {
            "Question": question,
            "Answer": selectedAnswer
        };
    });

    let json_string = JSON.stringify(json_response);

    let data = new FormData();
    data.append("first_name", fname);
    data.append("last_name", lname);
    data.append("email", email);
    data.append("date_of_birth", dob);
    data.append("gender", gender);
    data.append("grade", grade);

    $.ajax({
        url: host_url + 'fillServeyForm',
        data: data,
        type: "POST",
        cache: false,
        processData: false,
        contentType: false,
        dataType: false,
        beforeSend: function (data) {
            showLoader();
        },
        complete: function (data) {
            hideLoader();
        },
        error: function (e) {
            showAlert("Failed to Data Add.");
            hideLoader();
        },
        success: function (data) {
            hideLoader();
            if (data.Status == "Success") {
                Swal.fire({
                    title: '',
                    text: `Thank you`,
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#F28123'
                }).then((result) => {

                    let response = new FormData();
                    response.append("answer",json_string );
                    response.append("user_name", email);

                    $.ajax({
                        url: host_url + 'storeAnswers',
                        data: response,
                        type: "POST",
                        cache: false,
                        processData: false,
                        contentType: false,
                        dataType: false,
                        beforeSend: function (response) {
                            showLoader();
                        },
                        complete: function (response) {
                            hideLoader();
                        },
                        error: function (e) {
                            showAlert("Failed to Data Add.");
                            hideLoader();
                        },
                        success: function (response) {
                            hideLoader();
                            if (response.Status == "Success") {
                                $("#fname").val();
                                $("#email").val();
                                $("#gender").val();
                                $("#lname").val();
                                $("#dob").val();
                                $("#grade").val();
                            }
                            else {
                                Swal.fire(`${response.Message}`);
                            }
                        },
                    });
                })
            }
            else {
                Swal.fire(`${data.Message}`);
            }
        },
    });



});




