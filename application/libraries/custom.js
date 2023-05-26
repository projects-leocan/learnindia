// Local
const base_url = "https://leocan.co/subFolder/learnIndiaWeb/web/";
// const base_url = "http://localhost/learnindia/";

// host URl 
// Live 
const host_url = "https://leocan.co/subFolder/learnIndiaWeb/API/v1/";
// const host_url = "http://localhost/learnindia_API/v1/";

// Image URL 
const image_url = "https://leocan.co/subFolder/learnIndiaWeb/API/uploads/";
// const image_url = "http://localhost/learnindia_API/uploads/";

$(document).ready(() => {

    if (window.location.href == base_url) {
        fetchCombinedContent();
    }

    if (window.location.href == base_url + 'home') {
        fetchCombinedContent();
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
        // setContactUSContent();
    }

    setContactUSContent();

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
$("#GoHOME").on("click", function (event) {
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
$(".GOContact").on("click", function (event) {
    window.location = 'contactUs';
});

// footer Redirection
$(".goHome").on("click", function (event) {
    window.location = 'home';
});
$(".goAbout").on("click", function (event) {
    window.location = 'aboutUs';
});
$(".goBlog").on("click", function (event) {
    window.location = 'blog';
});
$(".goSurvey").on("click", function (event) {
    window.location = 'survey';
});
$(".goTC").on("click", function (event) {
    window.location = 'Term';
});
$(".goCS").on("click", function (event) {
    window.location = 'contactUs';
});


// fetchCombinedContent

function fetchCombinedContent() {
    $.ajax({
        url: host_url + 'fetchCombinedContent',
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
            if (data.success) {
                $("#keyToSuccessContent").html(data.Response.home[0].content);
                $("#careerHelpContent").html(data.Response.career_guidance[0].content);
                $("#appendImages").append(`<img id="careerHelpImg1" loading="eager" class="setLoader" src="${image_url}${data.Response.career_guidance[0].image}">`)
                $("#appendImages").append(`<img id="careerHelpImg2" loading="eager" class="setLoader" src="${image_url}${data.Response.career_guidance[0].image2}">`)
                $("#careerJourneyContent").html(data.Response.career_journey[0].content);

                $("#counsellingHeading").html(data.Response.counseling[0].heading);
                $("#counsellingContent").html(data.Response.counseling[0].content);


                data.Response.success_stories.map((currentStory) => {
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
        method: 'GET',
        beforeSend: function (data) {
            showLoader();
        },
        error: function (data) {
            alert("Something went wrong");
            hideLoader();
        },
        success: function (data) {
            if (data.success) {
                let teamMembers = data.Response;

                // Create a fragment to hold the appended HTML
                let fragment = document.createDocumentFragment();

                // Counter to keep track of loaded images
                let loadedImages = 0;

                // Iterate over the team members and append the HTML
                teamMembers.forEach(function (currentTeacher) {
                    let div = document.createElement('div');
                    div.classList.add('img-1');
                    div.innerHTML = `
                        <img class="setLoader" src="${image_url}${currentTeacher.image}" alt="${currentTeacher.teacher_name} image">
                        <span>${currentTeacher.teacher_name}</span>
                    `;

                    // Add a load event listener to each image
                    div.querySelector('.setLoader').addEventListener('load', function () {
                        loadedImages++;

                        // Check if all images have loaded
                        if (loadedImages === teamMembers.length) {
                            hideLoader();
                        }
                    });

                    fragment.appendChild(div);
                });

                // Append the fragment to the DOM
                $("#appendTeamMembers").append(fragment);
            }
        },
        complete: function (data) {
            hideLoader();
        }
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

                // footer
                $("#cntNo").append(data.Response.contact_num);
                $("#contactEmail").append(data.Response.email);
                $("#contactAddress").append(data.Response.address);

            }
        },
    });
}


$("#submitContactForm").on("click", () => {
    let username = $("#fname").val();
    let email = $("#email").val();
    let message = $("#message").val();

    // Validate the input fields
    if (!username || !email || !message) {
        Swal.fire({
            title: 'Error',
            text: 'Please fill in all fields.',
            icon: 'error',
            confirmButtonText: 'OK',
            confirmButtonColor: '#046A38'
        });
        return;
    }

    // Validate the email format
    if (!isValidEmail(email)) {
        Swal.fire({
            title: 'Error',
            text: 'Please enter a valid email address.',
            icon: 'error',
            confirmButtonText: 'OK',
            confirmButtonColor: '#046A38'
        });
        return;
    }

    // Create a FormData object and append the form data
    let data = new FormData();
    data.append("user_name", username);
    data.append("email", email);
    data.append("meassge", message);

    // Send the form data using AJAX
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
            Swal.fire({
                title: 'Error',
                text: 'Failed to submit the form. Please try again later.',
                icon: 'error',
                confirmButtonText: 'OK',
                confirmButtonColor: '#046A38'
            });
            hideLoader();
        },
        success: function (data) {
            hideLoader();
            if (data.Status == "Success") {
                Swal.fire({
                    title: 'Success',
                    text: 'Thank you for contacting us! We will get back to you shortly.',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#046A38'
                }).then((result) => {
                    // Clear the form fields
                    $("#fname").val("");
                    $("#email").val("");
                    $("#message").val("");
                })
            } else {
                Swal.fire({
                    title: 'Error',
                    text: 'Failed to submit the form. Please try again later.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#046A38'
                });
            }
        },
    });
});

// Function to validate email format
function isValidEmail(email) {
    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

let currentPage = 1; // Initialize current page number
function setQuestionnaire(pageNumber, pageSize) {


    let data = new FormData();
    data.append('page_num', pageNumber);
    data.append('page_size', pageSize)


    $.ajax({
        url: host_url + 'fetchQuestionnaire',
        type: "POST",
        data: data,
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
        error: function (data) {
            alert("Something went wrong");
            hideLoader();
        },
        success: function (data) {
            hideLoader();
            if (data.success) {
                localStorage.setItem("totalQuestions", data.totalQuestions);

                $("#setQuestion").empty();   // Clear the previous content
                $("#setQuestion").html(data.Response.content);

                data.Response.forEach((response, index) => {

                    let options = response.options.split(", "); // Split the options by comma separator

                    let optionsHtml = options.map((option) => {
                        return `
                            <input type="radio" class="selectOption" name="fav_language_${response.id}"  option_id="${response.id}" value="${option}">
                            <label for="${option}">${option}</label><br>`;
                    }).join("");

                    $("#setQuestion").append(`
                          <div class="survey-qna" question_id="${response.id}">
                            ${response.question}
                            ${optionsHtml}
                          </div>
                        `);
                });
            }
        },
    });

    // Update the current page number
    currentPage = pageNumber;
}

function generatePaginationLinks(totalPages, currentPage) {
    let paginationContainer = $(".pagination");
    paginationContainer.empty();

    let previousButton = $('<button id="previousPage" disabled>&laquo;</button>');
    let nextButton = $('<button id="nextPage" disabled>&raquo;</button>');

    // Add previous page button
    if (currentPage > 1) {
        paginationContainer.append(previousButton.clone().removeAttr("disabled"));
    } else {
        paginationContainer.append(previousButton);
    }

    // Add page buttons
    for (let i = 1; i <= totalPages; i++) {
        let activeClass = (i === currentPage) ? "active" : "";
        let pageButton = $(`<button class="${activeClass}" data-page="${i}">${i}</button>`);
        paginationContainer.append(pageButton);
    }

    // Add next page button
    if (currentPage < totalPages) {
        paginationContainer.append(nextButton.clone().removeAttr("disabled"));
    } else {
        paginationContainer.append(nextButton);
    }
    // Show/hide submit button based on current page
    if (currentPage === totalPages) {
        $("#submitCareerSurvey").show();
    } else {
        $("#submitCareerSurvey").hide();
    }

    // Attach click event to page buttons
    paginationContainer.find("button").on("click", function () {
        let page = $(this).data("page");

        if ($(this).attr("id") === "previousPage") {
            currentPage = Math.max(currentPage - 1, 1);
        } else if ($(this).attr("id") === "nextPage") {
            currentPage = Math.min(currentPage + 1, totalPages);
        } else {
            currentPage = page;
        }

        setQuestionnaire(currentPage, 5); // Fetch questions for the clicked page
        generatePaginationLinks(totalPages, currentPage); // Update the pagination buttons
    });
}

// Calculate the total number of pages based on the number of questions and the page size
let totalQuestions = localStorage.getItem("totalQuestions");
let pageSize = 5;
let totalPages = Math.ceil(totalQuestions / pageSize);

generatePaginationLinks(totalPages, currentPage);
if (window.location.href == base_url + 'survey') {
    setQuestionnaire(currentPage, pageSize); // Fetch questions for the initial page
}


let json_response = {};


$(document).on("click", ".selectOption", function (e) {
    let email = $("#email").val();
    let questionId = $(this).closest(".survey-qna").attr("question_id");
    let optionId = $(this).attr("option_id");
    let selectedAnswer = $(this).val();

    // Check if the question exists in the JSON object
    if (!json_response.hasOwnProperty(questionId)) {
        json_response[questionId] = {
            "question_id": questionId,
            "answers": []
        };
    }

    // Remove any previous answer for the same question and option
    json_response[questionId].answers = json_response[questionId].answers.filter(answer => answer.option_id !== optionId);

    // Add the selected answer to the question's answers array
    json_response[questionId].answers.push({
        "option_id": optionId,
        "answer": selectedAnswer,
        "user_name": email
    });

    let json_string = JSON.stringify(json_response);
    localStorage.setItem("json_string", json_string);
});


$("#submitCareerSurvey").on("click", () => {

    // Perform client-side validation
    let errors = [];

    let fname = $("#fname").val();
    if (fname.trim() === "") {
        errors.push("First name is required.");
    }

    let email = $("#email").val();
    if (email.trim() === "") {
        errors.push("Email is required.");
    } else if (!isValidEmail(email)) {
        errors.push("Invalid email address.");
    }

    let gender = $("#gender").val();
    if (gender.trim() === "") {
        errors.push("Gender is required.");
    }

    let lname = $("#lname").val();
    if (lname.trim() === "") {
        errors.push("Last name is required.");
    }

    let dob = $("#dob").val();
    if (dob.trim() === "") {
        errors.push("Date of birth is required.");
    } else if (!isValidDate(dob)) {
        errors.push("Invalid date of birth. Please use the format: YYYY-MM-DD.");
    }

    let grade = $("#grade").val();
    if (grade.trim() === "") {
        errors.push("Grade is required.");
    }

    // Check if any validation errors occurred
    if (errors.length > 0) {
        let errorMessage = "Please correct the following issues:\n" + errors.join("\n");
        Swal.fire({
            title: `${errorMessage}`,
            confirmButtonText: 'Ok',
            confirmButtonColor: '#046A38'
        })
        return;
    }

    // Proceed with form submission if validation passes

    let data = new FormData();
    data.append("first_name", fname);
    data.append("last_name", lname);
    data.append("email", email);
    data.append("date_of_birth", dob);
    data.append("gender", gender);
    data.append("grade", grade);

    // Send the AJAX request for form submission
    $.ajax({
        url: host_url + 'fillServeyForm',
        data: data,
        type: "POST",
        cache: false,
        processData: false,
        contentType: false,
        dataType: false,
        beforeSend: function () {
            showLoader();
        },
        complete: function () {
            hideLoader();
        },
        error: function () {
            Swal.fire("Failed to submit the form.");
            hideLoader();
        },
        success: function (data) {
            hideLoader();
            if (data.Status == "Success") {
                Swal.fire({
                    title: 'Success',
                    text: "Thank you for submitting the career survey form!",
                    icon: 'success',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#046A38'
                }).then((result) => {

                    let response = new FormData();
                    let json_string = localStorage.getItem("json_string");
                    response.append("answer", json_string);

                    $.ajax({
                        url: host_url + 'storeAnswers',
                        data: response,
                        type: "POST",
                        cache: false,
                        processData: false,
                        contentType: false,
                        dataType: false,
                        beforeSend: function () {
                            showLoader();
                        },
                        complete: function () {
                            hideLoader();
                        },
                        error: function () {
                            showAlert("Failed to add data.");
                            hideLoader();
                        },
                        success: function (response) {
                            hideLoader();
                            if (response.Status == "Success") {
                                // Clear the form fields upon successful submission
                                $("#fname").val("");
                                $("#email").val("");
                                $("#gender").val("");
                                $("#lname").val("");
                                $("#dob").val("");
                                $("#grade").val("");
                                localStorage.removeItem("json_string");

                                // Uncheck all radio buttons in the survey question options
                                $(".survey-qna input[type='radio']").prop("checked", false);

                            } else {
                                Swal.fire(response.Message);
                            }
                        },
                    });
                })
            } else {
                Swal.fire(data.Message);
            }
        },
    });
});

// Function to validate email using a regular expression
function isValidEmail(email) {
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Function to validate date format
function isValidDate(date) {
    let datePattern = /^\d{4}-\d{2}-\d{2}$/;
    return datePattern.test(date);
}









