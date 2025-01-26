import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function Home() {
  const articles = [
    {
      title: "Atmospheric Pressure and Its Role",
      content:
        "Atmospheric pressure is the force exerted onto a surface by the weight of the air above it. It is a crucial factor influencing weather patterns, ocean currents, and even our day-to-day activities.",
      link: "https://www.weather.gov/jetstream/pressure",
    },
    {
      title: "Technology Innovations",
      content:
        "Technology is evolving at an unprecedented rate, bringing innovations that are reshaping industries, economies, and societies. From breakthroughs in quantum computing to renewable energy.",
      link: "https://www.technologyreview.com/",
    },
    {
      title: "NASA Earth Science",
      content:
        "NASA has been at the forefront of climate science, using satellites to monitor the Earth's atmosphere, oceans, and land. This research helps scientists understand global warming.",
      link: "https://www.nasa.gov/earth-science",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container py-10">
        <div className="text-center mb-10 space-y-4">
          <h1 className="text-4xl font-bold">Welcome to Savingdaplanet</h1>
          <p className="text-xl text-muted-foreground">Exploring Science & Technology</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{article.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{article.content}</p>
                <Button asChild variant="outline">
                  <a href={article.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    Read More
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <h2 className="text-2xl font-bold mb-4">Connect With Us</h2>
          <div className="flex justify-center gap-4">
            <Button asChild variant="outline">
              <a href="mailto:hirecasarrubias@gmail.com" className="flex items-center gap-2">
                Email Us
              </a>
            </Button>
            <Button asChild variant="outline">
              <a
                href="https://www.instagram.com/savingdaplanet/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Instagram
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

