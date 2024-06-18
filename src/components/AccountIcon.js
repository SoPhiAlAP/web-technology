import React, { useState } from 'react';
import LoginRegisterModal from './LoginRegisterModal';
import './AccountIcon.css';

const AccountIcon = () => {
    const [showModal, setShowModal] = useState(false);
    const [isLogin, setIsLogin] = useState(true);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return (
        <div>
            <div className="account-icon" onClick={handleShow}>
                <img src="https://image.shutterstock.com/image-vector/user-icon-trendy-flat-style-260nw-418179865.jpg" alt="Account" />
            </div>
            <LoginRegisterModal show={showModal} handleClose={handleClose} isLogin={isLogin} setIsLogin={setIsLogin} />
        </div>
    );
};

export default AccountIcon;
