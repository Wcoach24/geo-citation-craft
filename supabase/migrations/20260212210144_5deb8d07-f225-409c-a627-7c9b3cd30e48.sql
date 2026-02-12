
-- Add validation check constraints for text fields that should be enums

-- purchases.product_type
ALTER TABLE public.purchases
  ADD CONSTRAINT chk_purchases_product_type
  CHECK (product_type IN ('module', 'complete'));

-- purchases.status
ALTER TABLE public.purchases
  ADD CONSTRAINT chk_purchases_status
  CHECK (status IN ('pending', 'completed', 'failed', 'refunded'));

-- purchases.module_id (nullable, but when set must be valid)
ALTER TABLE public.purchases
  ADD CONSTRAINT chk_purchases_module_id
  CHECK (module_id IS NULL OR module_id IN ('f1', 'f2', 'f3', 'f4', 'f5', 'f6'));

-- user_access.access_type
ALTER TABLE public.user_access
  ADD CONSTRAINT chk_user_access_access_type
  CHECK (access_type IN ('individual', 'complete'));

-- user_access.module_id
ALTER TABLE public.user_access
  ADD CONSTRAINT chk_user_access_module_id
  CHECK (module_id IN ('f1', 'f2', 'f3', 'f4', 'f5', 'f6'));

-- guest_access.product_type
ALTER TABLE public.guest_access
  ADD CONSTRAINT chk_guest_access_product_type
  CHECK (product_type IN ('module', 'complete'));

-- guest_access.module_id (nullable, but when set must be valid)
ALTER TABLE public.guest_access
  ADD CONSTRAINT chk_guest_access_module_id
  CHECK (module_id IS NULL OR module_id IN ('f1', 'f2', 'f3', 'f4', 'f5', 'f6'));

-- content_downloads.module_id
ALTER TABLE public.content_downloads
  ADD CONSTRAINT chk_content_downloads_module_id
  CHECK (module_id IN ('f1', 'f2', 'f3', 'f4', 'f5', 'f6'));
