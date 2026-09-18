export const colors = {
  primary: '#2563EB',
  secondary: '#64748B',
  success: '#16A34A',
  danger: '#DC2626',
  warning: '#F59E0B',
  background: '#F8FAFC',
  surface: '#FFFFFF',
  text: '#0F172A',
  textMuted: '#64748B',
  border: '#E2E8F0',
} as const;

export type ColorKey = keyof typeof colors;
