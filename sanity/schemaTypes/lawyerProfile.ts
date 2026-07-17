import { defineField, defineType } from "sanity";

export const lawyerProfile = defineType({
  name: "lawyerProfile",
  title: "Team profile",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Full name",
      type: "string",
      description: 'As it should appear on the site, e.g. "Ogechi Adibenma, Esq."',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Web address (slug)",
      type: "slug",
      description: "The last part of the profile's web address. Click Generate to create it from the name.",
      options: { source: "name", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "photo",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative text",
          type: "string",
          description: "A short description of the photo for screen readers. Required.",
          validation: (rule) =>
            rule.custom((alt, context) => {
              const parent = context.parent as { asset?: unknown } | undefined;
              if (parent?.asset && !alt) return "Please describe the photo (alternative text).";
              return true;
            }),
        }),
      ],
    }),
    defineField({
      name: "role",
      title: "Role / title",
      type: "string",
      description: 'e.g. "Principal Partner", "Partner", "Associate".',
    }),
    defineField({
      name: "lede",
      title: "Introduction line",
      type: "text",
      rows: 2,
      description: "The single opening sentence shown under the name on the profile page.",
    }),
    defineField({
      name: "summary",
      title: "Card summary",
      type: "text",
      rows: 3,
      description: "The short text shown on the People page card, e.g. \"LL.B (Hons), B.L. Commercial and corporate: ...\"",
    }),
    defineField({
      name: "bio",
      title: "Biography",
      type: "text",
      rows: 8,
      description: "The 'About' text on the profile page. Separate paragraphs with a blank line.",
    }),
    defineField({
      name: "practiceAreas",
      title: "Practice areas",
      type: "array",
      of: [{ type: "string" }],
      description: 'e.g. "Surrogacy & Fertility Law", "Family Law".',
    }),
    defineField({
      name: "credentials",
      title: "Credentials",
      type: "text",
      rows: 4,
      description: 'One per line as "Label: detail", e.g. "Education: LL.B (Hons) · B.L, Nigerian Law School". Each line becomes a row in the profile sidebar.',
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (rule) => rule.email().warning("This does not look like a valid email address."),
    }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      description: "Controls the order on the People page. Lower numbers appear first (1 is the top).",
      initialValue: 100,
    }),
  ],
  orderings: [
    {
      title: "Display order",
      name: "displayOrder",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "name", subtitle: "role", media: "photo" },
  },
});
