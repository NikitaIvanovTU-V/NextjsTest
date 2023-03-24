// The Card to be exported goes here
import Image from "next/image";
import { StyledDescription } from "../../sections/Hero/elements";
import {} from "./elements"
export const Card=({icon,title,description,...props})=>{
    return(
        <StyledCardContainer>
            <StyledIconContainer>
                <Image>
                    src={icon.src}
                    alt={icon.alt}
                    width={icon.width}
                    height={icon.height}
                </Image>
            </StyledIconContainer>
            <StyledTextContainer>
                <StyledTitle>{title}</StyledTitle>
                <StyledDescription>{description}</StyledDescription>
            </StyledTextContainer>
        </StyledCardContainer>
    );
}