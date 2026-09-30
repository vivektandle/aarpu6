import React from 'react';
import { FileText, Download, CheckCircle2 } from 'lucide-react';

export default function ProductPdfDownload({ product }) {
  const sanitizedName = product.name.replace(/\s+/g, '_').toUpperCase();
  const fileName = `AARPU_${sanitizedName}_TECHNICAL_SPECIFICATION.pdf`;
  const fileUrl = `/documents/${fileName}`;

  return (
    <section id="product-pdf-download-section" className="pt-8 border-t border-[#E2E2E2] space-y-4">
      {/* Section Header */}
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-[#FF393B]" />
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-[#666666]">
            TECHNICAL DOCUMENTATION
          </h2>
        </div>
        <p className="text-sm text-[#5F5F5F]">
          Download the official architectural datasheet and profile cross-section references for {product.name}.
        </p>
      </div>

      {/* Download Option Box with File Name and Text */}
      <div className="bg-[#F7F7F7] border border-[#E2E2E2] hover:border-[#171717] rounded-2xl p-5 sm:p-6 transition-all duration-300">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          
          {/* File Icon & Information */}
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#FF393B]/10 border border-[#FF393B]/20 flex items-center justify-center shrink-0 text-[#FF393B]">
              <FileText className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm sm:text-base font-display font-bold text-[#171717]">
                  {product.name} — Technical Specification & CAD Catalog
                </span>
                <span className="px-2 py-0.5 text-[10px] font-mono font-bold uppercase bg-[#FF393B] text-white rounded">
                  PDF
                </span>
              </div>

              {/* Exact File Name */}
              <p className="text-xs font-mono text-[#5F5F5F] break-all">
                File: <span className="text-[#171717] font-semibold">{fileName}</span>
              </p>

              {/* Text Description */}
              <p className="text-xs text-[#777777] font-sans">
                Official engineering specifications, profile dimensions, wind load capacities, and glazing charts.
              </p>
            </div>
          </div>

          {/* Download Action */}
          <div className="w-full md:w-auto shrink-0 pt-2 md:pt-0">
            <a
              href={fileUrl}
              download={fileName}
              id="product-download-pdf-btn"
              className="btn-aarpu-primary text-xs py-2.5 px-5 font-display font-bold uppercase tracking-wider shadow-sm hover:scale-105 transition-transform cursor-pointer inline-flex items-center justify-center gap-2 w-full md:w-auto"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
