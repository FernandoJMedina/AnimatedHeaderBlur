export interface Game {
  id: string;
  cover: string;
  title: string;
  description: string;
  editor: string;
  screenshots: string[];
}

export interface Games {
  games: Game[];
}

export interface Friend {
  id: string;
  name: string;
  currentGame: string;
  picture: string;
}

export interface Friends {
  friends: Friend[];
}
