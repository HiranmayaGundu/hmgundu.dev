// @ts-nocheck
"use client";
import * as React from "react";
import { useSpring, a } from "@react-spring/web";

interface LightSaberProps {
  title?: string;
  titleId?: string;
}

const LightSaber: React.FC<React.SVGProps<SVGSVGElement> & LightSaberProps> = ({
  title,
  titleId,
  ...props
}) => {
  const springProps = useSpring({ x: 450, from: { x: 0 } });
  return (
    <svg width={40} height={40} viewBox="279.9 40.6 35.5 236.4" {...props}>
      <style>{".prefix__st7{fill:#302e2e}"}</style>
      <g id="prefix__XMLID_18_">
        <a.path
          fill="#faf5ef"
          strokeDasharray={550}
          strokeDashoffset={springProps.x}
          stroke="#FAF5EF"
          id="prefix__XMLID_15_"
          d="M299.9 203.3h-4.6c-2.8 0-5-2.3-5-5V45.6c0-2.8 2.3-5 5-5h4.6c2.8 0 5 2.3 5 5v152.7c.1 2.8-2.2 5-5 5z"
        />
        <g id="prefix__XMLID_30_">
          <path
            id="prefix__XMLID_14_"
            className="prefix__st7"
            d="M313.1 207.3h-31c-1.2 0-2.2-1-2.2-2.2v-14.4c0-1.2 1-2.2 2.2-2.2h31c1.2 0 2.2 1 2.2 2.2v14.4c0 1.2-.9 2.2-2.2 2.2z"
          />
          <path
            id="prefix__XMLID_23_"
            className="prefix__st7"
            d="M313.1 229.8h-31c-1.2 0-2.2-1-2.2-2.2v-14.4c0-1.2 1-2.2 2.2-2.2h31c1.2 0 2.2 1 2.2 2.2v14.4c0 1.2-.9 2.2-2.2 2.2z"
          />
          <path
            id="prefix__XMLID_24_"
            className="prefix__st7"
            d="M313.2 253h-31.1c-1.2 0-2.2-1-2.2-2.2v-14.2c0-1.2 1-2.2 2.2-2.2h31.1c1.2 0 2.2 1 2.2 2.2v14.2c-.1 1.2-1 2.2-2.2 2.2z"
          />
          <path
            id="prefix__XMLID_25_"
            className="prefix__st7"
            d="M313.1 277h-31c-1.2 0-2.2-1-2.2-2.2v-14.4c0-1.2 1-2.2 2.2-2.2h31c1.2 0 2.2 1 2.2 2.2v14.4c0 1.2-.9 2.2-2.2 2.2z"
          />
        </g>
      </g>
    </svg>
  );
};

export default LightSaber;
