import styled from "styled-components";

export const FilterCount = styled.div`
  margin-bottom: 10px;
  p {
    margin: 0;
    font-size: 20px;
    font-weight: 700;
    line-height: 14px;
    color: white;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  gap: 20px;
`;

export const StyledButton = styled.button`
  position: relative;
  width: 105px;
  height: 30px;
  font-family: Arial, sans-serif;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 700;
  line-height: 14px;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

export const CountBadge = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: green;
  color: #fff;
  font-size: 12px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  display: ${({ count }) => (count ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;
