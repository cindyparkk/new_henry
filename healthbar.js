var progress_state = {
    width: 100
}

// what I tried:

// function healthBar() {
//     // 1. decrease the width
//     progress_state.width = 80;
//     // 2. modify the UI and associate the attributes with the state's width
//     document.querySelector("#healthbar_progress").style.width = progress_state.width +"%";
// }

function healthBar(){
     // 1. decrease the width
    //  progress_state.width = progress_state.width - 10;

    //  simpler ver of above
     progress_state.width -= 10;
     // 2. modify the UI and associate the attributes with the state's width
     document.querySelector("#healthbar_progress").style.width = progress_state.width +"%";
}

