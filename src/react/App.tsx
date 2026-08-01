import React from "react";
import { ProjectProvider } from "./context/ProjectContext";
import Canvas from "./components/Canvas";
import SlideSidebar from "./components/SlideSidebar";

export default function App() {
  return (
    <ProjectProvider>
      <div
        style={{
          height: "100vh",
          display: "grid",
          gridTemplateColumns: "320px 1fr 320px",
          background: "#08111f",
          color: "#ffffff",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        {/* LEFT PANEL */}

        <aside
          style={{
            borderRight: "1px solid #24344f",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          {/* Content Library */}

          <div
            style={{
              padding: 24,
              borderBottom: "1px solid #24344f",
            }}
          >
            <h2 style={{ marginTop: 0 }}>
              📚 Content Library
            </h2>

            <div style={{ marginTop: 20 }}>
              <div>Production Incident #001</div>

              <div style={{ marginTop: 10 }}>
                Palo Alto EDL
              </div>

              <div style={{ marginTop: 10 }}>
                Azure ILB
              </div>
            </div>
          </div>

          {/* Slides */}

          <div
            style={{
              flex: 1,
              overflow: "auto",
            }}
          >
            <SlideSidebar />
          </div>
        </aside>

        {/* CANVAS */}

        <main
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "auto",
          }}
        >
          <Canvas />
        </main>

        {/* RIGHT PANEL */}

        <aside
          style={{
            borderLeft: "1px solid #24344f",
            padding: 24,
          }}
        >
          <h2 style={{ marginTop: 0 }}>
            Properties
          </h2>

          <p>Select a slide to edit.</p>
        </aside>
      </div>
    </ProjectProvider>
  );
}