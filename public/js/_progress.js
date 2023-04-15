import { readTasks } from "./_readTask.js";


function progress() {
  const { tasksDoneLength, tasksNotDoneLength, tasksLength } = readTasks();
  const progressContainer = document.querySelector(".progress__bar");
  const progressText = document.querySelector(".progress__text");
  const progressMainContainer = document.querySelector('.progress__bar--container')
  progressText.classList.add('header__subtitle')
  const progressWidth = (tasksDoneLength / tasksLength) * 100;
  switch (true) {
    case tasksLength === 0:
      progressText.textContent = "You have no tasks";
      progressMainContainer.classList.add('inactive')
      break;
    case (tasksLength !== 0 && progressWidth !== 100):
      progressText.textContent = `You have completed ${tasksDoneLength} of ${tasksLength} tasks`;
      progressMainContainer.classList.remove('inactive')
      progressContainer.style.width = `${progressWidth}%`;
      progressContainer.classList.remove("progress__bar--completed");
      break;
    case (progressWidth === 100 && (tasksDoneLength === tasksLength)):
      progressText.textContent = "Congratulations! You have completed all your tasks";
      progressMainContainer.classList.remove('inactive')
      progressContainer.style.width = `${progressWidth}%`;
      progressContainer.classList.add("progress__bar--completed");
      break;
    default:
      break;
  }
}

export { progress };