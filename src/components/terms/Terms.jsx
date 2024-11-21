import React from "react";
import "./Terms.css"; // Import the CSS file for styling

function Terms() {
  return (
    <div className="terms-container">
      <h1 className="terms-title">Digital Creatorz</h1>
      <h2 className="terms-subtitle">Terms and Conditions</h2>

      <div className="terms-content">
        <section className="terms-section">
          <h3>1. Acceptance of Terms</h3>
          <p>
            By accessing or using our digital marketing services, you agree to
            be bound by these terms and conditions. If you do not agree with
            any part of these terms, you must not use our services.
          </p>
        </section>

        <section className="terms-section">
          <h3>2. Scope of Services</h3>
          <p>
            Our digital marketing services may include, but are not limited to,
            search engine optimization (SEO), social media marketing,
            pay-per-click advertising (PPC), email marketing, content
            marketing, and analytics reporting.
          </p>
        </section>

        <section className="terms-section">
          <h3>3. Intellectual Property</h3>
          <p>
            All content, materials, and intellectual property provided through
            our digital marketing services are owned or licensed by us and are
            protected by applicable copyright, trademark, and other
            intellectual property laws. You may not use, modify, reproduce,
            distribute, or create derivative works based on our materials
            without our express written consent.
          </p>
        </section>

        <section className="terms-section">
          <h3>4. Privacy Policy</h3>
          <p>
            Our privacy policy governs the collection, use, and disclosure of
            personal information you provide to us. By using our services, you
            consent to the practices described in our privacy policy.
          </p>
        </section>

        <section className="terms-section">
          <h3>5. Use of Services</h3>
          <p>
            You agree to use our digital marketing services only for lawful
            purposes and in compliance with all applicable laws and
            regulations. You shall not engage in any activities that may harm
            or interfere with the proper functioning of our website or services.
          </p>
        </section>

        <section className="terms-section">
          <h3>6. Changes to Terms and Services</h3>
          <p>
            We reserve the right to update or modify these terms and conditions
            and our digital marketing services at any time without prior
            notice. Any changes will be effective immediately upon posting on
            our website.
          </p>
        </section>

        <section className="terms-section">
          <h3>7. Entire Agreement</h3>
          <p>
            These terms and conditions constitute the entire agreement between
            you and us regarding our digital marketing services and supersede
            all prior or contemporaneous agreements, understandings,
            representations, or warranties, whether oral or written. By using
            our digital marketing services, you acknowledge that you have read,
            understood, and agree to be bound by these terms and conditions.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Terms;
