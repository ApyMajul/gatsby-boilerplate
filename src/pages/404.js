import React from "react"
import styled from "@emotion/styled"

const Container = styled.div`
    background: black;
    font-family: "Oswald", sans-serif;
    font-style: italic;

    & > .sub {
      position: absolute;
      transform: translate(-50%, -50%);
      top: 40%;
      left: 50%;

      & > .glow {
        @extend .glitch;
        text-shadow: 0 0 1000px rgb(223, 191, 191);
        color: transparent;
        position: absolute;
        top: 0;
      }

      & > .subtitle {
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 100;
        font-size: 0.8vw;
        color: rgba(165, 141, 141, 0.4);
        text-transform: uppercase;
        letter-spacing: 1em;
        text-align: center;
        position: absolute;
        left: 17%;
        animation: glitch-2 5s 5.02s infinite;

        @keyframes glitch-2 {
          1% {
            transform: rotateX(10deg) skewX(70deg);
          }
          2% {
            transform: rotateX(0deg) skewX(0deg);
          }
        }
      }

      & > .glitch {
        color: rgb(223, 191, 191);
        position: relative;
        font-size: 9vw;
        // margin: 70px 200px;
        animation: glitch 5s 5s infinite;

        &:before {
          content: attr(data-text);
          position: absolute;
          left: -2px;
          text-shadow: -5px 0 magenta;
          background: black;
          overflow: hidden;
          top: 0;
          animation: noise-1 3s linear infinite alternate-reverse,
            glitch 5s 5.05s infinite;
        }

        &:after {
          content: attr(data-text);
          position: absolute;
          left: 2px;
          text-shadow: -5px 0 lightgreen;
          background: black;
          overflow: hidden;
          top: 0;
          animation: noise-2 3s linear infinite alternate-reverse, glitch 5s 5s infinite;
        }

        @keyframes glitch {
            1% {
              transform: rotateX(10deg) skewX(90deg);
            }
            2% {
              transform: rotateX(0deg) skewX(0deg);
            }
        }

        @keyframes noise-1 {
          $steps: 30;
          @for $i from 1 through $steps {
            #{percentage($i*(1/$steps))} {
              $top: random(100);
              $bottom: random(101 - $top);
              clip-path: inset(#{$top}px 0 #{$bottom}px 0);
            }
          }
        }

        @keyframes noise-2 {
          $steps: 30;
          @for $i from 0 through $steps {
            #{percentage($i*(1/$steps))} {
              $top: random(100);
              $bottom: random(101 - $top);
              clip-path: inset(#{$top}px 0 #{$bottom}px 0);
            }
          }
        }
      }
    }

    & > .scanlines {
        overflow: hidden;
        mix-blend-mode: difference;

        &:before {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;

            background: repeating-linear-gradient(
              to bottom,
              transparent 0%,
              rgba(255, 255, 255, 0.05) 0.5%,
              transparent 1%
            );

            animation: fudge 7s ease-in-out alternate infinite;
        }

        @keyframes fudge {
            from {
              transform: translate(0px, 0px);
            }
            to {
              transform: translate(0px, 2%);
            }
        }
    }
`

export default function NotFoundPage() {
    return (
        <Container style={{ height: "100vh", width: "100wh" }}>
            <div className="sub">
                <div className="glitch" data-text="Error.404">Error.404</div>
                <div className="glow">Error.404</div>
                    <p className="subtitle">This page does not exists</p>
            </div>
            <div className="scanlines"></div>
        </Container>
    )
}
