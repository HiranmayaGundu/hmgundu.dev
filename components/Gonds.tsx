"use client";
import { useSpring, animated as a } from "@react-spring/web";
import { MouseEventHandler, useCallback } from "react";
interface GondsProps {
  children?: React.ReactNode;
}
const calc = (x: number, y: number): number[] => [
  x - window.innerWidth / 2,
  y - window.innerHeight / 2,
];

const Gonds = (props: GondsProps) => {
  const [springProps, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 800, friction: 140 },
  }));
  const onMouseMove: MouseEventHandler<HTMLDivElement> = useCallback(
    ({ clientX: x, clientY: y }) => set.start({ xy: calc(x, y) }),
    [set]
  );

  const interpolateBackground = springProps.xy.to(
    (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
  );

  return (
    <div onMouseMove={onMouseMove}>
      <svg width="380px" height="380px" viewBox="0 0 595.3 841.9" {...props}>
        <style>
          {
            ".prefix__st0{display:none}.prefix__st4{fill:#f4c59a}.prefix__st5{fill:#e5b389}.prefix__st7{fill:#202223}.prefix__st11{fill:hsl(var(--icon-shirt-secondary))}.prefix__st13{display:inline;fill:#f9af37}"
          }
        </style>
        <g id="prefix__BG1">
          <circle
            id="prefix__XMLID_11_"
            cx={292.1}
            cy={482.9}
            r={268}
            fill="hsl(var(--icon-background))"
          />
        </g>
        <g id="prefix__BG2" className="prefix__st0">
          <circle
            id="prefix__XMLID_1_"
            cx={292.1}
            cy={482.9}
            r={268}
            display="inline"
            fill="#55586b"
          />
        </g>
        <a.g style={{ transform: interpolateBackground }}>
          <g id="prefix__Neck">
            <path
              id="prefix__XMLID_104_"
              d="M345.9 497.6c-.2 1.9-.6 3.7-1.1 5.4-1.3 4.4-3.4 8.2-6.1 11.3-7.6 8.5-20.3 11.9-35.3 9.4-33.3-2.9-47.3-20.7-39.9-55.2.6-5.1 0-12.4-1.4-21.3 11.9 18.4 23.5 25.9 34.9 24.8 12.6-1.1 24.9-12.6 36.9-30.9-1.2 10-2 19-.6 24 2.7 2.8 5.9 4.8 9.2 6.3 3.3 10.1 4.3 18.9 3.4 26.2z"
              fill="#fdd4ab"
            />
            <path
              id="prefix__XMLID_103_"
              className="prefix__st4"
              d="M345.9 497.6c-.4 1.9-.8 3.7-1.1 5.4-1.6 7.9-2.8 14.1-2.8 14.4 0 .1-.4-3.5-3.4-3.1-14.6 1.9-28.6-33.6-25.8-46.7.3-1.5.8-2.7 1.6-3.5 5.2-5.6 11.6-11.9 17.6-20.2.6-.9 1.2-1.7 1.8-2.6-.1.7-.2 1.4-.2 2-1.1 9.2-1.6 17.3-.4 22 2.7 2.8 5.9 4.8 9.2 6.3 3.4 9.9 4.4 18.7 3.5 26z"
            />
            <path
              id="prefix__XMLID_102_"
              className="prefix__st5"
              d="M342.4 471.5c-17.7 5.2-19.6-7.6-18.6-17.6 2.7-3 5.5-6.4 8.2-10.1l1.5-.8.1.2c-1.1 9.2-1.6 17.3-.4 22 2.7 2.8 5.8 4.8 9.2 6.3z"
            />
          </g>
          <g id="prefix__Face">
            <path
              id="prefix__XMLID_10_"
              className="prefix__st5"
              d="M248.6 392c-7.5-8.1-8.7-3.4-5.4 10.6-.8 2.7-.6 7.3 0 12.9 1.4 11 11 11.6 8.1 0l-2.7-23.5z"
            />
            <path
              id="prefix__XMLID_33_"
              className="prefix__st4"
              d="M345.1 388.4c-2.3 26.3-5.9 46-11.6 54.5-1.3 1.5-2.6 3.1-3.9 4.6-7.9 9.5-15.6 19.8-23.5 24.3-3.3 1.9-6.6 2.8-10 2.3-11.4-.5-20.9-8-29.7-19.3-3.5-4.5-6.8-9.5-10.1-15-6.3-14.8-8.4-32.3-8-51.6-.6-13.3.4-25.8 5-36.3 33.5-45.1 92.9-3.6 91.8 36.5z"
            />
            <path
              id="prefix__XMLID_21_"
              className="prefix__st5"
              d="M345.1 388.4c-2.3 26.3-5.9 46-11.6 54.5-9.3 10.6-18.2 23.6-27.4 28.9 17.8-16 31-43.4 39-83.4z"
            />
            <path
              id="prefix__XMLID_8_"
              className="prefix__st5"
              d="M345.1 388.4c7.5-8.1 8.7-3.4 5.4 10.6.8 2.7.6 7.3 0 12.9-1.4 11-11 11.6-8.1 0l2.7-23.5z"
            />
          </g>
          <g id="prefix__Hair">
            <path
              id="prefix__XMLID_97_"
              d="M359.9 390c1.5 1.8 1.5 3.8 4.3.6.3 7.9-1.9 14-7.5 17.8-1.3.9-2.8 1.6-4.4 2.3-1.2 6.7-.9 12.2 1.8 15.8-1.5 4.7-4.2 5.8-7.9 3.3.7 16.7-2.4 27.5-13.7 25.5l1.3-14.2c3.5-4.7 6.2-14.4 8.6-25.9 5.8 17.6 13.1-36.9 3.8-27.1-2.7-1-4.2 6-5.1 17-.5-12.3-3.1-23.1-8.1-32.3-6.7-7.1-6.9-24.9-14.4-27.7-3.6 1.1-7.7 1.5-13.7-.1-1.5-.4-3.1-.9-4.8-1.6-.8-.3-1.6-.7-2.5-1-.8-.3-1.7-.6-2.5-.9-1-.3-2-.6-3-.8-1.4-.3-2.8-.6-4.2-.8-3-.4-6.2-.6-9.4-.5-1.5.1-3.1.2-4.7.3-5.4 4.2-11 8.2-17.7 10 .1 11-10 21.6-6.5 33.4.8 2.7-5.1 23.5-6.3 22.8 4 12.2.9 16.3-7 15-7.2-5.7-12.8-12.1-10.7-22 7-1.9 11.5-5.5 6.7-15.7-6.7-3.7-8.4-8.6-4.3-14.9 3.4-2.3 4.8-5.8 4-10.3-6.4-5.6-6.7-11 0-16.1-.6-8.6 1.7-15.3 7.6-19.8 3-.2 5.3-.9 6.9-2 2.2-1.6 3.1-4 2.5-7.4 2-3.3 4.4-6 7-7.9 1.9-1.5 3.9-2.6 6-3.4 6.5-2.6 13.8-2.1 20.4.4.8.3 1.6.6 2.4 1 1 .4 1.9.9 2.9 1.5 4.7-2 9.4-2.3 14-.9 8.2-1.1 15.9-1 22.3 1.5 3.3 1.3 6.2 3.1 8.8 5.8 10.6.4 16.9 8.2 21.2 19.2 1.5 9.6 3.9 17.6 9.4 20.1 2.1 5.7 3.1 12.4 3.3 19.8 2.5 2.4 4.4 1.5 6.1-.3-1.9 9-5 17.2-12.9 20.5z"
              fill="#35393b"
            />
            <path
              id="prefix__XMLID_96_"
              className="prefix__st7"
              d="M359.9 390c1.5 1.8 1.5 3.8 4.3.6.3 7.9-1.9 14-7.5 17.8-.2-4.6 0-9.6.5-14.8 3-32.9 2.4-36.9-3-31.9-9 19.5-23.1-39.1-21.2-48.8-.1-.8-.1-1.6 0-2.3 10.6.4 16.9 8.2 21.2 19.2 1.5 9.6 3.9 17.6 9.4 20.1 2.1 5.7 3.1 12.4 3.3 19.8 2.5 2.4 4.4 1.5 6.1-.3-2.1 9.1-5.2 17.3-13.1 20.6z"
            />
            <path
              id="prefix__XMLID_95_"
              className="prefix__st7"
              d="M318.6 345.3c-3.6 1.1-7.7 1.5-13.7-.1 20.7-12-12.5-29.3-3.1-41.9 8.2-1.1 15.9-1 22.3 1.5-20.7.3 1 29.7-5.5 40.5z"
            />
            <path
              id="prefix__XMLID_94_"
              className="prefix__st7"
              d="M300.1 343.6c-.8-.3-1.6-.7-2.5-1-.8-.3-1.7-.6-2.5-.9-1-.3-2-.6-3-.8-6.3-18.3-29.2-9.1-30-39.4 6.5-2.6 13.8-2.1 20.4.4-10.4 13.5 8.5 25.6 17.6 41.7z"
            />
            <path
              id="prefix__XMLID_93_"
              className="prefix__st7"
              d="M278.5 339.5c-1.5.1-3.1.2-4.7.3-11.5-6.1-23.9-12.2-27.2-19.7 2.2-1.6 3.1-4 2.5-7.4 2-3.3 4.4-6 7-7.9-2.3 16.9 9.4 26.6 22.4 34.7z"
            />
          </g>
          <g id="prefix__Eyes">
            <path
              id="prefix__XMLID_39_"
              d="M294.2 388.8c-2.5.6-6.1.6-10.7.8-13.7-1.4-26.7-1.8-35.6 3.6-2.5 4.7-.9 15.2 4.5 19.6 3.6 2.6 19.1 1 24.8-1.2 9.3-4.8 6.2-19.2 9.8-19.6 1.9-.4 3.9-.4 5.9 0 2.2 2.8 3.2 13.2 12.1 17.2 3.2 1.5 20 .3 24.2-2.3 5.4-1.7 3.8-11 4.9-18 .8-.6 1.5-1 2.1-1.5v-2.9c-16.7-.8-32.3-.6-42 4.3zm-20.3 22.9c-5.9 1.2-12 1.5-18.3 1.1-4.8-1.2-7.5-6.5-7.3-17.5.4-5.2 34.2-8.6 35.3-2.2-.8 8.6-2.2 16.5-9.7 18.6zm57.8-9.9c-.7 2.5-2.8 4.1-5.9 5.2-6.9.8-13.3 1.2-18.9.9-4.5-1.9-8.4-5.5-10.6-13.5v-3.8c4.1-5.4 24.3-6.4 31.6-5.2 2 .3 3.5 1.8 4.3 4.3.5 4.3.5 8.4-.5 12.1z"
              fill="#1e181f"
            />
            <path
              id="prefix__XMLID_87_"
              className="prefix__st7"
              d="M335.6 438.1l-6 9.4c-7.9 9.5-15.6 19.8-23.5 24.3-3.3 1.9-6.6 2.8-10 2.3-1.3-.1-2.7-.2-4-.5-9.7-1.9-18-8.8-25.8-18.8-2.4-4.2-4.2-7.5-4.3-7.7.6.4 23.7 16.7 30.1 17.2 7.7.7 13.1 3.3 43.5-26.2z"
            />
          </g>
          <g id="prefix__Arms">
            <path
              id="prefix__XMLID_9_"
              fill="#282524"
              d="M181 599.9h233.7v161.3H181z"
            />
            <path
              id="prefix__XMLID_40_"
              className="prefix__st4"
              d="M208.3 636c-2.9 38.7-6.7 69.4-11.8 88.9-4.6 11.9-9 23.8-11.5 36.2h-41.1c1.4-20.3 4.5-40.3 10.7-60 6.3-18.5 7.9-46.7 7.7-79l46 13.9z"
            />
            <path
              id="prefix__XMLID_31_"
              className="prefix__st5"
              d="M208.3 636c-2.9 38.7-6.7 69.4-11.8 88.9-4.6 11.9-9 23.8-11.5 36.2h-8.9c.4-19 3.5-37 12.2-53.3 8.3-15.8 14.7-40.9 20-71.8z"
            />
            <path
              id="prefix__XMLID_42_"
              className="prefix__st4"
              d="M455.2 761.2h-47.5c0-33.8-1.5-69.1-7.6-107.9L373.2 583l47.3 45.2c2 0 9.7 6.3 17.1 12.9 8.3 7.3 16.4 15.1 16.4 15.1-4.2 43.3 5.2 81.6 1.2 105z"
            />
            <path
              id="prefix__XMLID_5_"
              className="prefix__st5"
              d="M400.1 653.3l-2 28.4c9.4 25.5 11.8 52.6 9.6 79.5 1-4.3 1.6-39.7 8.5-44-1.5-51.1-9-52.1-16.1-63.9"
            />
            <path
              id="prefix__XMLID_37_"
              className="prefix__st5"
              d="M455.2 761.2c-3-47.4-8.3-88.4-23-101.3l5.3-18.8c8.3 7.3 16.4 15.1 16.4 15.1-4.1 43.3 5.3 81.6 1.3 105z"
            />
          </g>
          <g id="prefix__Shirt-red">
            <path
              id="prefix__XMLID_80_"
              d="M459.2 652.4c-1.5 1.5-3.3 2.7-5.2 3.8-11.1 6-28.2 4.5-48.9-1.4-1.6-.5-3.3-1-5-1.5-1.7 19.6-3 45.6-3 45.6-1.2 11.1-3.1 21.7-2.3 30.1 1.8 10.6 1.4 20.1-1.3 28.6v.1c-.4 1.2-.8 2.3-1.2 3.5H194.1c-1.7-20.1 1.9-40.5 8.9-61.1 2.8-10.1 5.3-19.2 7.4-26.9l.3-1.8v-.1c.3-2.1.4-4.7.4-7.7-.1-7.3-1.2-16.8-2.8-27.5-.6.8-1.5 1.1-2.9.8-.7.1-1.4.2-2.1.2-17.7 1.8-29.8 0-35.8-5.9 2.1-.7 2.5-1.8 1.6-3.3-1.4-2.1-5.5-5.1-11.8-8.6-1.5-9.1 2.2-24.6 5.7-39.9 1.1-6.6 2.6-11.7 1.4-26.9 1.9-16.6 12.7-30.8 24-45v-.1c.6-.7 1.2-1.5 1.8-2.2l8.4-3L226 491l37.4-22.6c-15.1 25.1 22.1 58 51.3 57.3 21.4-2.7 55.4-37.6 27.6-54.3 3.8-.9 14.9 5.5 24.9 11.4 7.1 4.2 13.7 8 16.8 8.7 15.3.7 39 17.8 48.1 23.3 15.7 30.4 19.4 67 23 102.5 1.3 12 2.5 23.7 4.1 35.1z"
              fill="hsl(var(--icon-shirt-primary))"
            />
            <path
              id="prefix__XMLID_79_"
              className="prefix__st11"
              d="M205.5 636.9c-.7.1-1.4.2-2.1.2-17.7 1.8-29.8 0-35.8-5.9.6-.9 1.1-2 1.6-3.3 3.1-8.6 4.6-26.4 2.3-41.2 6.3 23.7 15 46.1 34 50.2z"
            />
            <path
              id="prefix__XMLID_78_"
              className="prefix__st11"
              d="M188.3 507.5c10 30.8 14.8 65.4 15.7 102.7.8.7.9-43.7 0-51.3-.8-7.8-15.2-53.3-15.7-51.4z"
            />
            <path
              id="prefix__XMLID_77_"
              className="prefix__st11"
              d="M210.4 673.2c-6 39.4.3 69.9 24.5 87.4l-24.5.6c-14.1-22.5-9-54.3 0-88z"
            />
            <path
              id="prefix__XMLID_76_"
              className="prefix__st11"
              d="M405.1 654.8c-1.6-.5-3.3-1-5-1.5-1.7 19.6-3 45.6-3 45.6-1.2 11.1-3.1 21.7-2.3 30.1 1.8 10.6 1.4 20.1-1.3 28.6v.1l-1.2 3.5h-24.2c4.9-77 42.9-32 5-178.2 10.6 48.9 32 71.8 32 71.8z"
            />
            <path
              id="prefix__XMLID_75_"
              className="prefix__st11"
              d="M459.2 652.4c-1.5 1.5-3.3 2.7-5.2 3.8-2.1-47-10-94.2-21.7-141.3 21 40.5 20.5 92.1 26.9 137.5z"
            />
            <path
              id="prefix__XMLID_74_"
              className="prefix__st11"
              d="M342.4 471.5c13.7 70.4-82.1 70.5-79-3-3.1-1.4-5.7-.6-7.2 4.3-2.9 101.3 128.1 54.5 91.5-.4-1.7-3-3.5-2.9-5.3-.9z"
            />
            <path
              id="prefix__XMLID_73_"
              className="prefix__st11"
              d="M455.2 617.4c-3.3-3.1-6.5-5.6-9.5-7.1-.3-24.7-7-42.8-20.4-65.3-14.3-20.1-12.1-.4-38.7-37.4-18.5-25.8-21.2-24.1-19.3-24.6 7.1 4.2 13.7 8 16.8 8.7 15.3.7 39 17.8 48.1 23.3 15.8 30.3 19.5 66.8 23 102.4z"
            />
          </g>
          <g id="prefix__Shirt-yellow" className="prefix__st0">
            <path
              id="prefix__XMLID_41_"
              d="M459.2 652.4c-1.5 1.5-3.3 2.7-5.2 3.8-11.1 6-28.2 4.5-48.9-1.4-1.6-.5-3.3-1-5-1.5-1.7 19.6-3 45.6-3 45.6-1.2 11.1-3.1 21.7-2.3 30.1 1.8 10.6 1.4 20.1-1.3 28.6v.1c-.4 1.2-.8 2.3-1.2 3.5H194.1c-1.7-20.1 1.9-40.5 8.9-61.1 2.8-10.1 5.3-19.2 7.4-26.9l.3-1.8v-.1c.3-2.1.4-4.7.4-7.7-.1-7.3-1.2-16.8-2.8-27.5-.6.8-1.5 1.1-2.9.8-.7.1-1.4.2-2.1.2-17.7 1.8-29.8 0-35.8-5.9 2.1-.7 2.5-1.8 1.6-3.3-1.4-2.1-5.5-5.1-11.8-8.6-1.5-9.1 2.2-24.6 5.7-39.9 1.1-6.6 2.6-11.7 1.4-26.9 1.9-16.6 12.7-30.8 24-45v-.1c.6-.7 1.2-1.5 1.8-2.2l8.4-3L226 491l37.4-22.6c-15.1 25.1 22.1 58 51.3 57.3 21.4-2.7 55.4-37.6 27.6-54.3 3.8-.9 14.9 5.5 24.9 11.4 7.1 4.2 13.7 8 16.8 8.7 15.3.7 39 17.8 48.1 23.3 15.7 30.4 19.4 67 23 102.5 1.3 12 2.5 23.7 4.1 35.1z"
              display="inline"
              fill="#f6bc52"
            />
            <path
              id="prefix__XMLID_29_"
              className="prefix__st13"
              d="M205.5 636.9c-.7.1-1.4.2-2.1.2-17.7 1.8-29.8 0-35.8-5.9.6-.9 1.1-2 1.6-3.3 3.1-8.6 4.6-26.4 2.3-41.2 6.3 23.7 15 46.1 34 50.2z"
            />
            <path
              id="prefix__XMLID_25_"
              className="prefix__st13"
              d="M188.3 507.5c10 30.8 14.8 65.4 15.7 102.7.8.7.9-43.7 0-51.3-.8-7.8-15.2-53.3-15.7-51.4z"
            />
            <path
              id="prefix__XMLID_24_"
              className="prefix__st13"
              d="M210.4 673.2c-6 39.4.3 69.9 24.5 87.4l-24.5.6c-14.1-22.5-9-54.3 0-88z"
            />
            <path
              id="prefix__XMLID_19_"
              className="prefix__st13"
              d="M405.1 654.8c-1.6-.5-3.3-1-5-1.5-1.7 19.6-3 45.6-3 45.6-1.2 11.1-3.1 21.7-2.3 30.1 1.8 10.6 1.4 20.1-1.3 28.6v.1l-1.2 3.5h-24.2c4.9-77 42.9-32 5-178.2 10.6 48.9 32 71.8 32 71.8z"
            />
            <path
              id="prefix__XMLID_17_"
              className="prefix__st13"
              d="M459.2 652.4c-1.5 1.5-3.3 2.7-5.2 3.8-2.1-47-10-94.2-21.7-141.3 21 40.5 20.5 92.1 26.9 137.5z"
            />
            <path
              id="prefix__XMLID_13_"
              className="prefix__st13"
              d="M342.4 471.5c13.7 70.4-82.1 70.5-79-3-3.1-1.4-5.7-.6-7.2 4.3-2.9 101.3 128.1 54.5 91.5-.4-1.7-3-3.5-2.9-5.3-.9z"
            />
            <path
              id="prefix__XMLID_12_"
              className="prefix__st13"
              d="M455.2 617.4c-3.3-3.1-6.5-5.6-9.5-7.1-.3-24.7-7-42.8-20.4-65.3-14.3-20.1-12.1-.4-38.7-37.4-18.5-25.8-21.2-24.1-19.3-24.6 7.1 4.2 13.7 8 16.8 8.7 15.3.7 39 17.8 48.1 23.3 15.8 30.3 19.5 66.8 23 102.4z"
            />
          </g>
        </a.g>
      </svg>
    </div>
  );
};

export default Gonds;
