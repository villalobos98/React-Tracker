import React from "react";
import "./styles/Home.css";
function Home() {
  return (
    <div className="background">
      <div direction="column" width="auto" class="sc-pt0hl1-0 jtNkUh">
        <h1 class="sc-1mf5jf3-0 eSBViu">
          Easy tracking
          <span class="sc-l2chlf-0 destYF">ahead</span>
        </h1>
        <p font-weight="medium" class="sc-qq8d8z-0 jNMNmR">
          Trackr is your spot to track anything you want ! Need to track your
          haircut ? Store a grocery list ? Store any list you want ! Now you can
          do so with Trackr! An easy to use interface for adding new items with
          a weekly view for all members ! Upgrade to Pro version for only $5.99
          and you can see a monthly view ! Have any meetings that you want to
          schedule ? Simply add it to the Trackr! Track everything
          professionally and efficiently, eliminating the hassle of
          back-and-forth emails so you can get back to work.
        </p>
        <form
          action="/app/signup"
          method="get"
          novalidate=""
          data-testid="email-form"
          class="sc-dgz7km-0 eyWSpD"
        >
          <div data-testid="email-input" class="sc-1ypbwf-0 hEBDxg">
            <input
              type="email"
              name="email"
              value=""
              placeholder="Enter your email"
            />
            <div height="auto" width="auto">
            <button class="button-1">Sign Up</button>
          </div>
          </div>
          <input type="hidden" name="lang" value="en" />
          
        </form>
        <div class="sc-1ypbwf-0 fQkXFb"></div>
      </div>
    </div>
  );
}

export default Home;
