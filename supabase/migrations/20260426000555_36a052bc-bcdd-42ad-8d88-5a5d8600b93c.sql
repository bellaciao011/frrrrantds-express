DROP VIEW IF EXISTS public.tracking_pixels_public;

CREATE VIEW public.tracking_pixels_public
WITH (security_invoker = on) AS
SELECT id, pixel_id, store_slug, is_active, label
FROM public.tracking_pixels
WHERE is_active = true;

GRANT SELECT ON public.tracking_pixels_public TO anon, authenticated;

-- Política de SELECT pública na tabela base APENAS para campos seguros via view
-- (a view com security_invoker exige policy de SELECT na base table para usuários anon)
CREATE POLICY "Public can read pixel basics via view"
ON public.tracking_pixels
FOR SELECT
TO anon, authenticated
USING (is_active = true);