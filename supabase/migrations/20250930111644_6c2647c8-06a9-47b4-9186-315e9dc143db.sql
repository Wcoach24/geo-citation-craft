-- Allow guest purchases by making user_id nullable in purchases table
ALTER TABLE public.purchases ALTER COLUMN user_id DROP NOT NULL;