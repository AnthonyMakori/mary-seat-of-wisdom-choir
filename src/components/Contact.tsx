import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["St. Mary's Catholic Church", "123 Wisdom Avenue", "Springfield, IL 62701"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["Parish Office: (555) 123-4567", "Choir Director: (555) 987-6543"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["choir@stmarysparish.org", "director@mwowchoir.org"]
    },
    {
      icon: Clock,
      title: "Rehearsals",
      details: ["Wednesdays: 7:00 PM - 8:30 PM", "Sundays: 30 minutes before Mass"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
            Whether you're interested in joining our choir or have questions about our ministry, 
            we'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="mb-8">
              <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">
                Contact Information
              </h3>
              <p className="text-muted-foreground font-inter">
                Reach out to learn more about joining our choir family or to schedule a visit during our rehearsals.
              </p>
            </div>

            {contactInfo.map((info, index) => (
              <Card key={index} className="shadow-soft hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent/10 rounded-lg p-3">
                      <info.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold text-foreground mb-2">
                        {info.title}
                      </h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground font-inter text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Join Us Section */}
            <Card className="shadow-soft bg-gradient-gold/10 border-accent/20">
              <CardContent className="p-6">
                <h4 className="font-playfair text-xl font-semibold text-foreground mb-3">
                  Interested in Joining?
                </h4>
                <p className="text-muted-foreground font-inter text-sm mb-4">
                  We welcome singers of all voice parts (Soprano, Alto, Tenor, Bass) who are passionate 
                  about Catholic liturgical music. No audition required - just a love for praising God through song!
                </p>
                <Button variant="outline" className="w-full">
                  Learn About Membership
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="font-playfair text-2xl text-foreground">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-inter font-medium">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="font-inter"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-inter font-medium">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="font-inter"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="font-inter font-medium">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What would you like to discuss?"
                    className="font-inter"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="font-inter font-medium">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your interest in our choir or any questions you might have..."
                    className="min-h-32 font-inter"
                    required
                  />
                </div>

                <Button type="submit" className="w-full shadow-elegant font-inter font-semibold">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;