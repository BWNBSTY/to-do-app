let btn = document.querySelector('#add');
let inp = document.querySelector('input');
let ul = document.querySelector('ul');
let btnDel = document.querySelector('#delete');
// let delMe = document.querySelectorAll('.del-me');

function toDo() {
    if(inp.value.length >= 1) {
        let inpText = inp.value;
        let newLi = document.createElement('li');
        newLi.innerText = inpText;
        // add button del
        let del = document.createElement('button');
        del.innerText = "delete";
        del.classList.add('del-me'); 
        newLi.appendChild(del);
        //
        newLi.setAttribute('class','lists');
        ul.appendChild(newLi);
        inp.value = "";
    }
}

btn.addEventListener('click', toDo);

// delete task button
function toDel() {
    let lis = document.querySelectorAll('.lists');
    for(let i=0; i<lis.length; i++){
        lis[lis.length-1].remove();
    }
}

window.addEventListener('keypress', function (e) {
    if(e.code === "Enter") {
        toDo();
    }
})

btnDel.addEventListener('click', toDel);

// delete button
ul.addEventListener('click', function (event) {
    if(event.target.nodeName == "BUTTON") {
        let li = event.target.parentElement;
        li.remove();
    }
})