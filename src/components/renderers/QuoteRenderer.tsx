import React from "react";

type Props = {
  slide: {
    title: string;
    subtitle: string;
    highlight: string;
    description: string;
  };
};

export default function QuoteRenderer({ slide }: Props) {
  return (
    <div
      style={{
        width: 430,
        height: 760,
        background: "#08111f",
        color: "white",
        padding: 40,
        boxSizing: "border-box",
      }}
    >
      <h1>{slide.title}</h1>

      <h2>{slide.subtitle}</h2>

      <h1 style={{ color: "#38c9ff" }}>
        {slide.highlight}
      </h1>

      <p>{slide.description}</p>
    </div>
  );
}