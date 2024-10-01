import styled, { keyframes } from "styled-components";

const advertiseAnim = keyframes<{ length: number; id: number }>`
  0% {
    transform: translateX(0);
  }
  
  to {
    transform: translateX(calc(-100% - 26px));
  }
`;

const Root = styled.div`
  height: 50px;
  background-color: #ec6e55;
  width: 100%;
  overflow: hidden;
  display: grid;
  place-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 26px;
`;

const Advertise = styled.div<{ $length: number; $id: number }>`
  display: flex;
  flex: 0 0 auto;
  gap: 26px;
  animation: ${advertiseAnim} 10s linear infinite;

  .item {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    gap: 10px;
  }

  svg {
    stroke: white;
  }

  .text {
    color: white;
    font-weight: 500;
    font-size: 14px;
  }
`;

export { Root, Wrapper, Advertise };
