import React from "react";
import Container from "../../conf/container/Container";

function Contact() {
  return (
    <>
      <div className=" bg-[#05A53F] py-8 sm:py-10 mx-auto">
        <div className="mx-auto max-w-7xl px-5 text-center">
          <h1 className="text-2xl font-semibold text-white sm:text-3xl">
            Contact Us
          </h1>

          {/* <p className="mt-2 text-sm text-orange-100">{id}</p> */}
        </div>
      </div>

      <section className="py-20">
        <Container>
          <div className="max-w-2xl mx-auto">
            {/* <h1 className="text-4xl font-bold text-center mb-10">Contact Us</h1> */}

            <form className="space-y-5">
              <div>
                <label className="font-semibold">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full mt-2 p-3 border rounded-lg"
                />
              </div>

              <div>
                <label className="font-semibold">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full mt-2 p-3 border rounded-lg"
                />
              </div>

              <div>
                <label className="font-semibold">Message</label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full mt-2 p-3 border rounded-lg"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-3 rounded-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Contact;
