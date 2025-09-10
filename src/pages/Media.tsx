import Navigation from "@/components/Navigation";
import MediaGallery from "@/components/MediaGallery";
import PhotoGallery from "@/components/PhotoGallery";

const MediaPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <MediaGallery />
        <PhotoGallery />
      </main>
    </div>
  );
};

export default MediaPage;