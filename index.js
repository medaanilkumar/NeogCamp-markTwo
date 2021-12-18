var readlineSync = require('readline-sync');
var chalk = require('chalk');
var score = 0;
console.log(chalk.bold.yellowBright('Welcome To Tokyo Olympics Quiz Game'));
console.log(chalk.bold.yellowBright("------------------------------------"));
var username = readlineSync.question("Please enter your name: ")
console.log("Welcome " + chalk.yellowBright(username))

var quizArr = [
{
  question:'In which country did the Olympics originated? \na. India \nb. Japan \nc. Greece\n',
  answer:'c'
},
{
  question: "Who won Gold medal in Olympics for India? \na. P.V Sindhu \nb. Neeraj Chopra \nc. Mirabai Charu \n",
  answer: "b",
},
{
  question:'Which country has highest no medals? \na. Japan \nb. China \nc. USA \n',
  answer:'c',
},
{
  question:'How many medal do India have?  \na. 7 \nb. 55 \nc. 2 \n',
  answer:'a',
},
{
  question:"What do the five rings on the Olympics symbol represents? \na.The five ocean \nb.The five continents \nc.The five planets",
  answer:"b"

},
];

function play(question,answer){
  var userAnswer=readlineSync.question(chalk.bold(question));
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    score++;
    console.log(chalk.green("Correct Answer !"));
    console.log(chalk.bold("Score is " + score));
  }
  else{
    console.log(chalk.red("Oops you missed it"));
    console.log(chalk.bold("Score is " + score));
  }
  console.log("-------------")


}

for(i=0;i<quizArr.length;i++){
  currentQues = quizArr[i].question;
  currentAns = quizArr[i].answer;
  play(currentQues,currentAns);
}

console.log(chalk.blueBright('Yaay!!!! you scored ' + score + ' in Tokyo Olympics Quiz Game' ));