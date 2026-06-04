import { useState, useEffect } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ShoppingCart, Clock } from "lucide-react";

export function SupplyCloset() {
  const [timeLeft, setTimeLeft] = useState({ hours: 12, minutes: 45, seconds: 30 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
          }
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const products = [
    {
      id: 1,
      name: "HNN PRESS HEAVY HOODIE",
      price: "$85.00",
      image: "https://images.unsplash.com/photo-1614214191247-5b2d3a734f1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXR3ZWFyJTIwYmxhY2slMjBob29kaWV8ZW58MXx8fHwxNzgwNjEwMTM1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "PRESS GEAR",
      status: "AVAILABLE"
    },
    {
      id: 2,
      name: "THE ANCHOR SILK ROBE",
      price: "$150.00",
      image: "https://images.unsplash.com/photo-1614214191247-5b2d3a734f1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXR3ZWFyJTIwYmxhY2slMjBob29kaWV8ZW58MXx8fHwxNzgwNjEwMTM1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "ANCHOR COLLECTION",
      status: "SOLD OUT"
    },
    {
      id: 3,
      name: "OFFICIAL NETWORK CAP",
      price: "$40.00",
      image: "https://images.unsplash.com/photo-1523380744952-b7e00e6e2ffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGJhc2ViYWxsJTIwY2FwfGVufDF8fHx8MTc4MDYxMDEzNXww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "PRESS GEAR",
      status: "LOW STOCK"
    },
    {
      id: 4,
      name: "FIELD REPORTER RIG",
      price: "$120.00",
      image: "https://images.unsplash.com/photo-1523380744952-b7e00e6e2ffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGJhc2ViYWxsJTIwY2FwfGVufDF8fHx8MTc4MDYxMDEzNXww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "FIELD KITS",
      status: "AVAILABLE"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8">
      {/* Flash Drop Header */}
      <div className="bg-[#FFCC00] text-black p-6 md:p-10 mb-12 flex flex-col md:flex-row items-center justify-between border-4 border-black shadow-[10px_10px_0_#FF0000]">
        <div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-2">
            SUPPLY CLOSET
          </h1>
          <p className="font-sans font-bold uppercase tracking-widest text-sm max-w-md">
            OFFICIAL NETWORK GEAR. LIMITED RUNS. WHEN IT'S GONE, IT'S GONE.
          </p>
        </div>
        <div className="mt-6 md:mt-0 bg-black text-white p-4 flex flex-col items-center min-w-[250px]">
          <div className="text-[#FF0000] font-bold text-sm tracking-widest uppercase mb-1 flex items-center gap-2">
            <Clock className="w-4 h-4" /> NEXT DROP CLOSES IN
          </div>
          <div className="text-4xl font-black font-sans flex gap-2">
            <span>{String(timeLeft.hours).padStart(2, '0')}</span>:
            <span>{String(timeLeft.minutes).padStart(2, '0')}</span>:
            <span className="text-[#FFCC00]">{String(timeLeft.seconds).padStart(2, '0')}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group flex flex-col bg-zinc-950 border-2 border-zinc-900 hover:border-white transition-colors relative">
            <div className="relative aspect-[4/5] bg-zinc-900 p-6 overflow-hidden flex items-center justify-center">
              <ImageWithFallback 
                src={product.image} 
                alt={product.name} 
                className={`w-full h-full object-contain mix-blend-screen transition-transform duration-500 group-hover:scale-110 ${product.status === 'SOLD OUT' ? 'opacity-30 grayscale' : 'opacity-90'}`} 
              />
              
              {product.status === 'SOLD OUT' && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="border-4 border-[#FF0000] text-[#FF0000] text-4xl font-black uppercase tracking-widest px-4 py-2 rotate-[-15deg] backdrop-blur-sm bg-black/50">
                    SOLD OUT
                  </div>
                </div>
              )}

              {product.status === 'LOW STOCK' && (
                <div className="absolute top-0 right-0 bg-[#FF0000] text-white text-xs font-bold px-3 py-1 uppercase tracking-widest">
                  ALMOST GONE
                </div>
              )}
            </div>
            
            <div className="p-4 flex flex-col flex-1 border-t-2 border-zinc-900">
              <div className="text-zinc-500 text-xs font-bold tracking-widest uppercase mb-1">
                {product.category}
              </div>
              <h3 className="text-xl font-black uppercase leading-tight mb-2 text-white">
                {product.name}
              </h3>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-xl font-sans font-bold text-white">{product.price}</span>
                <button 
                  disabled={product.status === 'SOLD OUT'}
                  className={`flex items-center gap-2 p-2 px-4 font-bold uppercase text-sm tracking-wider transition-colors ${
                    product.status === 'SOLD OUT' 
                    ? 'bg-zinc-800 text-zinc-600 cursor-not-allowed'
                    : 'bg-white text-black hover:bg-[#FFCC00]'
                  }`}
                >
                  <ShoppingCart className="w-4 h-4" /> 
                  {product.status === 'SOLD OUT' ? 'UNAVAILABLE' : 'ADD'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
