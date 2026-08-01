import type { QueryITProject } from "../../models/Project";
import { SlideType } from "../../models/SlideType";

export const incident001: QueryITProject = {
  id: "001",

  name: "Production Incident #001",

  slug: "traffic-monitor-empty",

  template: "productionIncident",

  vendor: "Palo Alto",

  category: "Traffic Logging",

  difficulty: "Advanced",

  tags: [
    "Palo Alto",
    "Traffic Monitor",
    "Logging",
    "Intrazone"
  ],

  slides: [
    {
      id: 1,
      type: SlideType.Cover,
      title: "EMPTY TRAFFIC MONITOR",
      subtitle: "does NOT always mean",
      highlight: "PACKETS WERE DROPPED",
      description:
        "Why your Palo Alto firewall can silently drop packets while the Traffic Monitor remains empty."
    },

    {
      id: 2,
      type: SlideType.Content,
      title: "User reports Internet is down",
      subtitle: "Traffic Monitor is empty",
      highlight: "Where do you start?",
      description: "Nothing appears in Monitor → Traffic."
    },

    {
      id: 3,
      type: SlideType.Quote,
      title: "Most engineers assume",
      subtitle: "Traffic never reached firewall",
      highlight: "Wrong",
      description:
        "The firewall actually received and dropped the packets."
    },

    {
      id: 4,
      type: SlideType.Content,
      title: "Packet Capture",
      subtitle: "Revealed",
      highlight: "Dropped Traffic",
      description: "Traffic matched Intrazone Deny."
    },

    {
      id: 5,
      type: SlideType.Content,
      title: "No Logging",
      subtitle: "was configured",
      highlight: "for Intrazone Deny",
      description:
        "Dropped packets were never logged."
    },

    {
      id: 6,
      type: SlideType.Content,
      title: "Created",
      subtitle: "Explicit Allow Rule",
      highlight: "Traffic Restored",
      description:
        "Traffic restored immediately."
    },

    {
      id: 7,
      type: SlideType.Content,
      title: "Traffic Monitor Shows",
      subtitle: "Only",
      highlight: "Configured Logs",
      description:
        "No logging ≠ No traffic."
    },

    {
      id: 8,
      type: SlideType.CTA,
      title: "Follow QueryIT",
      subtitle: "for Real Enterprise",
      highlight: "Production Incidents",
      description:
        "Think Like a Network Architect."
    }
  ]
};