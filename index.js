#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellowBright(`
╔═╗┌─┐┬ ┬┌┐┌┌┬┐┌┬┐┌─┐┬ ┬┌┐┌  ╔╦╗┬┌┬┐┌─┐┬─┐
║  │ ││ ││││ │  │││ │││││││   ║ ││││├┤ ├┬┘
╚═╝└─┘└─┘┘└┘ ┴ ─┴┘└─┘└┴┘┘└┘   ╩ ┴┴ ┴└─┘┴└─
`));
const res = await inquirer.prompt({
    type: "input",
    name: "userInput",
    message: chalk.blueBright("Please Enter The Amount Of Second"),
    validate: input => {
        if (isNaN(input)) {
            return chalk.redBright("Please Enter Valid Number");
        }
        else if (input <= 0) {
            return chalk.redBright("Seconds must be greater than 0");
        }
        else {
            return true;
        }
    }
});
const inputSeconds = parseInt(res.userInput, 10);
function startTime(val) {
    const initialTime = new Date().getTime() + val * 1000; // Convert seconds to milliseconds
    const intervalId = setInterval(() => {
        const currentTime = new Date().getTime();
        const timeDiff = Math.floor((initialTime - currentTime) / 1000); // Convert milliseconds to seconds
        if (timeDiff <= 0) {
            console.log(chalk.redBright.bold("Timer has Expired"));
            clearInterval(intervalId);
            process.exit();
        }
        console.log(chalk.yellowBright(timeDiff.toString().padStart(2, "0"))); // Display remaining seconds
    }, 1000);
}
startTime(inputSeconds);
