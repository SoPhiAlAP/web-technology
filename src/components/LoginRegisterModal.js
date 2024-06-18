import React, { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import './Login.css';

const LoginRegisterModal = ({ show, handleClose, isLogin, setIsLogin }) => {
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [registerData, setRegisterData] = useState({ name: '', surname: '', middleName: '', phone: '', email: '', password: '' });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e, setData) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const validateLoginForm = () => {
        const newErrors = {};
        if (!loginData.email) newErrors.email = "Електронна пошта обов'язкова";
        if (!loginData.password) newErrors.password = "Пароль обов'язковий";
        return newErrors;
    };

    const validateRegisterForm = () => {
        const newErrors = {};
        if (!registerData.name) newErrors.name = "Ім'я обов'язкове";
        if (!registerData.surname) newErrors.surname = "Прізвище обов'язкове";
        if (!registerData.middleName) newErrors.middleName = "По батькові обов'язкове";
        if (!registerData.phone) newErrors.phone = "Телефон обов'язковий";
        if (!registerData.email) newErrors.email = "Електронна пошта обов'язкова";
        if (!registerData.password) newErrors.password = "Пароль обов'язковий";
        return newErrors;
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateLoginForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            fetch('http://localhost:1234/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginData)
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.text();
                })
                .then(data => {
                    setSuccessMessage('Вхід успішний!');
                })
                .catch(error => {
                    setErrors({ form: 'Помилка входу. Спробуйте ще раз.' });
                });
        }
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateRegisterForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            fetch('http://localhost:1234/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(registerData)
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.text();
                })
                .then(data => {
                    setSuccessMessage('Реєстрація успішна!');
                })
                .catch(error => {
                    setErrors({ form: 'Помилка реєстрації. Спробуйте ще раз.' });
                });
        }
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title className="modal-title-custom">{isLogin ? 'Вхід' : 'Реєстрація'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {successMessage ? (
                    <Alert variant="success">{successMessage}</Alert>
                ) : (
                    <Form className="account-modal" onSubmit={isLogin ? handleLoginSubmit : handleRegisterSubmit}>
                        {!isLogin && (
                            <>
                                <Form.Group controlId="formName" className="form-group-custom">
                                    <Form.Label>Ім'я</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Введіть ім'я"
                                        name="name"
                                        value={registerData.name}
                                        onChange={(e) => handleChange(e, setRegisterData)}
                                        isInvalid={!!errors.name}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="formSurname" className="form-group-custom">
                                    <Form.Label>Прізвище</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Введіть прізвище"
                                        name="surname"
                                        value={registerData.surname}
                                        onChange={(e) => handleChange(e, setRegisterData)}
                                        isInvalid={!!errors.surname}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.surname}</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="formMiddleName" className="form-group-custom">
                                    <Form.Label>По батькові</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Введіть по батькові"
                                        name="middleName"
                                        value={registerData.middleName}
                                        onChange={(e) => handleChange(e, setRegisterData)}
                                        isInvalid={!!errors.middleName}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.middleName}</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="formPhone" className="form-group-custom">
                                    <Form.Label>Телефон</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Введіть телефон"
                                        name="phone"
                                        value={registerData.phone}
                                        onChange={(e) => handleChange(e, setRegisterData)}
                                        isInvalid={!!errors.phone}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
                                </Form.Group>
                            </>
                        )}
                        <Form.Group controlId="formEmail" className="form-group-custom">
                            <Form.Label>Електронна пошта</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Введіть електронну пошту"
                                name="email"
                                value={isLogin ? loginData.email : registerData.email}
                                onChange={(e) => handleChange(e, isLogin ? setLoginData : setRegisterData)}
                                isInvalid={!!errors.email}
                            />
                            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formPassword" className="form-group-custom">
                            <Form.Label>Пароль</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Введіть пароль"
                                name="password"
                                value={isLogin ? loginData.password : registerData.password}
                                onChange={(e) => handleChange(e, isLogin ? setLoginData : setRegisterData)}
                                isInvalid={!!errors.password}
                            />
                            <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                        </Form.Group>
                        <Button variant="secondary" type="submit" className="btn-submit">
                            {isLogin ? 'Увійти' : 'Зареєструватись'}
                        </Button>
                        {isLogin && (
                            <div className="mt-3">
                                <Button variant="link" onClick={() => setIsLogin(false)}>
                                    Зареєструватись
                                </Button>
                            </div>
                        )}
                    </Form>
                )}
            </Modal.Body>
        </Modal>
    );
};

export default LoginRegisterModal;
