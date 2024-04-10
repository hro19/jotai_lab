import { useState } from 'react';

function useCounter() {
    const [count, setCount] = useState<number>(0);

    const increase = () => {
        setCount(count + 1);
    };

    const decrease = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const isDecreaseDisable = count <= 0;

    return {
        count,
        increase,
        decrease,
        isDecreaseDisable,
    };
}

export default useCounter;