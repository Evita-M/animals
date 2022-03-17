/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import Tilt from "react-parallax-tilt";
import React from "react";
import { SLink } from "../../styled-components/core/style";
import { SCard, SName, SImgWrapper, SImg, SFavoriteBtn } from "./style";

const Animal = (props) => {
  const { species, img, desc, href, id, addToFavorites, isFavorite } = props;
  return (
    <SCard>
      <SFavoriteBtn
        onClick={() => addToFavorites(id)}
        variant={isFavorite && "red"}
      >
        <svg viewBox="0 0 32 29.6">
          <path
            d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
          />
        </svg>
      </SFavoriteBtn>
      <SName>{species}</SName>
      <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
        <SImgWrapper>
          <SImg src={`/assets/${img}`} alt={img} width={200} height={200} />
        </SImgWrapper>
      </Tilt>
      <p css={{ margin: "15px 0" }}>{desc}</p>
      <SLink href={href} target="_blank" css={{ marginTop: "auto" }}>
        Read more
      </SLink>
    </SCard>
  );
};

export default Animal;
