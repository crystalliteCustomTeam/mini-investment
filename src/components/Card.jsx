"use client";
import InfinityImage from "media/infinityAnimation.png";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
const Card = () => {
    const cardRef = useRef(null);
    // Reference to the card element
    const [bounds, setBounds] = useState(null);
    // State to store the bounding rectangle of the card
    const [isHovered, setIsHovered] = useState(false);
    // State to track whether the card is hovered

    // Function to rotate the card based on mouse position
    const rotateToMouse = (e) => {
        if (!bounds || !cardRef.current) return;
        // Ensure bounds and cardRef are set
        const { clientX: mouseX, clientY: mouseY } = e;
        // Get mouse coordinates
        const leftX = mouseX - bounds.x;
        // Calculate X position relative to the card
        const topY = mouseY - bounds.y;
        // Calculate Y position relative to the card
        const center = {
            x: leftX - bounds.width / 2,
            // Center X relative to the card
            y: topY - bounds.height / 2,
            // Center Y relative to the card
        };
        const distance = Math.sqrt(center.x ** 2 + center.y ** 2);
        // Calculate distance from the center of the card

        // Apply transform to the card based on mouse position
        cardRef.current.style.transform = `
        scale3d(1.07, 1.07, 1.07)
        rotate3d(${center.y / 100}, ${-center.x / 100}, 0, ${Math.log(distance) * 2}deg)
      `;
    };
    // Function to handle mouse enter event
    const handleMouseEnter = () => {
        if (cardRef.current) {
            setBounds(cardRef.current.getBoundingClientRect());
            // Set the bounds of the card
            setIsHovered(true);
            // Set hover state to true
            document.addEventListener("mousemove", rotateToMouse);
            // Add mousemove event listener
        }
    };
    // Function to handle mouse leave event
    const handleMouseLeave = () => {
        document.removeEventListener("mousemove", rotateToMouse);
        // Remove mousemove event listener
        if (cardRef.current) {
            cardRef.current.style.transform = "";
            // Reset card transform
            setIsHovered(false);
            // Set hover state to false
        }
    };
    // useEffect to add event listeners on mount and clean up on unmount
    useEffect(() => {
        const card = cardRef.current;
        if (card) {
            card.addEventListener("mouseenter", handleMouseEnter);
            // Add mouseenter event listener
            card.addEventListener("mouseleave", handleMouseLeave);
            // Add mouseleave event listener
        }
        return () => {
            if (card) {
                card.removeEventListener("mouseenter", handleMouseEnter);
                // Remove mouseenter event listener
                card.removeEventListener("mouseleave", handleMouseLeave);
                // Remove mouseleave event listener
            }
        };
    }, [bounds]);
    // Dependencies for the effect
    return (
        <div
            ref={cardRef}
            className="card relative transition-transform duration-300 ease-out overflow-hidden"
        >
            <Image src={InfinityImage} alt="infinity-animations" className="block ms-auto" priority={true} />
        </div>
    );
};

export default Card;
