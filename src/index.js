// dependency
import nodeNotifier from "node-notifier";

// helper and instance
import { formattingTime } from "./helper/format.js";
import { POMOORO_TIME, BREAK_POMODORO_TIME } from "./instance/time.js";

// initial value of pomodoro is user working (false)
let isWorking = false;

// initial value of remaining time (0)
let remainingTime = 0;

/**
 * Start pomodoro timer (check in every second)
 *
 * @param {number} duration - duration of working/break time in minute
 * @returns {void}
 */
function startTimer(duration) {
  // change opposite of isWorking value in every this function run
  isWorking = !isWorking;

  // set remaining time based on the duration
  // input what duration in hour or minute or second and the value will be converted to second * 60
  remainingTime = duration * 60;

  // set interval to run every second
  const timer = setInterval(() => {
    // decrease remaining time by 1 second
    remainingTime--;

    // format remaining time to string "HH:MM:SS" using formattingTime function
    const formattedTime = formattingTime(remainingTime);

    // give information on terminal what now activities
    console.log(`${isWorking ? "Working" : "Break"} Time: ${formattedTime}`);

    // condition if remaining time is 0 running this code
    if (remainingTime === 0) {
      clearInterval(timer);

      // show notification using node-notifier
      nodeNotifier.notify({
        title: isWorking ? "Break Time" : "Work Time",
        message: isWorking ? "Time to Break" : "Time to Work",
        sound: true,
        wait: true,
      });

      // condition if isWorking true will break and if false will start pomodoro
      startTimer(isWorking ? BREAK_POMODORO_TIME : POMOORO_TIME);
    }
  }, 1000);
}

startTimer(POMOORO_TIME);
