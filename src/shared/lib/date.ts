import { format } from 'date-fns';
import { id } from 'date-fns/locale';

export const formatDate = (date: Date | string): string =>
  format(new Date(date), 'dd MMM yyyy', { locale: id });

export const formatDateTime = (date: Date | string): string =>
  format(new Date(date), 'dd MMM yyyy HH:mm', { locale: id });
