$(document).ready(function(){
    //add task
    let addfield = $('.add-field');
    let addButton = $('.add-button');
    let tasks = $('.tasks');
    addButton.on('click', function(){
        let newtask = `<li class="task">
                            <div class="task-checked col-1">
                                <input type="checkbox" class="check-task">
                            </div>
                            <div class="task-text col-2">${addfield.val()}</div>
                            <div class="task-remove col-3">
                                <img src="images/trash.svg" alt="">
                            </div>
                        </li>`;
            tasks.append(newtask);  
            addfield.val('');          
    })
    //remove task
    let removebtn = $('.task-remove');

    tasks.on('click','.task-remove', function(){
        $(this).parent().remove();
    })

    //check task 

    let checked = $('.check-task');
    tasks.on('click','.check-task', function(){
        $(this).parent().next().toggleClass('checked');
    })

    //sortable
    $('#tasks-list').sortable();
})






   