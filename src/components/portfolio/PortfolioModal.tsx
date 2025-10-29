import { X } from "lucide-react";

type Item = {
  id: string;
  title: string;
  type: "photo" | "document";
  size?: string;
  url: string;
};

export default function PortfolioModal({ item, onClose }: { item: Item | null; onClose: () => void }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="bg-card rounded-lg max-w-4xl w-full overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b">
          <h4 className="font-semibold">{item.title}</h4>
          <button onClick={onClose} className="p-2 rounded hover:bg-muted">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4">
          {item.type === "photo" ? (
            <img src={item.url} alt={item.title} className="w-full h-auto rounded" />
          ) : (
            <iframe
              src={item.url}
              className="w-full h-[70vh] rounded"
              title={item.title}
            />
          )}
        </div>

        <div className="flex items-center justify-end gap-2 p-4 border-t">
          <a href={item.url} download>
            <button className="px-4 py-2 bg-primary text-white rounded">Baixar</button>
          </a>
          <button onClick={onClose} className="px-4 py-2 bg-muted rounded">Fechar</button>
        </div>
      </div>
    </div>
  );
}