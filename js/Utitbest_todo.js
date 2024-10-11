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
let complains1 = document.querySelector('.complains1')

let MyBoolen = false;
let checking = false;
let indexIn;
let objectInStorage = 0;

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
    let daysByname = ['Sunday', 'Monday', 'Tuesday', 'Wednessday', 'Thursday', 'Friday']
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
function creator(){
    let you = document.createElement('div');
        you.className = 'know ghyy';
        you.innerHTML = `
            <div class="seems"></div>
        `;
        catapila.append(you)
        clickingToAddTask()
}
creator()

function clickingToAddTask(){
    let botton = document.querySelector('.squad')
    botton.addEventListener('click', function(){
        Task_Name = document.querySelector('.Task_Name');
        know = document.querySelector('.know')
        seems = document.querySelector('.seems')
        if(Task_Name.value == ''){
            seems.innerHTML = 'Enter task must not be empty'
            know.classList.add('howwwo')
            Task_Name.focus()
            setTimeout(() =>{
                know.classList.remove('howwwo')
            }, 3500)
            return;
        }
        HappeningFast(Task_Name.value)
        Collector(Task_Name.value, false)
    });
}
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
function contentEdit(e){
    MyBoolen ?  EditingBtn(e) : SaveBtn(e)
}
function EditingBtn(event){
    var parent2value;
    var e;
    let parent1 = event.target.parentNode.parentNode.parentElement.parentElement.parentNode.querySelector('.resson1');
    let parent2 = event.target.parentNode.parentNode.parentElement.parentElement.parentNode.querySelector('.history1');
        parent1.innerHTML = '<i class="fa fa-edit hei" title="Edit task"></i>';
        parent2.setAttribute('contenteditable', 'false')
        if(parent2.innerHTML == ''){
             parent2.innerHTML = parent2.title;
            alert(parent2.title);
            return
        }
        parent2value = parent2.innerHTML;
        e = parent2.title;
        let fromStorage = getTask();
        fromStorage.filter((task, id) =>{
            if(task.task === e){
                fromStorage[id].task = parent2value;
                localStorage.setItem('Utitbest_Todo', JSON.stringify(fromStorage))
            }
        });
        MyBoolen = false;
}
function SaveBtn(event){
    let parent1 = event.target.parentNode.parentNode.parentElement.parentElement.parentNode.querySelector('.resson1');
    let parent2 = event.target.parentNode.parentNode.parentElement.parentElement.parentNode.querySelector('.history1');
        parent1.innerHTML = '<i class="fa-brands fa-telegram hei" title="Edit task"></i>';
        parent2.setAttribute('contenteditable', 'true')
        parent2.focus();
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
function WidthofProgress(){
    var Prog = getTask();
    var josine = (ReturningChecks() / Prog.length) * 100;
        complains1.style.width = josine + '%';
}
characters1.innerHTML = ReturningChecks()
WidthofProgress()
function DeletingTag(event){
    let checkingman;
    let Ptagelements = event.target.parentNode.parentNode.parentElement.parentElement.parentNode.querySelector('.sturbornss');
    console.log(Ptagelements)
    let Ptagelementss = Ptagelements.querySelector('.history1'); 
        checkingman = Ptagelementss.innerHTML;
    let africa = getTask();
        let flower = africa.filter(del => del.task !== checkingman);
        localStorage.setItem('Utitbest_Todo', JSON.stringify(flower));
        Ptagelements.remove();
}

function TaskFromStorage(){
    let task = getTask();
    task.map((show, nite) =>{
        HappeningFast(show.task, show.isComplete)
    })
}
TaskFromStorage()
//  call this immediatly content load
// window.addEventListener('DOMContentLoaded', HappeningFast())

