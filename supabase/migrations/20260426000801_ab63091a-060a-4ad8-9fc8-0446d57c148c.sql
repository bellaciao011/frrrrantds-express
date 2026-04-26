-- Policies para gestão pública (admin sem login conforme solicitado pelo usuário)
CREATE POLICY "Public can insert pixels"
ON public.tracking_pixels
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Public can update pixels"
ON public.tracking_pixels
FOR UPDATE
TO anon, authenticated
USING (true)
WITH CHECK (true);

CREATE POLICY "Public can delete pixels"
ON public.tracking_pixels
FOR DELETE
TO anon, authenticated
USING (true);

CREATE POLICY "Public can read pixels for admin"
ON public.tracking_pixels
FOR SELECT
TO anon, authenticated
USING (true);