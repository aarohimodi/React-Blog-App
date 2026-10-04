import React from "react";
import Container from "../../conf/container/Container";
import banner from "../../assets/banner.png";
function Banner() {
  return (
    <div
      className="py-15 bg cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <Container>
        <div className="md:w-[40%] p-5 md:p-0">
          <h3 className="text-[18px] ">WELCOME TO BLOGIFY —</h3>
          <h1 className="text-3xl leading-10 md:text-5xl mt-10 md:leading-15">
            Ideas, Stories & Insights for a Better You
          </h1>
          <p className="mt-10 ">
            Explore articles on lifestyle, productivity, health, travel and
            more.
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Banner;
