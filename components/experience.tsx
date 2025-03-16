import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const Experience = () => {
  const experiences = [
    {
      title: "Coding Instructor",
      company: "Huan Yu",
      period: "2023 - Present",
      description:
        "Teaching programming fundamentals and advanced concepts to students. Developing curriculum and providing mentorship to aspiring developers.",
      skills: ["Teaching", "Python", "Java", "Web Development"],
    },
    {
      title: "Software Engineering Intern",
      company: "RICH Inc.",
      period: "Summer 2023",
      description:
        "Developed and maintained web applications. Collaborated with cross-functional teams to implement new features and fix bugs.",
      skills: ["React", "JavaScript", "API Integration", "Git"],
    },
    {
      title: "IT Intern",
      company: "NYC Department of Education",
      period: "Summer 2022",
      description:
        "Assisted with technical support and system maintenance. Participated in the implementation of new educational technology solutions.",
      skills: ["Technical Support", "System Administration", "Troubleshooting"],
    },
    {
      title: "Photography Enthusiast",
      company: "Freelance",
      period: "2021 - Present",
      description:
        "Capturing urban landscapes and city life through photography. Developing a unique visual style that blends technology and urban environments.",
      skills: ["Urban Photography", "Composition", "Editing", "Visual Storytelling"],
    },
    {
      title: "Hackathon Participant",
      company: "Various Events",
      period: "2022 - Present",
      description:
        "Participated in multiple hackathons, collaborating with diverse teams to build innovative solutions under tight deadlines.",
      skills: ["Rapid Prototyping", "Team Collaboration", "Problem Solving", "Presentation"],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My professional journey and leadership experiences that have shaped my skills and perspective.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>

                <div className={`md:w-5/12 ${index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"}`}>
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{exp.title}</CardTitle>
                          <CardDescription>{exp.company}</CardDescription>
                        </div>
                        <Badge variant="outline">{exp.period}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

