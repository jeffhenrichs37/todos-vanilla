let tasks = ['Go to Gym', 'Feed Ping', 'Work on programming project'];

var task = document.getElementById('description');

document.getElementById("clear").addEventListener('click', clearContent);

document.getElementById("add").addEventListener('click', addTask)

function clearContent() {
	console.log("Pressed Clear");
	console.log(task.value);
	task.value = "";
}

function addTask() {
	
	console.log("Added a Task");
	tasks.push(task.value);
	console.log(tasks);

	//Creating a new element with an id of task
	let task_div = document.createElement("div");
	task_div.id = "task"
	task_div.innerHTML = task.value;

	task.value = "";

	//Creating a new span element with an id of date
	let date = document.createElement("span");
	date.id = "date";

	let d = new Date();
	date.innerHTML = `Date Created: ${d.getMonth()+1}/${d.getDate()}/${d.getFullYear()}`;

	// Span element with id checked
	let checked = document.createElement("span");
	checked.id = "checked";

	//checkbox
	let input = document.createElement("input");
	input.setAttribute("type", "checkbox");
	input.id = "completed";
	input.setAttribute("name", "completed");
	input.setAttribute("value", "Completed");
	input.style.marginRight = "3px";

	//checkbox label
	let label = document.createElement("label");
	label.setAttribute("for", "completed");
	label.innerHTML = "Completed?";

	//checked span elments innerHTML
	checked.appendChild(input);
	checked.appendChild(label);

	//Adding a new task element
	let element = document.createElement("div");
	element.classList.add("task");
	element.appendChild(task_div);
	element.appendChild(date);
	element.appendChild(checked);

	document.getElementById("tasks").appendChild(element);

}