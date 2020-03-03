var help_state = {
    width: 100
}

function changeHelp() {
    //decrease the width
    help_state.width-=10;
    //modify the UI and associate the attributes with the state's width
    document.querySelector("#inner_block").style.width = help_state.width + "%";
}