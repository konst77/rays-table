import * as React from "react";
import {
  Html, Head, Preview, Body, Container, Section,
  Heading, Text, Img, Button, Link
} from "@react-email/components";

export default function RaysTableWelcome() {
  const brand = {
    bg: "#0B0B0B",
    card: "#111111",
    text: "#F5F5F5",
    subtext: "#B5B5B5",
    divider: "#1F1F1F",
    accent: "#FFD28B",
    width: 600
  };

  const styles = {
    body: { backgroundColor: brand.bg, margin: 0, padding: "24px" },
    container: {
      width: brand.width,
      maxWidth: "100%",
      backgroundColor: brand.card,
      color: brand.text,
      margin: "0 auto",
      padding: "24px",
      borderRadius: "12px"
    },
    h1: { fontFamily: "Arial, Helvetica, sans-serif", fontSize: "28px", lineHeight: "1.2", margin: "16px 0" },
    p: { fontFamily: "Arial, Helvetica, sans-serif", fontSize: "15px", lineHeight: "1.6", color: brand.text, margin: "12px 0" },
    sub: { fontFamily: "Arial, Helvetica, sans-serif", fontSize: "13px", lineHeight: "1.6", color: brand.subtext },
    btn: {
      display: "inline-block",
      padding: "12px 18px",
      fontFamily: "Arial, Helvetica, sans-serif",
      fontSize: "15px",
      textDecoration: "none",
      backgroundColor: brand.accent,
      color: "#222",
      borderRadius: "8px"
    },
    divider: { borderTop: `1px solid ${brand.divider}`, margin: "28px 0" },
    footer: { textAlign: "center" as const }
  };

  return (
    <Html>
      <Head />
      <Preview>Welcome to Ray’s Table — recipes with soul, stories with flavor.</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Section style={{ textAlign: "center" }}>
            <Img
              src="https://tablebyray.com/email/logo.jpg"
              alt="Ray’s Table"
              width="96"
              height="28"
              style={{ margin: "8px auto 12px" }}
            />
          </Section>

          <Heading style={styles.h1}>
            Come take a seat at our table
          </Heading>

          <Img
            src="https://tablebyray.com/email/hero-welcome.jpg"
            alt="A cozy bowl at Ray’s Table"
            width={brand.width - 48}
            height={360}
            style={{ width: "100%", height: "auto", borderRadius: "10px" }}
          />

          <Text style={styles.p}>
            Thanks for pulling up a chair. I’m Ray—this is Ray’s Table, where cooking isn’t about
            perfection. It’s about presence. You’ll get easy, comforting recipes and the little
            stories that make them stick.
          </Text>

          <Text style={styles.p}>
            First recipe’s coming soon. Want early access and a printable grocery list?
          </Text>

          <Section style={{ marginTop: 12 }}>
            <Button
              href="https://tablebyray.com/email"
              style={styles.btn}
            >
              Send me the first recipe →
            </Button>
          </Section>

          <div style={styles.divider} />

          <Section style={{ ...styles.footer }}>
            <Img
              src="https://tablebyray.com/email/logo.jpg"
              alt="Ray’s Table"
              width="72"
              height="22"
              style={{ margin: "6px auto 10px" }}
            />
            <Text style={styles.sub}>Recipes with soul, stories with flavor.</Text>
            <Text style={styles.sub}>Seattle, WA</Text>
            <Text style={styles.sub}>
              <Link href="mailto:contact@tablebyray.com" style={{ color: brand.subtext, textDecoration: "underline" }}>
                contact@tablebyray.com
              </Link>
            </Text>
            <Text style={{ ...styles.sub, marginTop: 8 }}>
              <Link href="https://tablebyray.com/manage?ref=welcome_footer" style={{ color: brand.subtext, textDecoration: "underline" }}>
                Manage preferences
              </Link>{" "}
              ·{" "}
              <Link href="https://tablebyray.com/unsubscribe?ref=welcome_footer" style={{ color: brand.subtext, textDecoration: "underline" }}>
                Unsubscribe
              </Link>
            </Text>
            <Text style={{ ...styles.sub, marginTop: 8 }}>
              Ray’s Table · 123 Example Ave, Seattle, WA 98101
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
