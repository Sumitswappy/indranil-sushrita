import Image from "next/image";
import Navbar from "../components/Navbar";
import FallingBlossoms from "../components/FallingBlossoms";
import { Dancing_Script } from "next/font/google";

const dancing = Dancing_Script({ 
  subsets: ["latin"],
  weight: ["400", "700"] 
});

export default function Home() {
  const bgColor = "bg-[#AECDC6]";

  return (
    <main className={`min-h-screen flex flex-col items-center justify-start pt-8 pb-44 px-4 ${bgColor} relative overflow-x-hidden`}>
      
      <FallingBlossoms />
      <Navbar />

      <div className="relative z-10 w-full max-w-lg flex flex-col items-center">
        
        {/* --- UPDATED IMAGE CONTAINER --- */}
        {/* Changes made: 
            1. Removed 'w-full'
            2. Added 'w-[90%] sm:w-[85%]' to make it smaller than the full width.
            3. Added 'mx-auto' to ensure it stays centered.
        */}
        <div className="rounded-xl overflow-hidden shadow-2xl bg-white transform transition-all duration-500 hover:scale-[1.01] w-[90%] sm:w-[85%] mx-auto">
          <Image
            src="/invitation.jpg"
            alt="Wedding Invitation"
            width={800}
            height={1200}
            priority
            // The image still fills its container, but the container is now smaller.
            className="w-full h-auto object-cover"
          />
        </div>
        {/* ------------------------------- */}

        {/* Note Section */}
        <div className="mt-8 text-center px-2 sm:px-6 w-full">
          
          <h2 className={`${dancing.className} text-[#1a3c34] text-5xl sm:text-6xl font-bold mb-6 drop-shadow-sm leading-tight`}>
            Wedding Invitation
          </h2>
          
          <div className="space-y-5">
            <p className={`${dancing.className} text-[#1a3c34] text-xl sm:text-3xl leading-relaxed font-bold opacity-90`}>
              "No amount of time will be sufficing enough to celebrate our union, we would like to start with the word now!
            </p>
            
            <p className={`${dancing.className} text-[#1a3c34] text-xl sm:text-3xl leading-relaxed font-bold opacity-90`}>
              On behalf of our families, we are inviting you to be an integral part of our big day.
            </p>

            <p className={`${dancing.className} text-[#F27C22] text-2xl sm:text-4xl leading-relaxed font-bold mt-6`}>
              Your gracious presence will aggrandize the event charm."
            </p>
          </div>
          
        </div>

        <div className="mt-12 text-[#1a3c34]/60 text-[10px] uppercase tracking-widest font-sans">
          © 2026 Indranil & Sushrita
        </div>
      </div>
    </main>
  );
}