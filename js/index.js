    //?======= Завдання1 =======//

    // Створення об'єкта bankAccount
    let bankAccount = {
        ownerName: 'Іван Іванович',
        accountNumber: 'UA12345678901234567890123456',
        balance: 0,

        // Метод поповнення рахунку
        deposit: function(amount) {
            if (amount > 0) {
                this.balance += amount;
                alert(`Ви поповнили рахунок на ${amount} грн. Залишок: ${this.balance} грн.`);
                updateBalance(); // Оновлюємо інформацію на сторінці
            } else {
                alert('Сума поповнення повинна бути більшою за нуль.');
            }
        },

        // Метод зняття коштів
        withdraw: function(amount) {
            if (amount > 0 && amount <= this.balance) {
                this.balance -= amount;
                alert(`Ви зняли ${amount} грн. Залишок: ${this.balance} грн.`);
                updateBalance(); // Оновлюємо інформацію на сторінці
            } else if (amount > this.balance) {
                alert('Недостатньо коштів на рахунку.');
            } else {
                alert('Сума зняття повинна бути більшою за нуль.');
            }
        }
    };

    // Функція для оновлення балансу на сторінці
    function updateBalance() {
        document.getElementById('balance').textContent = bankAccount.balance;
    }

    // Обробка натискання на кнопку поповнення рахунку
    document.getElementById('depositBtn').addEventListener('click', function() {
        let depositAmount = parseFloat(prompt('Введіть суму для поповнення рахунку:'));
        if (!isNaN(depositAmount) && depositAmount > 0) {
            bankAccount.deposit(depositAmount);
        } else {
            alert('Будь ласка, введіть коректну суму для поповнення.');
        }
    });

    // Обробка натискання на кнопку отримання готівки
    document.getElementById('withdrawBtn').addEventListener('click', function() {
        let withdrawAmount = parseFloat(prompt('Введіть суму для зняття з рахунку:'));
        if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
            bankAccount.withdraw(withdrawAmount);
        } else {
            alert('Будь ласка, введіть коректну суму для зняття.');
        }
    });

    //?======= Завдання2 =======//

    let weather = {
        temperature: 0, // Початкова температура
        humidity: 50, // Приклад вологості
        windSpeed: 10, // Приклад швидкості вітру

        // Метод для перевірки температури
        isBelowZero: function() {
            return this.temperature < 0;
        }
    };
    
    // Обробка натискання кнопки для перевірки температури
    document.getElementById('checkTemperatureBtn').addEventListener('click', function() {
        // Отримуємо значення температури з інпуту
        weather.temperature = parseFloat(document.getElementById('temperatureInput').value);
        
        // Перевіряємо, чи температура нижча за 0
        if (weather.isBelowZero()) {
            document.getElementById('temperatureMessage').textContent = "Температура нижче 0 градусів Цельсія.";
        } else {
            document.getElementById('temperatureMessage').textContent = "Температура вище або рівна 0 градусів Цельсія.";
        }
    });

    //?======= Завдання3 =======//

    let user = {
        name: 'Іван Іванович',
        email: 'ivan@example.com',
        password: '12345',

        login: function(inputEmail, inputPassword) {
            if (this.email === inputEmail && this.password === inputPassword) {
                return true;
            } else {
                return false;
            }
        }
    };

    document.getElementById('loginBtn').addEventListener('click', function() {
        let inputEmail = document.getElementById('userEmail').value;
        let inputPassword = document.getElementById('userPassword').value;

        if (user.login(inputEmail, inputPassword)) {
            document.getElementById('loginMessage').textContent = "Успішний вхід!";
        } else {
            document.getElementById('loginMessage').textContent = "Невірний email або пароль.";
        }
    });

        //?======= Завдання4 =======//
    
        let movie = {
            title: 'The Dark Knight',
            director: 'Christopher Nolan',
            year: 2008,
            rating: 9.0,

            isHighRating: function() {
                return this.rating > 8;
            }
        };

        // Перевірка рейтингу та зміна кольору заголовка
        if (movie.isHighRating()) {
            document.getElementById('movieTitle').style.color = 'green';
        }
