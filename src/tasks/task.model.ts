// eslint-disable-next-line @typescript-eslint/no-empty-interface, prettier/prettier
export interface Task {

  id: string,
  title: string, 
  description: string, 
  status: TaskStatus;
}
export enum TaskStatus {
  DONE = 'DONE',
  IN_PROGRESS = 'IN_PROGRESS',
  OPEN = 'OPEN',
}
