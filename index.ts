import type { task, TaskStatus } from './types';
import fs from 'node:fs/promises';
import { AddTask } from './utilities/Addtask';
import { Updatetask } from './utilities/Updatetask';
import { Deletetask } from './utilities/Deletetask';
import { Listtask } from './utilities/Listtask';
import { ask, closeInput } from './utilities/input';

async function main() {
  let Task: task[] = [];

  try {
    const saveTask = await fs.readFile('./task/task.json', 'utf-8');
    Task = JSON.parse(saveTask);
  } catch {
    Task = [];
  }

  console.log('=== TASK TRACKER ===');
  console.log('1. Add Task');
  console.log('2. Update Task');
  console.log('3. Delete Task');
  console.log('4. List All Tasks');
  console.log('5. List Done Tasks');
  console.log('6. List Not Done Tasks');
  console.log('7. List In Progress Tasks');

  const action = await ask('Choose an option: ');

  if (action.trim() === '1') {
    let again = 'yes';
    while (again.trim().toLocaleLowerCase() === 'yes') {
      await AddTask(Task);
      again = await ask('Do you want to add more ? yes or no: ');
    }
  } else if (action.trim() === '2') {
    await Updatetask(Task);
  } else if (action.trim() === '3') {
    await Deletetask(Task);
  } else if (action.trim() === '4') {
    Listtask(Task);
  } else if (action.trim() === '5') {
    Listtask(Task, 'done');
  } else if (action.trim() === '6') {
    Listtask(Task, 'pending');
  } else if (action.trim() === '7') {
    Listtask(Task, 'in progress');
  } else {
    console.log('Invalid option.');
  }

  closeInput();
}

main();
