"use client";

import React, { useState } from "react";
import {
  CssIcon,
  GitIcon,
  HtmlIcon,
  ReactIcon,
  TypescriptIcon,
  JsIcon,
  TailwindIcon,
  MssqlIcon,
  HashIcon,
  GitHubIcon,
  CsharpIcon,
  CppIcon,
} from "./SkillsIcons";
const IconWrapper = ({
  children,
  className = "",
  isHighlighted = false,
  isHovered = false,
  animationDelay = 0,
}) => (
  <div
    className={`icon-wrapper cursor-target
        backdrop-blur-xl rounded-2xl flex items-center justify-center transition duration-300 border
        ${
          isHighlighted
            ? "dark:bg-gray-700/50 bg-gray-100/80 border-blue-400/50 dark:shadow-blue-500/20 shadow-blue-400/30 shadow-2xl animate-breathing-glow"
            : `dark:bg-white/5 bg-white/60 dark:border-white/20 border-gray-300/60 ${
                !isHovered && "animate-float"
              }`
        }
        ${
          isHovered
            ? "dark:bg-gray-600/50 bg-gray-200/80 border-blue-400/60 scale-110 dark:shadow-blue-400/30 shadow-blue-400/40 shadow-2xl"
            : "dark:hover:bg-white/10 hover:bg-gray-100/80 dark:hover:border-white/20 hover:border-gray-300/60"
        }
        ${className}
    `}
    style={{
      animationDelay: `${animationDelay}s`,
    }}
  >
    {children}
  </div>
);
const IconGrid = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const outerIcons = [
    { id: 1, component: <HtmlIcon /> },
    { id: 2, component: <CssIcon /> },
    { id: 3, component: <JsIcon /> },
    { id: 4, component: <TailwindIcon /> },
    { id: 5, component: <TypescriptIcon /> },
    { id: 6, component: <ReactIcon /> },
    { id: 7, component: <MssqlIcon /> },
    { id: 9, component: <GitHubIcon /> },
    { id: 10, component: <GitIcon /> },
    { id: 11, component: <CsharpIcon /> },
    { id: 12, component: <CppIcon /> },
  ];
  const radius = 160;
  const centralIconRadius = 48;
  const outerIconRadius = 32;
  const svgSize = 400;
  const svgCenter = svgSize / 2;
  return (
    <div className="icon-grid w-[400px] h-[400px] md:w-[500px] md:h-[500px] scale-75 md:scale-90 lg:scale-110 ">
      {}
      <svg
        width={svgSize}
        height={svgSize}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <g>
          {}
          {outerIcons.map((icon, i) => {
            const nextIndex = (i + 1) % outerIcons.length;
            const nextIcon = outerIcons[nextIndex];
            const angle1 =
              (-90 + i * (360 / outerIcons.length)) * (Math.PI / 180);
            const x1 =
              svgCenter + (radius - outerIconRadius) * Math.cos(angle1);
            const y1 =
              svgCenter + (radius - outerIconRadius) * Math.sin(angle1);
            const angle2 =
              (-90 + nextIndex * (360 / outerIcons.length)) * (Math.PI / 180);
            const x2 =
              svgCenter + (radius - outerIconRadius) * Math.cos(angle2);
            const y2 =
              svgCenter + (radius - outerIconRadius) * Math.sin(angle2);
            const isLineActive =
              hoveredId === icon.id || hoveredId === nextIcon.id;
            return (
              <line
                key={`web-line-${icon.id}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={isLineActive ? "#f59e0b" : "#6B7280"}
                strokeWidth="1.5"
                className={`transition-all duration-300 dark:stroke-[#f59e0b] ${
                  isLineActive && "drop-shadow-lg"
                }`}
                style={{
                  opacity: isLineActive ? 1 : 0.25,
                }}
              />
            );
          })}

          {}
          {outerIcons.map((icon, i) => {
            const angleInDegrees = -90 + i * (360 / outerIcons.length);
            const angleInRadians = angleInDegrees * (Math.PI / 180);
            const startX =
              svgCenter + centralIconRadius * Math.cos(angleInRadians);
            const startY =
              svgCenter + centralIconRadius * Math.sin(angleInRadians);
            const endX =
              svgCenter + (radius - outerIconRadius) * Math.cos(angleInRadians);
            const endY =
              svgCenter + (radius - outerIconRadius) * Math.sin(angleInRadians);
            const isSpokeActive = hoveredId === icon.id;
            return (
              // when the first icon field is hovered, the following line related to it doesn't show ? why ? this happens only in the first icon, the lines related to the other icons field are shown when hovering
              <line
                key={`spoke-line-${icon.id}`}
                x1={startX}
                y1={startY}
                x2={endX}
                y2={endY}
                stroke={isSpokeActive ? "#f59e0b" : "#6B7280"}
                strokeWidth="1.5"
                className={`transition-all duration-300 dark:stroke-[#f59e0b] ${
                  isSpokeActive && "drop-shadow-lg"
                }`}
                style={{
                  opacity: isSpokeActive ? 1 : 0.25,
                }}
                filter={isSpokeActive ? "none" : "none"}
              />
            );
          })}
        </g>
      </svg>

      {}
      <div className="absolute top-1/2 left-1/2">
        {}
        <div className="absolute -translate-x-1/2 -translate-y-1/2 z-10">
          <IconWrapper
            className="w-24 h-24"
            isHighlighted={true}
            animationDelay={0}
          >
            <HashIcon />
          </IconWrapper>
        </div>

        {}
        {outerIcons.map((icon, i) => {
          const angleInDegrees = -90 + i * (360 / outerIcons.length);
          const angleInRadians = angleInDegrees * (Math.PI / 180);
          const x = radius * Math.cos(angleInRadians);
          const y = radius * Math.sin(angleInRadians);
          const iconStyle = {
            transform: `translate(${x}px, ${y}px)`,
          };
          const isHovered = hoveredId === icon.id;
          return (
            <div
              key={icon.id}
              className="absolute z-10"
              style={iconStyle}
              onMouseEnter={() => setHoveredId(icon.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="-translate-x-1/2 -translate-y-1/2 relative">
                {}
                <div
                  className={`absolute inset-[-20px] bg-blue-500/20 dark:bg-blue-500/30 rounded-full blur-2xl transition-opacity duration-300 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                ></div>

                <IconWrapper
                  className="w-16 h-16"
                  isHovered={isHovered}
                  animationDelay={i * 0.15}
                >
                  {icon.component}
                </IconWrapper>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default function Spider() {
  return (
    <div className="spider relative w-full flex items-center justify-center font-sans p-4 sm:p-8 overflow-hidden -my-12 md:-mb-16">
      {}
      <style>
        {`
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0px); }
                }
                .animate-float {
                    animation: float 4s ease-in-out infinite;
                }

                @keyframes breathing-glow {
                    0% { box-shadow: 0 0 20px 0px rgba(59, 130, 246, 0.3); }
                    50% { box-shadow: 0 0 35px 10px rgba(59, 130, 246, 0.1); }
                    100% { box-shadow: 0 0 20px 0px rgba(59, 130, 246, 0.3); }
                }
                @keyframes breathing-glow-light {
                    0% { box-shadow: 0 0 20px 0px rgba(59, 130, 246, 0.2); }
                    50% { box-shadow: 0 0 35px 10px rgba(59, 130, 246, 0.05); }
                    100% { box-shadow: 0 0 20px 0px rgba(59, 130, 246, 0.2); }
                }
                .animate-breathing-glow {
                    animation: breathing-glow 3s ease-in-out infinite;
                }
                .dark .animate-breathing-glow {
                    animation: breathing-glow 3s ease-in-out infinite;
                }
                :not(.dark) .animate-breathing-glow {
                    animation: breathing-glow-light 3s ease-in-out infinite;
                }
            `}
      </style>

      {}

      <div className="relative z-10 container mx-auto flex items-center justify-center">
        <IconGrid />
      </div>
    </div>
  );
}
