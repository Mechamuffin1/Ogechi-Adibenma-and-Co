"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";
import { apiVersion, dataset, projectId } from "./sanity/env";

export default defineConfig({
  name: "ogechi-adibenma-and-co",
  title: "Ogechi Adibenma & Co",
  basePath: "/studio",
  projectId,
  dataset,
  schema: { types: schemaTypes },
  plugins: [
    structureTool({ structure }),
    // GROQ playground; only useful to developers, hidden from production editors.
    ...(process.env.NODE_ENV === "development" ? [visionTool({ defaultApiVersion: apiVersion })] : []),
  ],
});
