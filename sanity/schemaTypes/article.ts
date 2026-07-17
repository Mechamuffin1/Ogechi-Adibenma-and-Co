import { defineArrayMember, defineField, defineType } from "sanity";

export const article = defineType({
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "The headline of the article as it appears on the site.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Web address (slug)",
      type: "slug",
      description: "The last part of the article's web address. Click Generate to create it from the title.",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "coverImage",
      title: "Cover image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative text",
          type: "string",
          description: "A short description of the image for screen readers and search engines. Required.",
          validation: (rule) =>
            rule.custom((alt, context) => {
              const parent = context.parent as { asset?: unknown } | undefined;
              if (parent?.asset && !alt) return "Please describe the image (alternative text).";
              return true;
            }),
        }),
      ],
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "lawyerProfile" }],
      description: "Which lawyer wrote this article.",
    }),
    defineField({
      name: "publishedAt",
      title: "Published date",
      type: "datetime",
      description: "Articles are shown newest first, using this date.",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "practiceArea",
      title: "Practice area label",
      type: "string",
      description: 'Shown above the article title, e.g. "Surrogacy & Fertility Law".',
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      description: "A one-or-two sentence summary shown in article previews. Keep it under 200 characters.",
      validation: (rule) => rule.max(200).warning("Keep the excerpt under 200 characters."),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [
        defineArrayMember({ type: "block" }),
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alternative text",
              type: "string",
              description: "A short description of the image. Required.",
              validation: (rule) => rule.required().error("Please describe the image (alternative text)."),
            }),
            defineField({
              name: "caption",
              title: "Caption",
              type: "string",
              description: "Optional caption shown under the image.",
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: { title: "title", author: "author.name", media: "coverImage", date: "publishedAt" },
    prepare({ title, author, media, date }) {
      const when = date ? new Date(date).toLocaleDateString("en-GB", { month: "long", year: "numeric" }) : "";
      return { title, subtitle: [author, when].filter(Boolean).join(" · "), media };
    },
  },
});
