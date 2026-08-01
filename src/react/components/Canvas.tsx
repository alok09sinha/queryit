import CoverRenderer from "../../components/renderers/CoverRenderer";
import IncidentRenderer from "../../components/renderers/IncidentRenderer";
import QuoteRenderer from "../../components/renderers/QuoteRenderer";
import CTARenderer from "../../components/renderers/CTARenderer";

import ContentRenderer from "./ContentRenderer";

import { SlideType } from "../../models/SlideType";
import { useProject } from "../context/ProjectContext";

export default function Canvas() {
  const { currentProject, currentSlide } = useProject();

  const slide = currentProject.slides[currentSlide];

  switch (slide.type) {
    case SlideType.Cover:
      return <CoverRenderer slide={slide} />;

    case SlideType.Content:
      return <ContentRenderer slide={slide} />;

    case SlideType.Quote:
      return <QuoteRenderer slide={slide} />;

    case SlideType.CTA:
      return <CTARenderer slide={slide} />;

    default:
      return (
        <div
          style={{
            color: "white",
            fontSize: 24,
            textAlign: "center",
            padding: 40,
          }}
        >
          Unknown renderer: {slide.type}
        </div>
      );
  }
}