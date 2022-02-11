import { Fragment } from "react";
import SEO from "@/components/seo/index";
import ContactForm from "@/components/contact/contact-form";

const ContactPage = () => {
  return (
    <Fragment>
      <SEO title="Contact Me" description="Send me your messages!" />
      <ContactForm />
    </Fragment>
  );
};

export default ContactPage;
