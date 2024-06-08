'use client';
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
    {
      quote: "The Beginner Piano course transformed my understanding of music. I can now play my favorite songs with ease.",
      name: "Alice Johnson",
      title: "Piano Student",
    },
    {
      quote: "The Advanced Guitar lessons have taken my skills to the next level. The instructors are incredibly knowledgeable.",
      name: "Mark Thompson",
      title: "Guitar Student",
    },
    {
      quote: "The Vocal Training course has significantly improved my singing. I feel more confident performing in front of others.",
      name: "Sarah Williams",
      title: "Vocal Student",
    },
    {
      quote: "Music Theory classes provided me with a solid foundation to compose my own music. Highly recommended!",
      name: "John Davis",
      title: "Music Theory Student",
    },
    {
      quote: "Drum lessons were fun and engaging. I've learned so much about rhythm and coordination.",
      name: "Emily Clark",
      title: "Drum Student",
    },
    {
      quote: "The Songwriting course inspired me to write my own songs. The feedback from instructors was invaluable.",
      name: "Michael Brown",
      title: "Songwriting Student",
    },
    {
      quote: "Violin for Beginners is the perfect start for anyone interested in playing the violin. The lessons are easy to follow.",
      name: "Jessica Martinez",
      title: "Violin Student",
    },
    {
      quote: "Jazz Improvisation classes opened up a whole new world of music for me. The techniques taught were very effective.",
      name: "David Wilson",
      title: "Jazz Student",
    },
  ];


function MusicSchoolTestimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of Success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
                <InfiniteMovingCards
                items={musicSchoolTestimonials}
                direction="right"
                speed="slow" />
            </div>
        </div>
    </div>
  )
}

export default MusicSchoolTestimonials