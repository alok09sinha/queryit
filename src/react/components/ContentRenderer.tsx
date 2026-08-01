import React from "react";

type Props = {
  slide: any;
};

export default function ContentRenderer({ slide }: Props) {
  return (
    <div
      style={{
        width: 430,
        height: 760,
        background: "#08111f",
        borderRadius: 20,
        padding: 30,
        boxSizing: "border-box",
        color: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          color: "#38c9ff",
          fontWeight: 800,
          fontSize: 22,
          textAlign: "center",
        }}
      >
        QUERYIT
      </div>

      <div style={{ flex: 1, marginTop: 40 }}>
        <h1
          style={{
            fontSize: 42,
            marginBottom: 25,
            lineHeight: 1.05,
          }}
        >
          {slide.title}
        </h1>

        <h2
          style={{
            fontWeight: 500,
            fontSize: 24,
            marginBottom: 25,
          }}
        >
          {slide.subtitle}
        </h2>

        <h1
          style={{
            color: "#38c9ff",
            fontSize: 36,
            lineHeight: 1.1,
            marginBottom: 30,
          }}
        >
          {slide.highlight}
        </h1>

        <p
          style={{
            color: "#d2d6db",
            fontSize: 22,
            lineHeight: 1.6,
          }}
        >
          {slide.description}
        </p>
      </div>
    </div>
  );
}