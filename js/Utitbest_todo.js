let masters = document.querySelector('.masters')
let Task_Name = document.querySelector('.Task_Name')
let catapila = document.querySelector('.catapila')
let know = document.querySelector('.know')
let sturbornss = document.querySelectorAll('.sturbornss')
let datem1 = document.querySelector('.datem1')
let datem2 = document.querySelector('.datem2')
let characters3 = document.querySelector('.characters3')
let characters1 = document.querySelector('.characters1')
let seems = document.querySelector('.seems')
let botton = document.querySelector('.squad')
let complains1 = document.querySelector('.complains1')
let history1 = document.querySelector('.history1')
let resson1 = document.querySelector('.resson1')

let MyBoolen = false;
let checking = false;
let indexIn;

function clock(){
    let dte = new Date()
    let mnt = dte.getMonth();
    let hrs = dte.getHours();
    let yrs = dte.getFullYear();
    let minute = dte.getMinutes();
    let tDate = dte.getDate();
    let seconds = dte.getSeconds();
    let Day = dte.getDay();
    let monthname = ['January', 'feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let daysByname = ['Sunday', 'Monday', 'Tuesday', 'Wednessday', 'Thursday', 'Friday','Saturday']
    let min = (minute >= 10)? minute : '0' + minute;
    let sec = (seconds >= 10)? seconds : '0' + seconds;
    if(hrs >= 12){
        sec = sec + 'pm'
    }else{
        sec = sec + 'am'
    }
    datem2.innerHTML = daysByname[Day]+ ' ' + tDate + ' ' + monthname[mnt]+ ', ' + yrs;
    datem1.innerHTML = hrs +':'+min +':'+sec
} setInterval(clock, 500);

    let you = document.createElement('div');
        you.className = 'know ghyy';
        you.innerHTML = `
            <div class="seems"></div>
        `;
        catapila.append(you)

function clickingToAddTask(){
    botton.addEventListener('click', function(){
        Task_Name = document.querySelector('.Task_Name');
        know = document.querySelector('.know');
        seems = document.querySelector('.seems');
        
        if(Task_Name.value == ''){
            seems.innerHTML = 'Enter task must not be empty'
            know.classList.add('howwwo')
            Task_Name.focus()
            setTimeout(() =>{
                know.classList.remove('howwwo')
            }, 3500)
            return;
        }
        if(Task_Name.value.search(/[^a-z0-9, .]/i) !== -1){
            seems.innerHTML = 'No special characters allowed'
            know.classList.add('howwwo')
            Task_Name.focus()
            setTimeout(() =>{
                know.classList.remove('howwwo')
            }, 3500)
            return;
        }
        let course = getTask()
        let repeat = course.filter(tsk => tsk.task == Task_Name.value);
        if(repeat.length != 0){
            seems.innerHTML = 'Task name "' + Task_Name.value + '" already exist'
            know.classList.add('howwwo')
            Task_Name.focus()
            setTimeout(() =>{
                know.classList.remove('howwwo')
            }, 3500)
            return
        }
        var dreams = Task_Name.value;
        HappeningFast(dreams)
        Collector(dreams, false)
        Task_Name.value = '';
    });
}
clickingToAddTask()

function getTask(){
    let task = localStorage.getItem('Utitbest_Todo');
    return task ? JSON.parse(task) : [];
}
function Collector(txt, status){
    task = getTask();
    task.push({'task': txt, 'isComplete':status})
    localStorage.setItem('Utitbest_Todo', JSON.stringify(task));
    characters3.innerHTML = task.length;
    var floating = (ReturningChecks() / task.length) * 100;
    complains1.style.width = floating + '%';
}
Lamba = () =>{
    indexIn = getTask()
    characters3.innerHTML = indexIn.length;
}
Lamba()
function HappeningFast(task, status){
    let checked;
    let style;
    let blood = document.createElement('div');
        blood.className = 'sturbornss';
        if(status){
            checked = 'checked';
            style = 'style="text-decoration:line-through; color:gray;"';
        }else{
            checked = '';
            style = '';
        }
        blood.innerHTML = `
            <div class="newgirel">
                <div class="luv1">
                    <input type="checkbox" ${checked} onchange="checkBox(event)" name="" id="hername">
                </div>
                <div class="luv2">
                    <p class="history1" ${style} title="${task}">${task}</p>
                </div>
                <div class="luv3">
                    <div  class="broht">
                    <div class="resson1" onclick="contentEdit(event)">
                        <i class="fa fa-edit hei" title="Edit task"></i>
                    </div>
                    <div class="resson2" onclick="DeletingTag(event)">
                        <i class="fa fa-trash-alt hei" title="Delete task"></i>
                    </div>
                    </div>
                </div>
            </div>
        `;
        masters.insertAdjacentElement('afterbegin', (blood))
}
function contentEdit(event){
    MyBoolen ?  EditingBtn(event) : SaveBtn(event)
}
function EditingBtn(event){
        know = document.querySelector('.know');
        seems = document.querySelector('.seems');
    let freeful = event.target.closest('.sturbornss');
    let parent1 = freeful.querySelector('.resson1');
    let parent2 = freeful.querySelector('.history1')
    let e;
    let parent2value;
        parent1.innerHTML = '<i class="fa fa-edit hei" title="Edit task"></i>';
        parent2.setAttribute('contenteditable', 'false')
        var wele = getTask()
        var weel = wele.filter(dk => dk.task == parent2.innerHTML);
        if(weel.length == 1){
            parent2.innerHTML = parent2.title;
            seems.innerHTML = 'Task with that name already existed'
            know.classList.add('howwwo')
            Task_Name.focus()
            setTimeout(() =>{
                know.classList.remove('howwwo')
            }, 3500)
        }

        if(parent2.innerHTML == ''){
            parent2.innerHTML = parent2.title;
            seems.innerHTML = 'Cant leave it empty dear'
            know.classList.add('howwwo')
            Task_Name.focus()
            setTimeout(() =>{
                know.classList.remove('howwwo')
            }, 3500)
        }
        if(parent2.innerHTML.search(/[^a-z0-9, .]/i) !== -1){
            parent2.innerHTML = parent2.title;
            seems.innerHTML = 'No special characters allowed'
            know.classList.add('howwwo')
            Task_Name.focus()
            setTimeout(() =>{
                know.classList.remove('howwwo')
            }, 3500)
        }

        parent2value = parent2.innerHTML.replace('<div><br></div>', '');
        e = parent2.title//.replace('<div><br></div>', '');
        let fromStorage = getTask();
        fromStorage.filter((task, id) =>{
            if(task.task === e){
                fromStorage[id].task = parent2value;
                parent2.title = fromStorage[id].task;
                localStorage.setItem('Utitbest_Todo', JSON.stringify(fromStorage))
            }
        });
            MyBoolen = false;
}
function SaveBtn(event){
    let parent1 = event.target.closest('.sturbornss');
    let parent3 = parent1.querySelector('.history1');
    let parent2 = parent1.querySelector('.resson1')
        parent2.innerHTML = '<i class="fa-brands fa-telegram hei" title="Edit task"></i>';
        parent3.setAttribute('contenteditable', 'true')
        parent3.focus();
        MyBoolen = true;
}
function checkBox(event){
    var pTagtext;
    var StorageIne;
    var checkman;
    let Input = event.target.parentNode.parentNode.parentNode.querySelector('.history1')
    let Inputcheck = event.target.parentNode.parentNode.parentNode.querySelector('#hername')
    StorageIne = getTask();
    pTagtext = Input.innerHTML;
    StorageIne.filter((boolens, id) =>{
        if(boolens.task === pTagtext){
            StorageIne[id].isComplete = Inputcheck.checked;
            localStorage.setItem('Utitbest_Todo', JSON.stringify(StorageIne));
            characters1.innerHTML = ReturningChecks()
            var floating = (ReturningChecks() / StorageIne.length) * 100;
            complains1.style.width = floating + '%';
            if(StorageIne[id].isComplete == true){
                Input.style.textDecoration = 'line-through';
                Input.style.color = 'gray';
            }else{
                Input.style.textDecoration = 'none';
                Input.style.color = 'white';
            }
        }
    })
}
function ReturningChecks(){
    var onlytrue = getTask()
    return onlytrue.filter(tsk => tsk.isComplete === true).length;
}
function DeletingTag(event){
    let smith = event.target.closest('.sturbornss')
    let checkingman;
    let Ptagelements = smith.querySelector('.history1');
        checkingman = Ptagelements.title;
    let africa = getTask();
        let flower = africa.filter(del => del.task !== checkingman);
        localStorage.setItem('Utitbest_Todo', JSON.stringify(flower));
        characters3.innerHTML = flower.length;
        characters1.innerHTML = ReturningChecks()
        var floating = (ReturningChecks() / flower.length) * 100;
        complains1.style.width = floating + '%';
        smith.remove();
}
function WidthofProgress(){
    var Prog = getTask();
    var josine = (ReturningChecks() / Prog.length) * 100;
        complains1.style.width = josine + '%';
}
function TaskFromStorage(){
    let task = getTask();
    task.map((show, nite) =>{
        HappeningFast(show.task, show.isComplete)
    })
}
WidthofProgress()
TaskFromStorage()
characters1.innerHTML = ReturningChecks()
window.addEventListener('keyup', function(event){
    if(event.keyCode == 13){
        botton.click()
    }
})

//  call this immediatly content load
// window.addEventListener('DOMContentLoaded', HappeningFast())

