let masters = document.querySelector('.masters')
let Task_Name = document.querySelector('.Task_Name')
let history = document.querySelector('.history')
let botton = document.querySelector('.squad')
let catapila = document.querySelector('.catapila')

    botton.addEventListener('click', function(){
        if(Task_Name.value == ''){

        }
        HappeningFast()
    });

function HappeningFast(){
    let blood = document.createElement('div');
        blood.className = 'sturbornss';
        blood.innerHTML = `
            <div class="newgirel">
                <div class="luv1">
                    <input type="checkbox" name="" id="hername">
                </div>
                <div class="luv2">
                    <p class="history"></p>
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
function creator(){
    let you = document.createElement('div');
        you.className = 'know ghyy';
        you.innerHTML = `
            <div class="seems">
                Enter task..... Tasks should not be empty.
            </div>
        `;
        catapila.append(you)
}
creator()