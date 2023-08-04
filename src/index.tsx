// add form

const div: Element = document.querySelector('#app')!;
const form: HTMLFormElement = document.createElement('form');
const input: HTMLInputElement = document.createElement('input');
const submitButton: HTMLButtonElement = document.createElement('button');
div.append(form);
form.append(input);
form.append(submitButton);

input.placeholder = 'write task ...';
submitButton.innerHTML = 'submit';
submitButton.type = 'submit';

export type baseTask = {
  id: string;
  subject: string;
  dedLineTime: Date;
  status: Status;
  label: Label;
};

export type TodoTask = baseTask & {
  startTime: Date;
  status: 'Todo';
};

export type DoingTask = baseTask & {
  status: 'Doing';
};

export type DoneTask = baseTask & {
  startTime: Date;
  endTime: Date;
  status: 'Done';
};

export let tasks: (TodoTask | DoingTask | DoingTask)[] = [];

// add task

const text = document.createElement('h5');
const task = document.createElement('p');
text.innerText = 'TODOList :';
div.append(text);
div.append(task);

export const AddTask = () => {
  task.innerText = input.value;
  if (input.value === '') {
    removeButton.style.display = 'none';
  } else {
    removeButton.style.display = 'block';
  }
  input.value = '';
  labelForm.style.display = 'block';
  statusForm.style.display = 'block';
};

form.addEventListener('submit', (event: SubmitEvent) => {
  event.preventDefault();
  AddTask();
});

//remove task

const removeForm = document.createElement('form');
const removeButton = document.createElement('button');
removeButton.innerHTML = 'Remove Task';
removeButton.type = 'submit';

removeForm.append(removeButton);
div.append(removeForm);
removeButton.style.display = 'none';

export const RemoveTask = () => {
  task.innerText = '';
  form.style.display = 'block';
  removeButton.style.display = 'none';
  labelForm.style.display = 'none';
  statusForm.style.display = 'none';
};

removeForm.addEventListener('submit', (event: SubmitEvent) => {
  event.preventDefault();
  RemoveTask();
});

// change Label

export type Label = 'Green' | 'Red' | 'Yellow' | 'Blue';

const labelForm = document.createElement('form');
div.append(labelForm);

labelForm.style.display = 'none';

const label = document.createElement('p');
label.innerHTML = 'Label :';
const innerLabel = document.createElement('p');
innerLabel.innerHTML = 'Red';

const select = document.createElement('select');
const option1 = document.createElement('option');
const option2 = document.createElement('option');
const option3 = document.createElement('option');
const option4 = document.createElement('option');
option1.innerHTML = 'Blue';
option2.innerHTML = 'Green';
option3.innerHTML = 'Red';
option4.innerHTML = 'Yellow';
labelForm.append(label);
label.append(innerLabel);
labelForm.append(select);
select.append(option1);
select.append(option2);
select.append(option3);
select.append(option4);

const labelButton = document.createElement('button');
labelButton.innerHTML = 'Change Label';
labelButton.type = 'submit';
labelForm.append(labelButton);

export const changeLabel = () => {
  if (option1.selected) {
    innerLabel.innerText = option1.innerHTML;
  } else if (option2.selected) {
    innerLabel.innerText = option2.innerHTML;
  } else if (option3.selected) {
    innerLabel.innerText = option3.innerHTML;
  } else {
    innerLabel.innerText = option4.innerHTML;
  }
};

labelForm.addEventListener('submit', (event: SubmitEvent) => {
  event.preventDefault();
  changeLabel();
});

//cahnge status

export type Status = 'Doing' | 'Todo' | 'Done';

const statusForm = document.createElement('form');
div.append(statusForm);

statusForm.style.display = 'none';

const Status = document.createElement('p');
Status.innerHTML = 'Status :';
const innerStatus = document.createElement('p');
innerStatus.innerHTML = 'Todo';

const selectStatus = document.createElement('select');
const options1 = document.createElement('option');
const options2 = document.createElement('option');
const options3 = document.createElement('option');

options1.innerHTML = 'Todo';
options2.innerHTML = 'Doing';
options3.innerHTML = 'Done';
statusForm.append(Status);
Status.append(innerStatus);
statusForm.append(selectStatus);
selectStatus.append(options1);
selectStatus.append(options2);
selectStatus.append(options3);

const StatusButton = document.createElement('button');
StatusButton.innerHTML = 'Change Status';
StatusButton.type = 'submit';
statusForm.append(StatusButton);

export const changeStatus = () => {
  if (options1.selected) {
    innerStatus.innerText = options1.innerHTML;
  } else if (options2.selected) {
    innerStatus.innerText = options2.innerHTML;
  } else {
    innerStatus.innerText = options3.innerHTML;
  }
};

statusForm.addEventListener('submit', (event: SubmitEvent) => {
  event.preventDefault();
  changeStatus();
});
