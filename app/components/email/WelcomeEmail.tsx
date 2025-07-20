import * as React from 'react';
import { Img, Container, Heading, Font, Text, Head, Section, Link } from "@react-email/components"

//Written Date: 7/20/25

function WelcomeEmail() {

  return (
    <div style={{
      backgroundColor: "black",
    }}>
      <Container style={{
        backgroundColor: "black",
        color: "white",
        padding: "16px"
      }}>
        <Head
        style={{
          marginTop: "40px",
          padding: "16px",
          width: "100%",
          height: "100%"
        }}
        >
            <Font
              fontFamily="Instrument Sans"
              fallbackFontFamily="Verdana"
              webFont={{
                url: "https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Instrument+Serif:ital@0;1&display=swap",
                format: "woff2",
              }}
              fontWeight={400}
              fontStyle="normal"
            />
            <Img src='https://www.tablebyray.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.e61feb5a.jpg&w=256&q=75' alt="logo" width="80" height="24" />
        </Head>

        <Heading
          style={{ 
            fontFamily: '"Instrument Sans", sans-serif',
            fontSize: "32px",
            lineHeight: "1.15"
          }}>
          Come take a seat
          <br />
          at our table
        </Heading>

        <Img src="https://www.tablebyray.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdummy-photo.4d1361b7.jpg&w=3840&q=75" alt="main" width="560" height="400" />

        <Text 
        style={{ 
          fontFamily: '"Instrument Sans", sans-serif',
          fontSize: "16px"
          }}>
          Thanks for pulling up a chair. I'm Ray—and this is Ray's Table, where cooking isn’t about perfection. It’s about presence.
          You’ll be getting recipes that are easy to follow, comforting to eat, and sometimes a little weird (in a good way). But more than that, you’ll get the stories behind them—because I believe food should make you feel something.
          <br />
          <br />
          Whether you’re here to fall in love with cooking again, learn something new, or just laugh at my mistakes, I’m really glad you’re here.
          <br />
          <br />
          I’ll be sending out my first recipe soon!
          <br />
          <br />
          Until then,
          <br />
          — Ray 🍽️
        </Text>

        <Section 
        style={{
          marginTop: "40px",
          borderTop: "1px",
          borderTopStyle: "solid",
          borderColor: "#131313",
          padding: "16px",
          paddingTop: "24px",
          justifyItems: "center",
        }}>
          <table style={{ width: '100%' }}>
            <tr style={{ width: '100%' }}>
              <td align="center">
                <Img
                  alt="Rays table Logo"
                  height="24"
                  src="https://www.tablebyray.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.e61feb5a.jpg&w=256&q=75"
                  style={{
                    marginTop: "24px",
                    marginBottom: "24px"
                  }}
                />
              </td>
            </tr>
            <tr style={{ width: '100%' }}>
              <td align="center">
                <Text
                  style={{
                    marginTop: 4,
                    marginBottom: '0px',
                    fontSize: 14,
                    lineHeight: '14px',
                    color: '#333333',
                  }}
                >
                  Recipes with soul, stories with flavor.
                </Text>
              </td>
            </tr>
            <tr>
              <td align="center">
                <Text
                  style={{
                    marginTop: 8,
                    marginBottom: 8,
                    fontSize: 12,
                    lineHeight: '16px',
                    fontWeight: 400,
                    color: '#333333',
                  }}
                >
                  Seattle, WA
                </Text>
                <Link
                href='mailto:contact@tablebyray.com'
                >
                  <Text
                    style={{
                      marginTop: 4,
                      marginBottom: '0px',
                      fontSize: 12,
                      lineHeight: '16px',
                      fontWeight: 400,
                      color: '#333333',
                    }}
                  >
                    contact@tablebyray.com
                  </Text>
                </Link>
              </td>
            </tr>
          </table>
        </Section>

      </Container>
    </div>
  )
}

export default WelcomeEmail