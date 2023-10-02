import { client } from '@/utils/sanity-client';
import { Sanity } from './sanity.model';
import { IMAGE_PROJECTION } from './media.model';

export const gameType = "game";

export interface GameCateogry {
  title: string;
  slug: string;
}

export interface Game {
  _id: string;
  title: string;
  votes: number;
  image: Sanity.Image;
  description?: string;
  consoles: Array<Sanity.Console>;
  releaseDate?: number;
  categories?: Array<GameCateogry>;
}

export const GAME_PROJECTION = `{
  _id,
  title,
  votes,
  ${IMAGE_PROJECTION('image')},
  description,
  consoles,
  releaseDate,
  categories[]-> {
    title,
    "slug": slug.current
  }
}`;

export const fetchGames = async () => {
  return await client.fetch(`*[_type == $gameType] ${GAME_PROJECTION}`, {
    gameType
  });
}
