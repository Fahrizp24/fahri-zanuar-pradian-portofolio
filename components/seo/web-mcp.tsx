"use client";

import { useEffect } from "react";
import { CONTACT, KNOWLEDGE, retrieveLocal } from "@/lib/chatbot-knowledge";

type ModelContextTool = {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
  execute: (args: Record<string, unknown>) => Promise<unknown> | unknown;
};

type ModelContextLike = {
  provideContext?: (context: { tools: ModelContextTool[] }) => void;
  registerTool?: (tool: ModelContextTool) => void;
};

declare global {
  interface Navigator {
    modelContext?: ModelContextLike;
  }
  interface Document {
    modelContext?: ModelContextLike;
  }
}

export function WebMcp(): null {
  useEffect(() => {
    const context = navigator.modelContext ?? document.modelContext;
    if (!context) return;

    const tool: ModelContextTool = {
      name: "search_portfolio",
      description:
        "Search Fahri Zanuar Pradian's portfolio information (about, projects, skills, experience, education, services, contact).",
      inputSchema: {
        type: "object",
        properties: {
          query: {
            type: "string",
            description: "Topic or question about Fahri's portfolio.",
          },
          lang: {
            type: "string",
            enum: ["en", "id"],
            description: "Preferred response language.",
          },
        },
        required: ["query"],
      },
      execute: async (args) => {
        const query = typeof args.query === "string" ? args.query : "";
        const lang = args.lang === "id" ? "id" : "en";
        const match = retrieveLocal(query);
        if (match) {
          return {
            section: match.section.id,
            content: lang === "id" ? match.section.id_text : match.section.en_text,
            contact: CONTACT,
          };
        }
        return {
          sections: KNOWLEDGE.map((s) => ({
            id: s.id,
            content: lang === "id" ? s.id_text : s.en_text,
          })),
          contact: CONTACT,
        };
      },
    };

    try {
      if (typeof context.registerTool === "function") {
        context.registerTool(tool);
      } else if (typeof context.provideContext === "function") {
        context.provideContext({ tools: [tool] });
      }
    } catch {
      // Browser/agent does not permit registration in this context
    }
  }, []);

  return null;
}
