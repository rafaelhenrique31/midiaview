export const QUERY_CONFIG_REFETCH_ONLY_WINDOW = {
  refetchOnWindowFocus: true,
  refetchOnReconnect: false,
  refetchOnMount: false,
};

const QUERY_CONFIG_ONCE = {
  refetchOnMount: false,
  refetchOnWindowFocus: false,
  refetchIntervalInBackground: false,
  retry: false,
};

const QUERY_CONFIG_DEFAULT_POLING = (timeInMs: number) => {
  return {
    ...QUERY_CONFIG_ONCE,
    refetchIntervalInBackground: true,
    refetchInterval: timeInMs,
  };
};

export const POLING_TIME = {
  ONE_MINUTE: 60 * 1000,
};

export const QUERY_CONFIG = {
  DEFAULT_POLING: QUERY_CONFIG_DEFAULT_POLING,
  ONLY_ONCE: QUERY_CONFIG_ONCE,
} as const;

export const VISUALIZATION_TYPES = {
  CLIQUE_RETIRE: 0,
  CD: 1,
  GERAL: 2,
} as const;
