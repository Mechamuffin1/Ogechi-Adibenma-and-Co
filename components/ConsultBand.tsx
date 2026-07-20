import Link from "next/link";
import ConsultForm from "./ConsultForm";

type Props = {
  idPrefix?: string;
  heading?: string;
  style?: React.CSSProperties;
};

/* The "Tell us what you are facing" band shown at the foot of most pages. */
export default function ConsultBand({ idPrefix = "cb", heading = "Tell us what you are facing.", style }: Props) {
  return (
    <section className="consult-band" id="consult" style={style}>
      <div className="container consult-inner">
        <div className="reveal">
          <span className="eyebrow">Request a Consultation</span>
          <h2>{heading}</h2>
          <p>Write briefly and plainly, and we will do the same. Every enquiry receives a considered reply within one business day.</p>
          <p><Link className="text-link" href="/contact">Full contact details &amp; office hours</Link></p>
        </div>
        <ConsultForm idPrefix={idPrefix} lightButton />
      </div>
    </section>
  );
}
