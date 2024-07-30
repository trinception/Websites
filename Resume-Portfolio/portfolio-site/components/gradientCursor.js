import React, { useState, useEffect } from 'react';
import styles from './customCursor.module.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const setFromEvent = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', setFromEvent);

    return () => {
      document.removeEventListener('mousemove', setFromEvent);
    };
  }, []);

  return (
    <div className={styles.cursor} style={{ left: `${position.x}px`, top: `${position.y}px` }}></div>
  );
};

export default CustomCursor;
