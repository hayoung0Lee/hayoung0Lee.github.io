import * as React from "react";
import Layout from "../components/layout";

const AboutMePage = () => {
  return (
    <Layout>
      <h3>Hi, I'm Hayoung Lee</h3>
      <div>
        <p>
          I'm building this blog now, and as you see... this is pretty empty.
        </p>
        <p>Please contact me anytime when you have questions! </p>
        <p>
          This is my email: <strong>hayoung0.lee@gmail.com</strong>
        </p>
        <p>
          This is my github{" "}
          <strong>
            <a href="https://github.com/hayoung0Lee">Visit My Github</a>
          </strong>
        </p>
      </div>
    </Layout>
  );
};

export default AboutMePage;
