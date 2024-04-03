"use client"
import React, { useEffect } from 'react'


const StarAnmation = () => {
    useEffect(() => {
        const createStar = () => {
            const star = document.createElement("div");
            star.className = "star";

            star.style.left = Math.random() * window.innerWidth + "px";
            star.style.top = Math.random() * window.innerHeight + "px";
            document.body.appendChild(star);
            document.body.classList.add("overflow-hidden");
            setTimeout(() => {
                star.remove();
            }, 5000);
        };

        const animateStars = () => {
            setInterval(() => {
                createStar();
            }, 100);
        };

        animateStars();

        return () => {
            clearInterval(animateStars);
        };
    }, []);
    return (
        <>
            <div className="">
                <div className="sky"></div>
            </div>
        </>
    )
}

export default StarAnmation