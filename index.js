'use strict';

let score = 0;
let questionNum = 0;
// random number array to mix up questions
// controls which question is generated
let index = 0;
// toggles between question and results page
let answerToggle = 0;
// determines if correct or wrong
let rightOrWrong = true;


// render the quiz
function renderQuiz() {

    // setting dynamic HTML to populate the DOM
    const quizStartString = `
    <button class="js_speaker_button speaker" type="button" aria-label="play tone"></button>
    <audio id="js_play" src="assets/audio/quiz_app_start_fast.mp3" >YOUR BROWSER DOES NOT SUPPORT THE AUDIO ELEMENT</audio>
    <div class="welcome_box">
        <ul>
            <li>PRESS THE SPEAKER BUTTON TO PLAY A TONE</li>
            <li>CHOOSE THE MATCHING TONE FROM THE ANSWERS</li>
            <li>PRESS SUBMIT ONCE YOU HAVE MATCHED THE TONE</li>
        </ul>
    </div>
    <button type="button" class="js_begin_button submit" aria-label="start">LET'S START!</button>`

    let quizQuestionString = generateQuestionString();

    const quizResult = generateResultsString();

    const quizEnd = `
    <button class="js_speaker_button speaker" type="button" aria-label="play tone"></button>
    <audio id="js_play" src="assets/audio/quiz_app_start_fast.mp3" >YOUR BROWSER DOES NOT SUPPORT THE AUDIO ELEMENT</audio>
    <div class="welcome_box">
        <ul>
            <li>CONGRATULATIONS! YOU GOT: <span>${score}</span>/10</li>
            <li>A SPECIAL THANKS TO:</li>
            <li><a class="thanks" style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@tayaiv?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Taya Iv"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Taya Iv</span></a></li>
            <li><a class="thanks" style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@jefflssantos?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Jefferson Santos"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Jefferson Santos</span></a></li>
        </ul>
        <button class="js_restart_button submit" type="button" aria-label="start">PLAY AGAIN!</button>
    </div>`

    // render the current score to top bar
    function renderTopBar() {
        
        const topHTML = `
        <li class="logo"><a href="index.html">HOME</a></li>
        <li class="js_quiz_score">SCORE: <span class="js_quiz_score_number">${score}</span></li>
        <li class="js_quiz_question_number">QUESTION <span class="js_question_number">${questionNum}</span>/10</li>`

        const topMinusOne = `
        <li class="logo"><a href="index.html">HOME</a></li>
        <li class="js_quiz_score">SCORE: <span class="js_quiz_score_number">${score}</span></li>
        <li class="js_quiz_question_number">QUESTION <span class="js_question_number">${questionNum -1}</span>/10</li>`

        questionNum === 11 ? $('.js_li').html(topMinusOne) : $('.js_li').html(topHTML);
    };

    // choosing which HTML to populate based on the score
    function determineHTML() {

        if (questionNum === 0) {
            $('.js_quiz_container').html(quizStartString);
            handleSpeakerClick();
         }; 
        if (questionNum === 11) {
             $('.js_quiz_container').html(quizEnd);
             handleSpeakerClick();
         };
        if (questionNum > 0 && questionNum <= 10) {
            if (answerToggle === 0) {
                $('.js_quiz_container').html(quizQuestionString);
                handleSpeakerClick();
                playAnswerTone();
                handleAnswerImg();
                
            };
            if (answerToggle === 1) {
                $('.js_quiz_container').html(quizResult);
                handleSpeakerClick();
            };
        };
    };

    renderTopBar();
    scoreColor();
    determineHTML();
};

// handles the generation of question string
function generateQuestionString() {

    // mapping the location of the current question to the 
    // to the control index
    let toneToPlayOnSpeaker = tone[index]["answerTone"];
    let toneAnswerA = tone[index]["toneOptions"][0];
    let toneAnswerB = tone[index]["toneOptions"][1]
    let toneAnswerC = tone[index]["toneOptions"][2]
    let toneAnswerD = tone[index]["toneOptions"][3]

    // return the HTML for DOM insertion
    return `
    <button class="js_speaker_button speaker" type="button" aria-label="play tone"></button>
    <audio id="js_play" src="${toneToPlayOnSpeaker}" preload="auto" >YOUR BROWSER DOES NOT SUPPORT THE AUDIO ELEMENT</audio>
    <form class="js_quiz welcome_box" action="" method="post">
        <input type="radio" class="answerToneA" id="answerToneA" name="answer" value="answerToneA" required="required" />
        <label class="js_quiz answerTone answerToneA first" for="answerToneA"></label>
        <audio id="js_play_A" src="${toneAnswerA}" preload="auto" ></audio>
        <input type="radio" class="answerToneB" id="answerToneB" name="answer" value="answerToneB"  />
        <label class="js_quiz answerTone answerToneB second" for="answerToneB"></label>
        <audio id="js_play_B" src="${toneAnswerB}" preload="auto" ></audio>
        <input type="radio" class="answerToneC" id="answerToneC" name="answer" value="answerToneC"  />
        <label class="js_quiz answerTone answerToneC third" for="answerToneC"></label>
        <audio id="js_play_C" src="${toneAnswerC}" preload="auto" ></audio>
        <input type="radio" class="answerToneD" id="answerToneD" name="answer" value="answerToneD"  />
        <label class="js_quiz answerTone answerToneD fourth" for="answerToneD"></label></br>
        <audio id="js_play_D" src="${toneAnswerD}" preload="auto" ></audio>
        <button class="js_question_button submit" type="submit">SUBMIT</button>
    </form>`

};

// handles the generation of results string
function generateResultsString() {

    let toneToPlayOnSpeaker = tone[index]["answerTone"];
    let answerImage = tone[index]["answerImg"];

    // if function to send to success or failure
    if (rightOrWrong === true) {
        return `
        <button class="js_speaker_button speaker" type="button" aria-label="play tone"></button>
        <audio id="js_play" src="${toneToPlayOnSpeaker}" preload="auto" >YOUR BROWSER DOES NOT SUPPORT THE AUDIO ELEMENT</audio>
        <div class="welcome_box">
            <h1>WAY TO GO!</h1>
            <img class="result_img" src=${answerImage} alt="note on staff"></img>
        </div>
        <button class="js_next_button submit" type="button" aria-label="start">NEXT!</button>`
    };
    if (rightOrWrong === false) {
        return `
        <button class="js_speaker_button speaker" type="button" aria-label="play tone"></button>
        <audio id="js_play" src="${toneToPlayOnSpeaker}" preload="auto" >YOUR BROWSER DOES NOT SUPPORT THE AUDIO ELEMENT</audio>
        <div class="welcome_box">
            <h1>KEEP LISTENING!</h1>
            <img class="result_img" src=${answerImage} alt="note on staff"></img>
        </div>
        <button class="js_next_button submit" type="button" aria-label="start">NEXT!</button>`
    };
};

// generate the img for answer selections
function handleAnswerImg() {

    // mapping the staff note images
    let imgAnswerA = tone[index]["imgOptions"][0];
    let imgAnswerB = tone[index]["imgOptions"][1];
    let imgAnswerC = tone[index]["imgOptions"][2];
    let imgAnswerD = tone[index]["imgOptions"][3];

    // sets the css to render the staff note images
    // to the labels
    $(".first").css('background-image', 'url(' + imgAnswerA + ')');
    $(".second").css('background-image', 'url(' + imgAnswerB + ')');
    $(".third").css('background-image', 'url(' + imgAnswerC + ')');
    $(".fourth").css('background-image', 'url(' + imgAnswerD + ')');

};

// change the score color as you approach victory!
function scoreColor() {
    if (score > 3 && score < 7) {
        $('.js_quiz_score_number').css("color", "#007fff")
    };
    if (score > 6 && score < 9) {
        $('.js_quiz_score_number').css("color", "#f0de7c")
    };
    if (score > 8) {
        $('.js_quiz_score_number').css("color", "red")
    }
};

// resets the quiz to beginning
function resetQuiz() {
    questionNum = 0;
    score = 0;
    index = 0;
    renderQuiz();
};

// play tone with speaker icon button
function handleSpeakerClick() {

    $('.js_speaker_button').click(function() {

        $('#js_play').get(0).play();
        
    });
};

// play tone associated with answer selection 
// as user selects the answer choice
function playAnswerTone() {

    $('input[id="answerToneA"]').on('focus change',function() {
        $('#js_play_A').get(0).play();
    });
    $('input[id="answerToneB"]').on('focus change',function() {
        $('#js_play_B').get(0).play();
    });
    $('input[id="answerToneC"]').on('focus change',function() {
        $('#js_play_C').get(0).play();
    });
    $('input[id="answerToneD"]').on('focus change',function() {
        $('#js_play_D').get(0).play();
    });

};


// when the submit button is hit
function handleSubmit() {

    // begin button on welcome screen
    $('.js_quiz_container').on('click', '.js_begin_button', function(event) {

        event.preventDefault();
        questionNum ++;
        answerToggle = 0;
        renderQuiz();

    });


    // question submit button
    $('.js_quiz_container').on('click', '.js_question_button', function(event) {
        
        event.preventDefault();
        

        // get values to check for correct of incorrect
        let selectedAnswer = $('input:checked').val();
        let correctAnswer = tone[index]["correct"];

        // determine whether selection is correct
        function isRight() {
            if (selectedAnswer == undefined) {
                alert('Please choose an answer!');
                    return false;
                };
            if (selectedAnswer === correctAnswer) {
                rightOrWrong = true;
                score ++;
                answerToggle = 1;
            };
            if (selectedAnswer !== correctAnswer) {
                rightOrWrong = false;
                answerToggle = 1;
            };
        };
        isRight();
        renderQuiz();
    });

    // next button submit
    $('.js_quiz_container').on('click', '.js_next_button', function(event) {

        event.preventDefault();
        answerToggle = 0;
        function next() {
            if (questionNum === 11) {
                renderQuiz();
            }; 
            if (questionNum <= 10) {
                questionNum ++;
                index ++;
                renderQuiz();
            };
        };

        next();
    });

    // restart button submit
    $('.js_quiz_container').on('click', '.js_restart_button', function(event) {

        event.preventDefault();
        resetQuiz();

    });
};

// Shuffle Questions and AnswerSets in global array */
function shuffleQueston() {
  tone.sort(_=>Math.random() - 0.5);
};

// this function will be our callback when the page loads. it's responsible for
// initially rendering the HTML, and activating our individual functions
// of randomizing the questions and the button event listeners
function handleQuiz() {
    shuffleQueston();
    renderQuiz();
    handleSubmit();
}

$(handleQuiz());

