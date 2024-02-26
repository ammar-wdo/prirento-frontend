import ContactForm from "@/components/(contact)/contact-form";
import ContentBanner from "@/components/(content banner)/content-banner";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="pb-12">
      <ContentBanner title="Contact Us" />

      <section className="mt-20 container min-h-[1000px]">
        <h1 className="text-4xl font-semibold mt-4">Get in touch</h1>
        {/* service hours */}
        <h3 className="font-semibold mt-6">Customer Service Hours</h3>
        <div className="mt-3">
          <p className="flex items-center gap-1">
            <span className="font-medium">Monday to Friday:</span>
            <span>9:00 AM to 6:00 PM</span>
          </p>
          <p className="flex items-center gap-1">
            <span className="font-medium">Saturday & Sunday:</span>
            <span>Closed</span>
          </p>
        </div>
        {/* contact info */}
        <h3 className="font-semibold mt-6"> Contact Information</h3>
        <ul className="mt-3 list-disc  text-black">
          <li className="flex items-center gap-1 ">
            {" "}
            <span className="font-medium">Phone:</span>
            <span>+123-456-7890</span>
          </li>
          <li className="flex items-center gap-1">
            {" "}
            <span className="font-medium">Email:</span>
            <span>info@prirento.com</span>
          </li>
          <li className="flex items-center gap-1">
            {" "}
            <span className="font-medium">Address:</span>
            <span> 123 Luxury Drive, City, Country</span>
          </li>
        </ul>

        {/* Reach Out  */}
        <h3 className="font-semibold mt-6">Reach Out</h3>
        <p>Have any questions or need assistance? Please fill out the form below, and our dedicated team will respond to you shortly.</p>


        <div className="mt-12">
            <h3 className="text-4xl font-semibold mt-4">Contact Us</h3>
            <div className="mt-4 max-w-[1200px]">
                <ContactForm/>
            </div>

        </div>
      </section>
    </div>
  );
};

export default page;
