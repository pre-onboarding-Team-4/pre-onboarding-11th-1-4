import { useContext } from 'react';
import { ToastContext } from '../ToastContext';

export default function useToastContext() {
  const toastContext = useContext(ToastContext);

  if (!toastContext) throw new Error('Toast provider를 추가해주세요');

  return toastContext;
}
