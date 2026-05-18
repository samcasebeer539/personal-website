'use client'

import { useState } from 'react'

const feedPhotos    = ['feed1.PNG', 'feed2.PNG']
const profilePhotos = ['profile1.PNG', 'profile2.PNG', 'profile3.PNG', 'profile4.PNG', 'profile5.PNG']
const barterPhotos  = ['open.PNG', 'barter.PNG', 'close.PNG']
import { FileText } from 'lucide-react'


export default function ProjectsSection() {
  const [winWinOpen, setWinWinOpen] = useState(true)
  const [globalBillboardOpen, setGlobalBillboardOpen] = useState(false)
  const [curateOpen, setCurateOpen] = useState(false)

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 max-w-xl">
        <p className="text-white/80 text-sm tracking-wide leading-relaxed font-light">
          More productive online social spaces.
        </p>
      
        <p className="text-white/80 text-sm tracking-wide leading-relaxed font-light">
          <span className="text-white/100 font-normal ">The problem: </span>  
          in a public square we can trade, discuss, and create things together that as individuals we cannot.
          Unfortunately, such real world third spaces are disappearing increasingly, and the online third spaces that have
           risen in their place are engagement driven, reactionary and unproductive.
        </p>
        {/* <p className="text-white/100 text-sm tracking-wide leading-relaxed font-light">
          What can we do to improve these online spaces?
        </p> */}
      
        <p className="text-white/80 text-sm tracking-wide leading-relaxed font-light">
          <span className=" text-white/100 font-normal">What can we do? </span>  
          Many things, and I have ideas. My first project here is an app with a creative approach to one feature of the public square: trade.
        </p>

        {/* Win-Win collapsible header */}
        <button
          onClick={() => setWinWinOpen(!winWinOpen)}
          // className="text-sm tracking-wide text-white/100 text-left w-fit"
           className="w-full text-sm flex items-center gap-3  text-left transition-colors"

        >
          <FileText size={15} className="text-white/100 shrink-0" />
          <span className={winWinOpen ? 'underline underline-offset-4' : ''}>
            Win-Win
          </span>
        </button>
      </div>

      {winWinOpen && (
        <>
          <div className="flex flex-col gap-4 max-w-xl pl-6">
            <p className="text-white/80 text-sm tracking-wide leading-relaxed font-light">
              To provide users with a unique, gamified bartering app to trade goods.
            </p>
        
            <p className="text-white/80 text-sm tracking-wide leading-relaxed font-light">
              <span className="text-white/100 font-normal">The problem: </span>  
              in our consumer driven culture, each of us owns things that another person would appreciate more.
            </p>
            {/* <p className="text-white/100 text-sm tracking-wide leading-relaxed font-light pl-6">
              Consumerism overburdens us with things, and empties our wallets.
              Each of us owns things that another person would appreciate more.
            </p> */}
            <p className="text-white/80 text-sm tracking-wide leading-relaxed font-light">
              <span className="text-white/100 font-normal">The solution: </span> Bartering! Allow locals to trade their commodities in a game of barter with fair, rules-based, turn-based negotiation.
              Key Benefits: Save money, reduce waste, get cool stuff, mutual support and community building.
            </p>
            {/* <p className="text-white/100 text-sm tracking-wide leading-relaxed font-light pl-6">
              Bartering! Allow locals to trade their commodities in a game of barter with fair, rules-based, turn-based negotiation.
              Key Benefits: Save money, reduce waste, get cool stuff, mutual support and community building.
            </p> */}
          </div>

          <div className="flex flex-col pl-6">
            <p className="text-white/100 text-sm tracking-wide leading-relaxed font-normal">How it works:</p>
            <ul className="flex flex-col list-decimal list-inside">
              <li className="text-white/80 text-sm leading-relaxed font-light">Players create a number of trading cards (offer listings).</li>
              <li className="text-white/80 text-sm leading-relaxed font-light">Player 1 finds a card they want and places an offer.</li>
              <li className="text-white/80 text-sm leading-relaxed font-light">Player 2 receives the offer and can choose from any of Player 1's cards to begin negotiations.</li>
              <li className="text-white/80 text-sm leading-relaxed font-light">If terms are agreed upon, they trade at a safe exchange location and rate/review to close.</li>
            </ul>
          </div>

          {[
            { label: 'Feed:',      description: 'Discover trading cards in your area through feed and user decks, send queries and offers.', photos: feedPhotos },
            { label: 'Your Deck:', description: 'Customize profile card, add locations, create trading cards, recieve queries and offers, initiate trades.', photos: profilePhotos },
            
            { label: 'Barter:',    description: '"open" saves outgoing offers and queries, "barter" allows turn based negotiation after offer is accepted, and "close" allows users to decide on time, location, and then rate/review.', photos: barterPhotos },
          ].map(({ label, description, photos }) => (
            <div key={label} className="flex flex-col gap-2">
              <div className="max-w-xl flex flex-col gap-1 pl-6">
                <p className="text-white/80 text-sm tracking-wide leading-relaxed font-light">
                  <span className=" text-white/100 font-normal">{label}</span> {description}
                </p>
              </div>
              <div className="columns-2 sm:columns-3 lg:columns-6 gap-3 mt-3 mb-3">
                {photos.map((filename) => (
                  <div key={filename} className="break-inside-avoid mb-3 overflow-hidden rounded-xs">
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
          <div className="flex flex-col gap-1 pl-6">
  <p className="text-white/100 text-sm tracking-wide leading-relaxed font-normal">Tech stack:</p>
  <ul className="flex flex-col list-disc list-inside">
    <li className="text-white/80 text-sm leading-relaxed font-light">Frontend: React Native + Expo</li>
    <li className="text-white/80 text-sm leading-relaxed font-light">Backend: Flask</li>
    <li className="text-white/80 text-sm leading-relaxed font-light">Database: MongoDB Atlas, Firebase for auth/image storage</li>
    <li className="text-white/80 text-sm leading-relaxed font-light">APIs: react-native-maps (Apple Maps)</li>
    <li className="text-white/80 text-sm leading-relaxed font-light">Design: Figma</li>
  </ul>
</div>
          <p className="text-white/80 text-sm tracking-wide leading-relaxed font-light pl-6">
              (Win-Win coming to app store summer 2026!)
            </p>
          
        </>
      )}

          <div className="flex flex-col gap-1">
          <p className="text-white/100 text-sm tracking-wide leading-relaxed font-light">
            Metas going forward:
          </p>
          <ul className="flex flex-col list-disc list-inside">
              <li className="text-white/80 text-sm leading-relaxed font-light">Locality</li>
              <li className="text-white/80 text-sm leading-relaxed font-light">Reciprocity</li>
              <li className="text-white/80 text-sm leading-relaxed font-light">Creativity</li>
              <li className="text-white/80 text-sm leading-relaxed font-light">Productivity</li>
              <li className="text-white/80 text-sm leading-relaxed font-light">Light Democracy? I'm working on it.</li>
            </ul>
        </div>

        <p className="text-white/80 text-sm tracking-wide leading-relaxed font-light">
          New questions emerge, like, are there alternative ways to organize online social life?
          My next projects will explore some of these methods. 
        </p>
        
        <p className="text-white/80 text-sm tracking-wide leading-relaxed font-light">
          In the works:
        </p>
        {/* Global Billboard collapsible header */}
        <button
          onClick={() => setGlobalBillboardOpen(!globalBillboardOpen)}
          // className="text-sm tracking-wide text-white/100 text-left w-fit"
           className="w-full text-sm flex items-center gap-3  text-left transition-colors"

        >
          <FileText size={15} className="text-white/100 shrink-0" />
          <span className={globalBillboardOpen ? 'underline underline-offset-4' : ''}>
            Global Billboard
          </span>
        </button>

        {globalBillboardOpen && (
          <>
            <div className="flex flex-col gap-4 max-w-xl pl-6">
              <p className="text-white/80 text-sm tracking-wide leading-relaxed font-light">
                To give users a globe to use as a billboard for their ideas, projects, and events.
                A logical endpoint of locality as an organizing principle. 
                Instead of an engagment driven feed, users can explore at their whim a globe, rooting 
                ideas and projects in the real world, and connecting with others in their area.
              </p>
            </div>
          </>
        )}

        {/* Curate collapsible header */}
        <button
          onClick={() => setCurateOpen(!curateOpen)}
          // className="text-sm tracking-wide text-white/100 text-left w-fit"
           className="w-full text-sm flex items-center gap-3  text-left transition-colors"

        >
          <FileText size={15} className="text-white/100 shrink-0" />
          <span className={curateOpen ? 'underline underline-offset-4' : ''}>
            Curate
          </span>
        </button>

        {curateOpen && (
          <>
            <div className="flex flex-col gap-4 max-w-xl pl-6">
              <p className="text-white/80 text-sm tracking-wide leading-relaxed font-light">
                To allow users to save and organize the best content from around the web in Pinterest style boards. 
                This is allowing users to organize the internet as they see fit, essentially craft and share their own internet,
                filtering through all the dumb bullshit, the engagement bait, and delivering exactly what each user deems most valuable. 
              </p>
            </div>
          </>
        )}

      
    </div>
  )
}