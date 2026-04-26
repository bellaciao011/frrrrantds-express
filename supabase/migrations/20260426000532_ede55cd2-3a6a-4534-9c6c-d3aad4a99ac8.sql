-- Tabela de pixels do TikTok
CREATE TABLE public.tracking_pixels (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  pixel_id TEXT NOT NULL,
  access_token TEXT NOT NULL,
  store_slug TEXT NOT NULL DEFAULT 'melissa',
  is_active BOOLEAN NOT NULL DEFAULT true,
  label TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_tracking_pixels_store_active ON public.tracking_pixels (store_slug, is_active);

ALTER TABLE public.tracking_pixels ENABLE ROW LEVEL SECURITY;

-- Leitura pública (apenas pixel_id é necessário no client; access_token NÃO deve ser exposto pelo client)
-- Mas como o client lê via select, vamos restringir: client só pega via uma view segura.
-- Alternativa: liberar select dos campos públicos via política para anon e nunca expor access_token no front.
-- Para simplificar: política de SELECT pública apenas em colunas seguras via view.

CREATE OR REPLACE VIEW public.tracking_pixels_public AS
SELECT id, pixel_id, store_slug, is_active, label
FROM public.tracking_pixels
WHERE is_active = true;

GRANT SELECT ON public.tracking_pixels_public TO anon, authenticated;

-- Sem políticas de SELECT/INSERT/UPDATE/DELETE para anon na tabela base — apenas service role acessa.

-- Trigger de updated_at
CREATE TRIGGER trg_tracking_pixels_updated_at
BEFORE UPDATE ON public.tracking_pixels
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Adicionar ttclid e store_slug em orders
ALTER TABLE public.orders
  ADD COLUMN IF NOT EXISTS ttclid TEXT,
  ADD COLUMN IF NOT EXISTS store_slug TEXT NOT NULL DEFAULT 'melissa',
  ADD COLUMN IF NOT EXISTS purchase_tracked_at TIMESTAMPTZ;

CREATE INDEX IF NOT EXISTS idx_orders_store_slug ON public.orders (store_slug);