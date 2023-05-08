import { useState } from 'react';
import './css/Switch.css'


function Switch({ id, ClickButton, dato }) {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        if (isChecked) {
            ClickButton(dato, -dato.value);
        } else {
            ClickButton(dato, dato.value);
        }
        setIsChecked(!isChecked);
    }

    

    return (
        <label htmlFor={id} className="switch">
            <input
                type="checkbox"
                id={id}
                checked={isChecked}
                onChange={handleToggle}
            />
            <span className="slider"></span>
        </label>
    );
}

export default Switch;