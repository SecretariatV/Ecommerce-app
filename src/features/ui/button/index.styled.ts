import styled from "styled-components";

const Root = styled.button<{ $type: boolean; $size?: string }>`
  display: flex;
  svg {
    stroke: ${({ $type }) => ($type ? "white" : "#ec6e55")};
    transition: all ease-in-out 0.3s;
  }

  span {
    color: ${({ $type }) => ($type ? "white" : "#ec6e55")};
    transition: all ease-in-out 0.3s;
    font-size: ${({ $size }) => ($size === "md" ? "18px" : "12px")};
    font-weight: 700;
  }

  &:hover {
    svg {
      stroke: ${({ $type }) => $type && "#ec6e55"};
    }

    span {
      color: ${({ $type }) => $type && "#ec6e55"};
    }
  }
`;

export { Root };
