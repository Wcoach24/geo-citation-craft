-- Upload premium content files to storage bucket
-- Note: This migration sets up the file structure for premium content
-- The actual file uploads will be handled separately

-- Ensure the premium-content bucket exists and is properly configured
UPDATE storage.buckets 
SET public = false 
WHERE id = 'premium-content';

-- Create policies for premium content access
CREATE POLICY "Authenticated users can view premium files they have access to"
ON storage.objects FOR SELECT
USING (
  bucket_id = 'premium-content' 
  AND auth.uid() IS NOT NULL
  AND EXISTS (
    SELECT 1 FROM public.user_access 
    WHERE user_id = auth.uid() 
    AND module_id = split_part(name, '/', 1)
  )
);

CREATE POLICY "Service role can manage all premium files"
ON storage.objects FOR ALL
USING (bucket_id = 'premium-content')
WITH CHECK (bucket_id = 'premium-content');