let money, time;

function start () {
	money = +prompt("Ваш бюджет на месяц", "5000");
	time = prompt("Введите дату в формате YYYY-MM-DD", "2019-08-12");

	while (isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц", "5000");
	}
}
start ();

let appData = {
    budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true
};

function chooseExpenses() {
	for (let i = 0; i < 2; i++) {
		let a = prompt("Введите обязательную статью расходов в этом месяце", "");
		let b = prompt("Во сколько обойдется?", "");
	
		if ( typeof(a) === "string" && typeof(a) != null && typeof(b) != null && a != "" && b != "") {
			console.log("done");
			appData.expenses[a] = b;
		} else {
			i--;
			alert("Вы не ввели значение");
		}
	}
}
chooseExpenses();
	
function detectDayBudget() {
	appData.moneyPerDay = (appData.budget / 30).toFixed();

	alert("Бюджет на один день " + appData.moneyPerDay + " рублей");
}

detectDayBudget();

function detectLevel() {
	if(appData.moneyPerDay < 100) {
		console.log("Низкий уровень достатка");
	} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
		console.log("Средний уровнеь достатка");
	} else if (appData.moneyPerDay > 2000) {
		console.log("Высокий уровень достатка");
	} else {
		console.log("Что-то пошло не так");
	}
}

detectLevel();

function checkSavings() {
	if (appData.savings == true){
		let save = +prompt("Какова сумма накоплений?"),
			persent = +prompt("Под какой процент?");

		appData.monthIncome = save/100/12*persent;
		alert("Доход в месяц с вашего депозита " + appData.monthIncome);
	}
}
checkSavings();

function chooseOptExpenses() {
	for (let i = 0; i < 3; i++) {
		let aa = prompt("Введите необязательную статью расходов в этом месяце", "");
		let bb = prompt("Во сколько обойдется?", "");

		appData.optionalExpenses[aa] = bb;
	}
}

chooseOptExpenses();