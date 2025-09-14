import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Crown, Music, Award } from "lucide-react";
import aboutImage from "@/assets/about-church.jpg";

const About = () => {
  const achievements = [
    "Diocesan Choir Festival Award 2023",
    "Excellence in Sacred Music Ministry",
    "Community Choice Award 2022",
    "15 Years of Faithful Service"
  ];

  const leadership = [
    {
      role: "Choir Master",
      name: "Mr. Calistus Mwamzinyi",
      description: "Leading our musical ministry with 20+ years of experience"
    },
    {
      role: "Assistant Director",
      name: "Mr. Eric Mwangi",
      description: "Coordinating rehearsals and member development"
    },
    {
      role: "Organist",
      name: "John Mbuvi",
      description: "Professional accompanist and music theory instructor"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Crown className="w-8 h-8 text-accent mr-3" />
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">
              About Msow Choir
            </h2>
          </div>
          <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto leading-relaxed">
            Founded under the patronage of Mary, Seat of Wisdom, we are a community of faithful Catholics 
            dedicated to enhancing the beauty of liturgy through sacred music.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Image */}
          <div className="relative">
            <img 
              src={aboutImage} 
              alt="Beautiful Catholic church interior" 
              className="rounded-lg shadow-elegant w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg" />
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Mission */}
            <div>
              <div className="flex items-center mb-4">
                <Heart className="w-6 h-6 text-accent mr-3" />
                <h3 className="font-playfair text-2xl font-semibold text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground font-inter leading-relaxed">
                To glorify God through the ministry of sacred music, supporting the liturgical life of our 
                parish while fostering spiritual growth and community among our members. We strive to create 
                an atmosphere of reverence and beauty that draws hearts closer to Christ.
              </p>
            </div>

            {/* Vision */}
            <div>
              <div className="flex items-center mb-4">
                <Music className="w-6 h-6 text-accent mr-3" />
                <h3 className="font-playfair text-2xl font-semibold text-foreground">Our Vision</h3>
              </div>
              <p className="text-muted-foreground font-inter leading-relaxed">
                To be recognized as a premier Catholic choir that serves as an instrument of evangelization, 
                inspiring both singers and listeners to encounter the Divine through the transformative power 
                of sacred music rooted in tradition and excellence.
              </p>
            </div>

            {/* Patron Saint */}
            <div className="bg-card rounded-lg p-6 border shadow-soft">
              <h4 className="font-playfair text-xl font-semibold text-foreground mb-3">
                Our Patron: Mary, Seat of Wisdom
              </h4>
              <p className="text-muted-foreground font-inter text-sm leading-relaxed">
                We are placed under the protection of the Blessed Virgin Mary in her title as Seat of Wisdom. 
                Just as Mary pondered all things in her heart, we seek to internalize and share the beauty of 
                God's truth through our musical ministry.
              </p>
            </div>
          </div>
        </div>

        {/* Leadership Section */}
        <div className="mb-16">
          <h3 className="font-playfair text-3xl font-semibold text-foreground text-center mb-10">
            Our Leadership
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {leadership.map((leader, index) => (
              <Card key={index} className="shadow-soft hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Badge variant="secondary" className="mb-3">{leader.role}</Badge>
                  <h4 className="font-playfair text-lg font-semibold text-foreground mb-2">
                    {leader.name}
                  </h4>
                  <p className="text-muted-foreground font-inter text-sm">
                    {leader.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <Award className="w-6 h-6 text-accent mr-3" />
            <h3 className="font-playfair text-3xl font-semibold text-foreground">
              Our Achievements
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-card rounded-lg p-4 border shadow-soft hover:shadow-elegant transition-all duration-300"
              >
                <p className="font-inter text-sm text-foreground font-medium">
                  {achievement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;