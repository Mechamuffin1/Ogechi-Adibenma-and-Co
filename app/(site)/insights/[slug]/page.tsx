import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ConsultBand from "@/components/ConsultBand";
import PortableTextBody from "@/components/PortableTextBody";
import { getAllArticles, getArticleBySlug } from "@/sanity/lib/fetch";
import { urlForImage } from "@/sanity/lib/image";

export const revalidate = 60;

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const articles = await getAllArticles();
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} | Chambers Notes`,
    description: article.excerpt,
    alternates: { canonical: `https://www.ogechiadibenma.com/insights/${article.slug}.html` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      ...(article.coverImage?.asset ? { images: [{ url: urlForImage(article.coverImage, 1200, 630) }] } : {}),
    },
  };
}

function monthYear(iso?: string) {
  return iso ? new Date(iso).toLocaleDateString("en-GB", { month: "long", year: "numeric" }) : "";
}

function initials(name?: string) {
  if (!name) return "OA";
  return name
    .replace(/,.*$/, "")
    .split(/\s+/)
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) notFound();

  const related = (await getAllArticles()).filter(
    (a) => a.slug !== article.slug && a.practiceArea && a.practiceArea === article.practiceArea
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    datePublished: article.publishedAt?.slice(0, 10),
    ...(article.authorName
      ? {
          author: {
            "@type": "Person",
            name: article.authorName.replace(/,\s*Esq\.?$/, ""),
            ...(article.authorRole ? { jobTitle: article.authorRole } : {}),
            ...(article.authorSlug
              ? { url: `https://www.ogechiadibenma.com/people/${article.authorSlug}.html` }
              : {}),
          },
        }
      : {}),
    publisher: { "@type": "Organization", name: "Ogechi Adibenma & Co Legal Chambers" },
    ...(article.practiceArea ? { about: [article.practiceArea] } : {}),
    mainEntityOfPage: `https://www.ogechiadibenma.com/insights/${article.slug}.html`,
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article>
        <header className="article-header">
          <div className="container container--narrow">
            <p className="breadcrumb reveal"><Link href="/insights">Chambers Notes</Link>{article.practiceArea ? ` / ${article.practiceArea}` : ""}</p>
            <div className="meta reveal">{monthYear(article.publishedAt)}</div>
            <h1 className="reveal" data-delay="1">{article.title}</h1>
            {article.authorName && (
              <div className="article-byline reveal" data-delay="2">
                <span className="avatar" aria-hidden="true">{initials(article.authorName)}</span>
                <span>
                  <strong>{article.authorName}</strong>
                  {article.authorRole ? <> · {article.authorRole}</> : null}
                  {article.authorSlug ? <> · <Link href={`/people/${article.authorSlug}`}>Profile</Link></> : null}
                </span>
              </div>
            )}
          </div>
        </header>

        <div className="article-body">
          <div className="container container--narrow">
            {article.coverImage?.asset && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={urlForImage(article.coverImage, 1400)}
                alt={article.coverImage.alt || ""}
                style={{ maxWidth: "100%", height: "auto", display: "block", margin: "0 0 2rem" }}
              />
            )}

            {article.body && <PortableTextBody value={article.body} />}

            <div className="article-disclaimer">
              This note is commentary on the law as at {monthYear(article.publishedAt)}, not legal advice, and does not
              create a lawyer–client relationship. Matters turn on their specific facts — take advice on yours.{" "}
              <Link href="/contact">Request a consultation</Link>.
            </div>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="related-strip section--tight">
          <div className="container container--narrow">
            <span className="eyebrow">Related</span>
            <ul style={{ listStyle: "none", padding: 0, margin: "0.5rem 0 0" }}>
              {related.slice(0, 2).map((a) => (
                <li key={a._id} style={{ marginBottom: "0.6rem" }}>
                  <Link className="text-link" href={`/insights/${a.slug}`}>{a.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <ConsultBand heading="Facing this question yourself?" />
    </main>
  );
}
