'use client'

import { useState } from 'react'

const feedPhotos    = ['feed1.PNG', 'feed2.PNG']
const profilePhotos = ['profile1.PNG', 'profile2.PNG', 'profile3.PNG', 'profile4.PNG', 'profile5.PNG']
const barterPhotos  = ['open.PNG', 'barter.PNG', 'close.PNG']

export default function ProjectsSection() {
  const [winWinOpen, setWinWinOpen] = useState(true)

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 max-w-xl">
        <p className="text-white/100 text-sm tracking-wide leading-relaxed font-light">
          More productive online social spaces.
        </p>
        <p className="text-white/100 text-sm tracking-wide leading-relaxed font-light pl-6">
          In a public square we can trade, we can discuss, and we can create things together that as individuals we cannot.
          Unfortunately, such real world third spaces are disappearing increasingly.
          Even more unfortunately, the online third spaces that have risen in their place are engagement driven, reactionary and unproductive.
          They're not particularly pleasant or social, and from plenty of personal experience, they're time wasters.
        </p>
        <p className="text-white/100 text-sm tracking-wide leading-relaxed font-light">
          What can we do to improve these online spaces?
        </p>
        <p className="text-white/100 text-sm tracking-wide leading-relaxed font-light pl-6">
          Many things, and I have ideas. My first project here is an app with a creative approach to one feature of the public square: trade.
        </p>

        {/* Win-Win collapsible header */}
        <button
          onClick={() => setWinWinOpen(!winWinOpen)}
          className="text-sm tracking-wide text-white/100 text-left w-fit"
        >
          <span className={winWinOpen ? 'underline underline-offset-4' : ''}>
            Win-Win
          </span>
        </button>
      </div>

      {winWinOpen && (
        <>
          <div className="flex flex-col gap-4 max-w-xl">
            <p className="text-white/100 text-sm tracking-wide leading-relaxed font-light">
              To provide users with a unique, gamified bartering app to trade goods.
            </p>
            <p className="text-white/100 text-sm tracking-wide leading-relaxed font-light">
              The Problem:
            </p>
            <p className="text-white/100 text-sm tracking-wide leading-relaxed font-light pl-6">
              Consumerism overburdens us with things, and empties our wallets.
              Each of us owns things that another person would appreciate more.
            </p>
            <p className="text-white/100 text-sm tracking-wide leading-relaxed font-light">
              The Solution:
            </p>
            <p className="text-white/100 text-sm tracking-wide leading-relaxed font-light pl-6">
              Bartering! Allow locals to trade their commodities in a unique game of barter with fair, rules-based, turn-based negotiation.
              Key Benefits: Save money, reduce waste, get cool stuff, mutual support and community building.
            </p>
          </div>

          {[
            { label: 'Your Deck', description: 'Customize your profile card, add locations, create trading cards, recieve queries and offers, initiate trades.', photos: profilePhotos },
            { label: 'Feed',      description: 'Discover trading cards in your area through feed and user decks, send queries and offers.', photos: feedPhotos },
            { label: 'Barter',    description: 'Your description here.', photos: barterPhotos },
          ].map(({ label, description, photos }) => (
            <div key={label} className="flex flex-col gap-2">
              <div className="max-w-xl flex flex-col gap-1">
                <p className="text-white/100 text-sm tracking-wide leading-relaxed font-light">{label}</p>
                <p className="text-white/100 text-sm tracking-wide leading-relaxed font-light">{description}</p>
              </div>
              <div className="columns-2 sm:columns-3 lg:columns-6 gap-3">
                {photos.map((filename) => (
                  <div key={filename} className="break-inside-avoid mb-2 overflow-hidden rounded-4xl">
                    <img
                      src={`/winwinphotos/${filename}`}
                      alt={filename}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}

          
        </>
      )}

      <div className="flex flex-col gap-4 max-w-lg">
            <p className="text-white/100 text-sm tracking-wide leading-relaxed font-light">
              Metas:
            </p>
            <ul className="flex flex-col list-disc list-inside">
              <li className="text-white/100 text-sm leading-relaxed font-light">Locality</li>
              <li className="text-white/100 text-sm leading-relaxed font-light">Collaboration</li>
              <li className="text-white/100 text-sm leading-relaxed font-light">Creativity</li>
              <li className="text-white/100 text-sm leading-relaxed font-light">Productivity</li>
              <li className="text-white/100 text-sm leading-relaxed font-light">Light Democracy? I'm working on it.</li>
            </ul>
            <p className="text-white/100 text-sm tracking-wide leading-relaxed font-light">
              In the works:
            </p>
            <p className="text-white/100 text-sm tracking-wide leading-relaxed font-light">
              The Global Billboard
            </p>
          </div>
    </div>
  )
}