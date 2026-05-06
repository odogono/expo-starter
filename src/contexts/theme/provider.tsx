import { ReactNode } from 'react';

import { INFINITY } from '@helpers/time';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ThemeContext } from './context';
import { Theme } from './types';

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const queryClient = useQueryClient();

  const { data: theme } = useQuery({
    gcTime: INFINITY,
    queryFn: () => 'light' as Theme,
    queryKey: ['theme'],
    staleTime: INFINITY
  });
  const { mutate: setTheme } = useMutation({
    mutationFn: async (theme: Theme) => {
      queryClient.setQueryData(['theme'], theme);
      return theme;
    }
  });

  const { mutate: toggleTheme } = useMutation({
    mutationFn: async () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      queryClient.setQueryData(['theme'], newTheme);
      return newTheme;
    }
  });

  return (
    <ThemeContext.Provider value={{ theme: theme || 'light', toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
