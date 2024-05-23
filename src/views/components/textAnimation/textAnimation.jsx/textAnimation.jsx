import React, { useState, useEffect, useRef } from 'react';
import style from './textAnimation.module.scss';

const TextAnimation = () => {
    const [phase, setPhase] = useState(0);
    const textRef = useRef(null);

    const textContent = "Photo by - VE Arjun & Aanya Wedding Collections Represented by VE All images copyright 2024 Photo by - VE Arjun & Aanya Wedding Collections Represented by VE Photo by - VE Arjun & Aanya Wedding Collections Represented by VE All images copyright 2024 Photo by - VE Arjun & Aanya Wedding Collections Represented by VE";

    useEffect(() => {
        const intervalId = setInterval(() => {
            setPhase(prevPhase => prevPhase + 0.05);
        }, 60);
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        if (textRef.current) {
            const textLength = textRef.current.getComputedTextLength();
            textRef.current.parentElement.setAttribute("width", textLength + 20);
        }
    }, [phase]);

    const generateWavePath = (currentPhase) => {
        let path = "M";
        const baseHeight = 50;

        const waveParams = [
            { amplitude: 5, frequency: 0.01 },
            { amplitude: 7, frequency: 0.02 },
            { amplitude: 5,  frequency: 0.02 },
        ];

        for (let x = 0; x <= 1000; x += 10) {
            let y = baseHeight;
            waveParams.forEach((wave, index) => {
                y += wave.amplitude * Math.sin(wave.frequency * x + currentPhase + index * Math.PI / 4);
            });

            path += ` ${x},${y}`;
        }

        return path;
    };

    return (
        <div className={style.container}>
            <svg xmlns="http://www.w3.org/2000/svg">
                <path id="wavePath" fill="transparent" stroke="transparent"
                      d={generateWavePath(phase)} />
                <text ref={textRef} className={style.text} fontSize="18" fill="black">
                    <textPath href="#wavePath" startOffset="0">
                        {textContent}
                    </textPath>
                </text>
            </svg>
        </div>
    );
};

export default TextAnimation;
