import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Building2, Users, Lightbulb, Globe } from "lucide-react";

const CongressSection = () => {
  const features = [
    {
      icon: Building2,
      title: "Ventilação de Edifícios",
      description: "Estratégias inovadoras para distribuição de ar em ambientes construídos",
    },
    {
      icon: Users,
      title: "Networking Internacional",
      description: "Conexão com especialistas e pesquisadores de diversos países",
    },
    {
      icon: Lightbulb,
      title: "Tecnologias Emergentes",
      description: "Soluções ativas e passivas para conforto térmico e qualidade do ar",
    },
    {
      icon: Globe,
      title: "Impacto Global",
      description: "Discussões sobre sustentabilidade e eficiência energética",
    },
  ];

  return (
    <section id="congresso" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            O Congresso
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Em 19 a 22 de Outubro realizou-se em São Paulo, Brasil, a décima terceira edição do 
            Congresso Internacional de Distribuição de Ar em Compartimentos – RoomVent 2014. 
            Organizado pelo conjunto das Sociedades Escandinavas de Aquecimento, Ventilação e 
            Ar-condicionado (Scanvac), centrou-se em novas estratégias tecnológicas, tanto ativas 
            como passivas, de ventilação de edifícios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 border border-border/50">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Temas Principais
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                <p className="text-foreground">Distribuição de ar em ambientes residenciais e comerciais</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                <p className="text-foreground">Sistemas de ventilação natural e mecânica</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                <p className="text-foreground">Qualidade do ar interno e saúde ocupacional</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                <p className="text-foreground">Eficiência energética em sistemas HVAC</p>
              </div>
            </div>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              Baixar Programa Completo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CongressSection;
