import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../../constants/companyData';

export default function WhatsAppButton() {
  const whatsappNumber = COMPANY_INFO.whatsapp.replace(/[^0-9]/g, '');
  const message = encodeURIComponent('Hello Aarpu Team, I am interested in your minimal aluminium systems for my project.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div className="fixed bottom-28 right-6 z-40 flex items-center group">
      {/* Tooltip Label on Hover */}
      <span className="hidden sm:inline-block mr-2.5 px-3 py-1.5 rounded-xl bg-[#171717] text-white text-xs font-mono tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md pointer-events-none whitespace-nowrap">
        Chat on WhatsApp
      </span>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 relative cursor-pointer"
      >
        {/* Subtle ping indicator */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none" />
        <MessageCircle className="w-6 h-6 relative z-10 fill-white/20 stroke-[2.2]" />
      </motion.a>
    </div>
  );
}
