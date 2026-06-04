import { UploadCloud, ShieldAlert, CheckCircle2, Lock } from "lucide-react";
import { useState } from "react";

export function TipDrop() {
  const [dragActive, setDragActive] = useState(false);
  const [dropped, setDropped] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setDropped(true);
      setTimeout(() => setDropped(false), 3000);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 flex flex-col items-center justify-center min-h-[70vh]">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center p-4 bg-[#FFCC00] rounded-full mb-6 shadow-[0_0_30px_rgba(255,204,0,0.3)]">
          <ShieldAlert className="w-12 h-12 text-black" />
        </div>
        <h1 className="text-5xl md:text-7xl font-black uppercase text-white tracking-tighter mb-4">
          SECURE TIP DROP
        </h1>
        <p className="text-zinc-400 font-sans max-w-xl mx-auto uppercase tracking-widest text-sm font-bold leading-relaxed">
          No Logins. No Tracking. No Bullshit. 
          <br/> Drop your raw footage here. Our system automatically strips all metadata, EXIF data, and geotags before it hits our servers.
        </p>
      </div>

      <div 
        className={`w-full relative bg-zinc-950 border-4 border-dashed transition-all duration-300 flex flex-col items-center justify-center p-12 md:p-24 ${
          dragActive ? 'border-[#FFCC00] bg-zinc-900 scale-105' : 'border-zinc-800'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        {dropped ? (
          <div className="flex flex-col items-center text-[#FFCC00] animate-in zoom-in duration-300">
            <CheckCircle2 className="w-20 h-20 mb-4" />
            <h3 className="text-3xl font-black uppercase tracking-widest">ASSET SECURED</h3>
            <p className="font-sans text-sm font-bold mt-2 text-zinc-400 uppercase">WIPING METADATA...</p>
          </div>
        ) : (
          <>
            <UploadCloud className={`w-24 h-24 mb-6 transition-colors ${dragActive ? 'text-[#FFCC00]' : 'text-zinc-600'}`} />
            <h3 className="text-2xl md:text-4xl font-black uppercase text-white tracking-tighter mb-2 text-center">
              DRAG & DROP FOOTAGE
            </h3>
            <p className="text-zinc-500 font-sans font-bold uppercase tracking-widest text-sm mb-8 text-center">
              OR CLICK TO BROWSE SECURELY
            </p>
            <div className="w-full max-w-md bg-black border border-zinc-800 p-4">
              <label className="text-zinc-400 font-sans text-xs font-bold uppercase tracking-widest block mb-2">
                ADD OPTIONAL CONTEXT (LOCATION / EVENT)
              </label>
              <textarea 
                className="w-full bg-zinc-900 text-white p-3 font-sans text-sm focus:outline-none focus:border-[#FFCC00] border border-transparent resize-none h-24"
                placeholder="E.g., Happened outside the corner store on 5th..."
              />
            </div>
            <button className="mt-6 bg-white text-black px-8 py-4 font-black uppercase tracking-widest text-lg hover:bg-zinc-200 transition-colors w-full max-w-md flex justify-center items-center gap-2">
              <Lock className="w-5 h-5" /> ENCRYPT & UPLOAD
            </button>
          </>
        )}
      </div>

      <div className="mt-8 text-zinc-600 font-sans text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2">
        <Lock className="w-4 h-4" /> MILITARY GRADE ENCRYPTION • 100% ANONYMOUS
      </div>
    </div>
  );
}
