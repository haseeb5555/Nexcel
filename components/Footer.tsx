"use client"
import { footerlinks } from "@/constants"
import { useSetTransform } from "@/hooks/use-set-tranform"
import {
    AnimatePresence,
    motion,
    useMotionValue,
    useTransform
} from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
   

  const MotionLink = motion(Link)
  const MotionImage=motion(Image)


  

const { setTransform }= useSetTransform()

  return (
    <footer className="mt-20 relative w-full flex   justify-between items-center px-20 py-12  max-md:justify-center max-sm:px-4">

       <p className=" text-gray-500 max-md:hidden w-full ">© 2023, Nexcel.</p>
       <motion.div className="w-[100%] h-[1px] bg-pink-950 max-sm:hidden"></motion.div>
      <div className="w-full flex justify-center items-center">

       
      <motion.div className=" absolute w-28 h-28 border border-pink-950 rounded-full max-sm:h-40 max-sm:w-40"></motion.div>
      <motion.div className=" absolute w-[1px] h-[313px] border border-pink-950 rounded-full"></motion.div>
      <div className="w-full flex  justify-center items-center px-4 py-3 rounded-full bg-transparent backdrop-blur-md border border-pink-950 gap-8">
        <AnimatePresence>
          {footerlinks.map((link) => {
            const x = useMotionValue(0)
            const y = useMotionValue(0)
            const textX = useTransform(x, (latest) => latest * 0.5)
            const textY = useTransform(y, (latest) => latest * 0.5)
            return (
              <motion.div
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
               
                  href={link.path}
                >
                  <MotionImage
                    style={{ x: textX, y: textY }}
                    src={link.src}
                    alt={link.name}
                    width={34}
                    height={34}
                    className="dark:invert "
                
                 />
                   
                
                 
                </MotionLink>
              </motion.div>
              
            )
          })}
        </AnimatePresence>
      </div>
      </div>
         
      <motion.div className="w-full h-[1px] bg-pink-950 max-sm:hidden mr-16 "></motion.div>
      <div className="flex items-center gap-4 text-md text-gray-500 max-md:hidden">
      <p>Term</p>
      <p>|</p>
      <p>Policy</p>
      </div>
    </footer>
  )
}