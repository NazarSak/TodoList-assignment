import styled from "styled-components";

export const FilterCount = styled.div`
  margin-bottom: 10px;
`;

export const StyledButton = styled.button`
  position: relative;
`;

export const CountBadge = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #007bff;
  color: #fff;
  font-size: 12px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: ${({ count }) => (count ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;
