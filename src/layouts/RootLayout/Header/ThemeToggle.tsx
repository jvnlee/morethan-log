import styled from "@emotion/styled"
import React from "react"
import { Emoji } from "src/components/Emoji"
import useScheme from "src/hooks/useScheme"

type Props = {}

const ThemeToggle: React.FC<Props> = () => {
  const [scheme, setScheme] = useScheme()

  const handleClick = () => {
    setScheme(scheme === "light" ? "dark" : "light")
  }

  return (
    <StyledWrapper onClick={handleClick}>
      {scheme === "light" ? "Light Mode" : "Dark Mode"}
    </StyledWrapper>
  )
}

export default ThemeToggle

const StyledWrapper = styled.div`
  cursor: pointer;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray11};
`
