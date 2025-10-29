import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

type Props = {
  query: string;
  onQuery: (q: string) => void;
  activeFilter: string | null;
  onFilter: (f: string | null) => void;
};

export default function PortfolioFilters({ query, onQuery, activeFilter, onFilter }: Props) {
  const quick = ["all", "photo", "document", "slides", "foto", "anais"];

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2 w-full md:w-1/2 bg-card rounded-md px-3 py-2">
        <Search className="w-5 h-5 text-muted-foreground" />
        <input
          value={query}
          onChange={(e) => onQuery(e.target.value)}
          placeholder="Pesquisar portfólios, documentos ou fotos..."
          className="bg-transparent outline-none w-full text-foreground"
        />
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        {quick.map((q) => {
          const active = (activeFilter === q) || (q === "all" && activeFilter === null);
          return (
            <Button
              key={q}
              size="sm"
              variant={active ? "default" : "ghost"}
              onClick={() => onFilter(q === "all" ? null : q)}
              className="capitalize"
            >
              {q}
            </Button>
          );
        })}
      </div>
    </div>
  );
}