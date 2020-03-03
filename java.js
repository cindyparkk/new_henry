// var answer = "B";
// useless

// using data architecture (object)
var data= {
    qnum: 0,
    questions:[
        {
            title:"What comes after A?",
            answer: "B",
            bgcolor: "#ADD",
            imgs: "http://placekitten.com/100/100"
        },
        {
            title:"Is 5 bigger than 4?",
            answer: "Yes",
            bgcolor: "#BED",
            imgs: "http://placekitten.com/200/200"
        },
        {
            title:"1+1 is?",
            answer: "2",
            bgcolor: "rgb(2, 150, 232)",
            imgs: "http://placekitten.com/300/300"
        },
        {
            title:"What is the color of a banana?",
            answer: "Yellow",
            bgcolor: "#DAD",
            imgs: "http://placekitten.com/400/400"
        }
    ]
}

// var qnum = 0;
// because questions[0] should be the first question to be displayed on page
// code broken down:

// var questions = [
//     "What Comes After A?",
//     "Is 5 bigger than 4?",
//     "1+1 is?"
// ];

// var answers = [
//     "B",
//     "Yes",
//     "2"
// ];

// var bgcolor = [
//     "yellow",
//     "#BED",
//     "rgb(2, 150, 232)"
// ]

// var imgs = [
//     "http://placekitten.com/100/100",
//     "http://placekitten.com/200/200",
//     "http://placekitten.com/300/300",
// ]

// function checkAnswer(){
//     // checks if that user typed is equivalent to a string of your answer
//     var myInput = document.querySelector("#answer").value;
//     console.log(myInput);

//     if(myInput === answers[qnum]){
//         // alert("Correct!");
//         document.querySelector("#h_r").innerHTML = "<h1>Correct!</h1>";

//         // // changing the question to the next question
//         // if (qnum === 1){
//         //     qnum++;
//         //     // adds 1 to the question to hop to the next question if answered correctly
//         //     // instead of question = 2 @ the end because we aren't toggling from 1-3 & back to 1
//         //     document.querySelector("#main_q").innerText = "Is 5 bigger than 4?";
//         //     answer = "Yes";
//         // } else if (qnum === 2){
//         //     qnum++;
//         //     document.querySelector("#main_q").innerText = "1+1 is?";
//         //     answer = "2";
//         // } 
        
//         // INSTEAD:

//         qnum++;
//         document.querySelector("#main_q").innerText = questions[qnum];
//     } else{
//         // alert("Wrong!");
//         document.querySelector("#h_r").innerText = "<h1>Wrong!</h1>";
//     }
// }

// shows  architecture of our dataset & the browser
console.log(data, window);

function Start(){
    document.querySelector("#main_q").innerText = data.questions[data.qnum].title;
    // we use [data.qnum] instead of data.questions[0] so that we dont have to change it every time
    // OR assign var qnum = 0 as global & just recall [qnum++]
    // but this method is the most flexible
    document.body.style.backgroundColor = data.questions[data.qnum].bgcolor;
    document.querySelector("#h_r").innerHTML = "<img src='"+data.questions[data.qnum].imgs+"' />"
}

function checkAnswer(){
    var myInput = document.querySelector("#answer").value;
    console.log(myInput);

    if(myInput === data.questions[data.qnum].answer){
        document.querySelector("#h_r").innerHTML = "<h1>Correct!</h1>";
        // change the number within the package:
        data.qnum++;
        document.querySelector("#main_q").innerText = data.questions[data.qnum].title;
        document.body.style.backgroundColor = data.questions[data.qnum].bgcolor;
        document.querySelector("#h_r").innerHTML = "<img src='"+data.questions[data.qnum].imgs+"' />"
    } else{
        document.querySelector("#h_r").innerText = "Wrong!";
        healthBar();
    }
}

Start();
// allows for this function to operate in the beginning