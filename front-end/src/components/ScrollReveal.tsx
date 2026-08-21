import React, { useEffect, useRef, useState } from "react";

export type AnimationType =
    | "pop"
    | "pop-up"
    | "pop-down"
    | "fade-up"
    | "fade-down"
    | "fade-left"
    | "fade-right"
    | "zoom-in"
    | "zoom-out";

export interface ScrollRevealProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    animation?: AnimationType;
    duration?: number; // duration in ms
    delay?: number; // delay in ms
    threshold?: number; // 0.0 to 1.0
    rootMargin?: string;
    repeat?: boolean; // true allows in-and-out on scroll
    className?: string;
    as?: React.ElementType;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    animation = "pop",
    duration = 750,
    delay = 0,
    threshold = 0.15,
    rootMargin = "-20px 0px -20px 0px",
    repeat = true,
    className = "",
    as: Component = "div",
    style,
    ...rest
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const node = elementRef.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else if (repeat) {
                    setIsVisible(false);
                }
            },
            {
                threshold,
                rootMargin,
            }
        );

        observer.observe(node);

        return () => {
            if (node) observer.unobserve(node);
            observer.disconnect();
        };
    }, [threshold, rootMargin, repeat]);

    const getInitialStyle = (): React.CSSProperties => {
        const transition = `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, filter ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`;

        switch (animation) {
            case "pop":
            case "pop-up":
                return {
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                        ? "perspective(1000px) translateY(0) scale(1)"
                        : "perspective(1000px) translateY(32px) scale(0.92)",
                    filter: isVisible ? "blur(0px)" : "blur(2px)",
                    transition,
                    willChange: "opacity, transform, filter",
                };
            case "pop-down":
                return {
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                        ? "perspective(1000px) translateY(0) scale(1)"
                        : "perspective(1000px) translateY(-32px) scale(0.92)",
                    filter: isVisible ? "blur(0px)" : "blur(2px)",
                    transition,
                    willChange: "opacity, transform, filter",
                };
            case "fade-up":
                return {
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(40px)",
                    transition,
                    willChange: "opacity, transform",
                };
            case "fade-down":
                return {
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(-40px)",
                    transition,
                    willChange: "opacity, transform",
                };
            case "fade-left":
                return {
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateX(0)" : "translateX(-48px)",
                    transition,
                    willChange: "opacity, transform",
                };
            case "fade-right":
                return {
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateX(0)" : "translateX(48px)",
                    transition,
                    willChange: "opacity, transform",
                };
            case "zoom-in":
                return {
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "scale(1)" : "scale(0.8)",
                    transition,
                    willChange: "opacity, transform",
                };
            case "zoom-out":
                return {
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "scale(1)" : "scale(1.15)",
                    transition,
                    willChange: "opacity, transform",
                };
            default:
                return {
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "scale(1)" : "scale(0.95)",
                    transition,
                };
        }
    };

    return (
        <Component
            ref={elementRef}
            className={`scroll-reveal-item ${className}`}
            style={{
                ...getInitialStyle(),
                ...style,
            }}
            {...rest}
        >
            {children}
        </Component>
    );
};

export default ScrollReveal;
