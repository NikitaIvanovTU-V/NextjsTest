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

export const AgencySelection = ({title, description,image,cards, ...props }) => {
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
          title={selectors.one.title}
          description={selectors.one.description}
        />
        <StyledCard
          icon={cards.two}
          title={selectors.two.title}
          description={selectors.two.description}
        />
        <StyledCard
          icon={cards.three}
          title={selectors.three.title}
          description={selectors.three.description}
        />
      </StyledCardsContainer>
      </StyledMainContainer>
    </StyledContainer>
  );
};
