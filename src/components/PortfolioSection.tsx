import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, ExternalLink } from "lucide-react";

const PortfolioSection = () => {
  const documents = [
    {
      title: "Anais do Congresso",
      description: "Coletânea completa de artigos apresentados no RoomVent 2014",
      type: "PDF",
      size: "45 MB",
    },
    {
      title: "Apresentações Principais",
      description: "Slides das palestras keynote e sessões plenárias",
      type: "PDF",
      size: "23 MB",
    },
    {
      title: "Resumos Expandidos",
      description: "Resumos detalhados de todos os trabalhos aceitos",
      type: "PDF",
      size: "12 MB",
    },
    {
      title: "Guia do Participante",
      description: "Informações sobre o evento, programação e local",
      type: "PDF",
      size: "8 MB",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Portfólio
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Acesse documentos, apresentações e materiais do congresso
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {documents.map((doc, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 border-border/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {doc.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {doc.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="px-2 py-1 bg-muted rounded text-xs font-medium">
                        {doc.type}
                      </span>
                      <span>{doc.size}</span>
                    </div>
                    <Button size="sm" variant="ghost" className="gap-2">
                      <Download className="w-4 h-4" />
                      Baixar
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Galeria de Fotos
            </h3>
            <p className="text-white/90 mb-6">
              Reviva os melhores momentos do RoomVent 2014 através de nossa galeria fotográfica completa
            </p>
            <a href="/portfolio" aria-label="Ver portfólios" className="inline-block w-full md:w-auto">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 gap-2 w-full md:w-auto"
              >
                Ver Portfólios
                <ExternalLink className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
