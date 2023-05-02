import React from "react";
import PageContainer from "../shared/pageContainer";
import Map from "./Map";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import Social from "../shared/social";

const ContactPage = () => {

  
  return (
    <PageContainer>
      <div className="px-4 w-full">
        <div className="space-y-14 space-x-8 lg:space-y-0 flex flex-col items-center lg:flex-row lg:justify-between lg:items-start mb-14 w-full">
          <div className="lg:w-1/2 w-full">
            <ContactForm />
          </div>
          <div>
            <ContactInfo />
            <Social />
          </div>
        </div>
        <Map />
      </div>
    </PageContainer>
  );
};

export default ContactPage;
