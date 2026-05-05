"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

type Dish = {
  slug: string;
  name: string;
  section: string;
  image?: string;
};

type Props = {
  dishes: Dish[];
};

const desktopTiles = [
  { origin: "0% 0%", scaleFrom: 1.0, scaleTo: 1.12, x: -2, y: -3, duration: 26, delay: 0 },
  { origin: "100% 0%", scaleFrom: 1.08, scaleTo: 1.0, x: 3, y: 0, duration: 28, delay: 4 },
  { origin: "0% 100%", scaleFrom: 1.0, scaleTo: 1.1, x: 2, y: 2, duration: 24, delay: 8 },
  { origin: "100% 100%", scaleFrom: 1.06, scaleTo: 1.0, x: -3, y: -2, duration: 30, delay: 12 },
] as const;

export function HeroMosaic({ dishes }: Props) {
  const visible = dishes.filter(
    (d): d is Dish & { image: string } => Boolean(d.image),
  );
  const reduce = useReducedMotion();

  const [mobileIndex, setMobileIndex] = useState(0);
  useEffect(() => {
    if (reduce || visible.length < 2) return;
    const id = setInterval(
      () => setMobileIndex((i) => (i + 1) % visible.length),
      5000,
    );
    return () => clearInterval(id);
  }, [reduce, visible.length]);

  if (visible.length < 4) return null;

  return (
    <>
      <div
        aria-hidden
        className="absolute inset-0 hidden grid-cols-2 grid-rows-2 lg:grid"
      >
        {desktopTiles.map((tile, i) => {
          const dish = visible[i];
          return (
            <div key={dish.slug} className="relative overflow-hidden">
              <motion.div
                className="absolute inset-0"
                style={{ transformOrigin: tile.origin }}
                initial={{ scale: tile.scaleFrom, x: 0, y: 0 }}
                animate={
                  reduce
                    ? { scale: tile.scaleFrom, x: 0, y: 0 }
                    : {
                        scale: [tile.scaleFrom, tile.scaleTo],
                        x: ["0%", `${tile.x}%`],
                        y: ["0%", `${tile.y}%`],
                      }
                }
                transition={
                  reduce
                    ? undefined
                    : {
                        duration: tile.duration,
                        delay: tile.delay,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "linear",
                      }
                }
              >
                <Image
                  src={dish.image}
                  alt=""
                  fill
                  priority={i === 0}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </motion.div>
            </div>
          );
        })}
      </div>

      <div aria-hidden className="absolute inset-0 lg:hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={visible[mobileIndex].slug}
            initial={reduce ? false : { opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={visible[mobileIndex].image}
              alt=""
              fill
              priority={mobileIndex === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
