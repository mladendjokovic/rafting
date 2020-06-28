import {useState} from 'react';

const useStateToggle = initialVal => {
    const [value, setValue] = useState(initialVal);
    const toggle = () => {
        setValue(!value);
    }
    return [value, toggle]
}

export default useStateToggle;