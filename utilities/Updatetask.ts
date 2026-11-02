import type { task, TaskStatus } from '../types';
import fs from 'node:fs/promises';
import { ask } from './input';

export async function Updatetask(Task: task[]) {
  if (Task.length === 0) {
    console.log('No tasks to update.');
    return;
  }

  console.log('Current tasks:');
  Task.forEach((t, i) =>
    console.log(`${i + 1}. ${t.title} [${t.status}]`)
  );

  const indexInput = await ask('Enter task number to update: ');
  const index = parseInt(indexInput, 10) - 1;

  if (isNaN(index) || index < 0 || index >= Task.length) {
    console.log('Invalid task number.');
    return;
  }

  const choice = await ask('Update (1) title or (2) status: ');

  if (choice.trim() === '1') {
    const newTitle = await ask('Enter new task title: ');
    if (newTitle.trim() === '') {
      console.log('Task title cannot be empty.');
      return;
    }
    Task[index].title = newTitle;
  } else if (choice.trim() === '2') {
    const status = await ask("Enter status ('pending', 'in progress', 'done'): ");
    const validStatuses: TaskStatus[] = ['pending', 'in progress', 'done'];
    if (!validStatuses.includes(status.trim() as TaskStatus)) {
      console.log('Invalid status. Use pending, in progress, or done.');
      return;
    }
    Task[index].status = status.trim() as TaskStatus;
  } else {
    console.log('Invalid option.');
    return;
  }

  await fs.writeFile(
    './task/task.json',
    JSON.stringify(Task, null, 2),
    'utf-8'
  );

  console.log('Task updated.');
  console.log(Task);
}
