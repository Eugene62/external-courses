const tasks = {
  Backlog: [
    {
      id: 0,
      title: "task1"
    },
    {
      id: 1,
      title: "task2"
    },
    {
      id: 2,
      title: "task3"
    }
  ],
  Ready: [
    {
      id: 3,
      title: "task3"
    },
    {
      id: 4,
      title: "task4"
    }
  ],
  inProgress: [],
  Finished: []
};

let idCount = +localStorage.getItem("id-count");

const blocks = {
  Backlog: document.querySelector('[data-column-id=Backlog] .data-notes'),
  Ready: document.querySelector('[data-column-id=Ready] .data-notes'),
  inProgress: document.querySelector('[data-column-id=inProgress] .data-notes'),
  Finished: document.querySelector('[data-column-id=Finished] .data-notes'),
}; 

const addButtons = {
  Backlog: document.querySelector('[data-column-id=Backlog] > .column-footer > .action'),
  Ready: document.querySelector('[data-column-id=Ready] > .column-footer > .action'),
  inProgress: document.querySelector('[data-column-id=inProgress] > .column-footer > .action'),
  Finished: document.querySelector('[data-column-id=Finished] > .column-footer > .action'),
}; 

const taskBlocksOrder = ['Backlog', 'Ready', 'inProgress', 'Finished'];


const renderTasks = () => {
  localStorage.setItem("id-count", `${idCount}`);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  Object.keys(tasks).forEach(key => {
      blocks[key].innerHTML = '';
      tasks[key].forEach(task => {
      const taskElem = document.createElement('div');
      taskElem.innerText = task.title;
      taskElem.className = 'task';
      blocks[key].appendChild(taskElem)
    })
  })

  taskBlocksOrder.forEach((key, i) => {
    const nextKey = taskBlocksOrder[i + 1];
  
    if (!nextKey) {
      return;
    }
  
    if (tasks[key].length) {
      addButtons[nextKey].disabled = false;
    } else {
      addButtons[nextKey].disabled = true;
    }
  })
}

taskBlocksOrder.forEach(key => {
  if (key==='Backlog') {
    addButtons[key].addEventListener('click', () => {
      const input = document.createElement('input');
      addButtons[key].parentElement.insertBefore(input, addButtons[key]);

      input.addEventListener('blur', ({ target: { value } }) => {
        if (!value) {
          return;
        }

        idCount += 1;

        tasks[key].push({ id: idCount, title: value })
        input.remove();
        renderTasks();
      })
    })

    return;
  }

  addButtons[key].addEventListener('click', () => {
    const select = document.createElement('select');
    const blockOrder = taskBlocksOrder.findIndex(blockKey => key === blockKey);
    const prevBlockName = taskBlocksOrder[blockOrder - 1];

    select.addEventListener('change', ({ target }) => {
      const taskIndex = tasks[prevBlockName].findIndex(({ id }) => {
        console.log({id, value: target.value})
        return +id === +target.value})

      console.log({taskIndex, sliceResult: tasks[prevBlockName].slice(taskIndex, 1)})

      tasks[key] = [...tasks[key], ...tasks[prevBlockName].splice(taskIndex, 1)];
      select.remove();
      addButtons[key].disabled = false;
      renderTasks();
    })

    tasks[prevBlockName].forEach(({ title, id }) => {
      const option = document.createElement('option');
      option.innerText = title;
      option.value = id;
      select.appendChild(option);
    });

    const defaultValueOption = document.createElement('option');
    defaultValueOption.value = -1;
    select.appendChild(defaultValueOption)
    select.value = -1

    addButtons[key].disabled = true;
    addButtons[key].parentElement.insertBefore(select, addButtons[key]);
  })

})

renderTasks();