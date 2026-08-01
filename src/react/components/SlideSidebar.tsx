import { useProject } from "../context/ProjectContext";

export default function SlideSidebar() {
  const {
    currentProject,
    currentSlide,
    setCurrentSlide,
  } = useProject();

  return (
    <div
      style={{
        padding: 20,
      }}
    >
      <h2
        style={{
          color: "white",
          marginBottom: 20,
        }}
      >
        Slides
      </h2>

      {currentProject.slides.map((slide, index) => (
        <div
          key={slide.id}
          onClick={() => {
  console.log("Clicked:", index);
  setCurrentSlide(index);
}}
          style={{
            padding: "12px 16px",
            marginBottom: 10,
            borderRadius: 12,
            cursor: "pointer",

            background:
              currentSlide === index
                ? "#35CFFF"
                : "#162238",

            color:
              currentSlide === index
                ? "#08111f"
                : "#ffffff",

            fontWeight:
              currentSlide === index
                ? 700
                : 500,

            transition: "all .2s",
          }}
        >
          {slide.section ?? slide.title}
        </div>
      ))}
    </div>
  );
}