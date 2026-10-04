import React from "react";
import Container from "../../conf/container/Container";

function About() {
  return (
    <>
      <div className=" bg-[#05A53F] py-8 sm:py-10 mx-auto">
        <div className="mx-auto max-w-7xl px-5 text-center">
          <h1 className="text-2xl font-semibold text-white sm:text-3xl">
            About Us
          </h1>

          {/* <p className="mt-2 text-sm text-orange-100">{id}</p> */}
        </div>
      </div>
      <section className="py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">About Our Blog</h1>

            <p className="text-gray-600 leading-7 mb-4">
              Welcome to our blog, a place where we share useful articles,
              ideas, tutorials, and experiences about web development and
              technology.
            </p>

            <p className="text-gray-600 leading-7">
              Our goal is to make learning simple and practical through
              easy-to-understand content and real-world examples.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}

export default About;
