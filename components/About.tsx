"use client";
/* eslint-disable */

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 ">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          About
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-start text-muted-foreground lg:px-6">
          Throughout my backend engineering journey, I've been guided by a
          core belief:{" "}
          <span className="text-white">
            great systems should be fast, scalable, and invisible to the user.
          </span>{" "}
          Whether building APIs, databases, or infrastructure, I focus on
          performance, reliability, and simplicity.
        </p>
        <p className="text-start text-muted-foreground lg:px-6">
          Currently, I'm working as a backend engineer at a stealth AI startup,
          building core systems that power new financial experiences. I'm also
          contributing to{" "}
          <a
            className="no-wrap text-primary dark:text-white"
            href="https://vela.exchange"
            target="blank"
            rel="noopener noreferrer"
          >
            Vela Exchange
          </a>
          , where I help scale backend services for decentralized perpetual
          trading. As a co-founder and backend lead at{" "}
          <a
            className="no-wrap text-primary dark:text-white"
            href="https://swoop.exchange"
            target="blank"
            rel="noopener noreferrer"
          >
            Swoop Exchange
          </a>
          , I helped architect a meta-aggregation engine that serves thousands
          of daily users.
        </p>
        <p className="text-start text-muted-foreground lg:px-6">
          Across all the platforms I've worked on, I've had the opportunity to
          build and maintain systems handling billions in transaction volume.
          My mission is to make backend technology feel effortless—designing
          systems that empower frontend teams and end users without ever getting
          in the way.
        </p>
      </div>
    </section>
  );
}