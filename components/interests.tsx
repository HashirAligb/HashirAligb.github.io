"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Camera, Activity, Mountain, BookOpen, Coffee, Building } from "lucide-react"

const Interests = () => {
  return (
    <section className="py-20 bg-city-night text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Beyond Coding</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            When I'm not immersed in code, here's what you might find me doing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-black/50 backdrop-blur-sm border-gray-800">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="bg-primary/20 p-4 rounded-full mb-4">
                <Activity className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Basketball</h3>
              <p className="text-gray-300">
                Playing basketball helps me stay active and teaches valuable lessons about teamwork and strategy that I apply to my coding projects.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-black/50 backdrop-blur-sm border-gray-800">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="bg-primary/20 p-4 rounded-full mb-4">
                <Mountain className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Scenic Views</h3>
              <p className="text-gray-300">
                Exploring rooftops and scenic spots around the city. I find that taking in beautiful views helps clear my mind and sparks creativity.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-black/50 backdrop-blur-sm border-gray-800">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="bg-primary/20 p-4 rounded-full mb-4">
                <Camera className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Urban Photography</h3>
              <p className="text-gray-300">
                Capturing the essence of city life through my lens. I'm particularly drawn to night photography and the
                interplay of light and shadow in urban environments.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-black/50 backdrop-blur-sm border-gray-800">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="bg-primary/20 p-4 rounded-full mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Tech Literature</h3>
              <p className="text-gray-300">
                Reading about emerging technologies, AI ethics, and the future of computing. I believe staying informed
                is crucial for responsible innovation.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-black/50 backdrop-blur-sm border-gray-800">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="bg-primary/20 p-4 rounded-full mb-4">
                <Coffee className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Café Exploration</h3>
              <p className="text-gray-300">
                Discovering new coffee shops around Queens and Manhattan. I find that a change of environment helps me
                think more creatively about coding challenges.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-black/50 backdrop-blur-sm border-gray-800">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="bg-primary/20 p-4 rounded-full mb-4">
                <Building className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Museum Visits</h3>
              <p className="text-gray-300">
                Exploring museums and cultural institutions to gain new perspectives and inspiration. Art and history provide valuable insights that influence my creative approach to problem-solving.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Interests

