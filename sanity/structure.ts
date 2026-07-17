import type { StructureResolver } from "sanity/structure";
import { icons } from "@sanity/icons";

const DocumentTextIcon = icons["document-text"];
const UsersIcon = icons["users"];

/* Sidebar layout for non-technical editors: exactly two obvious sections. */
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Articles")
        .icon(DocumentTextIcon)
        .child(
          S.documentTypeList("article")
            .title("Articles")
            .defaultOrdering([{ field: "publishedAt", direction: "desc" }])
        ),
      S.listItem()
        .title("Team Profiles")
        .icon(UsersIcon)
        .child(
          S.documentTypeList("lawyerProfile")
            .title("Team Profiles")
            .defaultOrdering([{ field: "order", direction: "asc" }])
        ),
    ]);
