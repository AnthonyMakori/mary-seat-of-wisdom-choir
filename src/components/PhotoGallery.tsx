import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Camera, Calendar, Users, Heart, Download, Share2, Eye } from "lucide-react";

const PhotoGallery = () => {
  const photoCategories = [
    {
      id: 'events',
      title: 'Special Events',
      count: 45,
      icon: Calendar,
      color: 'text-accent'
    },
    {
      id: 'masses',
      title: 'Sunday Masses',
      count: 32,
      icon: Heart,
      color: 'text-primary'
    },
    {
      id: 'practices',
      title: 'Choir Practices',
      count: 28,
      icon: Users,
      color: 'text-secondary-foreground'
    },
    {
      id: 'celebrations',
      title: 'Celebrations',
      count: 18,
      icon: Camera,
      color: 'text-accent'
    }
  ];

  const featuredPhotos = [
    {
      id: 1,
      title: "Christmas Midnight Mass 2023",
      category: "Special Events",
      date: "December 24, 2023",
      photographer: "Parish Photography Team",
      image: "https://images.unsplash.com/photo-1576085898323-218337e3e43c?w=600&h=400&fit=crop",
      description: "Beautiful moment during the Christmas midnight mass with full choir",
      likes: 125,
      featured: true
    },
    {
      id: 2,
      title: "Easter Vigil Celebration",
      category: "Special Events",
      date: "March 30, 2024",
      photographer: "Maria Santos",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      description: "Joyful Easter Vigil celebration with candlelit procession",
      likes: 98,
      featured: true
    },
    {
      id: 3,
      title: "Weekly Choir Practice",
      category: "Choir Practices",
      date: "June 15, 2024",
      photographer: "Fr. Michael Thompson",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
      description: "Dedicated choir members during their weekly practice session",
      likes: 67
    },
    {
      id: 4,
      title: "New Member Welcome Ceremony",
      category: "Celebrations",
      date: "May 20, 2024",
      photographer: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=600&h=400&fit=crop",
      description: "Welcoming new choir members with blessing and fellowship",
      likes: 89
    },
    {
      id: 5,
      title: "Pentecost Sunday Performance",
      category: "Sunday Masses",
      date: "May 19, 2024",
      photographer: "David Williams",
      image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?w=600&h=400&fit=crop",
      description: "Spirited performance during Pentecost Sunday celebration",
      likes: 112
    },
    {
      id: 6,
      title: "Choir Anniversary Dinner",
      category: "Celebrations",
      date: "April 28, 2024",
      photographer: "Parish Photography Team",
      image: "https://images.unsplash.com/photo-1518453360325-4747702c4109?w=600&h=400&fit=crop",
      description: "15th anniversary celebration dinner with all choir members",
      likes: 156
    },
    {
      id: 7,
      title: "Good Friday Solemn Service",
      category: "Special Events",
      date: "March 29, 2024",
      photographer: "Maria Santos",
      image: "https://images.unsplash.com/photo-1576085898323-218337e3e43c?w=600&h=400&fit=crop",
      description: "Reverent moments during Good Friday service",
      likes: 78
    },
    {
      id: 8,
      title: "Youth Choir Workshop",
      category: "Choir Practices",
      date: "June 8, 2024",
      photographer: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=600&h=400&fit=crop",
      description: "Teaching the next generation of choir singers",
      likes: 92
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Camera className="w-8 h-8 text-accent mr-3" />
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">
              Photo Gallery
            </h2>
          </div>
          <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto leading-relaxed">
            Capturing precious moments of our choir's journey, from sacred celebrations to joyful fellowship.
          </p>
        </div>

        {/* Photo Categories */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {photoCategories.map((category) => (
            <Card key={category.id} className="shadow-soft hover:shadow-elegant transition-all duration-300 cursor-pointer">
              <CardContent className="p-6 text-center">
                <category.icon className={`w-8 h-8 ${category.color} mx-auto mb-3`} />
                <h3 className="font-playfair text-lg font-semibold text-foreground mb-2">
                  {category.title}
                </h3>
                <Badge variant="secondary">{category.count} photos</Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Photos Section */}
        <div className="mb-12">
          <h3 className="font-playfair text-2xl font-semibold text-foreground mb-6 text-center">
            Featured Moments
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            {featuredPhotos.filter(photo => photo.featured).map((photo) => (
              <Card key={photo.id} className="shadow-elegant overflow-hidden hover:shadow-elegant transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={photo.image} 
                    alt={photo.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-2">
                      <Button size="sm" variant="secondary" className="rounded-full">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="rounded-full">
                        <Share2 className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="rounded-full">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
                    Featured
                  </Badge>
                </div>
                
                <CardContent className="p-4">
                  <h4 className="font-playfair text-lg font-semibold text-foreground mb-2">
                    {photo.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    {photo.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {photo.date}
                    </div>
                    <div className="flex items-center">
                      <Heart className="w-3 h-3 mr-1" />
                      {photo.likes}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Photo by {photo.photographer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Photos Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          {featuredPhotos.map((photo) => (
            <Card key={photo.id} className="shadow-soft overflow-hidden hover:shadow-elegant transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={photo.image} 
                  alt={photo.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Quick Actions */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" variant="secondary" className="rounded-full w-8 h-8 p-0">
                    <Heart className="w-3 h-3" />
                  </Button>
                </div>
                
                {/* Category Badge */}
                <Badge variant="outline" className="absolute bottom-2 left-2 bg-background/90 text-xs">
                  {photo.category}
                </Badge>
              </div>
              
              <CardContent className="p-3">
                <h5 className="font-playfair text-sm font-semibold text-foreground mb-1 truncate">
                  {photo.title}
                </h5>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{new Date(photo.date).toLocaleDateString()}</span>
                  <div className="flex items-center">
                    <Heart className="w-3 h-3 mr-1" />
                    {photo.likes}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Section */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="gap-2">
            <Eye className="w-4 h-4" />
            View All Photos
          </Button>
          <p className="text-sm text-muted-foreground mt-3">
            Browse our complete photo collection spanning over 15 years of memories
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;