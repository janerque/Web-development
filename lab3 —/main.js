let todos = document.querySelector('.todos');
let inputText = document.querySelector('.new_task');
let addButton = document.querySelector('.addBtn');
let goal = document.querySelectorAll('.goal');
let deleteImage = document.querySelectorAll('.icon');

function addTask(){
    console.log("ok")
    if(inputText.value != null){
        let div = document.createElement("div");
        div.className="goal";
        let label = document.createElement("label");
     label.className = "new_goal";
        let check = document.createElement("input");
        check.type = "checkbox";
        check.className = "goal_1";
        let span = document.createElement("span");
     span.innerHTML = inputText.value;
        let image = document.createElement("img");
        image.className = "icon";
        image.src = "https://icons-for-free.com/iconfiles/png/512/delete+remove+trash+trash+bin+trash+can+icon-1320073117929397588.png";
        image.addEventListener('click', remove, false);
        todos.appendChild(div);
        div.appendChild(label);
        label.appendChild(check);
        label.appendChild(span);
        div.appendChild(image);
        inputText.value = null;
    }
}
function remove(){
    this.parentNode.remove();
}
for(var i = 0; i < goal.length; i++){
    deleteImage[i].addEventListener('click', remove, false);
}



