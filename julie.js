var data = {
    quest:0,
    questions:[
        {
            title:"What comes after A?",
            answer: "B",
            bgcolor:"yellow",
            img:"http://placekitten.com/100/100"
        },
        {
            title:"Is 5 bigger than 4?",
            answer: "Yes",
            bgcolor:"#ABC",
            img:"http://placekitten.com/200/200"
        },
        {
            title:"What is the color of a banana?",
            answer: "Yellow", 
            bgcolor:"rgb(2,150,232)",
            img:"http://placekitten.com/300/300"
        },
        {
            title:"What is jinny's score?",
            answer: "100", 
            bgcolor:"rgb(100,150,232)",
            img:"http://placekitten.com/400/400"
        }
    ]
}


// var answer = "B";
var quest = 0;

var questions = [
    "What comes after A?",
    "Is 5 bigger than 4?",
    "What is the color of a banana?"
];

var answers = [
    "B", 
    "Yes",
    "Yellow" 
];

var bgcolor = [
    "yellow",
    "#ABC",
    "rgb(2,150,232)"
];

var imgs = [
    "http://placekitten.com/100/100",
    "http://placekitten.com/200/200",
    "http://placekitten.com/300/300"
];

function Start(){
    document.querySelector("#j_q").innerText = data.questions[data.quest].title;
    document.body.style.backgroundColor = data.questions[data.quest].bgcolor;
    document.querySelector("#j_result").innerHTML = "<img src ='"+data.questions[data.quest].img+"' />";
}




function CheckAnswer(){

    var myInp = document.querySelector("#answer").value;
    console.log(myInp);

    if(myInp === data.questions[data.quest].answer){
        // alert("Correct!");
        document.querySelector("#j_result").innerHTML = "<h1>Correct!</h1>";
        
        data.quest++;
        document.querySelector("#j_q").innerText = data.questions[data.quest].title;
        document.body.style.backgroundColor = data.questions[data.quest].bgcolor;
        document.querySelector("#j_result").innerHTML = "<img src ='"+data.questions[data.quest].img+"' />";
        
        // //changing the question to the next question
        // if(quest === 1){
        //     quest++;
        //     document.querySelector("#j_q").innerText = "Is 5 bigger than 4?";
        //     answer = "Yes";
        // } else if(quest === 2){
        //     quest++;
        //     document.querySelector("#j_q").innerText = "What is color of a banana?";
        //     answer = "Yellow";
        // }

    } else {
        // alert("WRONG!");
        document.querySelector("#j_result").innerText = "<h1>Wrong!</h1>";
        changeHelp();

    }

}

Start();