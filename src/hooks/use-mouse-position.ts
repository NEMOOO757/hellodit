import { useState, useEffect, RefObject } from 'react';

export function useMousePosition(ref?: RefObject<HTMLElement>) {
  const [position, setPosition] = useState({ x: 0, y: 0, elementX: 0, elementY: 0 });

  useEffect(() => {
    let animationFrameId: number;

    const handleMouseMove = (event: MouseEvent) => {
      animationFrameId = requestAnimationFrame(() => {
        let elementX = 0;
        let elementY = 0;

        if (ref?.current) {
          const rect = ref.current.getBoundingClientRect();
          elementX = (event.clientX - rect.left) / rect.width;
          elementY = (event.clientY - rect.top) / rect.height;
        }

        setPosition({
          x: event.clientX,
          y: event.clientY,
          elementX,
          elementY,
        });
      });
    };

    const target = ref?.current || window;
    target.addEventListener('mousemove', handleMouseMove as EventListener);

    return () => {
      target.removeEventListener('mousemove', handleMouseMove as EventListener);
      cancelAnimationFrame(animationFrameId);
    };
  }, [ref]);

  return position;
}
