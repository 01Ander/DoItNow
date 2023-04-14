import { readTasks } from "./_localStorage";


function progress() {
  const { tasksDoneLength, tasksNotDoneLength, tasksLength } = readTasks();
  const progressContainer = document.querySelector(".progress__bar");
  const progressText = document.querySelector(".progress__text");
  progressText.classList.add('header__subtitle')
  const progressWidth = (tasksDoneLength / tasksLength) * 100;
  if (progressWidth !== 100) {
    progressContainer.style.width = `${progressWidth}%`;
    progressContainer.classList.remove("progress__bar--completed");
  } else {
    progressContainer.style.width = `${progressWidth}%`;
    progressContainer.classList.add("progress__bar--completed");
  }

  if (tasksLength === 0) {
    progressText.textContent = "You have no tasks";
  } else if (progressWidth === 100) {
    progressText.textContent = "You have completed all your tasks";
  } else {
    progressText.textContent = `You have completed ${tasksDoneLength} of ${tasksLength} tasks`;
  }
}

export { progress };