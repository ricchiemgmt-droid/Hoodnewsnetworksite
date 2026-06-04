import { MessageSquare, ThumbsUp, MapPin } from "lucide-react";

export function TownHall() {
  const discussions = [
    {
      id: 1,
      topic: "NEW ZONING LAWS PUSHING OUT LOCAL BUSINESSES?",
      author: "STREET_SCHOLAR_404",
      time: "2 HOURS AGO",
      location: "ZONE 6",
      replies: 142,
      likes: 890,
      excerpt: "They tryna put another coffee shop where the old spot used to be. The council voting on it tomorrow, we need everyone there to speak up."
    },
    {
      id: 2,
      topic: "TRAFFIC STOP ESCALATION ON PONCE",
      author: "ATL_EYES",
      time: "5 HOURS AGO",
      location: "MIDTOWN",
      replies: 312,
      likes: 1200,
      excerpt: "Just saw five cruisers pull up on one car. Anyone got the footage? Need to make sure the story stays straight."
    },
    {
      id: 3,
      topic: "SUMMER BLOCK PARTY PERMITS DENIED AGAIN",
      author: "HOOD_MAYOR",
      time: "1 DAY AGO",
      location: "WEST END",
      replies: 85,
      likes: 450,
      excerpt: "They saying it's a 'noise ordinance' issue, but the festival down the street got approved no problem. We organizing anyway."
    }
  ];

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4 border-b-4 border-zinc-800 pb-4">
        <div>
          <h1 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tighter flex items-center gap-3">
            <MessageSquare className="w-10 h-10 text-white" />
            TOWN HALL
          </h1>
          <p className="text-zinc-400 font-sans mt-2 uppercase tracking-widest text-sm font-bold">
            UNCENSORED NEIGHBORHOOD DISCOURSE. NO BOTS. NO SHADOW-BANS.
          </p>
        </div>
        <button className="bg-[#FFCC00] text-black px-6 py-3 font-black uppercase tracking-widest hover:bg-yellow-400 transition-colors shadow-[0_0_15px_rgba(255,204,0,0.2)]">
          START DISCUSSION
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {discussions.map((post) => (
          <div key={post.id} className="bg-zinc-950 border-l-4 border-zinc-800 hover:border-[#FF0000] p-6 transition-colors group cursor-pointer">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="bg-[#FF0000] text-white px-2 py-1 text-xs font-bold uppercase tracking-wider">
                ACTIVE DEBATE
              </span>
              <span className="flex items-center gap-1 text-zinc-400 font-sans text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3 h-3" /> {post.location}
              </span>
              <span className="text-zinc-600 font-sans text-xs font-bold uppercase tracking-wider ml-auto">
                POSTED BY {post.author} • {post.time}
              </span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-black uppercase text-white mb-2 group-hover:text-[#FFCC00] transition-colors">
              {post.topic}
            </h2>
            
            <p className="text-zinc-300 font-sans text-sm md:text-base mb-4 leading-relaxed max-w-3xl">
              {post.excerpt}
            </p>
            
            <div className="flex items-center gap-6 border-t border-zinc-900 pt-4">
              <button className="flex items-center gap-2 text-zinc-400 hover:text-white font-sans text-sm font-bold transition-colors">
                <ThumbsUp className="w-4 h-4" /> {post.likes} CO-SIGNS
              </button>
              <button className="flex items-center gap-2 text-zinc-400 hover:text-white font-sans text-sm font-bold transition-colors">
                <MessageSquare className="w-4 h-4" /> {post.replies} RESPONSES
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
