import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 30px;
  font-weight: 400;
`;

export default function Home() {
  return (
    <div>
      <Title>Velkommen til Oya sin designguide</Title>
    </div>
  );
}
