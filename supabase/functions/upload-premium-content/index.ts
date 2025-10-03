import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Initialize Supabase client with service role key for admin access
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Get the origin from request headers to build URLs
    const origin = req.headers.get('origin') || 'https://hadnvvkflpjucqkwewto.supabase.co';
    
    // Define the files to upload with their metadata
    const filesToUpload = [
      {
        moduleId: 'f1',
        fileName: 'guia-completa-modulo-f1.pdf',
        sourceUrl: `${origin}/premium-content/f1/guia-completa-modulo-f1.pdf`
      },
      {
        moduleId: 'f2',
        fileName: 'guia-completa-modulo-f2.pdf',
        sourceUrl: `${origin}/premium-content/f2/guia-completa-modulo-f2.pdf`
      },
      {
        moduleId: 'f3',
        fileName: 'guia-completa-modulo-f3.pdf',
        sourceUrl: `${origin}/premium-content/f3/guia-completa-modulo-f3.pdf`
      },
      {
        moduleId: 'f4',
        fileName: 'guia-completa-modulo-f4.pdf',
        sourceUrl: `${origin}/premium-content/f4/guia-completa-modulo-f4.pdf`
      },
      {
        moduleId: 'f5',
        fileName: 'guia-completa-modulo-f5.pdf',
        sourceUrl: `${origin}/premium-content/f5/guia-completa-modulo-f5.pdf`
      }
    ];

    const uploadResults = [];

    for (const file of filesToUpload) {
      try {
        // Download the file from the public URL
        console.log(`Downloading ${file.fileName} from ${file.sourceUrl}`);
        const response = await fetch(file.sourceUrl);
        
        if (!response.ok) {
          throw new Error(`Failed to download file: ${response.statusText}`);
        }
        
        const fileData = await response.arrayBuffer();
        
        // Upload to Supabase Storage
        const { data, error } = await supabaseClient.storage
          .from('premium-content')
          .upload(`${file.moduleId}/${file.fileName}`, fileData, {
            contentType: 'application/pdf',
            upsert: true
          });

        if (error) {
          console.error(`Error uploading ${file.fileName}:`, error);
          uploadResults.push({
            file: file.fileName,
            success: false,
            error: error.message
          });
        } else {
          console.log(`Successfully uploaded ${file.fileName}`);
          uploadResults.push({
            file: file.fileName,
            success: true,
            path: data.path
          });
        }
      } catch (fileError) {
        console.error(`Error processing ${file.fileName}:`, fileError);
        uploadResults.push({
          file: file.fileName,
          success: false,
          error: fileError instanceof Error ? fileError.message : 'Unknown error'
        });
      }
    }

    return new Response(
      JSON.stringify({
        message: 'Upload process completed',
        results: uploadResults
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );

  } catch (error) {
    console.error('Error in upload function:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});