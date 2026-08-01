type Props = {
  slide: any;
};

export default function CoverRenderer({ slide }: Props) {
  return (
    <div
      style={{
        width: 430,
        height: 760,
        background: "#08111f",
        color: "#fff",
        borderRadius: 24,
        padding: 36,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Logo */}

      <div
        style={{
          color: "#35CFFF",
          fontWeight: 800,
          fontSize: 22,
        }}
      >
        QUERY<span style={{ color: "#fff" }}>IT</span>
      </div>

      {/* Badge */}

      <div
        style={{
          marginTop: 28,
          display: "inline-flex",
          width: "fit-content",
          padding: "8px 18px",
          background: "#611313",
          borderRadius: 999,
          color: "#ff6d6d",
          fontWeight: 700,
          fontSize: 13,
        }}
      >
        🔴 Production Incident
      </div>

      {/* Main */}

      <div
        style={{
          marginTop: 48,
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: 58,
            lineHeight: 1,
          }}
        >
          {slide.title}
        </h1>

        <h2
          style={{
            marginTop: 20,
            fontSize: 28,
            color: "#ffffff",
            fontWeight: 500,
          }}
        >
          {slide.subtitle}
        </h2>

        <h1
          style={{
            marginTop: 14,
            color: "#35CFFF",
            fontSize: 54,
            lineHeight: 1,
          }}
        >
          {slide.highlight}
        </h1>

        <p
          style={{
            marginTop: 40,
            fontSize: 22,
            lineHeight: 1.5,
            color: "#d5dbe8",
          }}
        >
          {slide.description}
        </p>
      </div>

      <div
        style={{
          marginTop: "auto",
          textAlign: "center",
          color: "#9eaec6",
        }}
      >
        Think Like a Network Architect
      </div>
    </div>
  );
}