// add form

const div: Element = document.querySelector("#app")!;
const form: HTMLFormElement = document.createElement("form");
const input: HTMLInputElement = document.createElement("input");
const submitButton: HTMLButtonElement = document.createElement("button");
div.append(form);
form.append(input);
form.append(submitButton);

input.placeholder = "write task ...";
submitButton.innerHTML = "submit";
submitButton.type = "submit";

export type baseTask = {
  id: string;
  subject: string;
  dedLineTime: Date;
  status: Status;
  label: Label;
};

// add task

const text = document.createElement("h5");
const task = document.createElement("p");
text.innerText = "TODOList :";
div.append(text);
div.append(task);

export const AddTask = () => {
  task.innerText = input.value;
  if (input.value === "") {
    removeButton.style.display = "none";
  } else {
    removeButton.style.display = "block";
  }
  input.value = "";
};

form.addEventListener("submit", (event: SubmitEvent) => {
  event.preventDefault();
  AddTask();
});

//remove task

const removeForm = document.createElement("form");
const removeButton = document.createElement("button");
removeButton.innerHTML = "Remove Task";
removeButton.type = "submit";

removeForm.append(removeButton);
div.append(removeForm);
removeButton.style.display = "none";

export const RemoveTask = () => {
  task.innerText = "";
  form.style.display = "block";
  removeButton.style.display = "none";
};

removeForm.addEventListener("submit", (event: SubmitEvent) => {
  event.preventDefault();
  RemoveTask();
});

// change Label

export type Label = "Green" | "Red" | "Yellow" | "Blue";

export const changeLabel = () => {};

//cahnge status

export type Status = "Doing" | "Todo" | "Done";

export type TodoTask = baseTask & {
  startTime: Date;
  status: "Todo";
};

export type DoingTask = baseTask & {
  status: "Doing";
};

export type DoneTask = baseTask & {
  startTime: Date;
  endTime: Date;
  status: "Done";
};

export let tasks: (TodoTask | DoingTask | DoingTask)[] = [];

export const changeStatus = () => {};
