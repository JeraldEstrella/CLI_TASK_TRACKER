import type { task, TaskStatus } from '../types';
import fs from 'node:fs/promises';
import { ask } from './input';

export async function AddTask(Task: task[]) {
  const taskName = await ask('Enter new task: ');

  if (taskName.trim() === '') {
    console.log('Please input a task name: ');
    return;
  }

  const formatTask: task = {
    id: Task.length + 1,
    title: taskName,
    status: 'pending',
  };

  Task.push(formatTask);

  await fs.writeFile(
    './task/task.json',
    JSON.stringify(Task, null, 2),
    'utf-8'
  );

  console.log('TASK ADDED:');
  console.log(Task);
}
