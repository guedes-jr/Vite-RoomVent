import { useState } from "react";
import PortfolioFilters from "@/components/portfolio/PortfolioFilters";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import PortfolioModal from "@/components/portfolio/PortfolioModal";

const items = [
  { id: "1", title: "Anais do Congresso", type: "document", size: "45 MB", url: "/docs/anais.pdf", thumb: "/thumbnails/anais.jpg", tags: ["documento", "anais"] },
  { id: "2", title: "Galeria 2014 - Foto 1", type: "photo", url: "https://picsum.photos/id/1015/1200/800", thumb: "https://picsum.photos/id/1015/800/533", tags: ["foto", "evento"] },
  { id: "3", title: "Slides Keynote", type: "document", size: "23 MB", url: "/docs/keynote.pdf", thumb: "/thumbnails/keynote.jpg", tags: ["slides"] },
  { id: "4", title: "Galeria 2014 - Foto 2", type: "photo", url: "https://picsum.photos/id/1016/1200/800", thumb: "https://picsum.photos/id/1016/800/533", tags: ["foto"] },
  // adicione mais itens aqui
];

export default function PortfolioPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<string | null>(null);
  const [active, setActive] = useState<typeof items[number] | null>(null);

  const filtered = items.filter((it) => {
    const matchesQuery = it.title.toLowerCase().includes(query.toLowerCase());
    const matchesFilter = !filter || it.tags.includes(filter) || (filter === "photo" && it.type === "photo") || (filter === "document" && it.type === "document");
    return matchesQuery && matchesFilter;
  });

  return (
    <main className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4">
        <header className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Portfólios</h1>
          <p className="text-muted-foreground">Explore documentos, apresentações e a galeria completa do RoomVent 2014.</p>
        </header>

        <PortfolioFilters
          query={query}
          onQuery={setQuery}
          activeFilter={filter}
          onFilter={setFilter}
        />

        <div className="mt-8">
          <PortfolioGrid items={filtered} onOpen={setActive} />
        </div>
      </div>

      <PortfolioModal item={active} onClose={() => setActive(null)} />
    </main>
  );
}