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

}