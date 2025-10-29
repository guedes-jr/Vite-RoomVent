import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ImageIcon } from "lucide-react";

type Item = {
  id: string;
  title: string;
  type: "photo" | "document";
  size?: string;
  url: string;
  thumb: string;
  tags?: string[];
};

export default function PortfolioGrid({ items, onOpen }: { items: Item[]; onOpen: (i: Item) => void; }) {
  if (!items.length) {
    return <div className="text-center text-muted-foreground py-12">Nenhum resultado encontrado.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((it) => (
        <Card key={it.id} className="p-0 overflow-hidden hover:shadow-xl transition-shadow">
          <div className="relative">
            <img src={it.thumb} alt={it.title} className="w-full h-48 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
              <div className="w-full flex items-center justify-between gap-2">
                <div>
                  <h3 className="text-white font-semibold">{it.title}</h3>
                  {it.size && <p className="text-white/90 text-xs">{it.size}</p>}
                </div>
                <div className="flex gap-2">
                  {it.type === "photo" ? (
                    <Button size="sm" variant="ghost" onClick={() => onOpen(it)} className="gap-2">
                      <ImageIcon className="w-4 h-4" /> Visualizar
                    </Button>
                  ) : (
                    <>
                      <Button size="sm" variant="ghost" onClick={() => onOpen(it)} className="gap-2">
                        <ImageIcon className="w-4 h-4" /> Visualizar
                      </Button>
                      <a href={it.url} download className="inline-block">
                        <Button size="sm" variant="ghost" className="gap-2">
                          <Download className="w-4 h-4" /> Baixar
                        </Button>
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}