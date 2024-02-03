import { mapRange } from "@/lib/utils"
import { MotionValue } from "framer-motion"
 export const useSetTransform = () => {
  const setTransform = (
    item: HTMLElement & EventTarget,
    event: React.PointerEvent,
    x: MotionValue,
    y: MotionValue
  ) => {
    const bounds = item.getBoundingClientRect()
    const relativeX = event.clientX - bounds.left
    const relativeY = event.clientY - bounds.top
    const xRange = mapRange(0, bounds.width, -1, 1)(relativeX)
    const yRange = mapRange(0, bounds.height, -1, 1)(relativeY)
    x.set(xRange * 10)
    y.set(yRange * 10)
    console.log(xRange)
  }

    return { setTransform }
}