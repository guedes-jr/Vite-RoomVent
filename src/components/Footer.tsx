const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                <span className="text-white font-bold">RV</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">RoomVent 2014</h3>
                <p className="text-xs text-white/70">São Paulo, Brasil</p>
              </div>
            </div>
            <p className="text-white/70 text-sm">
              Congresso Internacional de Distribuição de Ar em Compartimentos
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-white/70 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#congresso" className="text-white/70 hover:text-white transition-colors">
                  Congresso
                </a>
              </li>
              <li>
                <a href="#equipe" className="text-white/70 hover:text-white transition-colors">
                  Equipe
                </a>
              </li>
              <li>
                <a href="#colaboradores" className="text-white/70 hover:text-white transition-colors">
                  Colaboradores
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-white/70 hover:text-white transition-colors">
                  Portfólio
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>São Paulo, Brasil</li>
              <li>
                <a href="mailto:arqclelia@hotmail.com" className="hover:text-white transition-colors">
                  arqclelia@hotmail.com
                </a>
              </li>
              <li>19-22 de Outubro, 2014</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} RoomVent 2014. Todos os direitos reservados.</p>
          <p className="mt-2">Organizado por SCANVAC</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
