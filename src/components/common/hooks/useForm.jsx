import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: '',
    isActive: false,
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    localStorage.getItem('token') && navigate('/todo');
  }, [navigate]);

  useEffect(() => {
    const pattern = /^[^@]+@[^@]+$/;
    if (pattern.test(form.email) && form.password.length >= 8) {
      if (!form.isActive) {
        setForm(prev => ({ ...prev, isActive: true }));
      }
    } else {
      if (form.isActive) {
        setForm(prev => ({ ...prev, isActive: false }));
      }
    }
  }, [form]);

  return [form, handleChange];
}
