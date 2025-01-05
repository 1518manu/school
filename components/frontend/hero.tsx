"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <div className="relative overflow-hidden  h-screen flex items-center justify-center text-center">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="/path-to-your-video.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90"></div>
       <div className="relative z-10  flex flex-col items-center max-w-4xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="secondary" className="mb-6 bg-cyan-500 text-black">
            <Sparkles className="w-4 h-4 mr-2" />
            Welcome to SchoolPro
          </Badge>
        </motion.div>
        <motion.h1
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Your Complete School Management Solution
        </motion.h1>
        <motion.p
          className="text-xl text-gray-300 mb-10 max-w-2xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          From admissions to academics, simplify every aspect of school
          administration with our comprehensive and user-friendly platform.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Button size='lg'
            className="bg-cyan-500 text-black hover:bg-cyan-400 hover:scale-110 transition-transform duration-300 ease-in-out hover:rounded-full"
            >
            Get Started
            <ArrowRight className="w-4 h-4 ml-2" />
            </Button>

          <Button size="lg" variant="outline" className="border-gray-300 text-gray-300  hover:bg-grey-300 hover:scale-110 transition-transform duration-300 ease-in-out hover:rounded-full">
            See All Features
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
