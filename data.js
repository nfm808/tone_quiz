'use strict';

const tone = [
    {
        answerTone: "assets/audio/a_sharp.mp3",
        toneOptions: ["assets/audio/a_sharp.mp3", "assets/audio/b.mp3", "assets/audio/c_sharp.mp3", "assets/audio/f.mp3"],
        imgOptions: ["assets/img/sn/a_sharp.jpg", "assets/img/sn/b.jpg", "assets/img/sn/c_sharp.jpg", "assets/img/sn/f.jpg"],
        answerImg: "assets/img/sn/a_sharp.jpg",
        correct: "answerToneA",
        asked: false
    },
    {
        answerTone: "assets/audio/a.mp3 ",
        toneOptions: ["assets/audio/c.mp3", "assets/audio/a.mp3", "assets/audio/f.mp3", "assets/audio/g.mp3"],
        imgOptions: ["assets/img/sn/c.jpg", "assets/img/sn/a.jpg", "assets/img/sn/f.jpg", "assets/img/sn/g.jpg"],
        answerImg: "assets/img/sn/a.jpg",
        correct: "answerToneB",
        asked: false
    },
    {
        answerTone: "assets/audio/b.mp3",
        toneOptions: ["assets/audio/g_sharp.mp3", "assets/audio/e.mp3", "assets/audio/b.mp3", "assets/audio/d_sharp.mp3"],
        imgOptions: ["assets/img/sn/g_sharp.jpg", "assets/img/sn/e.jpg", "assets/img/sn/b.jpg", "assets/img/sn/d_sharp.jpg"],
        answerImg: "assets/img/sn/b.jpg",
        correct: "answerToneC",
        asked: false
    },
    {
        answerTone: "assets/audio/c_sharp.mp3",
        toneOptions: ["assets/audio/a.mp3", "assets/audio/c_sharp.mp3", "assets/audio/g_sharp.mp3", "assets/audio/g.mp3"],
        imgOptions: ["assets/img/sn/a.jpg", "assets/img/sn/c_sharp.jpg", "assets/img/sn/g_sharp.jpg", "assets/img/sn/g.jpg"],
        answerImg: "assets/img/sn/c_sharp.jpg",
        correct: "answerToneB",
        asked: false
    },
    {
        answerTone: "assets/audio/c.mp3",
        toneOptions: ["assets/audio/g_sharp.mp3", "assets/audio/b.mp3", "assets/audio/f.mp3", "assets/audio/c.mp3"],
        imgOptions: ["assets/img/sn/g_sharp.jpg", "assets/img/sn/b.jpg", "assets/img/sn/f.jpg", "assets/img/sn/c.jpg"],
        answerImg: "assets/img/sn/c.jpg",
        correct: "answerToneD",
        asked: false
    },
    {
        answerTone: "assets/audio/d_sharp.mp3",
        toneOptions: ["assets/audio/e.mp3", "assets/audio/d_sharp.mp3", "assets/audio/f_sharp.mp3", "assets/audio/a.mp3"],
        imgOptions: ["assets/img/sn/e.jpg", "assets/img/sn/d_sharp.jpg", "assets/img/sn/f_sharp.jpg", "assets/img/sn/a.jpg"],
        answerImg: "assets/img/sn/d_sharp.jpg",
        correct: "answerToneB",
        asked: false
    },
    {
        answerTone: "assets/audio/d.mp3",
        toneOptions: ["assets/audio/d.mp3", "assets/audio/a_sharp.mp3", "assets/audio/c.mp3", "assets/audio/b.mp3"],
        imgOptions: ["assets/img/sn/d.jpg", "assets/img/sn/a_sharp.jpg", "assets/img/sn/c.jpg", "assets/img/sn/b.jpg"],
        answerImg: "assets/img/sn/d.jpg",
        correct: "answerToneA",
        asked: false
    },
    {
        answerTone: "assets/audio/e.mp3",
        toneOptions: ["assets/audio/c_sharp.mp3", "assets/audio/g.mp3", "assets/audio/e.mp3", "assets/audio/f_sharp.mp3"],
        imgOptions: ["assets/img/sn/c_sharp.jpg", "assets/img/sn/g.jpg", "assets/img/sn/e.jpg", "assets/img/sn/f_sharp.jpg"],
        answerImg: "assets/img/sn/e.jpg",
        correct: "answerToneC",
        asked: false
    },
    {
        answerTone: "assets/audio/f_sharp.mp3",
        toneOptions: ["assets/audio/a_sharp.mp3", "assets/audio/b.mp3", "assets/audio/c.mp3", "assets/audio/f_sharp.mp3"],
        imgOptions: ["assets/img/sn/a_sharp.jpg", "assets/img/sn/b.jpg", "assets/img/sn/c.jpg", "assets/img/sn/f_sharp.jpg"],
        answerImg: "assets/img/sn/f_sharp.jpg",
        correct: "answerToneD",
        asked: false
    },
    {
        answerTone: "assets/audio/f.mp3",
        toneOptions: ["assets/audio/c_sharp.mp3", "assets/audio/f.mp3", "assets/audio/a_sharp.mp3", "assets/audio/g.mp3"],
        imgOptions: ["assets/img/sn/c_sharp.jpg", "assets/img/sn/f.jpg", "assets/img/sn/a_sharp.jpg", "assets/img/sn/g.jpg"],
        answerImg: "assets/img/sn/f.jpg",
        correct: "answerToneB",
        asked: false
    },
    {
        answerTone: "assets/audio/g_sharp.mp3",
        toneOptions: ["assets/audio/g_sharp.mp3", "assets/audio/b.mp3", "assets/audio/d.mp3", "assets/audio/f_sharp.mp3"],
        imgOptions: ["assets/img/sn/g_sharp.jpg", "assets/img/sn/b.jpg", "assets/img/sn/d.jpg", "assets/img/sn/f_sharp.jpg"],
        answerImg: "assets/img/sn/g_sharp.jpg",
        correct: "answerToneA",
        asked: false
    },
    {
        answerTone: "assets/audio/g.mp3",
        toneOptions: ["assets/audio/d_sharp.mp3", "assets/audio/e.mp3", "assets/audio/g.mp3", "assets/audio/a.mp3"],
        imgOptions: ["assets/img/sn/d_sharp.jpg", "assets/img/sn/e.jpg", "assets/img/sn/g.jpg", "assets/img/sn/a.jpg"],
        answerImg: "assets/img/sn/g.jpg",
        correct: "answerToneC",
        asked: false
    },
];