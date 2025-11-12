import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState, useRef } from "react";
import { Environment, Float, OrbitControls, Loader } from "@react-three/drei";
import { Book } from "./Book";
import { pageAtom } from "./UI";
import { useAtom } from "jotai";

const pictures = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16"
];

const pages = [
  { front: "book-cover", back: pictures[0] },
  ...Array.from({ length: Math.floor((pictures.length - 1) / 2) }, (_, i) => ({
    front: pictures[1 + i * 2],
    back: pictures[2 + i * 2],
  })),
  { front: pictures[pictures.length - 1], back: "book-back" },
];

export const HeroSection = () => {
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [page, setPage] = useAtom(pageAtom);
  const [audio] = useState(new Audio("/audios/background-music.mp3"));

  // Page flip on page change
  useEffect(() => {
    const flipAudio = new Audio("/audios/page-flip-01a.mp3");
    flipAudio.play().catch(() => {});
  }, [page]);

  // Background music
  useEffect(() => {
    const isAudioPlayedBefore = localStorage.getItem("audioPlayed");

    audio.loop = true;
    audio.muted = true;
    audio.play().catch((error) => {
      console.error("Audio playback failed:", error);
    });

    const unmuteAudio = () => {
      if (!audioPlaying) {
        audio.muted = false;
        setAudioPlaying(true);
        localStorage.setItem("audioPlayed", "true");
        window.removeEventListener("click", unmuteAudio);
        window.removeEventListener("scroll", unmuteAudio);
      }
    };

    window.addEventListener("click", unmuteAudio);
    window.addEventListener("scroll", unmuteAudio);

    return () => {
      window.removeEventListener("click", unmuteAudio);
      window.removeEventListener("scroll", unmuteAudio);
    };
  }, [audio, audioPlaying]);

  return (
    <section
      id="hero"
      className="relative w-full h-[85vh] overflow-hidden text-white"
    >
      {/* Marquee Text */}
      <div className="absolute inset-0 overflow-hidden select-none flex items-center justify-center z-0">
        <div className="whitespace-nowrap w-full">
          <div className="flex animate-marquee w-[200%]">
            {[...Array(2)].map((_, i) => (
              <div
                key={i}
                className="flex items-center gap-6 sm:gap-8 w-full sm:w-1/2 justify-center"
              >
                <h1
                  className="text-4xl sm:text-5xl md:text-8xl lg:text-10xl font-bold"
                  style={{ fontFamily: "Dancing Script, cursive" }}
                >
                  Aman
                </h1>
                <h2
                  className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl italic"
                  style={{ fontFamily: "Great Vibes, cursive" }}
                >
                  Weds
                </h2>
                <h2
                  className="text-4xl sm:text-6xl md:text-10xl lg:text-12xl font-bold"
                  style={{ fontFamily: "Dancing Script, cursive" }}
                >
                  Garima
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3D Canvas with Book */}
      <Canvas
        shadows
        camera={{ position: [-0.5, 1, 4], fov: 45 }}
        gl={{ alpha: true, preserveDrawingBuffer: true }}
        style={{ background: "transparent" }}
        className="absolute inset-0 z-10 !w-full !h-full pointer-events-none"
      >
        <Suspense fallback={null}>
          <Float
            rotation-x={-Math.PI / 4}
            floatIntensity={1}
            speed={2}
            rotationIntensity={2}
          >
            <Book position={[-0.5, 0, 0]} />
          </Float>
          <OrbitControls enableZoom={false} />
          <Environment preset="studio" />
          <directionalLight
            position={[2, 5, 2]}
            intensity={2.5}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-bias={-0.0001}
          />
          <mesh position-y={-1.5} rotation-x={-Math.PI / 2} receiveShadow>
            <planeGeometry args={[100, 100]} />
            <shadowMaterial transparent opacity={0.2} />
          </mesh>
        </Suspense>
      </Canvas>

      {/* Page Navigation */}
      <div className="absolute bottom-4 w-full z-20 flex justify-center pointer-events-auto px-4">
        <div className="flex overflow-x-auto no-scrollbar items-center gap-3 p-3 rounded-xl max-w-[90%] whitespace-nowrap">
          {pages.map((_, index) => (
            <button
              key={index}
              onClick={() => setPage(index)}
              className={`shrink-0 px-4 py-2 rounded-full text-sm transition ${
                page === index
                  ? "bg-white text-black"
                  : "bg-black/40 text-white"
              }`}
            >
              {index === 0 ? "Cover" : `Page ${index}`}
            </button>
          ))}
          <button
            onClick={() => setPage(pages.length)}
            className={`shrink-0 px-4 py-2 rounded-full text-sm transition ${
              page === pages.length
                ? "bg-white text-black"
                : "bg-black/40 text-white"
            }`}
          >
            Back Cover
          </button>
        </div>
      </div>

      {/* Loading Spinner */}
      <Loader />

      {/* Hidden Audio */}
      {audioPlaying && (
        <audio
          src="/audios/background-music.mp3"
          autoPlay
          loop
          muted={false}
          className="hidden"
        />
      )}
    </section>
  );
};
