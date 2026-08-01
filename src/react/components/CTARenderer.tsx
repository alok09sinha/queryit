import React from "react";

type Props = {
  slide: any;
};

export default function CTARenderer({ slide }: Props) {
  return (
    <div
      style={{
        width: 430,
        height: 760,
        background: "#08111f",
        borderRadius: 20,
        color: "white",
        padding: 40,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div
        style={{
          color: "#38c9ff",
          fontSize: 34,
          fontWeight: 800,
          marginBottom: 50,
        }}
      >
        QUERYIT
      </div>

      <h1
        style={{
          fontSize: 46,
          marginBottom: 20,
        }}
      >
        {slide.title}
      </h1>

      <h2
        style={{
          color: "#38c9ff",
          fontSize: 28,
          marginBottom: 30,
        }}
      >
        {slide.subtitle}
      </h2>

      <h2
        style={{
          fontSize: 34,
          marginBottom: 40,
        }}
      >
        {slide.highlight}
      </h2>

      <p
        style={{
          color: "#d0d5dd",
          fontSize: 22,
          lineHeight: 1.6,
        }}
      >
        {slide.description}
      </p>
    </div>
  );
}