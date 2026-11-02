# CLI Task Tracker

A command-line task tracker built with TypeScript and Node.js.

## Features

- Add tasks
- Update task title or status (`pending`, `in progress`, `done`)
- Delete tasks
- List all tasks
- List done tasks
- List not done (pending) tasks
- List in progress tasks

## Project Structure

```
CLI_task_tracker/
├── index.ts              # Entry point / main menu
├── types.ts              # TypeScript interfaces (task, TaskStatus)
├── tsconfig.json         # TypeScript config
├── package.json          # Scripts and devDependencies
├── task/                 # Task storage (task.json created at runtime)
├── utilities/
│   ├── input.ts          # Shared readline input utility
│   ├── Addtask.ts        # Add a new task
│   ├── Updatetask.ts     # Update task title or status
│   ├── Deletetask.ts     # Delete a task
│   └── Listtask.ts       # List tasks (with optional status filter)
└── dist/                 # Compiled JavaScript output
```

## Installation

```powershell
npm install
```

## Usage

Build the project:

```powershell
npm run build
```

Run the tracker:

```powershell
npm start
```

Then choose an option from the menu:

1. **Add Task** — create a new task (defaults to `pending`)
2. **Update Task** — change a task's title or status
3. **Delete Task** — remove a task
4. **List All Tasks** — show every task
5. **List Done Tasks** — show only `done` tasks
6. **List Not Done Tasks** — show only `pending` tasks
7. **List In Progress Tasks** — show only `in progress` tasks

Tasks are saved to `task/task.json`.

## Scripts

| Script | Description |
|--------|-------------|
| `npm run build` | Compile TypeScript to `./dist` |
| `npm start` | Run the compiled tracker (`node dist/index.js`) |
