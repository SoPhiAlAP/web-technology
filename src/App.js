import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import Courses from './components/Courses';
import CoursePage from './components/CoursePage'; // Додаємо імпорт
import './App.css';
import './components/CourseCard.css';
import './components/Courses.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [showConsultation, setShowConsultation] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    email: ''
  });

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const [registerData, setRegisterData] = useState({
    name: '',
    surname: '',
    middleName: '',
    phone: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleConsultationClose = () => {
    setShowConsultation(false);
    setErrors({});
    setSuccessMessage('');
  };

  const handleLoginClose = () => {
    setShowLogin(false);
    setErrors({});
    setSuccessMessage('');
  };

  const handleRegisterClose = () => {
    setShowRegister(false);
    setErrors({});
    setSuccessMessage('');
  };

  const handleConsultationShow = () => setShowConsultation(true);
  const handleLoginShow = () => setShowLogin(true);
  const handleRegisterShow = () => setShowRegister(true);

  const handleChange = (e, setData) => {
    const { name, value } = e.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const validateConsultationForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Ім'я обов'язкове";
    if (!formData.surname) newErrors.surname = "Прізвище обов'язкове";
    if (!formData.phone) {
      newErrors.phone = "Телефон обов'язковий";
    } else if (!/^(?:\+380|380|0)\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Неправильно вказано номер телефону.";
    }
    if (!formData.email) {
      newErrors.email = "Електронна пошта обов'язкова";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Невірний формат електронної пошти";
    }
    return newErrors;
  };

  const handleConsultationSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateConsultationForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      fetch('http://localhost:59716/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            setSuccessMessage('Форма успішно відправлена! Дякуємо за реєстрацію. З вами зв\'яжуться найближчим часом.');
          })
          .catch(error => {
            setErrors({ form: 'Помилка відправки форми. Спробуйте ще раз.' });
          });
    }
  };

  const validateLoginForm = () => {
    const newErrors = {};
    if (!loginData.email) newErrors.email = "Електронна пошта обов'язкова";
    if (!loginData.password) newErrors.password = "Пароль обов'язковий";
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
            return response.json();
          })
          .then(data => {
            setSuccessMessage('Вхід успішний!');
          })
          .catch(error => {
            setErrors({ form: 'Помилка входу. Спробуйте ще раз.' });
          });
    }
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
            return response.json();
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
      <div className="App">
        <Routes>
          <Route
              path="/"
              element={
                <>
                  <header className="App-header text-center py-5" style={{ backgroundColor: '#FCEAE9' }}>
                    <h1 className="header-title">Програмування, дизайн,<br />тестування, рекрутмент</h1>
                    <Button className="btn btn-danger mt-4 header-button" onClick={handleConsultationShow}>Отримати консультацію</Button>
                    <Button className="btn btn-secondary mt-4 header-button" onClick={handleLoginShow}>Вхід</Button>
                    <div className="info-container d-flex justify-content-between mt-4">
                      <div className="p-3 info-box" style={{ backgroundColor: '#E0F7FA' }}>
                        <div className="emoji-circle">📅</div>
                        IT-курси онлайн з гнучким графіком
                      </div>
                      <div className="p-3 info-box" style={{ backgroundColor: '#FFF3E0' }}>
                        <div className="emoji-circle">💼</div>
                        Гарантія працевлаштування
                      </div>
                      <div className="p-3 info-box" style={{ backgroundColor: '#EDE7F6' }}>
                        <div className="emoji-circle">💰</div>
                        Повернемо кошти, якщо не знайдеш роботу
                      </div>
                    </div>
                  </header>
                  <div className="content">
                    <h2 className="course-header">Наші курси</h2>
                    <Courses />
                  </div>
                  <Modal show={showConsultation} onHide={handleConsultationClose} centered>
                    <Modal.Header closeButton>
                      <Modal.Title className="modal-title-custom">Реєстрація</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      {successMessage ? (
                          <Alert variant="success">{successMessage}</Alert>
                      ) : (
                          <Form className="registration-form" onSubmit={handleConsultationSubmit}>
                            <Form.Group controlId="formName" className="form-group-custom">
                              <Form.Label>Ім'я</Form.Label>
                              <Form.Control
                                  type="text"
                                  placeholder="Введіть ім'я"
                                  name="name"
                                  value={formData.name}
                                  onChange={(e) => handleChange(e, setFormData)}
                                  isInvalid={!!errors.name}
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.name}
                              </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="formSurname" className="form-group-custom">
                              <Form.Label>Прізвище</Form.Label>
                              <Form.Control
                                  type="text"
                                  placeholder="Введіть прізвище"
                                  name="surname"
                                  value={formData.surname}
                                  onChange={(e) => handleChange(e, setFormData)}
                                  isInvalid={!!errors.surname}
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.surname}
                              </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="formPhone" className="form-group-custom">
                              <Form.Label>Телефон</Form.Label>
                              <Form.Control
                                  type="text"
                                  placeholder="Введіть телефон"
                                  name="phone"
                                  value={formData.phone}
                                  onChange={(e) => handleChange(e, setFormData)}
                                  isInvalid={!!errors.phone}
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.phone}
                              </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="formEmail" className="form-group-custom">
                              <Form.Label>Електронна пошта</Form.Label>
                              <Form.Control
                                  type="email"
                                  placeholder="Введіть електронну пошту"
                                  name="email"
                                  value={formData.email}
                                  onChange={(e) => handleChange(e, setFormData)}
                                  isInvalid={!!errors.email}
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.email}
                              </Form.Control.Feedback>
                            </Form.Group>
                            <Button variant="danger" type="submit" className="btn-submit">
                              Записатись
                            </Button>
                          </Form>
                      )}
                    </Modal.Body>
                  </Modal>

                  <Modal show={showLogin} onHide={handleLoginClose} centered>
                    <Modal.Header closeButton>
                      <Modal.Title className="modal-title-custom">Вхід</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      {successMessage ? (
                          <Alert variant="success">{successMessage}</Alert>
                      ) : (
                          <Form className="login-form" onSubmit={handleLoginSubmit}>
                            <Form.Group controlId="formEmail" className="form-group-custom">
                              <Form.Label>Електронна пошта</Form.Label>
                              <Form.Control
                                  type="email"
                                  placeholder="Введіть електронну пошту"
                                  name="email"
                                  value={loginData.email}
                                  onChange={(e) => handleChange(e, setLoginData)}
                                  isInvalid={!!errors.email}
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.email}
                              </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="formPassword" className="form-group-custom">
                              <Form.Label>Пароль</Form.Label>
                              <Form.Control
                                  type="password"
                                  placeholder="Введіть пароль"
                                  name="password"
                                  value={loginData.password}
                                  onChange={(e) => handleChange(e, setLoginData)}
                                  isInvalid={!!errors.password}
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.password}
                              </Form.Control.Feedback>
                            </Form.Group>
                            <Button variant="secondary" type="submit" className="btn-submit">
                              Увійти
                            </Button>
                            <div className="mt-3">
                              <Button variant="link" onClick={handleRegisterShow}>
                                Зареєструватись
                              </Button>
                            </div>
                          </Form>
                      )}
                    </Modal.Body>
                  </Modal>

                  <Modal show={showRegister} onHide={handleRegisterClose} centered>
                    <Modal.Header closeButton>
                      <Modal.Title className="modal-title-custom">Реєстрація</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      {successMessage ? (
                          <Alert variant="success">{successMessage}</Alert>
                      ) : (
                          <Form className="registration-form" onSubmit={handleRegisterSubmit}>
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
                              <Form.Control.Feedback type="invalid">
                                {errors.name}
                              </Form.Control.Feedback>
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
                              <Form.Control.Feedback type="invalid">
                                {errors.surname}
                              </Form.Control.Feedback>
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
                              <Form.Control.Feedback type="invalid">
                                {errors.middleName}
                              </Form.Control.Feedback>
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
                              <Form.Control.Feedback type="invalid">
                                {errors.phone}
                              </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="formEmail" className="form-group-custom">
                              <Form.Label>Електронна пошта</Form.Label>
                              <Form.Control
                                  type="email"
                                  placeholder="Введіть електронну пошту"
                                  name="email"
                                  value={registerData.email}
                                  onChange={(e) => handleChange(e, setRegisterData)}
                                  isInvalid={!!errors.email}
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.email}
                              </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="formPassword" className="form-group-custom">
                              <Form.Label>Пароль</Form.Label>
                              <Form.Control
                                  type="password"
                                  placeholder="Введіть пароль"
                                  name="password"
                                  value={registerData.password}
                                  onChange={(e) => handleChange(e, setRegisterData)}
                                  isInvalid={!!errors.password}
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.password}
                              </Form.Control.Feedback>
                            </Form.Group>
                            <Button variant="secondary" type="submit" className="btn-submit">
                              Зареєструватись
                            </Button>
                          </Form>
                      )}
                    </Modal.Body>
                  </Modal>
                </>
              }
          />
          <Route path="/courses/:courseKey" element={<CoursePage />} />
        </Routes>
      </div>
  );
}

export default App;
