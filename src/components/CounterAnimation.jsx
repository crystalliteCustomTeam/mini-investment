"use client"
import { useState, useEffect } from 'react';

const parseNumber = (num) => {
    return parseFloat(num.toString().replace(/,/g, '').replace(/ /g, ''));
};

const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const CounterAnimation = ({ start = "0", end, duration = 2000, prefix = '' }) => {
    const [count, setCount] = useState(parseNumber(start));
    const [increment, setIncrement] = useState(0);
    useEffect(() => {
        const parsedEnd = parseNumber(end);
        const incrementValue = (parsedEnd - parseNumber(start)) / (duration / 100);
        setIncrement(incrementValue);
        const counter = setInterval(() => {
            setCount((prevCount) => {
                if (prevCount + incrementValue >= parsedEnd) {
                    clearInterval(counter);
                    return parsedEnd;
                }
                return prevCount + incrementValue;
            });
        }, 100);
        return () => clearInterval(counter);
    }, [start, end, duration]);
    return (
        <h3 className="xl:text-[60px] lg:text-[50px] md:text-[40px] text-xl font-normal text-[#438EFF] md:mb-5">
            {formatNumber(Math.round(count))}{prefix}
        </h3>
    );
};

export default CounterAnimation;
