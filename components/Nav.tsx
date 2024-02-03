"use client"
import { links } from "@/constants"
import { useSetTransform } from "@/hooks/use-set-tranform"
import { buttonVariants, cn } from "@/lib/utils"
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform
} from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Nav() {
   
 
  const pathname = usePathname()
  const MotionLink = motion(Link)
  console.log(`#${pathname}`)


  

const { setTransform }= useSetTransform()

  return (
    <nav className="mx-24  bg-pink-950  sticky top-4 z-50 flex justify-between items-center px-4 gap-8 rounded-2xl backdrop-blur-xl max-w-[1440px] max-sm:mx-4 max-md:mx-14">
      <Link href="/">
       <h1 className="font-bold text-2xl">Nexcel</h1>
      </Link>
      <ul className="flex gap-6 max-md:hidden px-8 py-4 rounded-md ">
        <AnimatePresence>

          {links.map((link) => {
            const x = useMotionValue(0)
            const y = useMotionValue(0)
            const textX = useTransform(x, (latest) => latest * 0.5)
            const textY = useTransform(y, (latest) => latest * 0.5)
            return (
              <motion.li
                onPointerMove={(event) => {
                  const item = event.currentTarget
                  setTransform(item, event, x, y)
                }}
                key={link.path}
                onPointerLeave={(event) => {
                  x.set(0)
                  y.set(0)
                }}
                style={{ x, y }}
              >
                <MotionLink
                  className={cn(
                    "font-medium relative rounded-md text-sm py-2 px-4 transition-all duration-500 ease-out hover:bg-pink-900 hover:text-black",
                    pathname === link.path ? "bg-slate-300" : ""
                  )}
                  href={link.path}
                >
                  <motion.span
                    style={{ x: textX, y: textY }}
                    className="z-10 relative"
                  >
                    {link.name}
                  </motion.span>
                   { `#${pathname}` === link.path ? (
                    <motion.div
                      transition={{ type: "spring" }}
                      layoutId="underline"
                      className="absolute w-full h-full rounded-md left-0 bottom-0 bg-blue-300"
                    ></motion.div>
                  ) : null}
                </MotionLink>
              </motion.li>
            )
          })}
        </AnimatePresence>
      </ul>
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
    </nav>
  )
}
