import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CheckoutPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the inline checkout on /curso
    navigate('/curso#comprar', { replace: true });
  }, [navigate]);

  return null;
}