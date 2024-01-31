import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;
  const toRotate = [
    "Software Developer",
    "Web Designer",
    "Full-stack Engineer",
  ];

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    window.open(
      "https://www.linkedin.com/in/salina-tadros-aa37a8138/",
      "_blank"
    );
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hello I'm Salina,  `}
              <span className="wrap">{text}</span>
            </h1>
            <p>
              Proficient in the MERN stack and I'm currently learning Data
              Structures and Algorithms. <br /> I enjoy learning and
              implementing new tech. When I'm not coding, I'm either at the gym
              or Jogging outside. <br />
              My background includes studying and graduating from Fullstack
              Academy. <br />
            </p>
            <button onClick={handleClick}>
              Lets Connect <ArrowRightCircle size={25}></ArrowRightCircle>
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
