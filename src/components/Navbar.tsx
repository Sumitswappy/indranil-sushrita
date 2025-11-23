"use client";

import React from 'react';

export default function Navbar() {
  // Colors matching your theme
  const activeColor = "text-[#F27C22]";
  const baseColor = "text-[#1a3c34]";

  // Google Calendar Link
  const googleCalendarLink = `https://www.google.com/calendar/render?action=TEMPLATE&text=Indranil+%26+Sushrita+Wedding&dates=20260206T123000Z/20260206T163000Z&details=Join+us+celebrating+the+wedding+of+Indranil+and+Sushrita!&location=26,+Nandi+Bagan,+Ramlal+Bazar,+Haltu,+Kolkata-700078&sf=true&output=xml`;

  // Map Link
  const mapLink = "https://www.google.com/maps/search/?api=1&query=U.M.B+Hall+26+Nandi+Bagan+Ramlal+Bazar+Haltu+Kolkata-700078";

  return (
    <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      {/* Glassmorphism Container */}
      <div className="flex items-center justify-between gap-10 px-8 py-3 bg-white/90 backdrop-blur-md border border-white/40 rounded-full shadow-2xl transition-all hover:scale-105">
        
        {/* 1. Location Button */}
        <a 
          href={mapLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`flex flex-col items-center gap-1 group ${baseColor} hover:text-[#B3003B] transition-colors`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
          </svg>
          <span className="text-[10px] font-semibold uppercase tracking-wider">Venue</span>
        </a>

        {/* 2. Home/Center Heart (Now Vertically Aligned) */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-[#FF387A] text-white p-3 rounded-full shadow-md hover:bg-[#B3003B] transition-transform hover:scale-110 active:scale-95 flex items-center justify-center"
        >
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
        </button>

        {/* 3. Calendar Button */}
        <a 
          href={googleCalendarLink}
          target="_blank"
          rel="noopener noreferrer" 
          className={`flex flex-col items-center gap-1 group ${baseColor} hover:text-[#B3003B] transition-colors`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5 .75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5 .75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5 .75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5 .75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5 .75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5 .75.75 0 000 1.5z" />
            <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
          </svg>
          <span className="text-[10px] font-semibold uppercase tracking-wider">Date</span>
        </a>

      </div>
    </nav>
  );
}