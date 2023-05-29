<!-- HEADER -->
<main>
    <section>
        <div class="slider">
            <img src="img/survey (1).jpg" loading="lazy" class="d-block w-100" alt="slider">
            <div class="overlay"></div>
            <div class="caption container">
                <h1>Survey</h1>
                <p id="setServeyContent">
                <div class="fulfilling-bouncing-circle-spinner">
                    <div class="circle"></div>
                    <div class="orbit"></div>
                </div>
                </p>
            </div>
        </div>
    </section>

    <section class="survey">
        <div class="seling">
            <img src="img/survey (2).jpg" loading="lazy" class="d-block w-100" alt="slider">
            <div class="overlay-2"></div>
            <div class="details container">
                <div class="title">
                    <h1>CAREER CHOICE SURVEY</h1>
                </div>
                <div class="underline-class"></div>
                <div class="row input-box">
                    <div class="col-6">
                        <!-- <input type="text" class="fname" name="fname" placeholder="Name"><br> -->
                        <p>First Name : &nbsp;&nbsp;<input type="text" id="fname" class="fname" name="fname"></p>
                        <p>Email : &nbsp;&nbsp;<input type="email" id="email" class="fname" name="email"> </p>
                        <p>
                            Gender&nbsp;:<select name="cars" id="gender">
                                <option value="volvo">Please Select</option>
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                                <option value="Other">Other</option>
                            </select>
                        </p>
                    </div>
                    <div class="col-6">
                        <p>Last Name : &nbsp;&nbsp;<input type="text" id="lname" class="fname" name="fname"></p>
                        <p>Year of Birth :<input type="date" id="dob" class="fname year" name="birthday"></p>
                        <p>
                            Grade:<select name="cars" id="grade">
                                <option value="volvo">Please Select</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                            </select>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="question">
        <div class="qna container">
            <h4>Career Support Questionnaire</h4>
            <span>Please state your agreement with the following statements</span>
            <div id="setQuestion">
            <p id="blogContent">
                <div class="fulfilling-bouncing-circle-spinner mx-auto" style="margin-top: 4rem;">
                    <div class="circle"></div>
                    <div class="orbit"></div>
                </div>
                </p>
            </div>


            <div class="pagination">
                <button id="previousPage">&laquo;</button>
                <!-- Generate page buttons dynamically -->

                <!-- Add more page buttons as needed -->
                <button id="nextPage">&raquo;</button>
            </div>

            


            <div class="button" id="submitCareerSurvey" style="display: none;cursor:pointer;">Submit</div>
        </div>

    </section>



</main>

<!-- FOOTER -->