import { useState, useEffect } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ShoppingCart, Clock } from "lucide-react";
import blackShirt from "../../assets/HNN BLACK.png";
import whiteShirt from "../../assets/HNN WHITE.png";

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
      name: "H SURE BLACK",
      price: "TBD",
      image: blackShirt,
      category: "APPAREL",
      status: "AVAILABLE",
      // TODO: Replace with Shopify product/variant ID when live
      shopifyVariantId: null as string | null,
    },
    {
      id: 2,
      name: "H SURE WHITE",
      price: "TBD",
      image: whiteShirt,
      category: "APPAREL",
      status: "AVAILABLE",
      // TODO: Replace with Shopify product/variant ID when live
      shopifyVariantId: null as string | null,
    },
  ];

  const handleAddToCart = (shopifyVariantId: string | null) => {
    if (!shopifyVariantId) return;
    // TODO: Integrate Shopify Storefront API / Buy SDK checkout here
    // e.g. client.checkout.addLineItems(checkoutId, [{ variantId, quantity: 1 }])
  };

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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {products.map((product) => (
          <div key={product.id} className="group flex flex-col bg-zinc-950 border-2 border-zinc-900 hover:border-white transition-colors relative">
            <div className="relative aspect-[4/5] bg-zinc-900 p-6 overflow-hidden flex items-center justify-center">
              <ImageWithFallback 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 opacity-90"
              />
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
                  disabled={!product.shopifyVariantId}
                  onClick={() => handleAddToCart(product.shopifyVariantId)}
                  className={`flex items-center gap-2 p-2 px-4 font-bold uppercase text-sm tracking-wider transition-colors ${
                    !product.shopifyVariantId
                      ? 'bg-zinc-800 text-zinc-600 cursor-not-allowed'
                      : 'bg-white text-black hover:bg-[#FFCC00]'
                  }`}
                >
                  <ShoppingCart className="w-4 h-4" />
                  {product.shopifyVariantId ? 'ADD' : 'COMING SOON'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
