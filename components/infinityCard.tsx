"use client";


import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    items: {
        quote: string;
        name: string;
        imageSrc: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    useEffect(() => {
        addAnimation();
    }, []);
    const [start, setStart] = useState(false);
    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }
    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
    };
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "120s");
            }
        }
    };
    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    " flex min-w-full shrink-0 gap-4 py-8 w-max flex-nowrap",
                    start && "animate-scroll ",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item, idx) => (
                    <li
                        className="w-[350px] max-w-full relative rounded-3xl flex-shrink-0 select-none md:w-[450px]"
                        key={item.name + idx}
                    >
                        <figure className="relative group rounded-3xl ">
                            <div className="relative rounded-3xl ">
                                <Image className="absolute inset-0 z-30 blur-md rounded-3xl object-cover w-[500] h-[300px] scale-50 group-hover:scale-100 transition-transform hidden md:block" src={item.imageSrc} alt={item.name} width={450} height={300} />
                                <Image className="relative rounded-3xl object-cover w-[500] h-[300px] z-30 hidden md:block" src={item.imageSrc} alt={item.name} width={450} height={300} />
                                <Image className="absolute inset-0 z-30 blur-md rounded-3xl object-cover w-[500] h-[200px] scale-50 group-hover:scale-100 transition-transform md:hidden" src={item.imageSrc} alt={item.name} width={450} height={300} />
                                <Image className="relative rounded-3xl object-cover w-[500] h-[200px] z-30 md:hidden" src={item.imageSrc} alt={item.name} width={450} height={300} />
                            </div>
                            <div className="absolute inset-0 z-40 px-8 py-4 flex flex-col justify-center items-center bg-zinc-950/80 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className=" relative z-20 text-sm text-pretty leading-[1.6] text-gray-100 font-normal">
                                    {item.quote}
                                </span>
                                <div className="relative z-20 mt-6 flex flex-row items-center">
                                    <span className="flex flex-col gap-1">
                                        <span className=" text-lg leading-[1.6] text-secondary font-bold">
                                            {item.name}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </figure>
                    </li>
                ))}
            </ul>
        </div>
    );
};