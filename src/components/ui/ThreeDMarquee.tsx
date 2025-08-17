// src/components/ui/ThreeDMarquee.tsx
import { motion } from "motion/react";            // make sure `motion` is installed
import { useMemo } from "react";

type Props = {
  images?: string[];         // prefer local /public paths
  className?: string;
  hoverLift?: number;        // px; default 10
  debug?: boolean;           // shows placeholder tiles to validate geometry
};

export default function ThreeDMarquee({
  images = [],
  className = "",
  hoverLift = 10,
  debug = false,
}: Props) {
  // If images missing, synthesize 16 placeholders (so layout still moves)
  const list = useMemo(
    () => (images.length ? images : Array.from({ length: 16 }, (_, i) => `__placeholder__${i}`)),
    [images]
  );

  // Split into 4 columns (roughly equal)
  const chunk = Math.ceil(list.length / 4) || 1;
  const chunks = [0, 1, 2, 3].map((c) => list.slice(c * chunk, (c + 1) * chunk));

  return (
    <section aria-label="Trusted by" className={`relative overflow-hidden rounded-2xl ${className}`}>
      {/* background split (behind content) */}
      <div className="absolute inset-0 -z-10 grid grid-cols-2 opacity-20">
        <div className="bg-gradient-to-br from-primary to-purple-400" />
        <div className="bg-gradient-to-br from-blue-500 to-cyan-500" />
      </div>

      {/* fixed-height viewport so we always see something */}
      <div className="relative h-[600px] w-full">
        {/* center the 3D stage: translate(-50%,-50%) instead of top/right hacks */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 perspective-[800px]">
          {/* big square that we scale responsively (use explicit w/h, not `size-[1720px]`) */}
          <div className="w-[1720px] h-[1720px] scale-50 sm:scale-75 lg:scale-100">
            {/* the tilted plane */}
            <div
              className="relative origin-top-left grid grid-cols-4 gap-8"
              style={{ transform: "rotateX(55deg) rotateZ(-45deg)", transformStyle: "preserve-3d" }}
            >
              {chunks.map((col, colIdx) => (
                <motion.div
                  key={colIdx}
                  className="flex flex-col items-start gap-8"
                  animate={{ y: colIdx % 2 === 0 ? 100 : -100 }}
                  transition={{ duration: colIdx % 2 === 0 ? 10 : 15, repeat: Infinity, repeatType: "reverse" }}
                >
                  {/* decorative grid lines */}
                  <GridLineVertical className="-left-4" offset="80px" />

                  {col.map((src, i) => (
                    <div className="relative" key={`${colIdx}-${i}`}>
                      <GridLineHorizontal className="-top-4" offset="20px" />
                      {debug || src.startsWith("__placeholder__") ? (
                        <div className="aspect-[970/700] w-[485px] rounded-lg bg-white/10 ring ring-gray-950/5" />
                      ) : (
                        <motion.img
                          src={src}
                          alt=""
                          width={970}
                          height={700}
                          decoding="sync"
                          className="aspect-[970/700] rounded-lg object-cover ring ring-gray-950/5 hover:shadow-2xl"
                          whileHover={{ y: -hoverLift }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        />
                      )}
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Decorative scan lines. Keep as-is. */
function GridLineHorizontal({
  className = "",
  offset = "200px",
}: {
  className?: string;
  offset?: string;
}) {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "1px",
          "--width": "5px",
          "--fade-stop": "90%",
          "--offset": offset,
          "--color-dark": "rgba(255, 255, 255, 0.2)",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={[
        "absolute left-[calc(var(--offset)/2*-1)] h-[var(--height)] w-[calc(100%+var(--offset))]",
        "bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude] z-30",
        "dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className,
      ].join(" ")}
    />
  );
}

function GridLineVertical({
  className = "",
  offset = "150px",
}: {
  className?: string;
  offset?: string;
}) {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "5px",
          "--width": "1px",
          "--fade-stop": "90%",
          "--offset": offset,
          "--color-dark": "rgba(255, 255, 255, 0.2)",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={[
        "absolute top-[calc(var(--offset)/2*-1)] h-[calc(100%+var(--offset))] w-[var(--width)]",
        "bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude] z-30",
        "dark:bg-[linear-gradient(to_bottom,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className,
      ].join(" ")}
    />
  );
}