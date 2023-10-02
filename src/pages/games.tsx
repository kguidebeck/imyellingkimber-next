import { Game, fetchGames } from '@/models/game.model';
import GameList from '@/components/game-list';
import Layout from '@/components/layout';

export interface GamesPageSchema {
  games: Array<Game>;
}

const GamesPage = ({ games }: GamesPageSchema) => {
  return (
    <Layout seo={null} title="Games">
      <GameList games={games} />
    </Layout>
  );
};

export async function getServerSideProps() {
  const [games /* sanityData */] = await Promise.all([
    await fetchGames(),
    // await getSanityData<HomeSchema>(homePageType, HOME_PROJECTION),
  ]);

  return {
    props: {
      games,
    },
  };
}

export default GamesPage;
