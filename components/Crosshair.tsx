import { useEffect, useRef, RefObject } from 'react';
import { gsap } from 'gsap';

const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;

const getMousePos = (e: MouseEvent, container: HTMLElement | null) => {
   if (container) {
      const bounds = container.getBoundingClientRect();
      return {
         x: e.clientX - bounds.left,
         y: e.clientY - bounds.top
      };
   }
   return { x: e.clientX, y: e.clientY };
};

interface CrosshairProps {
   color?: string;
   containerRef?: RefObject<HTMLElement | null>;
}

const Crosshair = ({ color = 'white', containerRef }: CrosshairProps) => {
   const cursorRef = useRef<HTMLDivElement>(null);
   const lineHorizontalRef = useRef<HTMLDivElement>(null);
   const lineVerticalRef = useRef<HTMLDivElement>(null);
   const filterXRef = useRef<SVGFETurbulenceElement>(null);
   const filterYRef = useRef<SVGFETurbulenceElement>(null);

   const mouseRef = useRef({ x: 0, y: 0 });

   useEffect(() => {
      const handleMouseMove = (ev: MouseEvent) => {
         mouseRef.current = getMousePos(ev, containerRef?.current || null);

         if (containerRef?.current) {
            const bounds = containerRef.current.getBoundingClientRect();
            if (
               ev.clientX < bounds.left ||
               ev.clientX > bounds.right ||
               ev.clientY < bounds.top ||
               ev.clientY > bounds.bottom
            ) {
               gsap.to([lineHorizontalRef.current, lineVerticalRef.current], {
                  opacity: 0
               });
            } else {
               gsap.to([lineHorizontalRef.current, lineVerticalRef.current], {
                  opacity: 1
               });
            }
         }
      };

      const target = containerRef?.current || window;
      target.addEventListener('mousemove', handleMouseMove as EventListener);

      const renderedStyles = {
         tx: { previous: 0, current: 0, amt: 0.15 },
         ty: { previous: 0, current: 0, amt: 0.15 }
      };

      gsap.set([lineHorizontalRef.current, lineVerticalRef.current], {
         opacity: 0
      });

      const onMouseMove = () => {
         renderedStyles.tx.previous = renderedStyles.tx.current = mouseRef.current.x;
         renderedStyles.ty.previous = renderedStyles.ty.current = mouseRef.current.y;

         gsap.to([lineHorizontalRef.current, lineVerticalRef.current], {
            duration: 0.9,
            ease: 'Power3.easeOut',
            opacity: 1
         });

         requestAnimationFrame(render);

         target.removeEventListener('mousemove', onMouseMove as EventListener);
      };

      target.addEventListener('mousemove', onMouseMove as EventListener);

      const primitiveValues = { turbulence: 0 };

      const tl = gsap
         .timeline({
            paused: true,
            onStart: () => {
               if (lineHorizontalRef.current) lineHorizontalRef.current.style.filter = `url(#filter-noise-x)`;
               if (lineVerticalRef.current) lineVerticalRef.current.style.filter = `url(#filter-noise-y)`;
            },
            onUpdate: () => {
               filterXRef.current?.setAttribute('baseFrequency', primitiveValues.turbulence.toString());
               filterYRef.current?.setAttribute('baseFrequency', primitiveValues.turbulence.toString());
            },
            onComplete: () => {
               if (lineHorizontalRef.current && lineVerticalRef.current) {
                  lineHorizontalRef.current.style.filter = lineVerticalRef.current.style.filter = 'none';
               }
            }
         })
         .to(primitiveValues, {
            duration: 0.5,
            ease: 'power1',
            startAt: { turbulence: 1 },
            turbulence: 0
         });

      const enter = () => tl.restart();
      const leave = () => tl.progress(1).kill();

      const render = () => {
         renderedStyles.tx.current = mouseRef.current.x;
         renderedStyles.ty.current = mouseRef.current.y;

         for (const key in renderedStyles) {
            const styleKey = key as keyof typeof renderedStyles;
            renderedStyles[styleKey].previous = lerp(
               renderedStyles[styleKey].previous,
               renderedStyles[styleKey].current,
               renderedStyles[styleKey].amt
            );
         }

         gsap.set(lineVerticalRef.current, { x: renderedStyles.tx.previous });
         gsap.set(lineHorizontalRef.current, { y: renderedStyles.ty.previous });

         requestAnimationFrame(render);
      };

      const links = containerRef?.current ? containerRef.current.querySelectorAll('a') : document.querySelectorAll('a');

      links.forEach(link => {
         link.addEventListener('mouseenter', enter);
         link.addEventListener('mouseleave', leave);
      });

      return () => {
         target.removeEventListener('mousemove', handleMouseMove as EventListener);
         target.removeEventListener('mousemove', onMouseMove as EventListener);
         links.forEach(link => {
            link.removeEventListener('mouseenter', enter);
            link.removeEventListener('mouseleave', leave);
         });
      };
   }, [containerRef]);

   return (
      <div
         ref={cursorRef}
         className={`${containerRef ? 'absolute' : 'fixed'} top-0 left-0 w-full h-full pointer-events-none z-[10000]`}
      >
         <svg className="absolute top-0 left-0 w-full h-full">
            <defs>
               <filter id="filter-noise-x">
                  <feTurbulence type="fractalNoise" baseFrequency="0.000001" numOctaves={1} ref={filterXRef} />
                  <feDisplacementMap in="SourceGraphic" scale={40} />
               </filter>
               <filter id="filter-noise-y">
                  <feTurbulence type="fractalNoise" baseFrequency="0.000001" numOctaves={1} ref={filterYRef} />
                  <feDisplacementMap in="SourceGraphic" scale={40} />
               </filter>
            </defs>
         </svg>
         <div
            ref={lineHorizontalRef}
            className={`absolute w-full h-px pointer-events-none opacity-0 transform translate-y-1/2`}
            style={{ background: color }}
         ></div>
         <div
            ref={lineVerticalRef}
            className={`absolute h-full w-px pointer-events-none opacity-0 transform translate-x-1/2`}
            style={{ background: color }}
         ></div>
      </div>
   );
};

export default Crosshair;
