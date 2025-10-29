import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";
import { useState } from "react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Vídeo Institucional
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Assista ao resumo do RoomVent 2014 e conheça os principais destaques do evento
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden border-border/50 shadow-lg">
            <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-secondary/10">
              {!isPlaying ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="relative z-10 w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center group hover:scale-110 transition-transform duration-300"
                  >
                    <Play className="w-10 h-10 text-primary ml-2 group-hover:text-secondary transition-colors" />
                  </button>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-2">RoomVent 2014 - Destaques</h3>
                    <p className="text-white/90">
                      Veja as principais palestras, apresentações e momentos do congresso
                    </p>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/Rxrg_TYrF8w?autoplay=1&mute=1"
                    title="RoomVent 2014 - Vídeo Institucional"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Card className="p-6 text-center border-border/50 hover:shadow-lg transition-all">
              <div className="text-4xl font-bold text-primary mb-2">120+</div>
              <p className="text-muted-foreground">Apresentações</p>
            </Card>
            <Card className="p-6 text-center border-border/50 hover:shadow-lg transition-all">
              <div className="text-4xl font-bold text-secondary mb-2">350+</div>
              <p className="text-muted-foreground">Participantes</p>
            </Card>
            <Card className="p-6 text-center border-border/50 hover:shadow-lg transition-all">
              <div className="text-4xl font-bold text-accent mb-2">25+</div>
              <p className="text-muted-foreground">Países</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
