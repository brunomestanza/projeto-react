import styled from "styled-components";

export interface TagStyleProps {
  color: string
  backgroundColor: string
}

export const Container = styled.div`
  border: 1px solid white;
  border-radius: 6px;
  padding: 8px;
`

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Tag = styled.span<TagStyleProps>`
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  padding: 4px 12px;
  border-radius: 100px;
`

export const LocationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 25%;
`
