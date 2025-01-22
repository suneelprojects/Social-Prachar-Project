import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './QuickHelp_Button.module.css';
import whatsappLogo from '../../assets/AssetsOfDetailsPage/masterclass/whatsapp-logo.png';

const QuickHelpButton = () => {
    const [isVisible, setIsVisible] = useState(true);
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/suggestions");
    };

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <>
            <div className={`position-fixed ${styles.suggestionButton}`} style={{ bottom: '200px', right: '20px' }}>
                <div>
                    <p className={styles.quickHelpText}>Quick help!</p>
                    <a
                        href="https://wa.me/9515235259"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`btn shadow ${styles.roundButton}`}
                    >
                        <img src={whatsappLogo} alt="WhatsApp" className={styles.whatsappLogo} />
                    </a>
                </div>
                <button onClick={handleClose} className={`btn fw-bold ${styles.closeButton}`}>
                    x
                </button>
            </div>
        </>
    );
};

export default QuickHelpButton;