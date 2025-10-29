import { Card } from "@/components/ui/card";
import teamPhoto from "@/assets/imgs/equipe2.jpg";
import { Users, Award, Globe, Target } from "lucide-react";

const TeamSection = () => {
  const teamStats = [
    {
      icon: Users,
      title: "Equipe Multidisciplinar",
      description: "Engenheiros, arquitetos e pesquisadores de diversas áreas",
    },
    {
      icon: Award,
      title: "Excelência Acadêmica",
      description: "Profissionais reconhecidos internacionalmente",
    },
    {
      icon: Globe,
      title: "Alcance Global",
      description: "Colaborações com instituições de vários países",
    },
    {
      icon: Target,
      title: "Visão Inovadora",
      description: "Foco em soluções sustentáveis e eficientes",
    },
  ];

  return (
    <section id="equipe" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossa Equipe
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Profissionais dedicados que tornaram o RoomVent 2014 um sucesso
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-12">
          <Card className="overflow-hidden border-border/50 shadow-lg animate-scale-in">
            <div className="relative">
              <img
                src={teamPhoto}
                alt="Equipe RoomVent 2014"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl font-bold mb-2">Comitê Organizador</h3>
                <p className="text-white/90 text-lg">
                  Especialistas comprometidos com o avanço da ventilação e conforto ambiental
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamStats.map((stat, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {stat.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {stat.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-border/50">
            <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
              Comitê Científico
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Coordenação Geral</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Prof. Dr. João Silva - USP</li>
                  <li>• Prof. Dr. Maria Santos - UNICAMP</li>
                  <li>• Dr. Carlos Oliveira - IPT</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Comitê Técnico</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Eng. Ana Costa - ABRAVA</li>
                  <li>• Prof. Dr. Pedro Lima - UFSC</li>
                  <li>• Dr. Lucia Ferreira - INMETRO</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
