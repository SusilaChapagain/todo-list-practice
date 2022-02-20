let allTask = [];

function formHandleClicked(e) {
  e.preventDefault();
  let task = e.target[0].value;
  let hrs = e.target[1].value;
  const indTask = {
    tsk: task,
    hs: hrs,
  };
  allTask.push(indTask);
  displayList(allTask);
}

function displayList(tasks) {
  let str = "";
  let totalhour = 0;

  tasks.map((item, index) => {
    str =
      str +
      `<tr>
        <td>${item.tsk}</td>
        <td>${item.hs}</td> 
        <td><button id="listBtn" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></button></td>
    </tr>`;
    totalhour = totalhour + parseInt(item.hs);
    console.log(totalhour);
  });
  document.getElementById("tableItems").innerHTML = str;
  document.getElementById("totalHours").innerText = totalhour;
}

function deleteTask(i) {
  allTask.splice(i, 1);
  displayList(allTask);
}
