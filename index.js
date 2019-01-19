'use strict';

let score = 0;
let questionNum = 0;

function renderQuiz() {
    // render the quiz
    console.log('`renderQuiz` ran');

    // setting dynamic HTML to populate the DOM
    const quizStartString = `
    <button class="js_speaker_button" type="button" aria-label="play tone"></button>
    <div class="welcome_box">
        <ul>
            <li>PRESS THE SPEAKER BUTTON TO PLAY A TONE</li>
            <li>CHOOSE THE MATCHING TONE FROM THE ANSWERS</li>
            <li>PRESS SUBMIT ONCE YOU HAVE MATCHED THE TONE</li>
        </ul>
    </div>
    <button type="button" class="js_begin_button submit" aria-label="start">LET'S START!</button>`

    const quizQuestionString = `
    <button class="js_speaker_button" type="button" aria-label="play tone"></button>
    <form class="js_quiz">
        <input type="radio" id="answerTone1" name="answer" value="answerTone1" required />
        <label class="js_quiz answerTone first" for="answerTone1"></label>
        <input type="radio" id="answerTone2" name="answer" value="answerTone2" required />
        <label class="js_quiz answerTone second" for="answerTone2"></label>
        <input type="radio" id="answerTone3" name="answer" value="answerTone3" required />
        <label class="js_quiz answerTone third" for="answerTone3"></label>
        <input type="radio" id="answerTone4" name="answer" value="answerTone4" required />
        <label class="js_quiz answerTone fourth" for="answerTone4"></label></br>
        <button class="js_question_button submit" type="submit">SUBMIT</button>
    </form>`

    const quizResult = `
    <button class="js_speaker_button" type="button" aria-label="play tone"></button>
    <div class="welcome_box">
        <h1>WAY TO GO! || KEEP LISTENING!</h1>
        <img src="assets/img/staff_notes/a.jpg" alt="note on staff"></img>
    </div>
    <button class="js_next_button submit" type="button" aria-label="start">NEXT TONE!</button>`

    const quizEnd = `
    <div class="welcome_box">
        <ul>
            <li>CONGRATULATIONS!</li>
            <li>A SPECIAL THANKS TO:</li>
            <li><a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@tayaiv?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Taya Iv"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Taya Iv</span></a></li>
            <li><a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@jefflssantos?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Jefferson Santos"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Jefferson Santos</span></a></li>
        </ul>
        <button class="js_restart_button submit" type="button" aria-label="start">PLAY AGAIN!</button>
    </div>`

    // render the current score to top bar
    function renderTopBar() {
        
        const topHTML = `
        <li class="logo">
            <a href="index.html">LOGO</a>
        </li>
        <li class="js_quiz_score">SCORE: <span class="js_quiz_score_number">${score}</span></li>
        <li class="js_quiz_question_number">QUESTION <span class="js_question_number">${questionNum}</span>/10</li>`

        $('.js_li').html(topHTML);
    };

    // choosing which HTML to populate based on the score
    function determineHTML() {

        // saved for future implementation on website
        // if (score === 0) {
        //    $('.js_quiz_container').html(quizStartString);
        // }; 
        // if (score === 10) {
        //     $('.js_quiz_container').html(quizEnd);
        // };

        if (questionNum === 0) {
            $('.js_quiz_container').html(quizStartString);
         }; 
         if (questionNum === 10) {
             $('.js_quiz_container').html(quizEnd);
         };
 
    };

    renderTopBar();
    determineHTML();
};

// add to the score
function scorePlusOne() {
    console.log('`scorePlusOne` ran');
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

// update the current question
function updateQuestionNum() {
    console.log('`updateQuestionNum` ran');
};

// resets the quiz to beginning
function resetQuiz() {
    console.log('`resetQuiz` ran');
};

// play tone with speaker icon button
function playQuestionTone() {
    console.log('`playTone` ran');
};

// play tone associated with answer selection 
// as user selects the answer choice
function playAnswerTone() {
    console.log('`playAnswerTone` ran');
};

// when the submit button is hit
function handleSubmit() {
    console.log('`handleSubmit` ran')
};

// this function will be our callback when the page loads. it's responsible for
// initially rendering the shopping list, and activating our individual functions
// that handle new item submission and user clicks on the "check" and "delete" buttons
// for individual shopping list items.
function handleQuiz() {
    renderQuiz();
    scorePlusOne();
    scoreColor();
    updateQuestionNum();
    resetQuiz();
    playQuestionTone();
    playAnswerTone();
    handleSubmit();
}

$(handleQuiz());

