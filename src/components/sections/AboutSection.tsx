export default function AboutSection() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 max-w-xl">
            <p className="text-white/100 text-sm tracking-wide leading-relaxed font-light">
              Born in 2004 in Oregon, lived most of my life in California. Lifelong artist, noob coder and recent graduate of UC Santa Cruz with bachelors in computer science. 
            </p>
            <p className="text-white/100 text-sm tracking-wide leading-relaxed font-light">
              Interests:
            </p>
            <ul className="flex flex-col list-disc list-inside">
              <li className="text-white/100 text-sm leading-relaxed font-light">3D modeling</li>
              <li className="text-white/100 text-sm leading-relaxed font-light">Hip Hop</li>
              <li className="text-white/100 text-sm leading-relaxed font-light">Sci-fi/Fantasy Books</li>
              <li className="text-white/100 text-sm leading-relaxed font-light">Creative Writing</li>
              <li className="text-white/100 text-sm leading-relaxed font-light">UI/UX Design</li>
              <li className="text-white/100 text-sm leading-relaxed font-light">The state of politics</li>
              <li className="text-white/100 text-sm leading-relaxed font-light">The state of discourse</li>

            </ul>
            <p className="text-white/100 text-sm tracking-wide leading-relaxed font-light">
              Would like to learn more about:
            </p>
            <ul className="flex flex-col list-disc list-inside">
              <li className="text-white/100 text-sm leading-relaxed font-light">UX Patterns</li>
              <li className="text-white/100 text-sm leading-relaxed font-light">Information Architecture</li>
              <li className="text-white/100 text-sm leading-relaxed font-light">Data Visualization</li>
              <li className="text-white/100 text-sm leading-relaxed font-light">Echo Chambers</li>
              <li className="text-white/100 text-sm leading-relaxed font-light">Animation</li>
              <li className="text-white/100 text-sm leading-relaxed font-light">Music Production</li>
              <li className="text-white/100 text-sm leading-relaxed font-light">Karl Marx</li>

            </ul>
          </div>
    </div>
  )
}