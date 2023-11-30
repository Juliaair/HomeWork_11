"use strict";

let fineNumber = document.getElementById("fineNumber");
let passport = document.getElementById("passport");
let creditCardNumber = document.getElementById("creditCardNumber");
let cvv = document.getElementById("cvv");
let amount = document.getElementById("amount");
let buttonSubmit = document.getElementById("payFine");

// Перевірка наявності об'єкта у data
if (data && data.finesData) {
    let DB = data.finesData;

    buttonSubmit.addEventListener('click', payFine);

    function payFine() {
        // Валідація номера та суми
        const fineToPay = DB.find(item => item.номер === fineNumber.value);

        if (!fineToPay || parseFloat(amount.value) !== fineToPay.сума) {
            alert("Номер не співпадає або сума не співпадає");
            return;
        }

        // Валідація паспортних даних
        const passportRegex = /^[А-ЩЬЮЯЇІЄҐ]{2}\d{6}$/;
        if (!passportRegex.test(passport.value)) {
            alert("Не вірний паспортний номер");
            return;
        }

        // Валідація номера кредитної карти
        const creditCardRegex = /^\d{16}$/;
        if (!creditCardRegex.test(creditCardNumber.value)) {
            alert("Не вірна кредитна картка");
            return;
        }

        // Валідація CVV
        const cvvRegex = /^\d{3}$/;
        if (!cvvRegex.test(cvv.value)) {
            alert("Не вірний CVV");
            return;
        }

        // Видалення елемента з масиву finesData за номером
        let indexToRemove = DB.findIndex(item => item.номер === fineNumber.value);
        if (indexToRemove !== -1) {
            DB.splice(indexToRemove, 1);
            alert("Оплата успішно виконана, об'єкт видалено з DB");
        } else {
            alert("Помилка при видаленні штрафу");
        }
    }
} else {
    console.error("Помилка: об'єкт data або властивість finesData не знайдено.");
}
