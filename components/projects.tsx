import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import Link from "next/link"

const Projects = () => {
  const projects = [
    {
      title: "CourseMap",
      description:
        "A Queens College degree tracker that helps students plan their academic journey and track progress toward graduation requirements. Built this out of personal frustration with tracking my own degree progress.",
      image: "/coursemap.png",
      tags: ["React", "JavaScript", "CSS", "API Integration"],
      github: "https://github.com/HashirAligb/CourseMap",
    },
    {
      title: "PrayerTime",
      description:
        "A web application for prayer tracking that provides accurate prayer times based on location and allows users to track their prayer habits. This project combines my technical skills with my personal interests.",
      image: "/prayertime.png",
      tags: ["React", "Python", "Flask", "REST API"],
      github: "https://github.com/HashirAligb/PrayerTime",
    },
    {
      title: "SoleMate",
      description:
        "A collaborative project developed during a 48-hour hackathon that addresses urban mobility challenges. As a sophomore CS student at Queens College, this project helped me learn about rapid development and teamwork.",
      image: "/solemate.png",
      tags: ["Next.js", "Tailwind CSS", "MySQL", "API"],
      github: "https://github.com/HashirAligb/HashirCode",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are some of my projects that showcase my technical skills and problem-solving abilities as a Computer Science student and coding instructor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-lg"
            >
              <div className="overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.github} target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

