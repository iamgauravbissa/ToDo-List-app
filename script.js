

var msti;
var todolist = document.getElementsByClassName('todolist');
document.getElementById('todobtn').addEventListener('click',functionf());

function functionf(e){
    
        var txt = document.getElementById('todo').value;
        var chekbox = document.createElement('input');

        chekbox.setAttribute('type','checkbox');
        msti = document.createElement('h2');
        msti.innerHTML="txt";
        var cross = document.createElement('button');
        cross.setAttribute('class','fa fa-window-close');
        document.getElementById('todolist').appendChild(chekbox);
        document.getElementById('todolist').appendChild(msti);
        document.getElementById('todolist').appendChild(cross);

}
