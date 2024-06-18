import React from 'react';
import CourseCard from './CourseCard';
import './Courses.css';

const courses = [
    {
        key: 'front-end-developer',
        title: 'Front-end developer',
        duration: '5+ місяців',
        level: 'Для новачків',
        description: 'Frontend-розробник відповідає за створення зручного та естетичного вигляду вебсторінок на різних пристроях, а також реалізує анімації та інші інтерфейсні рішення.'
    },
    {
        key: 'full-stack-developer',
        title: 'Full-stack developer',
        duration: '5+ місяців',
        level: 'Для новачків',
        description: 'Fullstack-розробники володіють навичками програмування як фронтенду (клієнтська сторона), так і бекенду (серверна сторона). Вони можуть розробити повноцінний продукт від початку до кінця.'
    },
    {
        key: 'qa-engineer',
        title: 'QA engineer',
        duration: '3+ місяці',
        level: 'Для новачків',
        description: 'QA-інженери відповідають за розробку планів тестування додатків та сайтів. Тестувальник виявляє недоліки в роботі продукту та допомагає уникнути їх у майбутньому.'
    },
    {
        key: 'ui-ux-designer',
        title: 'UI/UX designer',
        duration: '4+ місяці',
        level: 'Для новачків',
        description: 'UI/UX дизайнери створюють інтерфейси додатків з орієнтацією на користувача. Вони забезпечують зручність та естетичність дизайну, аналізуючи поведінку користувачів.'
    },
    {
        key: 'java-developer',
        title: 'Java developer',
        duration: '5+ місяців',
        level: 'Для новачків',
        description: 'Java-розробники створюють надійні та потужні додатки для різних галузей. Вони забезпечують високу продуктивність, безпеку та масштабованість програмного забезпечення.'
    },
    {
        key: 'python-developer',
        title: 'Python developer',
        duration: '5+ місяців',
        level: 'Для новачків',
        description: 'Python-розробники працюють у різних галузях. Вони мають навички, необхідні для розробки, оптимізації та підтримки програмного забезпечення, яке базується на мові програмування Python.'
    },
    {
        key: 'recruiter',
        title: 'Recruiter',
        duration: '2+ місяці',
        level: 'Для новачків',
        description: 'Гарний рекрутер забезпечує наявність найкращих фахівців у вашій компанії. Він шукає таланти, проводить співбесіди та ретельно оцінює кандидатів, щоб обрати найбільш підходящих для вашої команди.'
    },
    {
        key: 'devops-engineer',
        title: 'DevOps engineer',
        duration: '4+ місяці',
        level: 'Для новачків',
        description: 'DevOps-інженер відповідає за оптимізацію процесу розробки та розгортання програмного забезпечення. Вони автоматизують робочі процеси, інтегрують різноманітні інструменти та гарантують безперебійну реалізацію нових версій програм.'
    }
];

const Courses = () => {
    return (
        <div className="courses-container">
            {courses.map((course) => (
                <CourseCard key={course.key} course={course} />
            ))}
        </div>
    );
};

export default Courses;
