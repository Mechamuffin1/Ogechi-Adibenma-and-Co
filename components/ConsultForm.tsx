"use client";

import { FormEvent, useState } from "react";

type Props = {
  idPrefix: string;
  withMatterType?: boolean;
  lightButton?: boolean;
  revealDelay?: string;
  messagePlaceholder?: string;
};

/* Consultation form: posts JSON to /api/contact (Resend email). A hidden
   honeypot field catches simple bots. Mirrors the original static-site
   form markup and .is-sending / .is-sent / .has-error states. */
export default function ConsultForm({
  idPrefix,
  withMatterType = false,
  lightButton = false,
  revealDelay = "1",
  messagePlaceholder,
}: Props) {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state === "sending") return;

    const form = e.currentTarget;
    const data: Record<string, string> = {};
    new FormData(form).forEach((value, key) => {
      data[key] = value.toString();
    });
    data.page = window.location.pathname;

    setState("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("request-failed");
      setState("sent");
    } catch {
      setState("error");
    }
  }

  const formClass =
    "form reveal" +
    (state === "sending" ? " is-sending" : "") +
    (state === "sent" ? " is-sent" : "") +
    (state === "error" ? " has-error" : "");

  return (
    <form className={formClass} data-delay={revealDelay} action="/api/contact" method="POST" onSubmit={onSubmit}>
      <div className="form-fields">
        <div className="form-row">
          <div className="field">
            <label htmlFor={`${idPrefix}-name`}>Name</label>
            <input id={`${idPrefix}-name`} name="name" type="text" required autoComplete="name" />
          </div>
          <div className="field">
            <label htmlFor={`${idPrefix}-email`}>Email</label>
            <input id={`${idPrefix}-email`} name="email" type="email" required autoComplete="email" />
          </div>
        </div>
        {withMatterType && (
          <div className="field">
            <label htmlFor={`${idPrefix}-matter`}>Matter type</label>
            <select id={`${idPrefix}-matter`} name="matter_type" required defaultValue="">
              <option value="" disabled>Select the closest match</option>
              <option>Surrogacy &amp; Fertility</option>
              <option>Corporate &amp; Commercial</option>
              <option>Family Law</option>
              <option>Property &amp; Real Estate</option>
              <option>Dispute Resolution</option>
              <option>Other / Not sure</option>
            </select>
          </div>
        )}
        <div className="field">
          <label htmlFor={`${idPrefix}-message`}>Your matter, briefly</label>
          <textarea id={`${idPrefix}-message`} name="message" required placeholder={messagePlaceholder} />
        </div>
        <input
          type="text"
          name="company"
          autoComplete="off"
          tabIndex={-1}
          aria-hidden="true"
          style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}
        />
        <button className={lightButton ? "btn btn--light" : "btn"} type="submit" disabled={state === "sending"}>
          Send Enquiry
        </button>
        <p className="form-note">Sending an enquiry does not create a lawyer–client relationship. Please do not include confidential detail at this stage.</p>
      </div>
      <div className="form-success" role="status">Thank you. Your enquiry has been received. Expect a considered reply within one business day.</div>
      <p className="form-error" role="alert">Something went wrong. Please try again, or email us directly.</p>
    </form>
  );
}
