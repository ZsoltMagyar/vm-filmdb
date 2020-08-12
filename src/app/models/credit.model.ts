interface Cast {
  character: string;
  name: string;
  id: number;
  profile_path: string;
}

export interface Credit {
  id: number;
  cast: Cast[];
}
