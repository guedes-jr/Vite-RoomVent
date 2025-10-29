import { Card } from "@/components/ui/card";
import scanvacLogo from "@/assets/logos/scanvac.jpg";
import iptLogo from "@/assets/logos/ipt.png";
import unfLogo from "@/assets/logos/unf.jpg";
import rehLogo from "@/assets/logos/reh.png";
import ashraeLogo from "@/assets/logos/ashrae.png";
import isiaLogo from "@/assets/logos/isia.jpg";

const PartnersSection = () => {
  const partners = [
    { name: "SCANVAC", logo: scanvacLogo },
    { name: "IPT", logo: iptLogo },
    { name: "UNF", logo: unfLogo },
    { name: "REH", logo: rehLogo },
    { name: "ASHRAE", logo: ashraeLogo },
    { name: "ISIA", logo: isiaLogo },
  ];

  return (
    <section id="colaboradores" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Colaboradores
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Organizações parceiras que tornam este evento possível
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
          {partners.map((partner, index) => (
            <Card
              key={index}
              className="p-6 flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border/50 animate-scale-in aspect-square"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-center justify-center w-full h-full">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Interessado em se tornar um parceiro?
          </p>
          <a
            href="#contato"
            className="text-secondary hover:text-secondary/80 font-semibold underline underline-offset-4 transition-colors"
          >
            Entre em contato conosco
          </a>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
