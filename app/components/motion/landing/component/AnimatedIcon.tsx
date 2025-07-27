import { useEffect, useRef } from 'react';

interface AnimatedIconProps {
    variant: keyof typeof iconVariants;
    width?: number;
    height?: number;
}

const iconVariants = {
    eye: 'https://animatedicons.co/get-icon?name=Eye&style=minimalistic&token=3363947a-d29a-4adb-ac74-dd049eef3379',
    heart: 'https://animatedicons.co/get-icon?name=Heart&style=minimalistic&token=3363947a-d29a-4adb-ac74-dd049eef3379',
    note: 'https://animatedicons.co/get-icon?name=note&style=minimalistic&token=cb234c69-9f56-4cf2-844e-2c2109b81513',
    chicken: 'https://animatedicons.co/get-icon?name=Chicken&style=minimalistic&token=9dc79d27-2b0d-4a1a-b4ca-9f0c9e02c695',
};

export default function AnimatedIcon({ variant, width = 64, height = 64 }: AnimatedIconProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Inject script only once
        if (!document.querySelector('script[src="https://animatedicons.co/scripts/embed-animated-icons.js"]')) {
            const script = document.createElement('script');
            script.src = 'https://animatedicons.co/scripts/embed-animated-icons.js';
            script.async = true;
            document.body.appendChild(script);
        }

        // Render the chosen icon
        if (containerRef.current) {
            containerRef.current.innerHTML = `
        <animated-icons
          src="${iconVariants[variant]}"
          trigger="loop"
          attributes='{
            "variationThumbColour":"#FFFFFF",
            "variationName":"Normal",
            "variationNumber":1,
            "numberOfGroups":1,
            "backgroundIsGroup":false,
            "strokeWidth":1,
            "defaultColours":{
              "group-1":"#F97316FF",
              "background":"#FFF7EDFF"
            }
          }'
          height="${height}"
          width="${width}"
        ></animated-icons>
      `;
        }
    }, [variant, width, height]);

    return <div ref={containerRef} />;
}
