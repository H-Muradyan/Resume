import React from "react";
import { contactInfos } from "./const";
import { Link } from "react-router-dom";

const ContactInfo = () => {
  return (
    <>
      <h4 className="text-2xl mb-5 text-center lg:text-start font-bold">Contact Information</h4>
      {contactInfos.length &&
        contactInfos.map(({ id, oppositeContent, link, content }) => (
          <div className="mb-5" key={id}>
            <small>
              <i>{oppositeContent} : </i>
            </small>
            <Link className="font-medium" aria-label={oppositeContent} target="_blank" to={link}>
              {content}
            </Link>
          </div>
        ))}
    </>
  );
};

export default ContactInfo;
