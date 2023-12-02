export type RoutesPath = {
  home: string;
  games: {
    root: string;
    normal: string;
  };
};

export const routePath: RoutesPath = {
  home: "/home",
  games: {
    root: "/games",
    normal: "/games/normal",
  },
};
