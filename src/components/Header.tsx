import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-white font-bold text-xl">RV</span>
            </div>
            <div>
              <h1 className="font-bold text-lg text-foreground">RoomVent 2014</h1>
              <p className="text-xs text-muted-foreground">São Paulo, Brasil</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("congresso")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Congresso
            </button>
            <button
              onClick={() => scrollToSection("equipe")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Equipe
            </button>
            <button
              onClick={() => scrollToSection("colaboradores")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Colaboradores
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Portfólio
            </button>
            <Button
              onClick={() => scrollToSection("contato")}
              className="bg-secondary hover:bg-secondary/90"
            >
              Contato
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("congresso")}
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Congresso
              </button>
              <button
                onClick={() => scrollToSection("equipe")}
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Equipe
              </button>
              <button
                onClick={() => scrollToSection("colaboradores")}
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Colaboradores
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Portfólio
              </button>
              <Button
                onClick={() => scrollToSection("contato")}
                className="bg-secondary hover:bg-secondary/90 w-full"
              >
                Contato
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
