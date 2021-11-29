import React from "react";
import "./styles/Home.css";

const Home = () => {
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
        <button class="button-1">Sign Up</button>
        <input type="hidden" name="lang" value="en" />
      </div>
    </div>
  );
};

export default Home;
