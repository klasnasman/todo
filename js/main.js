// DATE IN HEADER
window.onload = function () {
  date();
}

function date() {
  const headerDate = document.getElementById('date');
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const date = new Date().toLocaleDateString("en-US", options).toUpperCase();
  headerDate.innerHTML = date;
}

// TO DO
todo.addEventListener('submit', addTask);

function addTask(e) {
  e.preventDefault();
  const inputField = this.elements;
  const userInput = inputField.input.value;
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  const p = document.createElement('p');
  p.textContent = userInput;
  if (userInput == 0) {
    input.placeholder = "Får ej skapa tomma sysslor...";
    return;
  }
  input.placeholder = "...";
  inputField.input.value = "";
  ul.append(li);
  li.append(p);

  const doneButton = document.createElement('button');
  doneButton.type = 'button';
  doneButton.textContent = "add_task"
  doneButton.classList.add('material-symbols-rounded');
  doneButton.classList.add('green');
  doneButton.setAttribute('title', "Färdig");
  li.append(doneButton);
  doneButton.addEventListener('click', buttons.completeTask)

  const editButton = document.createElement('button');
  editButton.type = 'button';
  editButton.textContent = "change_circle";
  editButton.classList.add('material-symbols-rounded');
  editButton.classList.add('yellow');
  editButton.setAttribute('title', "Ändra");
  li.append(editButton);
  editButton.addEventListener('click', buttons.editTask);

  const saveButton = document.createElement('button');
  saveButton.type = 'button';
  saveButton.textContent = 'check_circle';
  saveButton.classList.add('material-symbols-rounded');
  saveButton.classList.add('green');
  saveButton.classList.add('hide');
  saveButton.setAttribute('title', "Spara");
  li.append(saveButton);
  saveButton.addEventListener('click', buttons.editSave);

  const deleteButton = document.createElement('button');
  deleteButton.type = 'button';
  deleteButton.textContent = "cancel";
  deleteButton.classList.add('material-symbols-rounded');
  deleteButton.classList.add('red');
  deleteButton.setAttribute('title', "Ta bort");
  li.append(deleteButton);
  deleteButton.addEventListener('click', buttons.deleteTask)

  const clearButton = document.querySelector('#clear');
  clearButton.addEventListener('click', buttons.clear);
}


let buttons = {
  editTask() {
    const li = this.parentElement;
    const p = li.firstElementChild;
    p.setAttribute('contenteditable', true);
    this.classList.add('hide');
    this.nextElementSibling.classList.remove('hide');
  },

  editSave() {
    const li = this.parentElement;
    const p = li.firstElementChild;
    p.removeAttribute('contenteditable');
    this.classList.add('hide');
    this.setAttribute('title', "Spara");
    this.previousElementSibling.classList.remove('hide');
  },

  completeTask(e) {
    const button = e.target;
    const li = button.closest('li');
    const editButton = button.nextElementSibling;
    const saveButton = editButton.nextElementSibling;
    editButton.classList.remove('hide');
    saveButton.classList.add('hide');
    button.remove();
    document.getElementById('complete').appendChild(li);
    li.firstElementChild.removeAttribute('contenteditable')
  },

  deleteTask() {
    this.parentElement.remove();
  },

  clear(e) {
    e.preventDefault();
    document.getElementById('incomplete').innerHTML = "";
    document.getElementById('complete').innerHTML = "";
  }
}



