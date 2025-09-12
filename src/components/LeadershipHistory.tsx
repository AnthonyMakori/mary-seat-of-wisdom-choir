import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Crown, Award, Calendar, Users, Heart } from "lucide-react";

const LeadershipHistory = () => {
  const leadershipEras = [
    {
      period: "2020 - Present",
      era: "Current Leadership",
      choirMaster: {
        name: "Calistus Mwamzinyi",
        role: "Lead Choir Master & Organist",
        tenure: "4 Years",
        background: "Trained musician with Master's in Sacred Music",
        achievements: [
          "Expanded choir membership by 40%",
          "Introduced Latin chant program",
          "Established youth choir ministry",
          "Led diocesan choir festival participation"
        ],
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
      },
      keyMembers: [
        {
          name: "Eric",
          role: "First Assistant Director",
          specialty: "Vocal arrangements and member development",
          image: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=200&h=200&fit=crop&crop=face"
        },
        {
          name: "John Mbuvi",
          role: "Second Assistant Director",
          specialty: "Instrumental accompaniment and theory",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
        }
      ]
    },
    {
      period: "2015 - 2020",
      era: "Foundation Era",
      choirMaster: {
        name: "Sr. Mary Catherine OSB",
        role: "Founding Choir Master",
        tenure: "5 Years",
        background: "Benedictine nun with 25 years of liturgical music experience",
        achievements: [
          "Founded Mary Seat of Wisdom Choir",
          "Established weekly practice schedule",
          "Created foundational music library",
          "Trained first generation of choir members"
        ],
        image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=300&h=300&fit=crop&crop=face"
      },
      keyMembers: [
        {
          name: "Mrs. Elizabeth Martinez",
          role: "First Secretary-Treasurer",
          specialty: "Administrative foundation and member recruitment",
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face"
        },
        {
          name: "Mr. Robert Chen",
          role: "First Tenor Section Leader",
          specialty: "Male voice development and recruitment",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
        }
      ]
    },
    {
      period: "2010 - 2015",
      era: "Pre-Formation Period",
      choirMaster: {
        name: "Parish Music Ministry",
        role: "Collective Leadership",
        tenure: "5 Years",
        background: "Parish volunteers coordinating liturgical music",
        achievements: [
          "Identified need for formal choir",
          "Recruited Sr. Mary Catherine",
          "Established music budget",
          "Prepared groundwork for choir formation"
        ],
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=300&h=300&fit=crop"
      },
      keyMembers: [
        {
          name: "Various Parish Musicians",
          role: "Volunteer Coordinators",
          specialty: "Liturgical music coordination",
          image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=200&h=200&fit=crop"
        }
      ]
    }
  ];

  const legacyAchievements = [
    {
      year: "2023",
      title: "Diocesan Excellence Award",
      description: "Recognition for outstanding contribution to liturgical music",
      leader: "Fr. Michael Thompson"
    },
    {
      year: "2022",
      title: "Community Choice Award",
      description: "Voted best parish choir by local Catholic community",
      leader: "Fr. Michael Thompson"
    },
    {
      year: "2020",
      title: "15th Anniversary Celebration",
      description: "Milestone celebration with special concert and thanksgiving Mass",
      leader: "Sr. Mary Catherine OSB"
    },
    {
      year: "2018",
      title: "Regional Choir Festival",
      description: "First-place finish in regional Catholic choir competition",
      leader: "Sr. Mary Catherine OSB"
    },
    {
      year: "2015",
      title: "Choir Foundation",
      description: "Official establishment of Mary Seat of Wisdom Choir",
      leader: "Sr. Mary Catherine OSB"
    }
  ];

  const foundingPrinciples = [
    {
      principle: "Devotion to Mary",
      description: "Placing our choir under the patronage of Mary, Seat of Wisdom, seeking her intercession for our musical ministry.",
      icon: Crown
    },
    {
      principle: "Liturgical Excellence",
      description: "Commitment to the highest standards of sacred music to enhance the beauty of the liturgy.",
      icon: Award
    },
    {
      principle: "Community Building",
      description: "Fostering fellowship and spiritual growth among choir members through shared musical ministry.",
      icon: Heart
    },
    {
      principle: "Musical Education",
      description: "Continuous learning and development in sacred music tradition and vocal technique.",
      icon: Users
    }
  ];

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Calendar className="w-8 h-8 text-accent mr-3" />
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">
              Our Leadership Legacy
            </h2>
          </div>
          <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto leading-relaxed">
            A journey through the dedicated leaders who have shaped our choir's mission and growth over the years.
          </p>
        </div>

        {/* Leadership Timeline */}
        <div className="space-y-12 mb-16">
          {leadershipEras.map((era, index) => (
            <div key={index} className="relative">
              {/* Timeline Line */}
              {index < leadershipEras.length - 1 && (
                <div className="absolute left-8 top-24 w-0.5 h-32 bg-border hidden lg:block" />
              )}
              
              <Card className="shadow-elegant overflow-hidden">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Era Info */}
                    <div className="lg:col-span-1">
                      <div className="flex items-center mb-4">
                        <div className="w-4 h-4 bg-accent rounded-full mr-3" />
                        <Badge variant="secondary" className="font-semibold">
                          {era.period}
                        </Badge>
                      </div>
                      <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">
                        {era.era}
                      </h3>
                      <p className="text-muted-foreground font-inter">
                        {era.choirMaster.background}
                      </p>
                    </div>

                    {/* Choir Master */}
                    <div className="lg:col-span-1">
                      <div className="flex items-start space-x-4 mb-6">
                        <img 
                          src={era.choirMaster.image} 
                          alt={era.choirMaster.name}
                          className="w-20 h-20 rounded-full object-cover shadow-soft"
                        />
                        <div>
                          <h4 className="font-playfair text-lg font-semibold text-foreground">
                            {era.choirMaster.name}
                          </h4>
                          <p className="text-sm text-accent font-medium">
                            {era.choirMaster.role}
                          </p>
                          <Badge variant="outline" className="mt-1 text-xs">
                            {era.choirMaster.tenure}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <h5 className="font-playfair text-sm font-semibold text-foreground">Key Achievements:</h5>
                        <ul className="space-y-1">
                          {era.choirMaster.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start">
                              <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Key Members */}
                    <div className="lg:col-span-1">
                      <h5 className="font-playfair text-lg font-semibold text-foreground mb-4">
                        Key Team Members
                      </h5>
                      <div className="space-y-4">
                        {era.keyMembers.map((member, i) => (
                          <div key={i} className="flex items-start space-x-3">
                            <img 
                              src={member.image} 
                              alt={member.name}
                              className="w-12 h-12 rounded-full object-cover shadow-soft"
                            />
                            <div>
                              <h6 className="font-playfair text-sm font-semibold text-foreground">
                                {member.name}
                              </h6>
                              <p className="text-xs text-accent font-medium">
                                {member.role}
                              </p>
                              <p className="text-xs text-muted-foreground leading-relaxed">
                                {member.specialty}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Founding Principles */}
        <div className="mb-16">
          <h3 className="font-playfair text-3xl font-semibold text-foreground text-center mb-10">
            Our Founding Principles
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {foundingPrinciples.map((item, index) => (
              <Card key={index} className="shadow-soft hover:shadow-elegant transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <item.icon className="w-10 h-10 text-accent mx-auto mb-4" />
                  <h4 className="font-playfair text-lg font-semibold text-foreground mb-3">
                    {item.principle}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Legacy Timeline */}
        <div>
          <h3 className="font-playfair text-3xl font-semibold text-foreground text-center mb-10">
            Legacy of Achievements
          </h3>
          <div className="space-y-4 max-w-4xl mx-auto">
            {legacyAchievements.map((achievement, index) => (
              <Card key={index} className="shadow-soft hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Badge className="bg-accent text-accent-foreground font-bold">
                        {achievement.year}
                      </Badge>
                      <div>
                        <h4 className="font-playfair text-lg font-semibold text-foreground">
                          {achievement.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-accent">
                        Under {achievement.leader}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipHistory;