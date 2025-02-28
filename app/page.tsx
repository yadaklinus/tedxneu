"use client";
import Image from "next/image";
import { title, subtitle } from "@/components/primitives";
import { Button } from "@heroui/button";
import { FC } from "react";
import SeeEvent from "@/components/seeEvent"
import { Profile } from "@/components/profile";
import { Tabs, Tab, Card, CardBody } from "@heroui/react";

const TicketIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-ticket-perforated-fill" viewBox="0 0 16 16">
      <path d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6zm4-1v1h1v-1zm1 3v-1H4v1zm7 0v-1h-1v1zm-1-2h1v-1h-1zm-6 3H4v1h1zm7 1v-1h-1v1zm-7 1H4v1h1zm7 1v-1h-1v1zm-8 1v1h1v-1zm7 1h1v-1h-1z" />
    </svg>
  )
}
interface TedInput {
  width: number,
  height: number
}

const TedXImage: FC<TedInput> = ({ width, height }) => {
  return (
    <Image src="/logo.png" alt="TED" width={width} height={height} />
  )
}



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
          <TedXImage width={130} height={50} />
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
          <span className="flex my-4 gap-4">
            <SeeEvent />
          </span>
        </div>
      </div>


      <div className="gap-3 py-4">
        <div>
          <div className="flex">
            <span className={title()}>About</span>
            <span>
              <TedXImage width={130} height={50} />
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
              <TedXImage width={130} height={50} />
            </span>
            <span className={title()}>Mission</span>
          </div>
          <span className={subtitle()}>Ideas worth spreading</span>
          <br />
          <span style={{ fontSize: "15px" }}>
            We are committed to showcasing thought-provoking speakers from
            across disciplines from groundbreaking researchers and innovative
            entrepreneurs to inspiring artists and community leaders. Our events
            are designed to be more than just a series of talks; they are
            opportunities to connect with fellow thinkers, engage in meaningful
            dialogue, and become part of a larger conversation.
          </span>
        </div>
      </div>
      <br />
      <hr />
      <div className="items-center">
        <span className={title()}>Our Speakers</span>
        <div>

          <br />
          <span className="gap-2 grid grid-cols-2 sm:grid-cols-4">
            <Profile imageUrl="./ted.jpg" name="Yadak Linus" occupation="10x Software Devveloper" />
            <Profile imageUrl="./ted.jpg" name="Yadak Linus" occupation="10x Software Devveloper" />
            <Profile imageUrl="./ted.jpg" name="Yadak Linus" occupation="10x Software Devveloper" />

          </span>
        </div>

      </div>
      <div className="sticky-button-container">
        <Button startContent={<TicketIcon />} size="sm" variant="shadow" className="sticky-button buttonted">Save your seat</Button>
      </div>

    </section>
  );
}
