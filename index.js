import inquirer from "inquirer";
console.log("*************************************************");
console.log(" \tWelcome to Word Counter\t ");
console.log("*************************************************");
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word:"
    }
]);
const words = answers.Sentence.trim().split(" ");
console.log(words);
console.log(`Your total words are ${words.length}`);
