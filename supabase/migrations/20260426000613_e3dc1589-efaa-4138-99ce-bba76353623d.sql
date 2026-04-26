-- Remove a policy que expunha o access_token
DROP POLICY IF EXISTS "Public can read pixel basics via view" ON public.tracking_pixels;

-- Recria a view com SECURITY INVOKER OFF (definer) para que ela bypass o RLS
-- (é seguro porque a view só expõe colunas não-sensíveis e filtra por is_active)
DROP VIEW IF EXISTS public.tracking_pixels_public;

CREATE VIEW public.tracking_pixels_public
WITH (security_invoker = off) AS
SELECT id, pixel_id, store_slug, is_active, label
FROM public.tracking_pixels
WHERE is_active = true;

GRANT SELECT ON public.tracking_pixels_public TO anon, authenticated;

-- Tabela base permanece sem policies → ninguém com chave anon consegue ler access_token.
-- Apenas service role (usado nas edge functions) acessa a tabela diretamente.