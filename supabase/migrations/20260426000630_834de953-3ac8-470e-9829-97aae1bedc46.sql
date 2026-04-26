-- Remove a view problemática
DROP VIEW IF EXISTS public.tracking_pixels_public;

-- Função SECURITY DEFINER que retorna apenas colunas seguras
CREATE OR REPLACE FUNCTION public.get_active_pixels(_store_slug TEXT DEFAULT 'melissa')
RETURNS TABLE (pixel_id TEXT, store_slug TEXT)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT pixel_id, store_slug
  FROM public.tracking_pixels
  WHERE is_active = true
    AND store_slug = _store_slug;
$$;

GRANT EXECUTE ON FUNCTION public.get_active_pixels(TEXT) TO anon, authenticated;

-- Policy de SELECT só para service_role para suprimir aviso "RLS enabled no policy"
-- (anon/authenticated continuam SEM acesso direto — só via função acima)
CREATE POLICY "Service role full access"
ON public.tracking_pixels
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);