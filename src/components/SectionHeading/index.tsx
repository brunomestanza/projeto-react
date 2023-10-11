import { Title } from "./styles"

interface SectionHeadingProps {
  title: string
}

export function SectionHeading(props: SectionHeadingProps) {
  return (
    <Title>{props.title}</Title>
  )
}
