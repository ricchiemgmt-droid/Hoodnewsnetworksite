import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Search, Filter, PlayCircle, Lock } from "lucide-react";

export function Vault() {
  const videos = Array(6).fill(null).map((_, i) => ({
    id: i,
    title: i % 2 === 0 ? "RAW & UNCUT: MIDTOWN CHASE" : "HNN SITUATION ROOM: MAYOR INTERVIEW",
    duration: "14:20",
    category: i % 2 === 0 ? "RAW & UNCUT" : "SITUATION ROOM",
    image: i % 2 === 0 
      ? "https://images.unsplash.com/photo-1473042904451-00171c69419d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGxhbnRhJTIwbmlnaHQlMjBjaXR5JTIwc3RyZWV0fGVufDF8fHx8MTc4MDYxMDEzNHww&ixlib=rb-4.1.0&q=80&w=1080"
      : "https://images.unsplash.com/photo-1591848478625-de43268e6fb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm90ZXN0JTIwc3RyZWV0JTIwY3Jvd2R8ZW58MXx8fHwxNzgwNjEwMTM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
  }));

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4 border-b-4 border-zinc-800 pb-4">
        <div>
          <h1 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tighter flex items-center gap-3">
            <Lock className="w-10 h-10 text-[#FF0000]" />
            THE VAULT
          </h1>
          <p className="text-zinc-400 font-sans mt-2 uppercase tracking-widest text-sm font-bold">
            UNCENSORED. UNFILTERED. ARCHIVED FOR THE CULTURE.
          </p>
        </div>
        
        <div className="flex w-full md:w-auto gap-2">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input 
              type="text" 
              placeholder="SEARCH ARCHIVE..." 
              className="w-full bg-zinc-900 border border-zinc-700 text-white pl-10 pr-4 py-2 font-sans text-sm focus:outline-none focus:border-[#FF0000]"
            />
          </div>
          <button className="bg-zinc-800 px-4 py-2 text-white hover:bg-zinc-700 transition-colors flex items-center gap-2 font-bold text-sm tracking-wider">
            <Filter className="w-4 h-4" /> <span className="hidden sm:inline">FILTER</span>
          </button>
        </div>
      </div>

      <div className="flex gap-4 mb-8 overflow-x-auto pb-2 scrollbar-hide">
        <button className="bg-[#FF0000] text-white px-6 py-2 font-bold uppercase tracking-widest text-sm whitespace-nowrap">ALL FOOTAGE</button>
        <button className="bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800 px-6 py-2 font-bold uppercase tracking-widest text-sm whitespace-nowrap">SITUATION ROOM</button>
        <button className="bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800 px-6 py-2 font-bold uppercase tracking-widest text-sm whitespace-nowrap">RAW & UNCUT</button>
        <button className="bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800 px-6 py-2 font-bold uppercase tracking-widest text-sm whitespace-nowrap">COMMUNITY SPOTLIGHTS</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div key={video.id} className="group cursor-pointer flex flex-col gap-3 bg-zinc-950 p-3 border border-zinc-900 hover:border-zinc-700 transition-colors">
            <div className="relative aspect-video bg-black overflow-hidden">
              <ImageWithFallback 
                src={video.image} 
                alt={video.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0" 
              />
              <div className="absolute bottom-2 right-2 bg-black/90 text-white font-sans text-xs px-2 py-1 font-bold">
                {video.duration}
              </div>
              <div className="absolute top-2 left-2 bg-[#FF0000] text-white font-bold text-[10px] px-2 py-1 uppercase tracking-wider">
                {video.category}
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <PlayCircle className="w-12 h-12 text-white/80" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold uppercase leading-tight group-hover:text-[#FFCC00] transition-colors">
                {video.title}
              </h3>
              <p className="text-zinc-600 font-sans text-xs font-bold mt-2 uppercase tracking-wider">
                UPLOADED {video.id + 1} DAYS AGO
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
