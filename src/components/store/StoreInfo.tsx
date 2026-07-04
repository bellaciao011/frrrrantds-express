import logoDreame from "@/assets/logo-dreame.png";

export function StoreInfo() {
  return (
    <section className="mx-auto max-w-5xl px-3 pt-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border bg-white overflow-hidden">
            <img
              src={logoDreame}
              alt="Dreame"
              className="h-14 w-14 object-contain"
            />
          </div>
          <div>
            <h1 className="text-lg font-bold leading-tight">Dreame</h1>
            <p className="text-xs text-muted-foreground">99.176 vendido(s)</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <button className="rounded-full bg-primary px-5 py-1.5 text-sm font-semibold text-primary-foreground">
            Seguir
          </button>
          <button className="rounded-full border px-5 py-1.5 text-sm font-semibold">
            Mensagem
          </button>
        </div>
      </div>
    </section>
  );
}
