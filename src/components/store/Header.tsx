import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Search, ShoppingCart, Share2 } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/cart";

export function Header() {
  const { count } = useCart();
  const navigate = useNavigate();
  const [q, setQ] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = q.trim();
    if (trimmed) navigate(`/?q=${encodeURIComponent(trimmed)}`);
  };

  return (
    <header className="sticky top-0 z-40 border-b bg-background">
      <div className="mx-auto flex h-14 max-w-5xl items-center gap-2 px-3">
        <button
          onClick={() => window.history.back()}
          className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-muted"
          aria-label="Voltar"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <form onSubmit={submit} className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Pesquisar"
              className="h-9 w-full rounded-full border bg-muted pl-9 pr-3 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </form>
        <button
          className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-muted"
          aria-label="Compartilhar"
        >
          <Share2 className="h-5 w-5" />
        </button>
        <Link
          to="/carrinho"
          className="relative flex h-9 w-9 items-center justify-center rounded-full hover:bg-muted"
          aria-label="Carrinho"
        >
          <ShoppingCart className="h-5 w-5" />
          <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-xs font-bold text-primary-foreground">
            {count}
          </span>
        </Link>
      </div>
    </header>
  );
}
