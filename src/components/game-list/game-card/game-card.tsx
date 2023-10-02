import { Game } from '@/models/game.model';
import * as Styled from './game-card.styled';
import Image from 'next/image';

const GameCard = ({
  title,
  votes,
  image,
  description,
  releaseDate,
  consoles,
  categories,
}: Game) => {
  return (
    <Styled.Card>
      <Styled.Image>
        <Image
          src={image.asset.url}
          alt={image.alt}
          // sizes="(max-width: 768px) 50vw, (max-width: 879px) 29vw, 27vw"
          fill
        />
      </Styled.Image>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Body>
        {description && <Styled.Description>{description}</Styled.Description>}
        <Styled.Footer>
          {releaseDate && (
            <Styled.Date>
              <span>Released: </span>
              {releaseDate}
            </Styled.Date>
          )}
          {consoles.length > 0 && (
            <div>
              {consoles.map((console, idx) => (
                <Styled.ConsoleTag key={idx}>{console}</Styled.ConsoleTag>
              ))}
            </div>
          )}
        </Styled.Footer>
      </Styled.Body>
    </Styled.Card>
  );
};

export default GameCard;
