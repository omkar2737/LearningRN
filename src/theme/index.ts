// theme.ts
export type Theme = {
  background: string;
  text: string;
  primary: string;
  secondary: string;
};

export const lightTheme: Theme = {
  background: '#ffffff',
  text: '#000000',
  primary: '#3498db',
  secondary: '#2ecc71',
};

export const darkTheme: Theme = {
  background: '#000000',
  text: '#ffffff',
  primary: '#9b59b6',
  secondary: '#e74c3c',
};
