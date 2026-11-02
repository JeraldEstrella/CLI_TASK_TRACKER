import type { task } from '../types';
import fs from 'node:fs/promises';
import { ask } from './input';

export async function Deletetask(Task: task[]) {
  if (Task.length === 0) {
    console.log('No tasks to delete.');
    return;
  }

  console.log('Current tasks:');
  Task.forEach((t, i) => console.log(`${i + 1}. ${t.title} [${t.status}]`));

  const indexInput = await ask('Enter task number to delete: ');
  const index = parseInt(indexInput, 10) - 1;

  if (isNaN(index) || index < 0 || index >= Task.length) {
    console.log('Invalid task number.');
    return;
  }

  const deleted = Task.splice(index, 1);

  await fs.writeFile(
    './task/task.json',
    JSON.stringify(Task, null, 2),
    'utf-8'
  );

  console.log(`Deleted: ${deleted[0].title}`);
  console.log('Remaining tasks:');
  console.log(Task);
}
