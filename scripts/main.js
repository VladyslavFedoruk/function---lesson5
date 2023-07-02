/*1. Написати функцію, яка запитуе у користувача значення, 
доки воно не буде коректним(любе число), або доки користувач відмовиться надати відповідь(натисне Cancel).*/

function UserValue(message) {
    while (true) {
        const input = prompt(message);
        if (input === null) {
            alert("Жаль. Сподіваюсь ще побачитись.");
            return null;
        }
        const number = parseFloat(input);
        if (!isNaN(number)) {
            return number;
        }
    }
}

/*2. Написати функцію по знаходженню коренів квадратного рівняння.
Функція знаходження квадратного кореню: Math.sqrt*/
function userDecision() {
    alert("Будемо знаходити рішення квадратного рівняння виду: ax^2 + bx + c = 0");

    const a = UserValue("Введіть a");
    if (a === null) {
        return;
    }

    const b = UserValue("Введіть b");
    if (b === null) {
        return;
    }

    const c = UserValue("Введіть c");
    if (c === null) {
        return;
    }

    const discriminant = b ** 2 - 4 * a * c;

    if (a === 0) {
        alert("a = 0. Рівняння не має рішень");
    } else if (discriminant < 0) {
        alert("D < 0. Рівняння не має рішень");
    } else if (discriminant === 0) {
        const brench0 = -b / (2 * a);
        alert("D = 0. Єдиний корень рівняння: " + brench0);
    } else {
        const brench1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const brench2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        alert("D > 0. Корені рівняння: " + brench1 + ", " + brench2);
    }
}

userDecision();