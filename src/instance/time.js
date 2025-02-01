import { argv } from "process";

// get pomodoro and break pomodoro time using argument using argv
const argument = argv.slice(2);

// if argument nothing throw error
if (argument.length < 1) {
  throw new Error("Pomodoro time is required");
}

// get pomodoro time and break pomodoro time
const POMOORO_TIME = argument[0];
const BREAK_POMODORO_TIME = argument[1];

export { POMOORO_TIME, BREAK_POMODORO_TIME };
