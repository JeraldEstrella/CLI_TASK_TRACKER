import type { task, TaskStatus } from '../types';

export function Listtask(Task: task[], filter?: TaskStatus) {
  if (Task.length === 0) {
    console.log('No tasks found.');
    return;
  }

  let filtered = Task;
  let label = 'All tasks';

  if (filter) {
    filtered = Task.filter((t) => t.status === filter);
    label = filter.charAt(0).toUpperCase() + filter.slice(1) + ' tasks';
  }

  console.log(`${label}:`);
  filtered.forEach((t, i) =>
    console.log(`${i + 1}. ${t.title} [${t.status}]`)
  );

  if (filtered.length === 0) {
    console.log('(none)');
  }
}
