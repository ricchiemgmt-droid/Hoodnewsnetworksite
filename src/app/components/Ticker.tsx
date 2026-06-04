import { motion } from "motion/react";
import { AlertCircle } from "lucide-react";

export function Ticker() {
  const items = [
    "MAYOR CALLS EMERGENCY MEETING DOWNTOWN",
    "I-285 SOUTHBOUND SHUT DOWN AFTER MULTI-CAR COLLISION",
    "NEW HOOD ANCHOR MERCH DROP AT MIDNIGHT",
    "CITY COUNCIL VOTES ON NEW ZONING LAWS FOR ZONE 6",
    "SUBMIT YOUR LOCAL TIPS ANONYMOUSLY - WE ARE THE STREETS"
  ];

  const tickerText = items.join(" ••• ");

  return (
    <div className="bg-[#FF0000] text-white font-bold uppercase h-10 overflow-hidden flex relative border-y-2 border-black">
      {/* Static Label */}
      <div className="bg-black text-[#FFCC00] px-3 md:px-6 py-1 h-full z-10 absolute left-0 flex items-center gap-2 border-r-4 border-white shadow-[10px_0_15px_rgba(0,0,0,0.5)]">
        <AlertCircle className="w-5 h-5 animate-pulse" />
        <span className="hidden md:inline tracking-wider text-lg">URGENT</span>
      </div>
      
      {/* Scrolling Container */}
      <div className="flex-1 relative flex items-center h-full ml-12 md:ml-36 overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
          className="whitespace-nowrap flex text-xl md:text-2xl tracking-widest pt-1"
        >
          <span className="pr-12">{tickerText}</span>
          <span className="pr-12">{tickerText}</span>
        </motion.div>
      </div>
    </div>
  );
}
