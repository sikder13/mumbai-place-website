import type { Metadata } from "next";
import { Container } from "@/components/site/Container";
import { SocialLinks } from "@/components/site/SocialLinks";
import { ContactForm } from "@/components/contact/ContactForm";
import { locations } from "@/lib/locations";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Questions, press, private dining, or just saying hello. Write to us or pick up the phone — we answer both.",
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-[color:var(--color-line)] bg-[color:var(--color-surface)]">
        <Container className="py-20 sm:py-28">
          <p className="text-[0.625rem] uppercase tracking-[0.35em] text-[color:var(--color-accent-saffron)]">
            Contact
          </p>
          <h1 className="font-display mt-6 max-w-3xl text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Write, call, or
            <span className="italic font-light"> walk in.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-[color:var(--color-ink-muted)]">
            Questions, feedback, private dining, press. Whatever brings you
            here — a message, a phone call, or a table — we&rsquo;re happy to
            hear from you.
          </p>
        </Container>
      </section>

      <section className="bg-[color:var(--color-surface)]">
        <Container className="py-16 sm:py-24">
          <div className="grid gap-16 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
            <div>
              <p className="text-[0.625rem] uppercase tracking-[0.35em] text-[color:var(--color-accent-saffron)]">
                Send a message
              </p>
              <h2 className="font-display mt-6 text-3xl leading-tight tracking-tight sm:text-4xl">
                We read every one.
              </h2>
              <p className="mt-4 max-w-xl text-[color:var(--color-ink-muted)]">
                For reservations, the phone is still the fastest — especially
                for larger parties. For everything else, the form below lands
                straight in our inbox.
              </p>
              <div className="mt-10">
                <ContactForm />
              </div>
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-3xl border border-[color:var(--color-line)] bg-[color:var(--color-surface-elevated)] p-8 sm:p-10">
                <p className="text-[0.625rem] uppercase tracking-[0.35em] text-[color:var(--color-accent-saffron)]">
                  By phone or in person
                </p>
                <div className="mt-8 space-y-10">
                  {locations.map((loc) => (
                    <div key={loc.slug}>
                      <p className="font-display text-xl leading-tight tracking-tight">
                        {loc.neighborhood}
                      </p>
                      <p className="mt-2 text-sm text-[color:var(--color-ink)]">
                        {loc.addressLine1}
                      </p>
                      <p className="text-sm text-[color:var(--color-ink-muted)]">
                        {loc.addressLine2}
                      </p>
                      <a
                        href={`tel:${loc.phone}`}
                        className="mt-3 inline-block text-sm text-[color:var(--color-ink)] underline decoration-[color:var(--color-accent-saffron)] decoration-1 underline-offset-[6px] hover:text-[color:var(--color-accent-saffron)]"
                      >
                        {loc.phoneDisplay}
                      </a>
                      <ul className="mt-4 space-y-1 text-xs text-[color:var(--color-ink-muted)]">
                        {loc.hours.map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="mt-10 border-t border-[color:var(--color-line)] pt-8">
                  <p className="text-[0.625rem] uppercase tracking-[0.25em] text-[color:var(--color-ink-muted)]">
                    Email
                  </p>
                  <a
                    href={`mailto:${site.contactEmail}`}
                    className="mt-2 inline-block text-sm text-[color:var(--color-ink)] hover:text-[color:var(--color-accent-saffron)]"
                  >
                    {site.contactEmail}
                  </a>
                  <p className="mt-6 text-[0.625rem] uppercase tracking-[0.25em] text-[color:var(--color-ink-muted)]">
                    Follow along
                  </p>
                  <SocialLinks tone="dark" className="mt-3" />
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
