import * as React from 'react';
import { Img } from "@react-email/components"
import dummy from "@/public/img/dummy-photo.jpg";

function WelcomeEmail() {
  return (
    <div>
      <div>
        <h1>
          Come have
          <br />
          a seat.
        </h1>

        <Img src={dummy.src} alt="Cat" width="300" height="300" />
      </div>

      <p>
        Thanks for pulling up a chair. I'm Ray—and this is Ray's Table, where cooking isn’t about perfection. It’s about presence.
        You’ll be getting recipes that are easy to follow, comforting to eat, and sometimes a little weird (in a good way). But more than that, you’ll get the stories behind them—because I believe food should make you feel something.
<br />
<br />
        Whether you’re here to fall in love with cooking again, learn something new, or just laugh at my mistakes, I’m really glad you’re here.
<br />
<br />
        I’ll be sending out my first recipe soon (hint: it involves garlic, a little butter, and absolutely no judgment).
<br />
<br />
        Until then,
        <br />
        — Ray 🍽️
      </p>
    </div>
  )
}

export default WelcomeEmail