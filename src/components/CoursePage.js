import React from 'react';
import { useParams } from 'react-router-dom';
import './CoursePage.css';

const courseDetails = {
    'front-end-developer': {
        title: 'Front-end developer',
        description: 'FrontEnd розробник створює видиму для користувача частину веб-сторінки і його головне завдання - точно передати у верстанні те, що створив дизайнер, а також реалізувати логіку користувача.',
        sections: [
            {
                title: 'Цей курс точно для тебе, якщо ти...',
                content: 'Цей курс точно для тебе, якщо ти хочеш навчитися створювати сучасні веб-додатки, використовуючи новітні технології та інструменти, такі як HTML, CSS, JavaScript, React та інші.'
            },
            {
                title: 'Переваги бути розробником?',
                content: 'Переваги бути frontend-розробником: висока затребуваність на ринку праці, можливість працювати в різних галузях, гнучкість та можливість працювати віддалено.'
            },
            {
                title: 'Чому конкретно ви навчитеся? (програма курсу)',
                content: 'Програма курсу включає основи HTML, CSS, JavaScript, роботу з бібліотекою React, створення адаптивних веб-додатків та багато іншого.'
            }
        ]
    },
    'full-stack-developer': {
        title: 'Full-stack developer',
        description: 'Fullstack-розробник володіє навичками програмування як фронтенду (клієнтська сторона), так і бекенду (серверна сторона).',
        sections: [
            {
                title: 'Цей курс точно для тебе, якщо ти...',
                content: 'Цей курс точно для тебе, якщо ти хочеш навчитися створювати повноцінні веб-додатки від початку до кінця, використовуючи новітні технології та інструменти для обох частин веб-додатка.'
            },
            {
                title: 'Переваги бути розробником?',
                content: 'Переваги бути fullstack-розробником: висока затребуваність на ринку праці, можливість працювати над усіма аспектами веб-додатка, гнучкість та можливість працювати віддалено.'
            },
            {
                title: 'Чому конкретно ви навчитеся? (програма курсу)',
                content: 'Програма курсу включає основи HTML, CSS, JavaScript, роботу з бібліотекою React, основи Node.js, роботу з базами даних та створення адаптивних веб-додатків.'
            }
        ]
    },
    'qa-engineer': {
        title: 'QA engineer',
        description: 'QA-інженери відповідають за розробку планів тестування додатків та сайтів.',
        sections: [
            {
                title: 'Цей курс точно для тебе, якщо ти...',
                content: 'Цей курс точно для тебе, якщо ти хочеш навчитися знаходити та виправляти помилки у програмному забезпеченні, забезпечуючи його якість.'
            },
            {
                title: 'Переваги бути розробником?',
                content: 'Переваги бути QA-інженером: можливість покращувати якість продуктів, високий попит на ринку праці, робота в команді.'
            },
            {
                title: 'Чому конкретно ви навчитеся? (програма курсу)',
                content: 'Програма курсу включає основи тестування, створення тестових планів, автоматизацію тестування та багато іншого.'
            }
        ]
    },
    'ui-ux-designer': {
        title: 'UI/UX designer',
        description: 'UI/UX-дизайнери займаються створенням інтерфейсів для додатків, орієнтуючись на користувацький досвід.',
        sections: [
            {
                title: 'Цей курс точно для тебе, якщо ти...',
                content: 'Цей курс точно для тебе, якщо ти хочеш навчитися створювати зручні, естетичні та зрозумілі інтерфейси для додатків.'
            },
            {
                title: 'Переваги бути розробником?',
                content: 'Переваги бути UI/UX-дизайнером: можливість впливати на користувацький досвід, висока затребуваність на ринку праці, творчість у роботі.'
            },
            {
                title: 'Чому конкретно ви навчитеся? (програма курсу)',
                content: 'Програма курсу включає основи дизайну, роботу з дизайном інтерфейсів, користувацький досвід, створення прототипів та багато іншого.'
            }
        ]
    },
    'java-developer': {
        title: 'Java developer',
        description: 'Java-розробники – це фахівці, які створюють надійні та потужні додатки для різних галузей.',
        sections: [
            {
                title: 'Цей курс точно для тебе, якщо ти...',
                content: 'Цей курс точно для тебе, якщо ти хочеш навчитися створювати надійні та потужні додатки, використовуючи мову програмування Java.'
            },
            {
                title: 'Переваги бути розробником?',
                content: 'Переваги бути Java-розробником: висока продуктивність, безпека та масштабованість програмного забезпечення.'
            },
            {
                title: 'Чому конкретно ви навчитеся? (програма курсу)',
                content: 'Програма курсу включає основи мови Java, об\'єктно-орієнтоване програмування, роботу з базами даних та багато іншого.'
            }
        ]
    },
    'python-developer': {
        title: 'Python developer',
        description: 'Python-розробники працюють у різних галузях.',
        sections: [
            {
                title: 'Цей курс точно для тебе, якщо ти...',
                content: 'Цей курс точно для тебе, якщо ти хочеш навчитися розробляти, оптимізувати та підтримувати програмне забезпечення, яке базується на мові програмування Python.'
            },
            {
                title: 'Переваги бути розробником?',
                content: 'Переваги бути Python-розробником: можливість працювати у різних галузях, висока затребуваність на ринку праці.'
            },
            {
                title: 'Чому конкретно ви навчитеся? (програма курсу)',
                content: 'Програма курсу включає основи мови Python, роботу з фреймворками, обробку даних та створення веб-додатків.'
            }
        ]
    },
    'recruiter': {
        title: 'Recruiter',
        description: 'Гарний рекрутер забезпечує наявність найкращих фахівців у вашій компанії.',
        sections: [
            {
                title: 'Цей курс точно для тебе, якщо ти...',
                content: 'Цей курс точно для тебе, якщо ти хочеш навчитися знаходити та залучати найкращих фахівців для вашої команди.'
            },
            {
                title: 'Переваги бути розробником?',
                content: 'Переваги бути рекрутером: можливість впливати на склад команди, робота з людьми, розвиток комунікативних навичок.'
            },
            {
                title: 'Чому конкретно ви навчитеся? (програма курсу)',
                content: 'Програма курсу включає основи рекрутингу, проведення співбесід, оцінку кандидатів та багато іншого.'
            }
        ]
    },
    'devops-engineer': {
        title: 'DevOps engineer',
        description: 'DevOps-інженер відповідає за оптимізацію процесу розробки та розгортання програмного забезпечення.',
        sections: [
            {
                title: 'Цей курс точно для тебе, якщо ти...',
                content: 'Цей курс точно для тебе, якщо ти хочеш навчитися автоматизувати процеси розробки, інтегрувати різні інструменти та забезпечувати стабільність програмного забезпечення.'
            },
            {
                title: 'Переваги бути розробником?',
                content: 'Переваги бути DevOps-інженером: висока затребуваність на ринку праці, можливість оптимізувати робочі процеси, забезпечувати стабільність та надійність програм.'
            },
            {
                title: 'Чому конкретно ви навчитеся? (програма курсу)',
                content: 'Програма курсу включає основи DevOps, автоматизацію процесів, роботу з інструментами CI/CD та багато іншого.'
            }
        ]
    }
};

const CoursePage = () => {
    const { courseKey } = useParams();
    const course = courseDetails[courseKey];

    return (
        <div className="course-page">
            <div className="course-header">
                <div className="course-title-section">
                    <h1 className="course-title">{course.title}</h1>
                    <p className="course-description">{course.description}</p>
                </div>
                <div className="course-sections">
                    {course.sections.map((section, index) => (
                        <div key={index} className="course-section">
                            <h2 className="section-title">{index + 1} {section.title}</h2>
                            <p className="section-content">{section.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CoursePage;
