"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
    {
      title: "Beginner Piano",
      description: "Learn the fundamentals of piano playing, including how to read sheet music, basic hand positioning, and simple melodies.",
    },
    {
      title: "Advanced Guitar",
      description: "Master advanced guitar techniques such as complex chord progressions, intricate scales, and solo improvisation.",
    },
    {
      title: "Vocal Training",
      description: "Enhance your vocal abilities with exercises focused on breath control, pitch accuracy, and vocal range expansion.",
    },
    {
      title: "Music Theory",
      description: "Gain a comprehensive understanding of music theory, including the study of scales, harmony, and the principles of musical composition.",
    },
    {
      title: "Drum Lessons",
      description: "Develop your drumming skills through lessons on rhythm, coordination, and various drumming styles and techniques.",
    },
    {
      title: "Songwriting",
      description: "Learn to create your own songs, covering aspects such as lyric writing, melody creation, and chord progressions.",
    },
    {
      title: "Violin for Beginners",
      description: "Start your journey with the violin, learning essential techniques, proper posture, and how to play simple pieces.",
    },
    {
      title: "Jazz Improvisation",
      description: "Explore the art of jazz improvisation, focusing on key concepts such as chord changes, scales, and improvisational techniques.",
    },
  ];


function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={musicSchoolContent} />
    </div>
  )
}

export default WhyChooseUs