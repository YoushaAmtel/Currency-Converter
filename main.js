import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};
let user_answer = await inquirer.prompt([
    {
        name: "From",
        message: "Enter from CURRENCY",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: "To",
        message: "Enter To CURRENCY",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: "amount",
        message: "Enter your Amount",
        type: "number"
    }
]);
//let Fromamount = currency[user_answer.From] 
//let Toamount = currency[user_answer.To]
//let amount = user_answer.amount
//let baseamount = amount / Fromamount //USD base currency
//let convertedamount = baseamount * Toamount
//console.log(convertedamount);
const { From, To, amount } = user_answer;
if (From && To && amount) {
    console.log(`your conversion from ${From} to ${To} is
   ${user_answer[From][To] * amount} `);
}
else {
    console.log("invalid inputs");
}
