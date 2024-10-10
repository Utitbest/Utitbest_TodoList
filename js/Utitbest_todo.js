let masters = document.querySelector('.masters')
let Task_Name = document.querySelector('.Task_Name')
let catapila = document.querySelector('.catapila')
let know = document.querySelector('.know')
let sturbornss = document.querySelectorAll('.sturbornss')
let datem1 = document.querySelector('.datem1')
let datem2 = document.querySelector('.datem2')
let characters3 = document.querySelector('.characters3')
let characters1 = document.querySelector('.characters1')

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
            <div class="seems">
                Enter task..... Tasks should not be empty.
            </div>
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
        if(Task_Name.value == ''){
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
    characters3.innerHTML = task.length
}
Lamba = () =>{
    indexIn = getTask()
    characters3.innerHTML = indexIn.length;
}
Lamba()
function HappeningFast(task, status){
    let blood = document.createElement('div');
        blood.className = 'sturbornss';
        blood.innerHTML = `
            <div class="newgirel">
                <div class="luv1">
                    <input type="checkbox" onchange="checkBox(event)" name="" id="hername">
                </div>
                <div class="luv2">
                    <p class="history1">${task}</p>
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
    let parent1 = event.target.parentNode.parentNode.parentElement.parentElement.parentNode.querySelector('.resson1');
    let parent2 = event.target.parentNode.parentNode.parentElement.parentElement.parentNode.querySelector('.history1');
        parent1.innerHTML = '<i class="fa fa-edit hei" title="Edit task"></i>';
        parent2.setAttribute('contenteditable', 'false')
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
    let Input = event.target.parentNode.parentNode.parentNode.querySelector('.history1')
    let Inputcheck = event.target.parentNode.parentNode.parentNode.querySelector('#hername')
    if(Inputcheck.checked == true){
        Input.style.textDecoration = 'line-through';
        Input.style.color = 'gray';
        characters1.innerHTML =+ +1; 
    }else{
        Input.style.textDecoration = 'none';
        Input.style.color = 'white';
    }
    
    // console.log(Input)
}
function DeletingTag(event){
    // let resson2 = document.querySelectorAll('.resson2')
    // let toBeRemove = event.target.parentNode.parentNode.parentNode.parentNode.parentElement.parentNode;
    // toBeRemove.remove()
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

