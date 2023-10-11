import { Container, FlexContainer, LocationContainer, Tag, TagStyleProps } from "./styles";

interface ExperienceProps {
  title: string
  workload: string
  enterprise: string
  local: string
  date: string
  tagColors: TagStyleProps
}

export function Experience(props: ExperienceProps) {
  return (
    <Container>
      <FlexContainer>
        <p>{props.title}</p>
        <Tag
          color={props.tagColors.color}
          backgroundColor={props.tagColors.backgroundColor}
        >
          {props.workload}
        </Tag>
      </FlexContainer>
      <div>
        <FlexContainer>
          <LocationContainer>
            <span>{props.enterprise}</span>
            <span>{props.local}</span>
          </LocationContainer>
          <span>{props.date}</span>
        </FlexContainer>
      </div>
    </Container>
  )
}