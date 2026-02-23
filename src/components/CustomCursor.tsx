import { useEffect, useState } from 'react';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);
    const [isHidden, setIsHidden] = useState(true);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setIsHidden(false);

            const target = e.target as HTMLElement;
            setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
        };

        const handleMouseLeave = () => setIsHidden(true);
        const handleMouseEnter = () => setIsHidden(false);

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, []);

    if (isHidden) return null;

    return (
        <div
            className="fixed top-0 left-0 w-6 h-6 border-2 border-black pointer-events-none z-[9999] transition-transform duration-75 ease-out flex items-center justify-center mix-blend-difference"
            style={{
                transform: `translate(${position.x - 12}px, ${position.y - 12}px) ${isPointer ? 'scale(1.5)' : 'scale(1)'}`,
                backgroundColor: isPointer ? 'white' : 'transparent',
            }}
        >
            <div className="w-1 h-1 bg-black" />
        </div>
    );
};

export default CustomCursor;
