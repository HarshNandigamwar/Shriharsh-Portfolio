import React, { useEffect, useState } from "react";

const colors = ["#9f4aef", "#341b4c", "#4C4CFF"];

const InteractiveDots = ({ count = 30 }) => {
  const [dots, setDots] = useState([]);
  const [mousePos, setMousePos] = useState({ x: -999, y: -999 });

  useEffect(() => {
    const generatedDots = Array.from({ length: count }).map(() => ({
      id: Math.random(),
      size: Math.random() * 8 + 4, // 4-12px
      left: Math.random() * 100,
      bottom: -10,
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: Math.random() * 1 + 0.5, // 0.5 - 1.5 px per frame
    }));
    setDots(generatedDots);
  }, [count]);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    let animationFrame;
    const animate = () => {
      setDots((prev) =>
        prev.map((dot) => {
          let newBottom = dot.bottom + dot.speed;
          // Reset when off screen
          if (newBottom > window.innerHeight + 20) newBottom = -10;

          // Cursor interaction: attract if close
          const dotX = (dot.left / 100) * window.innerWidth;
          const dotY = window.innerHeight - newBottom;
          const dx = mousePos.x - dotX;
          const dy = mousePos.y - dotY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          let newLeft = dot.left;
          if (dist < 100) {
            newLeft += dx * 0.001; // small attraction
          }

          return { ...dot, bottom: newBottom, left: newLeft };
        })
      );
      animationFrame = requestAnimationFrame(animate);
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [mousePos]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="absolute rounded-full "
          style={{
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            left: `${dot.left}%`,
            bottom: `${dot.bottom}px`,
            backgroundColor: dot.color,
          }}
        />
      ))}
    </div>
  );
};

export default InteractiveDots;
