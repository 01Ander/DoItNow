import { getTasks } from './_localStorage';

function readTasks() {
  const tasks = getTasks();
  const tasksDone = tasks.filter((task) => task.done === true);
  const tasksNotDone = tasks.filter((task) => task.done === false);
  const tasksDoneLength = tasksDone.length;
  const tasksNotDoneLength = tasksNotDone.length;
  const tasksLength = tasks.length;
  return {
    tasksDoneLength,
    tasksNotDoneLength,
    tasksLength,
  };
}

export { readTasks };