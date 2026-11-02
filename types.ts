export type TaskStatus = 'pending' | 'in progress' | 'done';

export interface task {
  id: number;
  title: string;
  status: TaskStatus;
}
