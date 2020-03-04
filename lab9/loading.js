var cur_state = 0;

var bar_state = [
    {
        text: "GOOD",
        bgcolor:"green"
    },
    {
        text:"PENDING...",
        bgcolor:"yellow"
    }
]


function changeBar() {
    //based on the number given. Change the status's state to good/pedning/bad
    //upadate the UI

    //modify the state
    cur_state = 1;
    
    //modify the UI
    document.querySelector("#loading_bar").style.backgroundColor = bar_state[cur_state].bgcolor;
    document.querySelector("#inside").innerText = bar_state[cur_state].text;
}