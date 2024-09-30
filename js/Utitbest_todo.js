let masters = document.querySelector('.masters')
let Task_Name = document.querySelector('.Task_Name')
let history1 = document.querySelector('.history1')
let catapila = document.querySelector('.catapila')
let know = document.querySelector('.know')



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
            setInterval(() =>{
                know.classList.remove('howwwo')
            }, 4000)
            return;
        }
        HappeningFast(Task_Name.value)
        let waking = Task_Name.value
        // localStorage.setItem('taskName', JSON.stringify(waking))
    });
}
function Collector(){
    
}
function tosaveAgain(text){
    JSON.parse(localStorage.getItem('taskName'))
    
}

function HappeningFast(r){
    let blood = document.createElement('div');
        blood.className = 'sturbornss';
        blood.innerHTML = `
            <div class="newgirel">
                <div class="luv1">
                    <input type="checkbox" name="" id="hername">
                </div>
                <div class="luv2">
                    <p class="history1">${r}</p>
                </div>
                <div class="luv3">
                    <div  class="broht">
                        <i class="fa fa-edit hei"></i>
                        <i class="fa fa-trash-alt hei"></i>
                    </div>
                </div>
            </div>
        `;
        masters.append(blood)
}

//  call this immediatly content load
// window.addEventListener('DOMContentLoaded', HappeningFast())