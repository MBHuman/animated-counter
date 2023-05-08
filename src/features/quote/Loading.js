import { useRef, useEffect } from "react";
import "./Loading.module.scss";
import anime from "animejs";

const Loading = ({ stop }) => {
    const wrapperRef = useRef(null);
    const circleRef = useRef(null);
    const circleAnimtationRef = useRef(null);
    const rotateAnimationRef = useRef(null);

    useEffect(() => {
        const wrapper = wrapperRef.current;
        const circle = circleRef.current;

        const circleAnimation = anime({
            targets: circle,
            strokeDashofset: [440, 0, 880],
            easing: 'linear',
            duration: 4000,
            direction: 'alternate',
            loop: true
        });

        const rotateAnimation = anime({
            targets: wrapperRef,
            rotate: 360,
            easing: 'linear',
            duration: 2000,
            loop: true
        })

        circleAnimtationRef.current = circleAnimation;
        rotateAnimationRef.current = rotateAnimation;

        circleAnimation.play();
        rotateAnimation.play();

        return () => {
            circleAnimation.pause();
            rotateAnimation.pause();
        };
    }, []);

    useEffect(() => {
        if (stop) {
            circleAnimtationRef.current.pause();
            rotateAnimationRef.current.pause();
        } else {
            circleAnimtationRef.current.play();
            rotateAnimationRef.current.play();
        }
    }, [stop]);

    return (
        <div className="loader-wrapper" ref={wrapperRef}>
            <svg viewBox="0 0 140 140">
                <circle
                    ref={circleRef}
                    cx="70"
                    cy="70"
                    r="60"
                    strokeWidth="10"
                    stroke="#222"
                    strokeDasharray="376.8"
                    strokeDashoffset="188.4"
                    fill="none"
                />
            </svg>
        </div>
    );
}

export default Loading;