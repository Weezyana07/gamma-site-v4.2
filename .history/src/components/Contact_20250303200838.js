import React from "react";

const ContactUs = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Contact Image */}
        <div
          className="h-64 md:h-full bg-cover bg-center rounded-lg"
          style={{ backgroundImage: "url(../assets/images/contact.jpg)" }}
          aria-label="Contact Us Image"
        ></div>

        {/* Contact Content */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            How Can We Help You Succeed?
          </h2>
          <p className="text-lg text-gray-700 mt-4">
            Whatever challenges you face, our experts are here to help you
            navigate them with confidence.
          </p>

          <div className="mt-6">
            <p className="text-gray-600">
              <strong>Email:</strong> contact@gammaspectre.com
            </p>
            <p className="text-gray-600">
              <strong>Phone:</strong> +123 456 7890
            </p>
            <p className="text-gray-600">
              <strong>Address:</strong> 123 Business Road, Tech City, TX
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
