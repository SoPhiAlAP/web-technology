const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 1234;

app.use(cors());
app.use(express.json());

let users = [];

app.post('/register', (req, res) => {
    const { name, surname, middleName, phone, email, password } = req.body;

    if (!name || !surname || !middleName || !phone || !email || !password) {
        return res.status(400).json({ error: 'Всі поля повинні бути заповнені' });
    }

    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(400).json({ error: 'Користувач з таким емейлом вже існує' });
    }

    const newUser = { name, surname, middleName, phone, email, password };
    users.push(newUser);

    res.status(200).json({ message: 'Реєстрація успішна!' });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const user = users.find(user => user.email === email && user.password === password);
    if (!user) {
        return res.status(400).json({ error: 'Неправильний емейл або пароль' });
    }

    res.status(200).json({ message: 'Вхід успішний!' });
});

app.listen(PORT, () => {
    console.log(`AuthServer is running on http://localhost:${PORT}`);
});
