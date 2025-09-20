// mini to-do list
const tasks = [];

function add(task) {
  tasks.push({ text: task, done: false });
}

function complete(i) {
  if (tasks[i]) tasks[i].done = true;
}

function list() {
  tasks.forEach((t, i) => {
    console.log(`${i + 1}. [${t.done ? 'z' : 'x'}] ${t.text}`);
  });
}

// Demo run
add('Buy milk');
add('Write code');
list();

complete(0);
console.log('\nAfter completing first task:');
list();
