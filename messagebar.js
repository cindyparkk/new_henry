var message_state = [
    {
        text: "Good!",
        bgcolor: "Green",
        textcolor: "White"
    },
    {
        
        text: "Pending...",
        bgcolor: "Yellow",
        textcolor: "Black"
    },
    {
        text: "Bad",
        bgcolor: "Red",
        textcolor: "White"
    }
]

// what I tried:
var n;

function changeMessage(n){
    document.querySelector("#message").innerText = message_state[n].text;
    document.querySelector("#message").style.backgroundColor = message_state[n].bgcolor;
    document.querySelector("#message").style.color = message_state[n].textcolor;
}

// and call changeMessage(0) when answer is right, (1) when wrong, and (2) onclick on input

// Henry's answer key:

var cur_state = 0;

function changeState(){
    cur_state = 1;

    document.querySelector("#message").style.backgroundColor = message_state[cur_state].bgcolor;
    document.querySelector("#message").innerText = message_state[cur_state].text;
}

// you can also:

var status_state = {
    msg: "",
    bgcolor: ""
}

function changeState(msg, color){
    status_state.text = msg;
    status_state.bgcolor = color;

    document.querySelector("#message").style.backgroundColor = status_state.bgcolor
    document.querySelector("#message").innerText = status_state.text;
}