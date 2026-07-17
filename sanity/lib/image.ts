import imageUrlBuilder from "@sanity/image-url";
import { getClient } from "./client";

type Builder = ReturnType<typeof imageUrlBuilder>;
type SanityImageSource = Parameters<Builder["image"]>[0];

let _builder: Builder | null = null;

function builder(): Builder | null {
  if (!_builder) {
    const client = getClient();
    if (!client) return null;
    _builder = imageUrlBuilder(client);
  }
  return _builder;
}

/* Request an image at the size the layout actually needs (Sanity crops and
   scales on their CDN, honouring the editor's hotspot) instead of shipping
   the full-size original. */
export function urlForImage(source: SanityImageSource, width: number, height?: number) {
  const b = builder();
  if (!b) return "";
  let img = b.image(source).width(width).auto("format").fit("max");
  if (height) img = img.height(height).fit("crop");
  return img.url();
}
