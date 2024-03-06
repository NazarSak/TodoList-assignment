import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0;
  li {
    display: flex;
    align-items: center;
    width: 400px;
    justify-content: space-between;
    border: 2px solid white;
    border-radius: 8px;
    padding: 10px 20px;
  }
  span {
    font-family: Arial, sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 14px;
    color: white;
  }
`;

export const InfoMessage = styled.p`
  font-family: Arial, sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 14px;
  color: white;
`;
