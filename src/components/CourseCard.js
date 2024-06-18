import React from 'react';
import { Link } from 'react-router-dom';
import './CourseCard.css';

const CourseCard = ({ course }) => {
    return (
        <div className="course-card">
            <h3>{course.title}</h3>
            <p>{course.duration} • {course.level}</p>
            <p>{course.description}</p>
            <Link to={`/courses/${course.key}`} className="btn btn-orange">Детальніше</Link>
        </div>
    );
};

export default CourseCard;
