import React, { useState, useRef, useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

function NumberAnimation(props) {
    const { endValue, incrementValue, durationValue } = props;
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (el) numberAnimation(el, endValue, incrementValue, durationValue);
    }, [endValue, incrementValue, durationValue]);

    function numberAnimation(el, endValue, incrementor, duration) {
        anime({
            targets: el,
            textContent: endValue,
            round: incrementor ? 1 / incrementor : 1 / 5,
            easing: 'easeInOutQuad',
            duration: duration ? duration : 4000,
        });
    }

    return (
        <div>
            <p className="number homes">
                <span
                    className="number-animate"
                    ref={ref}
                    data-end-value={endValue}
                    data-increment={incrementValue}
                    data-duration={durationValue}
                >
                    1
                </span>{' '}
                million+
            </p>
        </div>
    );
}


function TestAnimation() {
    const [number, setNumber] = useState(60);
    const [showAnimation, setShowAnimation] = useState(false);

    function handleClick() {
        setShowAnimation(true);
    }

    function incrementNumber() {
        setNumber(number + 1);
    }

    return (
        <div>
            <p className="number homes">
                <span className={!showAnimation && "number-static"}>
                    {number} million+
                </span>
                {showAnimation && (
                    <NumberAnimation endValue={number} incrementValue="1" durationValue="5000" />
                )}
            </p>
            <button onClick={incrementNumber}>Increment Number</button>
            <button onClick={handleClick}>Activate Animation</button>
        </div>
    );
}

export default TestAnimation;
