import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Music, Calendar, ExternalLink, Youtube, Volume2 } from "lucide-react";

const MediaGallery = () => {
  const musicProductions = [
    {
      title: "Ave Maria - Christmas 2023",
      type: "Video",
      duration: "4:32",
      date: "December 2023",
      description: "Beautiful rendition of Ave Maria during Christmas midnight mass",
      thumbnail: "https://images.unsplash.com/photo-1576085898323-218337e3e43c?w=400&h=300&fit=crop",
      videoUrl: "https://youtube.com/watch?v=example1",
      views: "2.5K"
    },
    {
      title: "Alleluia - Easter Vigil 2024",
      type: "Video",
      duration: "3:45",
      date: "April 2024",
      description: "Triumphant Easter Alleluia with full choir and orchestra",
      thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      videoUrl: "https://youtube.com/watch?v=example2",
      views: "1.8K"
    },
    {
      title: "Te Deum - Sunday Mass",
      type: "Audio",
      duration: "5:12",
      date: "March 2024",
      description: "Weekly Sunday mass Te Deum in four-part harmony",
      thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      audioUrl: "https://soundcloud.com/example",
      views: "950"
    },
    {
      title: "Pange Lingua - Good Friday",
      type: "Video",
      duration: "6:18",
      date: "March 2024",
      description: "Solemn Good Friday chant in traditional Latin",
      thumbnail: "https://images.unsplash.com/photo-1518453360325-4747702c4109?w=400&h=300&fit=crop",
      videoUrl: "https://youtube.com/watch?v=example3",
      views: "1.2K"
    },
    {
      title: "Sacred Heart Hymns Collection",
      type: "Audio",
      duration: "12:45",
      date: "June 2024",
      description: "Complete collection of Sacred Heart devotional hymns",
      thumbnail: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=400&h=300&fit=crop",
      audioUrl: "https://soundcloud.com/example2",
      views: "3.1K"
    },
    {
      title: "Veni Creator Spiritus",
      type: "Video",
      duration: "4:05",
      date: "May 2024",
      description: "Pentecost celebration with traditional Latin chant",
      thumbnail: "https://images.unsplash.com/photo-1524230572899-a752b3835840?w=400&h=300&fit=crop",
      videoUrl: "https://youtube.com/watch?v=example4",
      views: "890"
    }
  ];

  const featuredAlbums = [
    {
      title: "Sacred Seasons 2024",
      tracks: 12,
      description: "Complete liturgical year collection",
      cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
      releaseDate: "December 2024"
    },
    {
      title: "Marian Hymns",
      tracks: 8,
      description: "Devotional songs to Our Lady",
      cover: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop",
      releaseDate: "October 2024"
    }
  ];

  return (
    <section id="media" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Music className="w-8 h-8 text-accent mr-3" />
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">
              Our Music & Media
            </h2>
          </div>
          <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto leading-relaxed">
            Experience our sacred music through recordings from masses, concerts, and special liturgical celebrations.
          </p>
        </div>

        {/* Featured Albums */}
        <div className="mb-16">
          <h3 className="font-playfair text-2xl font-semibold text-foreground mb-8 text-center">
            Featured Albums
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {featuredAlbums.map((album, index) => (
              <Card key={index} className="shadow-soft hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={album.cover} 
                      alt={album.title}
                      className="w-20 h-20 rounded-lg object-cover shadow-soft"
                    />
                    <div className="flex-1">
                      <h4 className="font-playfair text-lg font-semibold text-foreground">
                        {album.title}
                      </h4>
                      <p className="text-muted-foreground text-sm mb-2">{album.description}</p>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary">{album.tracks} tracks</Badge>
                        <span className="text-xs text-muted-foreground">{album.releaseDate}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Music Productions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {musicProductions.map((production, index) => (
            <Card key={index} className="shadow-soft hover:shadow-elegant transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img 
                  src={production.thumbnail} 
                  alt={production.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-primary/20">
                  <Button 
                    size="lg" 
                    className="rounded-full w-16 h-16 shadow-elegant"
                    onClick={() => window.open(production.videoUrl || production.audioUrl, '_blank')}
                  >
                    <Play className="w-6 h-6 fill-current" />
                  </Button>
                </div>

                {/* Type and Duration Badge */}
                <div className="absolute top-3 left-3 flex space-x-2">
                  <Badge variant="secondary" className="bg-background/90 text-foreground">
                    {production.type === 'Video' ? <Youtube className="w-3 h-3 mr-1" /> : <Volume2 className="w-3 h-3 mr-1" />}
                    {production.type}
                  </Badge>
                </div>
                <Badge variant="outline" className="absolute top-3 right-3 bg-background/90">
                  {production.duration}
                </Badge>
              </div>

              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-playfair text-lg font-semibold text-foreground flex-1">
                    {production.title}
                  </h4>
                </div>
                
                <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                  {production.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {production.date}
                  </div>
                  <span>{production.views} views</span>
                </div>

                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full mt-3"
                  onClick={() => window.open(production.videoUrl || production.audioUrl, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Watch/Listen
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-card rounded-lg p-8 shadow-soft">
          <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">
            Subscribe to Our Channel
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Stay updated with our latest recordings, live masses, and special performances. 
            Don't miss any of our sacred music ministry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="gap-2">
              <Youtube className="w-4 h-4" />
              YouTube Channel
            </Button>
            <Button variant="outline" className="gap-2">
              <Volume2 className="w-4 h-4" />
              Audio Playlist
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaGallery;