import { useState, useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Play, Volume2, Mic, Radio, Maximize } from "lucide-react";

export function VideoPlayer({ isLive = true }: { isLive?: boolean }) {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    if (isLive) {
      const interval = setInterval(() => setPulse((p) => !p), 1000);
      return () => clearInterval(interval);
    }
  }, [isLive]);

  return (
    <div className="w-full relative bg-black border-4 border-zinc-900 group aspect-video md:aspect-[21/9] lg:aspect-video flex flex-col justify-center overflow-hidden">
      {/* Fallback Image for Stream */}
      <div className="absolute inset-0 opacity-80 group-hover:opacity-60 transition-opacity">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1742805382149-3c2f0cd0f300?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdzJTIwYW5jaG9yJTIwbGl2ZSUyMHN0cmVhbXxlbnwxfHx8fDE3ODA2MTAxMzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Live Broadcast"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      </div>

      {/* Corporate News Overlay Chrome */}
      <div className="absolute top-4 left-4 flex gap-2 items-center">
        {isLive && (
          <div className="bg-[#FF0000] text-white px-3 py-1 font-bold text-xl uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-red-900/50">
            <Radio className={`w-5 h-5 ${pulse ? "opacity-100" : "opacity-50"}`} />
            LIVE NOW
          </div>
        )}
        <div className="bg-black/80 backdrop-blur-sm text-white px-3 py-1 font-bold text-sm tracking-wider uppercase border border-zinc-800">
          ATLANTA, GA
        </div>
      </div>

      {/* Center Play Button (Mock) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-20 h-20 bg-[#FF0000]/80 rounded-full flex items-center justify-center backdrop-blur-md border-4 border-white shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-auto cursor-pointer hover:scale-110 hover:bg-[#FF0000]">
          <Play className="w-8 h-8 text-white ml-2" />
        </div>
      </div>

      {/* Bottom News Banner Overlay */}
      <div className="absolute bottom-0 inset-x-0">
        <div className="bg-gradient-to-r from-[#030213] via-[#030213]/90 to-transparent p-4 md:p-6 border-l-8 border-[#FF0000]">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none mb-2 drop-shadow-lg">
            SITUATION ROOM: DOWNTOWN MAYHEM
          </h2>
          <div className="flex items-center gap-4 text-[#FFCC00] font-bold text-sm md:text-base tracking-widest">
            <span className="flex items-center gap-1">
              <Mic className="w-4 h-4" /> HOOD ANCHOR YE
            </span>
            <span className="text-white opacity-50">|</span>
            <span className="flex items-center gap-1 text-white">
              <Volume2 className="w-4 h-4" /> AUDIO ON
            </span>
          </div>
        </div>
        
        {/* Controls Bar */}
        <div className="bg-zinc-950 h-1 md:h-2 w-full flex">
          <div className="bg-[#FF0000] w-1/3 h-full animate-pulse" />
          <div className="bg-zinc-800 flex-1 h-full" />
        </div>
        <div className="bg-black/90 p-2 flex justify-between items-center px-4">
           <div className="flex gap-4">
             <Play className="w-5 h-5 text-white hover:text-[#FF0000] cursor-pointer" />
             <Volume2 className="w-5 h-5 text-white hover:text-[#FF0000] cursor-pointer" />
           </div>
           <div className="text-zinc-500 text-xs font-sans tracking-widest font-bold">
             00:00:00 / LIVE
           </div>
           <Maximize className="w-5 h-5 text-white hover:text-[#FF0000] cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
