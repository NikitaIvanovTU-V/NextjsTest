import Image from "next/image";

import {
  StyledTextContainer,
  StyledContainer,
  StyledTitle,
  StyledDescription,
  StyledMainContainer,
  StyledImageContainer,
  StyledCardsContainer,
  StyledCard
} from "./elements";

export const AgencySelection = ({background, title, description, image, cards, ...props }) => {
  return (
    <StyledContainer {...props}>
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </StyledTextContainer>
      <StyledMainContainer>
      <StyledImageContainer>
        <Image
          layout="responsive"
          src={image.src} 
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
      </StyledImageContainer>
      <StyledCardsContainer>
        <StyledCard
          icon={cards.one}
          title={cards.one.title}
          description={cards.one.description}
        />
        <StyledCard
          icon={cards.two}
          title={cards.two.title}
          description={cards.two.description}
        />
        <StyledCard
          icon={cards.three}
          title={cards.three.title}
          description={cards.three.description}
        />
      </StyledCardsContainer>
      </StyledMainContainer>
    </StyledContainer>
  );
};
