import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

const Music = () => {
  return (
    <Container>
      <Image
        fluid
        style={{
          maxHeight: "50vh",
          maxWidth: "90vw",
          padding: "1vh",
          display: "block",
          margin: "auto",
        }}
        src="https://s3.ap-northeast-1.amazonaws.com/www.gonuma.com/images/jimmy-page-robert-plant-freddie-mercury.jpg"
      />
    </Container>
  );
};

export default Music;
