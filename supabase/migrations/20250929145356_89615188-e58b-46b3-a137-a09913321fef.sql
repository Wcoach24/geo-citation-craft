-- Create storage bucket for premium content
INSERT INTO storage.buckets (id, name, public) VALUES ('premium-content', 'premium-content', false);

-- Create RLS policies for premium content storage
CREATE POLICY "Users can view premium content they have access to" 
ON storage.objects 
FOR SELECT 
USING (
  bucket_id = 'premium-content' AND
  EXISTS (
    SELECT 1 FROM public.user_access 
    WHERE user_id = auth.uid() 
    AND module_id = (storage.foldername(name))[1]
  )
);

-- Create table for tracking downloads
CREATE TABLE public.content_downloads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  module_id TEXT NOT NULL,
  file_name TEXT NOT NULL,
  file_path TEXT NOT NULL,
  downloaded_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on content_downloads
ALTER TABLE public.content_downloads ENABLE ROW LEVEL SECURITY;

-- RLS policy for content downloads
CREATE POLICY "Users can view their own downloads" 
ON public.content_downloads 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own downloads" 
ON public.content_downloads 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Add trigger for updated_at on content_downloads
CREATE TRIGGER update_content_downloads_updated_at
BEFORE UPDATE ON public.content_downloads
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();