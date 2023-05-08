import anime from "animejs";
import { useRef, useEffect } from "react";


const NumberAnimation = ({
    endValue,
    incrementValue,
    durationValue,
    ...props
}) => {

    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (el) numberAnimation(el, endValue, incrementValue, durationValue);
    }, [endValue, incrementValue, durationValue]);

    const numberAnimation = (el, endValue, incrementor, duration) => {
        anime({
            targets: el,
            textContent: endValue,
            round: incrementor ? 1 / incrementor : 1 / 5,
            easing: 'easeInOutQuad',
            duration: duration ? duration : 4000,
        });
    }


    return (
        <span {...props} ref={ref}>
            0
        </span>
    );
}

export default NumberAnimation;