import { Game } from '@/models/game.model';
import Container from '@/components/container';
import GameCard from './game-card';
import * as Styled from './game-list.styled';

const GameList = ({ games }: { games: Array<Game> }) => {
  return (
    <Styled.Section>
      <Container>
        <h1>Game List</h1>
        {games.length > 0 && (
          <Styled.Grid>
            {games.map((game) => (
              <GameCard key={game._id} {...game} />
            ))}
          </Styled.Grid>
        )}
      </Container>
    </Styled.Section>
  );
};

export default GameList;
