"use client";
import Image from "next/image";
import { title, subtitle } from "@/components/primitives";



export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 top-clear-pad">
      <div
        className="relative w-full h-screen flex items-center justify-center bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/ted.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <Image src="/logo.png" alt="TED" width={130} height={50} />
          <br />
          <span className="text-4xl cursive-font !text-white">North Eastern University</span>
          <br />
          <span className={`${title()} style-font`} style={{ fontSize: "60px" }}>
            <span className="color-ted">Beyond</span>
            <br />
            <span>The</span>
            <br />
            <span className="color-ted">Boundaries</span>
          </span>
        </div>
      </div>


      <div className="gap-3 py-4">
        <div>
          <div className="flex">
            <span className={title()}>About</span>
            <span>
              <Image src="/logo.png" alt="TED" width={130} height={50} />
            </span>
          </div>
          <br />
          <span className={subtitle()}>North Eastern University</span>
          <br />
          <span style={{ fontSize: "15px" }}>
            TEDxNortheasternUniversity is a community driven event dedicated to
            bringing the spirit of TED to our campus and the wider Boston area.
            We believe in the power of ideas to ignite conversations, inspire
            change, and ultimately shape our world. Through carefully curated
            talks, performances, and experiences, we aim to create a space where
            diverse perspectives converge, sparking curiosity and fostering a
            deeper understanding of the world around us. We are a team of
            passionate Northeastern University students, faculty, and alumni
            driven by a shared belief in the
          </span>
        </div>
        <br />
        <hr />
        <div className="my-7">
          <div className="flex">
            <span>
              <Image src="/logo.png" alt="TED" width={130} height={50} />
            </span>
            <span className={title()}>Mission</span>
          </div>
          <span className={subtitle()}>Ideas worth spreading</span>
          <br />
          <span style={{ fontSize: "15px" }}>
            We are committed to showcasing thought-provoking speakers from
            across disciplines – from groundbreaking researchers and innovative
            entrepreneurs to inspiring artists and community leaders. Our events
            are designed to be more than just a series of talks; they are
            opportunities to connect with fellow thinkers, engage in meaningful
            dialogue, and become part of a larger conversation.
          </span>
        </div>
      </div>
      <br />
      <div className="items-center">
        <div className="flex">
          <span className={title()}>About</span>
          <span>
            <Image src="/logo.png" alt="TED" width={130} height={50} />
          </span>
        </div>

      </div>
    </section>
  );
}
