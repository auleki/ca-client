import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { styleColors, fonts } from "../utils/constants"
// import TickIcon from "../assets/images/tick.png"
// import { Link } from 'react-router-dom';

// @import './variables';

const FadeIn = keyframes`
  0% {
    box-shadow: 0 0 .5rem .4rem rgba(0, 0, 0, .3);
  }

  100% {
      box-shadow: none;
  }
`

const HoverObj = keyframes`
0% {
  transform: translateY(5px);
} 

50% {
  transform: translateY(-5px)
}

100% {
  transform: translateY(5px);
}
`

export const TextButton = styled.button(
  ({ color }) => css`
    background: ${styleColors.orange};
    /* background: transparent; */
    width: 100%;
    padding: 1em;
    display: flex;
    gap: 0.6em;
    /* margin-top: 1em; */
    align-items: center;
    justify-content: center;
    transition: 200ms ease-in;

    .text {
      font-size: 1.2em;
      color: orange;
    }

    .icon {
      font-size: 1.6em;
      /* transform: scale(2); */
      /* margin: .5em 1em; */
      /* top: 1em; */
      color: ${styleColors.white};
    }

    &:hover {
      cursor: pointer;
      .text,
      .icon {
        color: ${styleColors.red};
      }
    }

    @media (min-width: 315px) and (max-width: 626px) {
      width: 10em;
      border-radius: 0;

      .icon {
        display: none;
      }
    }
  `
)

export const SButton = styled.button(
  ({ size, transparent }) => css`
    background: ${transparent ? styleColors.black : styleColors.orange};
    color: ${styleColors.white};
    display: flex;
    padding: 1em;
    align-items: center;
    border: 0;
    transition: background 200ms ease-in;

    border-radius: 2px;
    transition: 10ms ease-in;

    .text {
      margin: 0 0.5em;
      font-size: 1.1em;
    }

    .icon {
      margin: 0 0.5em;
      transform: scale(1.4);
      height: 1.5em;
      width: 1.5em;
      /* padding: .5em; */
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;

      background: ${styleColors.orange};
      svg {
        font-size: 1em;
      }
    }

    &:hover {
      cursor: pointer;
      background: ${styleColors.white};
      /* transform: translateY(.3em); */
      /* color: ${styleColors.black}; */

      .text {
        color: ${styleColors.black};
      }
      
      .icon {
        background: ${styleColors.orange};
        transform: rotateZ('90deg');
      }
    }

    &:active {
      background: ${styleColors.orange};
      
      .text {
        color: ${styleColors.white};        
      }
    }

    &:disabled {
      background-color: #333;
      color: #ddd;
      cursor: not-allowed;
      .icon {
        background: ${styleColors.red};
        /* display: none; */
        transform: rotateZ('90deg');
      }
  }
  `
)

export const StyledButton = styled.button`
  padding: 1rem 1.5rem;
  font-size: 1.2em;
  font-family: Helvetica;
  border-radius: 0.2rem;
  transition: background-color 150ms ease-in;
  border: none;
  margin: 0.5rem 0;
  &:hover {
    cursor: pointer;
    /* background-color: #43a047; */
    background-color: #000;
    color: #fff;
  }

  &:active,
  &:focus {
    background: ${styleColors.purple};
    outline: 0;
  }
  ${({ primary }) =>
    primary &&
    css`
        color: #fff;
        /* background-color: ${({ bgColor }) => bgColor}; */
        background-color: #F36B2B;
        transition: box-shadow 250ms ease-out, background-color 200ms ease-in;

        &:hover {
          box-shadow: none;
          animation: 500ms ${FadeIn} ease-in infinite;
          ${'' /* background-color: #333; */}
          /* background-color: #fff; */
          background-color: #43a047;

          color: #fff;
          // use the shadow to add a pulse animation.
          /* box-shadow: 0 0 .5rem .4rem rgba(0, 0, 0, .3); */
        }
      `};
`

export const Title = styled.h1(
  ({ size, center, uppercase, bold, color }) => css`
    padding: 0;
    text-transform: ${uppercase ? 'uppercase' : 'none'};
    color: ${color || styleColors.white};
    font-size: ${size || 2.2}em;
    font-weight: ${bold ? 800 : 400};
    text-align: ${center ? 'center' : 'left'};
    letter-spacing: 2px;
  `
)

export const SubTitle = styled.h2(
  ({ center, fontColor, bold, size, uppercase, textFont }) => css`
    color: ${fontColor || '#fff'};
    font-family: ${textFont || 'inherit'};
    font-weight: ${bold ? 800 : 400};
    font-size: ${size || 1}em;
    text-transform: ${uppercase ? 'uppercase' : 'none'};
    text-align: ${center ? 'center' : 'left'};

    .order_number {
      background-color: #f36bee;
      padding: 0.3em;
      font-size: 0.8em;
      border-radius: 5px;
      color: #fff;
    }

    @media (max-width: 473px) {
      .order_number {
        margin: 1em 0;
        background-color: #f36bee;
      }
    }
  `
)

export const Paragraph = styled.p(
  ({ size, fontColor }) => css`
    color: ${fontColor || '#ddd'};
    font-size: ${size || 1.1}em;
    margin: 0.6em 0;
    font-weight: 400;

    span.special {
      font-weight: 800;
    }

    .order_number {
      background-color: #f36bee;
      padding: 0.3em;
      font-size: 0.8em;
      border-radius: 5px;
      color: #fff;
    }

    @media (max-width: 473px) {
      .order_number {
        margin: 1em 0;
        background-color: #f36bee;
      }
    }
  `
)

export const Container = styled.div(
  ({ size }) => css`
    /* height: 100vh; */
    /* overflow-y: scroll; */
    /* padding: 0 0 1em 0; */

    .header {
      /* height: 25vh; */
      height: 12rem;
      width: 100%;
      display: flex;
      justify-content: center;
      background-color: #242424;
      background-image: url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm33.414-6l5.95-5.95L45.95.636 40 6.586 34.05.636 32.636 2.05 38.586 8l-5.95 5.95 1.414 1.414L40 9.414l5.95 5.95 1.414-1.414L41.414 8zM40 48c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zM9.414 40l5.95-5.95-1.414-1.414L8 38.586l-5.95-5.95L.636 34.05 6.586 40l-5.95 5.95 1.414 1.414L8 41.414l5.95 5.95 1.414-1.414L9.414 40z' fill='%23f36b2b' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
      background-size: cover;
    }

    .aboutUs {
      padding: 3em 1em;
      font-family: 'Signika';
      background-color: #030304;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23f09c14' fill-opacity='0.06'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
      h2 {
        font-family: ${fonts.primary};
        color: ${styleColors.gray};
        letter-spacing: 2px;
        display: inline-flex;
        border-bottom: 0.1em solid ${styleColors.orange};
        border-radius: 5%;
        transition: border-radius 400ms ease-in;

        &:hover {
          border-radius: 0;
        }
      }

      .titleIcon {
        height: auto;
        width: 3em;
        margin-right: 0.5em;
      }

      .content {
        /* margin-top: 1em; */
      }

      .content,
      .more {
        /* margin: 3em 0 2 em; */
      }

      .more {
        margin-top: 3em;
        h2 {
          /* margin-bottom: 0.5em; */
        }
      }

      .title {
        display: flex;
        align-items: center;
        h2 {
          text-align: center;
        }
      }

      p {
        margin: 1em 0 1em;
        line-height: 25px;
        font-family: ${fonts.main};
        color: ${styleColors.white};
        font-weight: 200;
        /* text-align: left; */
        font-size: 1.2em;
      }
    }

    @media (min-width: 501px) and (max-width: 700px) {
      section {
        padding: 0;
      }
    }

    @media (min-width: 320px) and (max-width: 540px) {
      .title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 0.9em;

        .titleIcon {
          margin-bottom: 1em;
        }
      }

      p {
        text-align: center;
      }
    }

    @media (min-width: 320px) and (max-width: 356px) {
      .title {
        font-size: 0.7em;
      }
    }
  `
)

export const SpanText = styled.span`
  color: #fff;
  font-size: 1em;
`

export const ParentContainer = styled.div`
  height: 100vh;
`

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #bdbdbd;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ImageSliderContainer = styled.div(
  ({ minimized, color }) => css`
    display: flex;
    /* max-width: 300px; */
    /* background-color: ${styleColors.white}; */
    max-width: 300px;
    max-height: 500px;

    /* .productImage {
      height: auto;
      width: 400px;
    } */

    .swiper-slide {
      /* background: ${styleColors.green}; */
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 0 1em;
      img {
        /* border-top-right-radius: .3em;
        border-top-left-radius: .3em; */
        /* padding: 0 1em; */
        border-radius: .3em;
        object-fit: cover;
        object-position: top;
        height: 100%;
        width: 100%;
        /* border: 1px solid ${styleColors.black}; */
      }
    }

    .swiper-pagination-bullet-active {
      background-color: ${styleColors.orange};
    }

    .swiper-container-horizontal {
      padding-bottom: 2em;
    }

    .swiper-container-horizontal > .swiper-pagination-bullets {
      /* transform: rotateZ(90deg); */
       bottom: 0.2em;
      z-index: 100;
      position: absolute;
    }
  `
)

export const StyleClothSection = styled.div(
  () => css`
    display: flex;
    // grid-template-columns: repeat(3, 3fr);
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    margin: 0 3rem;
    place-items: center stretch;
    gap: .5rem;
    row-gap: 6rem;
    

    @media (max-width: 960px) {
      display: flex;
      align-items: center;
      width: 100%;
      margin-left: 13rem;
      flex-direction: column;
      justify-content: center;
    }

    @media (max-width: 686px) {
      margin: 0 10rem 0;
    }
    
    

  `
)


export const StyleClothCard = styled.div(
  ({ compact, inStock }) => css`
    /* background: ${styleColors.lightBlack}; */
    background: ${styleColors.cardBg};
    /* background: transparent; */
    color: ${styleColors.white};
    width: 400px;
    position: relative;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 2em 1em 0; 
    border: .2em solid transparent;
    border-bottom: 0.2em solid transparent;
    transition: border-bottom 300ms ease-in, 
    background 100ms ease-in;
    border-radius: 0.3em;

    .out_of_stock_img {
      height: auto; 
      width: 8rem;
      position: absolute;
      top: 1rem;
      right: 1rem;
    }

    .product_img {
      height: auto;
      text-align: center;
      width: 200px;
      transition: transform 200ms ease-in;
      margin: 0 auto;
      border-radius: 50%;
      padding: 2rem;
      background: ${styleColors.lightBlack};
      // outline: 2px solid orange;
    }
    
    /* .info_one,
    .info_two,
    .select_size {
      background: ${styleColors.white};
    } */
    
    .info_one,
    .info_two {
      display: flex;
      padding: 1em 1em 2em;
      align-items: center;
      justify-content: space-between;
    }

    .info_two {
      /* margin-top: 1em; */
    }

    .select_size {
      
      h4 {
        font-weight: 400;
      }

      p {
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }

      .checkbox {
        opacity: 0;
        transition: all 300ms ease-in;
      }

      .checkbox, label {
        --webkit-tap-highlight-color: transparent;
      }

      .checkbox + label {
        position: relative;
        padding-left: 2em;
        line-height: 1.5em;
        cursor: pointer;
      }

      .checkbox + label::before {
        content: "";
        left: 0;
        top: 0;
        position: absolute;
        width: 1em;
        height: 1em;
        outline: .15em solid ${styleColors.white};
        background: transparent;
      }
      
      .checkbox:checked + label::after {
        content: "";
        left: 0;
        top: 0;
        position: absolute;
        width: 1.2em;
        height: 1.2em;
        outline: .15em solid transparent;
        background: ${styleColors.orange};
      }
      .checkbox_container {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1em 0;
      }
    }

    .size_select {
      font-size: 12px;
      padding: 1em;

      h4 {
        margin: 0 0 1.5em;
      }

      input[type='radio'] {
        display: none;
      }

      .radio_container {
        display: flex;
        align-items: center;
        justify-content: center;
        /* background: ${styleColors.orange}; */
      }

      label {
        position: relative;
        cursor: pointer;
        font-weight: 400;
        padding-right: 32px;
      }

      label:nth-last-child(1) {
        padding-right: 0;
      }

      label::before {
        content: '';
        border: 2px solid #fff;
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        margin: -8px 20px -4px 0;
      }

      label::after {
        content: '';
        display: inline-block;
        position: absolute;
        border-radius: 50%;
        background: rgba(26, 26, 26, 0);
        width: 7px;
        height: 7px;
        left: 3.5px;
        top: 12.5px;
        margin: -8px 20px -8px 0;
      }

      input[type='radio']:checked + label::after {
        background: rgba(255, 255, 255, 1);
      }
    }

    .image {
      .outOfStock {
        position: absolute;
        top: 30%;
        left: 50%;
        height: 5em;
        width: 5em;
      }
      img {
        height: auto;
        width: 200px;
      }
    }

    .cloth_name {
      /* font-family: ${fonts.workSans}; */
    }

    .category, .cloth_name {
      letter-spacing: .05em;
    }
    
    .price {
      font-size: 1.2em;
      color: ${styleColors.orange};
      font-family: ${fonts.bitter}, cursive;
      /* font-weight: 600; */
    }

    &:hover {
      background: transparent;
      color: ${styleColors.white};
      /* border: 0.2em solid ${styleColors.orange}; */
      border-bottom: 0.2em solid
        ${inStock ? styleColors.orange : styleColors.red};
      .product_img {
        box-shadow: 4px 2px 15px ${styleColors.cardBg};
        transform: translateY(-.5rem);
      }
    }
  `
)

export const FButton = styled.button`
  padding: 1rem 1.5rem;
  font-size: 1.2em;
  display: flex;
  align-items: center;
  font-family: Helvetica;
  background-color: #fff;
  border-radius: 0.2rem;
  transition: background-color 150ms ease-in;
  border: none;
  margin: 0.5rem 0;

  ${({ uppercase }) =>
    uppercase &&
    css`
      text-transform: uppercase;
    `} ${({ margin, x, y }) =>
    margin &&
    css`
      margin: ${y}em ${x}em;
    `} color: #333;
  &:hover {
    cursor: pointer;
    /* background-color: #43a047; */
    background-color: #000;
    color: #fff;

    .span_icon {
      left: -0.4em;
    }

    .span_icon,
    .span_icon.rotate-180 {
      transform: rotate(180deg);
    }
  }

  &:active,
  &:focus {
    outline: 0;
  }
  ${({ primary }) =>
    primary &&
    css`
        color: #fff;
        /* background-color: ${({ bgColor }) => bgColor}; */
        background-color: #F36B2B;
        transition: box-shadow 250ms ease-out, background-color 200ms ease-in;

        &:hover {
          box-shadow: none;
          animation: 500ms ${FadeIn} ease-in infinite;
          ${'' /* background-color: #333; */}
          /* background-color: #fff; */
          background-color: #43a047;
          color: #fff;
          // use the shadow to add a pulse animation.
          /* box-shadow: 0 0 .5rem .4rem rgba(0, 0, 0, .3); */
        }
      `} .span_icon, .span_text {
    /* background: yellow; */
    transition: 300ms translateX ease-in;
  }

  .span_icon {
    /* margin-top: .25em; */
    position: relative;
    left: 0;
    bottom: 3px;
    transition: transform 300ms ease-in;
    /* transform: translateX(-50rem); */
  }

  .rotate-180 {
    transform: rotate(180deg);
    transition: left 200ms ease-in;
  }

  span {
    margin: 0 0.5em;
  }
`

export const Button = ({ primary, children, bgColor }) => {
  return (
    <StyledButton primary={primary} bgColor={bgColor}>
      {children}
    </StyledButton>
  )
}

export const CardContainer = styled.div`
  display: flex;
  // grid-template-columns: repeat(4, 400px);
  place-items: center;
  grid-row-gap: 3em;
  grid-column-gap: 1em;
  background: #1a1a1a;
  justify-content: center;
  margin: 2rem 0;
  height: 100%;
  text-align: center;
  /* padding: 0 2rem; */

  @media (min-width: 820px) and (max-width: 1130px) {
    display: grid;
    grid-template-columns: repeat(3, 2fr);
  }

  @media (min-width: 570px) and (max-width: 820px) {
    display: grid;
    grid-template-columns: repeat(2, 2fr);
  }

  @media (min-width: 320px) and (max-width: 570px) {
    display: grid;
    grid-template-columns: repeat(1, 2fr);
  }
`

export const CartContainer = styled.div(
  ({ size }) => css`
    background: #1a1a1a;
    justify-content: center;
    margin: 2rem 0;
    height: 100%;
    text-align: center;
    padding: 0 1rem;
  `
)

export const SummaryHeader = styled.div`
  /* margin: 1.5rem 1rem; */
  margin-bottom: 1rem;
  width: 100%;

  ${({ marginAuto }) =>
    marginAuto &&
    css`
      margin: 0 auto 1rem auto;
    `} h1 {
    text-align: left;
  }

  /* 
  p {
    width: 80vw;
  } */

  @media (max-width: 586px) {
    width: 100%;

    h1 {
      font-size: 1.5rem;
      margin: 0.5rem 0;
      text-align: center;
    }

    p {
      font-size: 1rem;
      margin: 0;
      text-align: center;
    }
  }
`

export const SummaryCard = styled.div`
  height: 40%;
  /* height: 100%; */
  padding: 1rem;
  /* width: 40%; */
  width: 50%;
  /* text-align: center; */
  /* margin: 1rem 0; */
  border-radius: 0.2rem;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  /* background-color: #F36B2B; */
  background-color: #f36b2b;
  background-image: linear-gradient(163deg, #f36b2b 0%, #f7ce68 100%);
  box-shadow: 0px 2px 16px 6px rgba(243, 107, 43, 0.2);
  transition: transform 200ms ease-in, box-shadow 300ms ease-in;

  .totalPrice {
    font-size: 45px;
    display: flex;
    /* background-color: thistle; */
    /* padding: 0; */

    span {
      font-size: 1.1rem;
      margin-top: 0.5rem;
      font-weight: 800;
    }
  }
  @media (max-width: 920px) {
    width: 100%;
    margin-bottom: 1em;
    box-shadow: none;
  }

  /* @media (max-width: 582px) {
		width: 100%;
	} */
`

export const CardStyle = styled.div`
  /* height: 35rem; */
  height: 100%;
  /* padding: 3rem 0; */
  padding: 3rem 1em;
  /* width: 40%; */
  width: 100%;
  text-align: center;
  margin: 1rem auto;
  border-radius: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1a1a1a;
  /* background-color: #f36b2b; */
  /* background-color: #e90e2B; */
  /* box-shadow: 0px 2px 16px 6px rgba(243, 107, 43, .2); */
  transition: transform 200ms ease-in, box-shadow 300ms ease-in;

  @media (min-width: 318px) and (max-width: 707px) {
    height: 100%;
    /* height: 35vrem; */
    width: 100%;
    padding: 2em 10em;
  }

  svg {
    height: 1.5rem;
    margin-left: 0.5rem;
    width: 1.5rem;
    transition: transform 300ms ease-in-out;
  }

  &:hover {
    box-shadow: none;
  }

  img {
    height: auto;
    width: 20rem;
  }
`

export const LinkButton = styled.button`
  background-color: #fff;
  color: #000;
  text-transform: uppercase;
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  border-radius: 0.3rem;
  display: flex;
  align-items: center;
  border: 3px solid transparent;
  text-decoration: none;
  transition: color 300ms ease-out, background-color 150ms ease-out;
  margin: 1rem 0;

  &:active {
    outline: 0;
    border: 3px solid transparent;
    transform: translateY(3px);
  }

  &:hover {
    background-color: #000;
    color: #ddd;

    svg {
      transform: translateX(5px);
    }
  }

  &:disabled {
    background-color: #333;
    color: #ddd;
    pointer-events: none;
  }

  svg {
    height: 1.5rem;
    margin-left: 0.5rem;
    width: 1.5rem;
    transition: transform 300ms ease-in-out;
  }
`

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: #400; */
  align-items: center;
  height: 100%;
  justify-content: space-between;
  padding: 1rem 0 1rem 0;

  .price {
    font-size: 2rem;
  }
`

// export const LinkStyled = styled(Link)`

// `

export const StyleIcon = styled.div(
  ({ size }) => css`
    height: 5rem;
    width: 5rem;
    background: ${styleColors.green};
  `
)

export const IconStyle = styled.div`
  display: inline;
  img {
    height: 1.5rem;
    width: 1.5rem;
  }
`

export const ShopCartContainer = styled.div`
  height: 100%;
  width: 100%;
  /* background-color: #ff0; */
  /* text-align: center; */
  display: flex;
  justify-content: center;
  color: #fff;
  min-height: 100vh;
`

export const CartItemStyle = styled.div`
  height: 100%;
  /* display: grid;
  grid-template-columns: 1.5fr .7fr;
  grid-gap: 2.5rem; */
  display: flex;
  flex-direction: column-reverse;

  width: 100%;
  justify-content: space-between;
  padding: 3rem;

  @media (max-width: 512px) {
    padding: 0;
  }
`

export const BasicCard = styled.div`
  height: 100%;
  display: flex;
  /* width: 100%; */
  justify-content: center;
  /* padding: 3rem; */
  /* background: rgb(33, 33, 33); */

  ${({ shadow, bgColor }) =>
    shadow &&
    css`
      box-shadow: 2px 3px 19px 0px rgba(0, 0, 0, 0.75);
      transition: box-shadow 300ms ease-in-out;
      background-color: ${bgColor};
      &:hover {
        box-shadow: none;
      }
    `} @media (min-width: 315px) and (max-width: 900px) {
    display: flex;
    flex-direction: column-reverse;
  }
`

export const CartCard = styled.div`
  background-color: ${styleColors.cardBg};
  /* background-color: #F36B2B; */
  color: #fff;
  /* line that added the 3d look to cart card */
  margin: 2rem 1rem;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  border-radius: 0.2rem;
  align-items: center;
  padding: 1rem;
  position: relative;
  transition: box-shadow 300ms ease-in-out;
  /* width: 50%; */

  .item-actions {
    display: flex;
    align-items: center;
  }

  .qty {
    padding: 0 2rem;
    font-size: 1rem;
    font-weight: 600;
  }

  .sizes-selected {
    display: flex;
    list-style-type: none;
    margin-top: 0.5em;
    /* gap: 1em; */

    .size-selected {
      padding: 0.5em;
      border-radius: 0.1em;
      background: ${styleColors.orange};

      &:not(:last-child) {
        margin-right: 0.5em;
      }
    }
  }

  .card-info {
    display: flex;
    /* background: #fff; */
    align-items: center;
    justify-content: space-between;
  }

  input {
    padding: 1rem 0.3rem;
    width: 50%;
    font-size: 1rem;
    color: #fff;
    border-bottom: solid 3px #444;
    background-color: transparent;
    margin: 0 1rem;
    transition: border-bottom 200ms ease-in-out;
    z-index: 500;

    &:focus {
      outline: 0;
      border-bottom: solid 3px #f36b2b;
    }
  }

  /* add a slight animation to clothing */
  .cart-image {
    border: 5px solid #ff9c59;
    border-radius: 100%;
    background-color: #f36b2b;
    /* padding: .5em; */
    height: 10rem;
    width: 10rem;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
  }

  img {
    height: auto;
    width: 80%;
  }

  &:hover {
    /* box-shadow: 0 0 3px 10px #ff9c59; */
    box-shadow: 0 0 3px 10px #2c2c2c;
    img {
      animation: ${HoverObj} 600ms ease-in-out infinite;
    }
  }

  @media (min-width: 315px) and (max-width: 779px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;
    width: 95%;
    margin: 2rem auto;

    .name {
      margin: 1rem 0;
    }

    p {
      font-size: 1.3rem;
    }

    /* .card-info {
      margin: .5rem 0;
    } */

    input {
      text-align: center;
    }

    .remove {
      display: none;
    }

    &:hover {
      box-shadow: none;
      .remove {
        display: block;
        position: absolute;
        top: 3rem;
      }
      img {
        filter: blur(5px);
        --webkit-filter: blur(5px);
      }
    }
  }

  @media (max-width: 388px) {
    /* margin: 0; */
    .item-actions {
      display: flex;
      flex-direction: column;
    }
  }
`
export const FormGroup = styled.div`
  width: 100%;
  /* background-color: #fff; */
`

export const FormContainer = styled.div`
  /* background: aquamarine; */
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 0 auto;
  /* align-items: center; */
  /* justify-content: center; */

  .form-title {
    /* background: crimson; */
    width: 60%;
    margin-bottom: 1em;
  }

  @media (max-width: 920px) {
    .form-title {
      width: 100%;
    }
  }
`

export const FormCard = styled.div`
  display: flex;
  /* background: magenta; */
  /* margin: 0 auto; */

  @media (max-width: 920px) {
    flex-direction: column-reverse;
  }
`

export const OrderPage = styled.div`
  height: 100vh;
  display: flex; 
  justify-content: center;
  align-items: center;
  /* background: aquamarine; */
`

export const Form = styled.form`
  height: 100%;
  display: flex;
  /* padding: 3rem 2rem; */
  padding: 0 0 1rem 0;
  flex-direction: column;
  margin-right: 1em;
  /* margin: 0 1rem 3rem 1rem; */

  border-radius: 0.2rem;
  /* width: 30%; */
  width: 100%;
  justify-content: space-between;
  /* padding: 3rem; */
  margin-bottom: 3em;
  background: #1a1a1a;

  @media (min-width: 315px) and (max-width: 900px) {
    /* margin: 1rem 0; */
    width: 100%;
  }

  /* @media (max-width: 368px) {
	} */
`

export const QuizInput = styled.input`
  padding: 1em 0.5em;
  background-color: transparent;
  border-bottom: 3px solid #fff;
  outline: 0;
`

export const Input = styled.input`
  padding: 1rem 0.5rem;
  width: 100%;
  font-size: 1rem;
  color: #fff;
  border-bottom: solid 3px #444;
  background-color: #000;
  margin: 1rem 0;
  transition: background-color 700ms ease-in;
  border-bottom-left-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
  border-top-left-radius: 0.1rem;
  border-top-right-radius: 0.1rem;
  transition: border-bottom 200ms ease-in-out;
  /* z-index: 1000; */

  &:focus {
    outline: 0;
    border-bottom: solid 3px #f36b2b;
    box-shadow: 10px 10px 22px -12px rgba(0, 0, 0, 0.75);
    background-color: transparent;
  }
  /* 
    .push-left {
      margin-left: 5rem;
      font-size: 50px;
      background-color: #F36B2B;
    } */
`

// export const SubscribeInput = styled.input`
//   background: #1a1a1a;
//   color: red;
// `

export const CheckoutCard = styled.div`
  /* Return the gray background on mobile ... MAYBE?  */
  /* background-color: #ffd900; */
  color: #fff;
  text-align: left;
  display: flex;
  width: 100%;
  flex-direction: column;
  /* padding: 1em 3rem; */

  .total-items-mobile {
    display: none;
  }

  .total-price,
  .items-length {
    display: flex;
    padding: 1em;
    flex-direction: column;
    gap: 1em;
    border-radius: 0.2em;
    align-items: center;
    background: transparent;
    justify-content: center;
  }

  h2 {
    font-weight: 400;
    text-align: center;
    padding: 1rem 0;
  }

  @media (max-width: 626px) {
    padding: 1em 0;

    .total-price,
    .items-length {
      display: none;
    }

    .total-items-mobile {
      display: inline-flex;
      align-items: center;
      width: 100%;
      justify-content: space-between;
    }
  }

  /* @media (max-width: 720px) {
    position: sticky;
    top: 0;
  } */
`

export const RowLayout = styled.div`
  align-items: center;
  display: flex;
  overflow-x: hidden;
  /* background: #ff0; */

  // * Make sure to pass this rule value as a PROP!
  /* padding: 3rem; */

  input {
    width: 50%;
  }

  input:nth-child(2) {
    margin-left: 1rem;
  }

  @media (max-width: 566px) {
    display: flex;
    flex-direction: column;

    input {
      width: 100%;
      margin: 1.5rem 0;
    }

    input:nth-child(2) {
      margin: 0;
    }
  }
`

export const ActionRow = styled.div`
  display: flex;
  justify-content: space-between;

  .back {
    margin: 0 auto 4em;
  }

  p {
    text-align: center;
    font-size: 1.3rem;
  }

  @media (min-width: 315px) and (max-width: 626px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    padding: 1.5rem 0;
    justify-content: center;

    .items-length,
    .total-price {
      border-radius: 0;
    }

    .total-price {
      padding: 1em 1em 0em 1em;
    }

    .items-length {
      padding: 0 1em;
      p {
        display: none;
      }
    }

    /* .items-length {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      p {
        display: none;
      }
    } */

    /* .total-price {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      p {
        font-size: 1.5rem;
      }
    } */
  }
`

export const Page = styled.div`
  /* height: 100vh; */
  padding: 0 5rem;
  display: flex;
  /* height: 0vh; */
  height: 100%;
  flex-direction: column;
  /* background: linear-gradient(to right, rgba(0, 0, 0, .5), rgba(0, 0, 0, .5) ), url("https://res.cloudinary.com/checkadigs-cloud/image/upload/v1606402883/Taieri_z4cz7f.png") fixed no-repeat; */
  /* background-size: cover; */
  /* align-items: center; */

  @media (max-width: 558px) {
    padding: 0 2rem;
  }

  @media (max-width: 360px) {
    padding: 0 0.5rem;
    /* margin-bottom: 3em; */
  }
`

export const ItemForCarousel = styled.div`
  /* background-color: url("https://res.cloudinary.com/checkadigs-cloud/image/upload/v1606397756/IMG_E4430_vzk1ol.jpg") */
  /* fixed no-repeat; */
  background-size: cover;
  height: 100vh;
  width: 100%;
  ${({ bgColor }) =>
    bgColor &&
    css`
      background: linear-gradient(to right, #00000050, #00000040),
        url(${bgColor}) no-repeat;
      background-position-y: 45%;
      background-size: cover;

      @media (max-width: 534px) {
        background-size: cover;
        height: 50vh;
        background-position-y: 0;
      }
    `} &:focus, &:active {
    outline: 0;
    border: 0;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`

export const SuccessCard = styled.div`
  text-align: center;
  /* font-family: Lato; */
  padding: 2rem 0;
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://res.cloudinary.com/checkadigs-cloud/image/upload/v1606402883/Taieri_z4cz7f.png')
      fixed no-repeat;
  background-size: cover;
  /* linear-gradient(to right, rgba(253, 200, 48, .2), rgba(243, 115, 53, .4)), */

  h1 {
    margin-bottom: 0.5em;
  }

  p {
    margin: 0.3em 0;
    color: #fff;
    /* font-style: italic; */
    font-size: 1.5em;
    /* font-weight: 800; */
  }

  button {
    margin: 1em;
  }
`

export const IframePage = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f36b2b;

  button {
    position: relative;
    top: 4em;
  }

  @media (min-width: 318px) and (max-width: 527px) {
    background-color: #fff;

    button {
      position: relative;
      top: 0.2em;
      background-color: #f36b2b;
      color: #fff;
    }
  }
`

export const IframeStyle = styled.iframe`
  height: 1000px;
  width: 1000px;

  @media (min-width: 320px) and (max-width: 510px) {
    height: 100vh;
    width: 50vh;
  }
`

export const HeaderStyle = styled.div`
  display: flex;
  width: 100%;
  margin-top: 2rem;
  justify-content: space-between;
  margin: 0 auto;
  gap: 1rem;

  .header_side {
    display: flex;
    gap: 1rem;
    flex-direction: column;
  }

  @media (max-width: 983px) {
    .header_side {
      display: none;
    }
  }
`

export const SideHeaderGeneralStyle = styled.div`
  height: 50%;
  width: 300px;
  margin-right: 3rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding: .5rem;
  transition: transform 200ms ease-out;
  border-radius: .5rem;
`

export const SideHeaderTopStyle = styled(SideHeaderGeneralStyle)`
  background: linear-gradient(to right, rgba(0, 0, 0, .5), rgba(0, 0, 0, .5) ),
  url("https://res.cloudinary.com/dyj6pqx6d/image/upload/v1666859740/checkadigs/vecteezy_fashion-of-rock-metal-illustration_10307987_bnzoln.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  transition: background 400ms ease-out;
  
  &:hover {
    background: linear-gradient(to right, rgba(0, 0, 0, .8), rgba(0, 0, 0, .8) ),
    url("https://res.cloudinary.com/dyj6pqx6d/image/upload/v1666859740/checkadigs/vecteezy_fashion-of-rock-metal-illustration_10307987_bnzoln.jpg");
    background-size: cover;
    background-repeat: no-repeat;
  }
`

export const SideHeaderBottomStyle = styled(SideHeaderGeneralStyle)`
  background: linear-gradient(to right, rgba(0, 0, 0, .5), rgba(0, 0, 0, .5) ),
  url("https://res.cloudinary.com/dyj6pqx6d/image/upload/v1666859834/checkadigs/vecteezy_street-model-fashion-flat-illustration_10308000_p4xzbv.jpg");
  background-size: cover;
  background-repeat: no-repeat;

   &:hover {
    background: linear-gradient(to right, rgba(0, 0, 0, .8), rgba(0, 0, 0, .8) ),
    url("https://res.cloudinary.com/dyj6pqx6d/image/upload/v1666859834/checkadigs/vecteezy_street-model-fashion-flat-illustration_10308000_p4xzbv.jpg");
    background-size: cover;
    background-repeat: no-repeat;
  }
`

export const MainHeaderStyle = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  margin: 0 0 0 3rem;
  border-radius: .3rem;
  background:  linear-gradient(to right, rgba(0, 0, 0, .5), rgba(0, 0, 0, .5) ), 
    url("https://res.cloudinary.com/dyj6pqx6d/image/upload/v1666855511/checkadigs/dress_new_cwyggj.svg");
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: cover;

  .title {
    font-size: 6rem;
  }
  
  .tagline {
    font-size: 1.5rem;
    background: ${styleColors.orange};
    padding: .8rem 2rem;
    border-radius: 100px;
  }
  
  .swiper-slide {
    /* height: 600px; */
  }

  @media (max-width: 983px) {
    margin-right: 3rem;

    .title {
      font-size: 5rem;
    }
  }
  
  @media (max-width: 530px) {
    height: 30vh;

    .title {
      font-size: 2rem;
    }

    .tagline {
      font-size: .8rem;
      background: ${styleColors.orange};
      padding: .4rem 1rem;
    }
  }
`

export const BasicBox = styled.div`
  /* height: 70%; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #1a1a1a;
  /* background-color: #f36b2b; */
  ${({ url }) =>
    url &&
    css`
      background: url(${url}) no-repeat;
      background-size: cover;
    `} background-image: linear-gradient(163deg, #f36b2b 0%, #F7CE68 100%);
  box-shadow: 0px 2px 16px 6px rgba(0, 1, 3, 0.2);
  padding: 2em;
  height: 80%;
  border-radius: 0.3em;
  overflow: hidden;

  p {
    margin: 0.5em 0;
    line-height: 30px;
  }

  @media (min-width: 320px) and (max-width: 485px) {
    width: 90%;
  }
`

export const Style404 = styled.div`
  background: #fff;
  color: #333;
`

export const AppStyle = styled.div`
  /* background-color: #F36B2B; */
  /* background: linear-gradient(to right, rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)),
		url("https://res.cloudinary.com/checkadigs-cloud/image/upload/v1606402883/Taieri_z4cz7f.png") fixed no-repeat;
	background-size: cover; */
`

export const EmptyCartStyle = styled.div`
  /* background: #ffffff; */
  background: transparent;
  /* background-color: #1a1a1a; */
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 0 1em 0;
  border-radius: 0.2em;
  position: relative;
  width: 30em;

  .imageBox {
    background: transparent;
  }

  img {
    height: auto;
    width: 50%;
    position: relative;
  }

  h2 {
    font-weight: 400;
    color: #1a1a1a;
  }

  div {
    background-color: #fff;
    text-align: center;
    width: 100%;
    border-radius: 0.2em;
  }
  @media (min-width: 318px) and (max-width: 593px) {
    width: 100%;
  }

  @media (max-width: 361px) {
    h1 {
      font-size: 1em;
    }
  }
`

export const AuthPage = styled.div`
  /* height: 90vh; */
  /* background: #907051; */

  form {
    width: 30rem;
    padding-bottom: 3em;
    height: 70vh;

    @media (min-width: 320px) and (max-width: 558px) {
      width: 100%;
      /* height: 50vh; */

      .mobile_raise {
        /* background-color: #451010; */
        /* height: 100vh; */
      }
    }
  }

  @media (min-width: 320px) and (max-width: 868px) {
    /* .register {
		} */
    height: 100vh;
    padding: 2em 0;
    width: 80%;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    flex-direction: column;
  }
`

/* export const AuthForm = styled.div`
  
  width: 30rem;

  @media (min-width:320px) and (max-width: 558px) {
    width: 100%;
    height: 50vh;

    .mobile_raise {
    }
  }
` */

export const QuizPage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow-y: auto;
  padding: 8rem 0;
  align-items: center;
  justify-content: center;
  background: #1a1a1a;

  @media (min-width: 318px) and (max-width: 860px) {
    height: 100%;
  }
`
export const QuizBox = styled.div`
  /* background-color: #f36b2b; */
  background: url('https://res.cloudinary.com/dyj6pqx6d/image/upload/v1614852691/checkadigs/dot-bg_uzhhlm.svg')
    fixed repeat;
  /* background-size: cover; */
  height: 80%;
  width: 60%;
  transition: 300ms ease-in;
  border-radius: 0.2em;

  // only use hover effects on desktop
  @media (min-width: 720px) {
    &:hover {
      /* transform: translateY(-.1em); */
      box-shadow: -1px 2px 13px 0px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: -1px 2px 13px 0px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: -1px 2px 13px 0px rgba(0, 0, 0, 0.75);
      .score-title {
        /* border-bottom: .2em dashed #f36b2b; */
      }
    }
  }

  .light {
    font-weight: 100;
  }

  .bold {
    font-weight: 800;
  }

  .display-info {
    background: #0d0d0d;
    text-align: center;
    /* padding: 3em 0; */
  }

  .score-title,
  .quiz-title {
    width: 100%;
    padding: 1.5em 3rem 1em;
    display: flex;
    border-bottom: 0.2em dashed transparent;
    transition: 300ms ease-out;

    /* &:hover {
			border-bottom: .2em dashed #f36b2b;
		} */
  }

  .start-game {
    background: #1a1a1f;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */

    input {
      margin: 1.5em 0;
    }
  }

  .score-title {
    justify-content: space-between;
    font-family: Stick;
    align-items: center;
    padding: 1.5em 1rem 1em;

    .user-info {
      display: flex;
      align-items: center;
      justify-content: space-between;

      p {
        margin: 0 0.5rem;
      }
    }

    &.center {
      justify-content: center;
    }

    button {
      margin: 0;
    }
  }

  .score-display {
    display: flex;
    line-height: 55px;
    font-family: Stick;
    padding: 3em 0;
    /* background: #1a1a1a; */
    align-items: center;
    /* border: 3px solid #F36B2B; */
    // add black color to background
    flex-direction: column;
    height: 100%;

    .text_box {
      /* background: #fff; */
      padding: 0 1em;
      text-align: center;
    }

    h2 {
      font-size: 4em;
      margin: 0.5em 0;
      letter-spacing: 1px;
    }

    h3 {
      font-size: 2em;
    }
  }

  .quiz-title {
    justify-content: space-between;
    padding: 1.5em 3em 1em;
    border-bottom: 0.2em dashed #f36b2b;
  }

  .row {
    display: flex;
    padding: 0 3em;
    margin: 3em 0;
    justify-content: space-between;

    p {
      color: darken(#ddd, 60%);
    }
  }

  .question,
  .options {
    margin: 0 3rem;
  }

  .question p {
    font-size: 1.3em;
  }

  .options {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    grid-gap: 2em;
  }

  .button {
    width: 100%;
    background-color: #f3b700;
    padding: 1em;
    font-size: 1em;
    color: #542e71;
    outline: none;
    border: none;
    transition: 300ms ease-in-out;
    border-radius: 0.3em;
    /* color: #1a1a1a; */
    /* 542E71 */
    &:hover {
      transform: translateY(0.2em) scale(1.03);
      background-color: #1a1a1a;
      cursor: pointer;
      color: #f3b700;
    }

    &:active {
      outline: none;
      border: 0;
    }
  }
  @media (min-width: 318px) and (max-width: 450px) {
    width: 100%;
    padding-bottom: 3em;

    .options {
      display: flex;
      flex-direction: column;
    }
  }

  @media (min-width: 450px) and (max-width: 860px) {
    height: 100%;
    width: 80vw;
    padding-bottom: 3em;
    margin-bottom: 3em;
    .options {
      display: flex;
      flex-direction: column;
    }
  }
`

export const AdminPage = styled.div(
  ({ color }) => css`
    height: 100vh;
    width: 100%;
    background: #333;
  `
)

export const WrapAdmin = styled.div(
  ({ size }) => css`
    background: #333;
    color: #fff;
  `
)
