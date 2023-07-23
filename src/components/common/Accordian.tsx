import { motion } from 'framer-motion';
import { useState } from 'react';

interface AccordionProps {
  maxHeight: number;
  header: React.ReactNode;
  children: React.ReactNode;
}

export default function Accordian({
  maxHeight,
  header,
  children,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button className="flex items-center " onClick={handleToggle}>
        <motion.div
          whileHover={{ scale: 1.02, transformOrigin: 'center' }}
          whileTap={{ scale: 1.02, transformOrigin: 'center' }}
        >
          {header}
        </motion.div>
        <svg
          className={`w-3 h-3 m-3 ml-5 shrink-0 transition-all ${
            isOpen ? 'rotate-0' : 'rotate-180'
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5 5 1 1 5"
          />
        </svg>
      </button>
      <motion.div
        initial={{
          height: maxHeight,
        }}
        animate={{
          height: isOpen ? '100%' : maxHeight,
        }}
        className={`${isOpen ? '' : `overflow-hidden`} transition-transform`}
      >
        {children}
      </motion.div>
      <div
        className={`absolute bottom-0 rounded-t-[20px] left-0 w-full h-[28px] z-[10] pointer-events-none
        bg-gradient-to-t from-neutral-50 dark:from-neutral-900 ${
          isOpen ? 'opacity-0' : 'opacity-100'
        } `}
      />
    </div>
  );
}
