import React from "react";

const timelineEvents = [
  {
    date: "Jan 2018",
    title: "First Meeting",
    description: "Aman and Garima met for the first time.",
    image: "/dist/textures/DSC00680.jpg",
  },
  {
    date: "Mar 2019",
    title: "First Movie Night",
    description: "Shared popcorn and laughter at the movies.",
    image: "/dist/textures/DSC00680.jpg",
  },
  {
    date: "Jun 2020",
    title: "First Trip Together",
    description: "A memorable trip that brought them closer.",
    image: "/dist/textures/DSC00680.jpg",
  },
  {
    date: "Sep 2021",
    title: "Met the Families",
    description: "Introduced each other to their families.",
    image: "/dist/textures/DSC00680.jpg",
  },
  {
    date: "Dec 2022",
    title: "Engagement",
    description: "They got engaged with the blessings of family.",
    image: "/dist/textures/DSC00680.jpg",
  },
  {
    date: "Apr 2023",
    title: "First Festival Together",
    description: "Celebrated Holi with colors and joy.",
    image: "/dist/textures/DSC00680.jpg",
  },
  {
    date: "Aug 2024",
    title: "Dream Vacation",
    description: "Traveled to their dream destination.",
    image: "/dist/textures/DSC00680.jpg",
  },
  {
    date: "Dec 2025",
    title: "Wedding Day",
    description: "The beginning of their forever.",
    image: "/dist/textures/DSC00680.jpg",
  },
];

export const WeddingTimeline = () => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-[#2c1f13] via-[#4a341f] to-[#a47e3b] text-[#f3e2c7] py-16 px-4 font-sans overflow-hidden">
      {/* Stars background */}
      <div className="stars-bg pointer-events-none absolute inset-0 w-full h-full z-0"></div>
      <h2 className="text-center text-5xl font-cursive text-[#f5deb3] mb-20 relative z-10">
        Our Journey Together
      </h2>

      <div className="relative flex flex-col gap-8 max-w-4xl mx-auto">
        {/* SVG Curved Line Connector */}
        <svg
          className="absolute left-1/2 top-0 -translate-x-1/2 z-0 h-full w-full pointer-events-none"
          width="100%"
          height="100%"
          viewBox={`0 0 600 ${(timelineEvents.length - 1) * 288 + 256}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {timelineEvents.slice(0, -1).map((_, i) => {
            // 16rem card (256px) + 2rem gap (32px) = 288px per card+gap
            const cardHeight = 256;
            const gap = 32;
            const y1 = i * (cardHeight + gap) + cardHeight / 2;
            const y2 = (i + 1) * (cardHeight + gap) + cardHeight / 2;
            // x positions alternate left/right
            const x1 = i % 2 === 0 ? 120 : 480;
            const x2 = (i + 1) % 2 === 0 ? 120 : 480;
            // Control points for the curve
            const c1x = x1;
            const c1y = y1 + (gap + cardHeight) / 3;
            const c2x = x2;
            const c2y = y2 - (gap + cardHeight) / 3;
            return (
              <path
                key={i}
                d={`M${x1},${y1} C${c1x},${c1y} ${c2x},${c2y} ${x2},${y2}`}
                stroke="#e5c07b"
                strokeWidth="4"
                fill="none"
              />
            );
          })}
        </svg>
        {timelineEvents.map((event, index) => (
          <div
            key={index}
            className={`w-64 h-64 border border-[#e5c07b] rounded-xl shadow-xl backdrop-blur-md bg-white/10 hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden ${
            index % 2 === 0 ? "self-start" : "self-end"
            } group z-10 flex flex-col justify-center items-start`}
          >
            {/* Text content, fades out on hover */}
            <div className="flex flex-col justify-center items-center h-full w-full transition-opacity duration-500 group-hover:opacity-0 z-10 relative text-center">
              <span className="text-[#fce8b2] font-semibold text-sm block mb-1">
                {event.date}
              </span>
              <h3 className="text-2xl font-cursive text-[#fff8e1] mb-2">
                {event.title}
              </h3>
            </div>
            {/* Background image, fades in on hover */}
            <div className="absolute inset-0 w-full h-full transition-opacity duration-500 opacity-0 group-hover:opacity-100 bg-cover bg-center rounded-xl" style={{ backgroundImage: `url('${event.image}')` }}></div>
          </div>
        ))}
      </div>
    </section>
  );
};