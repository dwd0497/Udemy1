let money;
let time;
let rashod1;
let rashod11;
let rashod2;
let rashod22;
let optionalExpenses;
let income;

money = prompt("Ваш бюджет на месяц", "5000");
time = prompt("Введите дату в формате YYYY-MM-DD", "2019-08-12");
rashod1 = prompt("Введите обязательную статью расходов в этом месяце", "Расходы на еду");
rashod11 = prompt("Во сколько обойдется?", "1500");
rashod2 = prompt("Введите обязательную статью расходов в этом месяце", "Расходы на девочек");
rashod22 = prompt("Во сколько обойдется?", "500");

Number (money);
Number (rashod11);
Number (rashod22);

let expenses = {
    rashod1 : rashod11,
    rashod2 : rashod22
};
let appData = {
    first : money,
    second : time,
    third : expenses,
    fourt : optionalExpenses,
    fifth : income,
    savings : false
};
alert("Бюджет на один день " + (appData.first - rashod11 - rashod22)/ 30 + " рублей");
