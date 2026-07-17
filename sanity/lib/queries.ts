import { groq } from "next-sanity";

export const allArticlesQuery = groq`
  *[_type == "article" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    coverImage,
    publishedAt,
    practiceArea,
    excerpt,
    "authorName": author->name,
    "authorRole": author->role
  }
`;

export const articleBySlugQuery = groq`
  *[_type == "article" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    coverImage,
    publishedAt,
    practiceArea,
    excerpt,
    body,
    "authorName": author->name,
    "authorRole": author->role,
    "authorSlug": author->slug.current
  }
`;

export const allLawyersQuery = groq`
  *[_type == "lawyerProfile" && defined(slug.current)] | order(order asc, name asc) {
    _id,
    name,
    "slug": slug.current,
    photo,
    role,
    lede,
    summary,
    practiceAreas,
    credentials
  }
`;

export const lawyerBySlugQuery = groq`
  *[_type == "lawyerProfile" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    photo,
    role,
    lede,
    bio,
    practiceAreas,
    credentials,
    email,
    "articles": *[_type == "article" && author._ref == ^._id] | order(publishedAt desc) {
      title,
      "slug": slug.current,
      publishedAt
    }
  }
`;
