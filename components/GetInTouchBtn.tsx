'use client'

import { buttonVariants } from "@/lib/utils"
import {
    motion
} from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from 'next/link'

const GetInTouchBtn = () => {
  return (
    <Link href="/contact">
    <motion.button
    className="flex gap-2 px-8 py-6 max-md:w-full bg-[#0c0c0c]  shadow-pink rounded-md text-white font-medium transition-all duration-500 ease-out hover:bg-pink-900 hover:text-black"
    variants={buttonVariants}
    whileHover="hover"
    transition={{ duration: 0.3 }} // Adjust the duration as needed
  >
    Get in touch <ArrowUpRight size={24} />
  </motion.button>
  </Link>
  )
}

export default GetInTouchBtn