import { VideoPlayer } from "../components/VideoPlayer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { PlayCircle, ArrowRight, ShieldAlert } from "lucide-react";
import { Link } from "react-router";

export function Home() {
  const recentVideos = [
    {
      id: 1,
      title: "ZONE 6 BLOCK PARTY TURNS CHAOTIC",
      category: "RAW & UNCUT",
      time: "2 HOURS AGO",
      image: "https://images.unsplash.com/photo-1473042904451-00171c69419d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGxhbnRhJTIwbmlnaHQlMjBjaXR5JTIwc3RyZWV0fGVufDF8fHx8MTc4MDYxMDEzNHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 2,
      title: "CITY COUNCIL PROTEST ESCALATES",
      category: "HNN SITUATION ROOM",
      time: "5 HOURS AGO",
      image: "https://images.unsplash.com/photo-1591848478625-de43268e6fb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm90ZXN0JTIwc3RyZWV0JTIwY3Jvd2R8ZW58MXx8fHwxNzgwNjEwMTM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Live Stream */}
      <section className="bg-black w-full border-b border-zinc-800">
        <div className="max-w-7xl mx-auto md:p-6">
          <VideoPlayer isLive={true} />
        </div>
      </section>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-8 p-4 md:p-6 lg:p-8">
        
        {/* Main Content Area */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          <section>
            <div className="flex items-center justify-between border-b-2 border-zinc-800 pb-2 mb-4">
              <h3 className="text-2xl font-bold uppercase tracking-widest text-[#FF0000] flex items-center gap-2">
                <PlayCircle className="w-6 h-6" />
                RECENT DISPATCHES
              </h3>
              <Link to="/vault" className="text-sm font-sans font-bold text-zinc-400 hover:text-white uppercase flex items-center gap-1 transition-colors">
                ENTER VAULT <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {recentVideos.map((video) => (
                <Link key={video.id} to="/vault" className="group cursor-pointer flex flex-col gap-2">
                  <div className="relative aspect-video bg-zinc-900 border border-zinc-800 overflow-hidden">
                    <ImageWithFallback 
                      src={video.image} 
                      alt={video.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" 
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                    <div className="absolute top-2 left-2 bg-black/80 backdrop-blur text-xs font-bold text-white px-2 py-1 uppercase tracking-wider border border-zinc-700">
                      {video.category}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-[#FF0000] rounded-full p-3 shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                        <PlayCircle className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold uppercase leading-tight group-hover:text-[#FF0000] transition-colors line-clamp-2">
                      {video.title}
                    </h4>
                    <p className="text-xs font-sans text-zinc-500 font-bold tracking-widest mt-1">
                      {video.time}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar Area */}
        <aside className="flex flex-col gap-6">
          
          {/* Tip Drop CTA */}
          <div className="bg-zinc-900 border-l-4 border-[#FFCC00] p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <ShieldAlert className="w-32 h-32 text-[#FFCC00]" />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-black uppercase text-white mb-2">
                YOU ARE THE NETWORK.
              </h3>
              <p className="text-zinc-400 font-sans text-sm mb-6 pr-8">
                Got raw footage? Securely and anonymously drop files straight to our news desk. No metadata. No tracking.
              </p>
              <Link to="/tip" className="inline-block bg-[#FFCC00] text-black font-black uppercase tracking-widest px-6 py-3 hover:bg-yellow-400 transition-colors shadow-[0_0_15px_rgba(255,204,0,0.2)]">
                SUBMIT A TIP NOW
              </Link>
            </div>
          </div>

          {/* Shop Teaser */}
          <div className="bg-[#1a1a1a] border border-zinc-800 p-6 flex flex-col items-center text-center">
            <h4 className="text-xl font-bold uppercase tracking-widest text-[#FF0000] mb-2 w-full text-left border-b border-zinc-800 pb-2">
              SUPPLY CLOSET
            </h4>
            <div className="my-6 relative w-full aspect-square max-w-[200px] bg-zinc-950 border-2 border-zinc-800 group overflow-hidden">
               <ImageWithFallback 
                 src="https://images.unsplash.com/photo-1614214191247-5b2d3a734f1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXR3ZWFyJTIwYmxhY2slMjBob29kaWV8ZW58MXx8fHwxNzgwNjEwMTM1fDA&ixlib=rb-4.1.0&q=80&w=1080" 
                 alt="Merch" 
                 className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" 
               />
               <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black text-white px-3 py-1 font-bold text-xs whitespace-nowrap uppercase tracking-widest">
                 HNN PRESS HOODIE
               </div>
            </div>
            <Link to="/shop" className="w-full border-2 border-white text-white font-bold uppercase tracking-widest py-3 hover:bg-white hover:text-black transition-colors text-sm">
              SHOP THE COLLECTION
            </Link>
          </div>

        </aside>

      </div>
    </div>
  );
}
