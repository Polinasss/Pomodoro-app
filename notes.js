const notesInput = document.getElementById('notesInput');
const notesBtn = document.getElementById('notesBtn');
const notesText = document.getElementById('text');
let h = []
function writeNotes () {
    let val = notesInput.value;
    let temp = {};
    temp.todo = val;
    temp.stateOfTask = false;

    let li = document.createElement('li');
    let input = document.createElement('input');
    let img = document.createElement('img');
    let p = document.createElement('p');
    p.textContent = val;
    input.type="checkbox";
    li.classList.add('liNotes')
    input.classList.add('checkTask');
    input.addEventListener('click', ()=>{
        p.classList.toggle('atata');
    })
    img.classList.add('trashImg');
    img.src='./img/bin.png';

    li.append(input);
    li.append(p);
    li.append(img);
    notesText.append(li);
    h.push('1');
    img.addEventListener('click', ()=> {
        h.shift();
        img.parentElement.remove();
        notesBtn.disabled = false;
        console.log(h)
    })
    notesInput.value = "";
    console.log(h)
}

notesBtn.addEventListener('click', () => {
    if (h.length >=4) {notesBtn.disabled = true;} 
    return writeNotes()
});
