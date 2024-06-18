const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 59716;

app.use(cors());
app.use(express.json());

app.post('/register', (req, res) => {
    const { name, surname, phone, email } = req.body;

    if (!name || !surname || !phone || !email) {
        return res.status(400).json({ error: 'Всі поля повинні бути заповнені' });
    }

    // Зберігання даних в базі даних або виконання інших операцій

    res.status(200).json({ message: 'Форма успішно відправлена! Дякуємо за реєстрацію.' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
