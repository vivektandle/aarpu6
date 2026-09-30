"use client"

import * as React from "react"
import { useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X } from "lucide-react"

interface Navbar1Props {
  onOpenQuoteModal?: () => void
}

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
]

const Navbar1 = ({ onOpenQuoteModal }: Navbar1Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full pt-1.5 sm:pt-2.5 px-3 sm:px-4 pointer-events-none">
      {/* Whole Header Container - Reduced padding for a sleeker profile */}
      <div className="flex items-center justify-between px-3.5 sm:px-5 md:px-6 py-0.5 sm:py-1 bg-[#FFF8F8]/95 backdrop-blur-md rounded-full shadow-[0_8px_30px_rgba(255,57,59,0.06)] border border-[#FF393B]/[0.32] w-full max-w-[1045px] relative z-10 pointer-events-auto">
        {/* Left: Aarpu Logo - Prominently increased logo size */}
        <div className="flex items-center">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="flex items-center"
          >
            <Link to="/" className="flex items-center group py-0.5 shrink-0" aria-label="Aarpu Home">
              <img
                src="/aarpu-logo.png"
                alt="Aarpu Architectural Aluminium"
                className="h-[54px] sm:h-[66px] md:h-[76px] lg:h-[82px] w-auto object-contain block"
              />
            </Link>
          </motion.div>
        </div>

        {/* Middle: Desktop Navigation Links - Text size increased by 2% */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-8 overflow-x-auto no-scrollbar scrollbar-none py-1 shrink min-w-0">
          {NAV_LINKS.map((item) => {
            const isActive =
              location.pathname === item.path ||
              (item.path !== "/" && location.pathname.startsWith(item.path))
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="shrink-0"
              >
                <NavLink
                  to={item.path}
                  className={`text-[16px] tracking-wide transition-colors font-medium relative py-1 whitespace-nowrap block ${
                    isActive ? "text-[#FF393B] font-semibold" : "text-gray-700 hover:text-[#FF393B]"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute left-0 right-0 -bottom-1 h-0.5 bg-[#FF393B] rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </NavLink>
              </motion.div>
            )
          })}
        </nav>

        {/* Right: Enquiry Button - Increased by 2% */}
        <div className="hidden md:block shrink-0">
          <button
            type="button"
            onClick={onOpenQuoteModal}
            className="inline-flex items-center justify-center px-[23px] py-[9px] text-[14px] font-display font-bold uppercase tracking-wider text-white bg-[#FF393B] rounded-full cursor-pointer shadow-xs whitespace-nowrap"
          >
            <span>Enquiry</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          type="button"
          aria-label="Toggle navigation menu"
          className="md:hidden flex items-center p-1.5 text-gray-900 rounded-full hover:bg-gray-100 transition-colors shrink-0"
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
        >
          <Menu className="h-6 w-6 text-gray-900" />
        </motion.button>
      </div>

      {/* Mobile Menu Overlay with full scroll support in portrait & landscape/rotate modes */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-[#FFF8F8]/98 backdrop-blur-2xl z-50 md:hidden overflow-y-auto overscroll-contain pointer-events-auto p-4 sm:p-6"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="min-h-full flex flex-col justify-between max-w-lg mx-auto">
              <div>
                <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-[#FF393B]/20 sticky top-0 bg-[#FFF8F8]/98 backdrop-blur-md z-10 pt-1">
                  <Link to="/" onClick={toggleMenu} aria-label="Aarpu Home">
                    <img
                      src="/aarpu-logo.png"
                      alt="Aarpu Architectural Aluminium"
                      className="h-[48px] sm:h-[56px] w-auto object-contain block"
                    />
                  </Link>
                  <motion.button
                    type="button"
                    aria-label="Close menu"
                    className="p-2 rounded-full hover:bg-[#FF393B]/10 text-gray-900 cursor-pointer"
                    onClick={toggleMenu}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="h-6 w-6 text-gray-900" />
                  </motion.button>
                </div>

                <div className="flex flex-col space-y-3 sm:space-y-4 pt-4 sm:pt-6 pb-4">
                  {NAV_LINKS.map((item, i) => {
                    const isActive =
                      location.pathname === item.path ||
                      (item.path !== "/" && location.pathname.startsWith(item.path))
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.06 + 0.05 }}
                        exit={{ opacity: 0, x: 20 }}
                      >
                        <NavLink
                          to={item.path}
                          className={`text-lg sm:text-xl font-medium tracking-tight block py-1.5 transition-colors ${
                            isActive ? "text-[#FF393B] font-bold" : "text-gray-900 hover:text-[#FF393B]"
                          }`}
                          onClick={toggleMenu}
                        >
                          {item.name}
                        </NavLink>
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              <div className="pt-4 pb-2 border-t border-[#FF393B]/15 mt-auto shrink-0">
                <button
                  type="button"
                  className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-display font-bold uppercase tracking-wider text-white bg-[#FF393B] rounded-full cursor-pointer shadow-md"
                  onClick={() => {
                    toggleMenu()
                    onOpenQuoteModal?.()
                  }}
                >
                  <span>Enquiry</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export { Navbar1 }
export default Navbar1
