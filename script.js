let money = +prompt("Ваш бюджет на месяц", "5000"),
	time = prompt("Введите дату в формате YYYY-MM-DD", "2019-08-12")

let appData = {
    budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

for (let i = 0; i < 2; i++) {
	let a = prompt("Введите обязательную статью расходов в этом месяце", "")
	let b = prompt("Во сколько обойдется?", "500")

	if ( typeof(a) === "string" && typeof(a) != null && typeof(b) != null && a != "" && b != "") {
		console.log("done");
		appData.expenses[a] = b;
	} else {
		i=0;
	}
}
	
appData.moneyPerDay = appData.budget / 30;

alert("Бюджет на один день " + appData.budget / 30 + " рублей");

if(appData.moneyPerDay < 100) {
	console.log("Ебать ты лох");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	console.log("Красавчик");
} else if (appData.moneyPerDay > 2000) {
	console.log("Батя");
} else {
	console.log("Что-то пошло не так");
}