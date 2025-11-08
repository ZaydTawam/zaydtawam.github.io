import { RefObject, useEffect, useState } from "react";
import Section from "./Section";
import { AsteriskSimple, Folders } from "@phosphor-icons/react";

interface Props {
  sectionContainerRef: RefObject<HTMLDivElement>;
  setActiveSection: (activeSection: string) => void;
}

const MainContent = ({ sectionContainerRef, setActiveSection }: Props) => {
  const [isDragging, setIsDragging] = useState(false);
  const [lastX, setLastX] = useState(0);

  function beginDragging(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    setIsDragging(true);
    setLastX(event.clientX);
  }

  function drag(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (sectionContainerRef.current) {
      if (isDragging) {
        const currentX = event.clientX;
        sectionContainerRef.current.scrollBy({
          left: (currentX - lastX) * -1,
        });
        setLastX(currentX);
      }
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const vw = window.innerWidth;
      if (sectionContainerRef.current) {
        if (sectionContainerRef.current.scrollLeft < 0.145 * vw) {
          setActiveSection("about");
        } else if (sectionContainerRef.current.scrollLeft < 0.55 * vw) {
          setActiveSection("experience");
        } else if (sectionContainerRef.current.scrollLeft < 0.955 * vw) {
          setActiveSection("projects");
        } else {
          setActiveSection("contact");
        }
      }
    };
    sectionContainerRef.current?.addEventListener("scroll", handleScroll);

    return () => {
      sectionContainerRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, [sectionContainerRef]);

  return (
    <div
      id="section-container"
      ref={sectionContainerRef}
      onMouseDown={beginDragging}
      onMouseLeave={() => {
        setIsDragging(false);
      }}
      onMouseUp={() => {
        setIsDragging(false);
      }}
      onMouseMove={drag}
    >
      <Section sectionName="about">
        I am a Computer Science student at the University of Florida with an
        interest in full-stack development and machine learning. I enjoy
        building impactful projects to solve real-world problems and create a
        smooth user experience. I have gained hands on experience with
        technologies like TypeScript, Python, and C++. As I grow as a developer,
        I’m excited to keep exploring new avenues and grow my skills in software
        engineering and AI/ML.
      </Section>
      <Section sectionName="experience">
        <p style={{ marginBottom: "0.6vh" }}>
          <AsteriskSimple size={13} /> UNDERGRADUATE RESEARCH ASSISTANT
          <br />
          <span style={{ color: " #9c9c9c" }}>
            Artificial Intelligence Research Group
          </span>
          <br />
          <span style={{ color: " #9c9c9c" }}>Oct 2025 - PRESENT</span>
          <br />
        </p>
        <p style={{ marginBottom: "0.6vh" }}>
          <AsteriskSimple size={13} /> TECHNICAL OFFICER
          <br />
          <span style={{ color: " #9c9c9c" }}>SOFTWARE ENGINEERING CLUB</span>
          <br />
          <span style={{ color: " #9c9c9c" }}>Aug 2025 - PRESENT</span>
          <br />
        </p>
        <p style={{ marginBottom: "0.6vh" }}>
          <AsteriskSimple size={13} /> TEAM MEMBER
          <br />
          <span style={{ color: " #9c9c9c" }}>
            SHPE AUTONOMOUS VEHICLE TEAM
          </span>
          <br />
          <span style={{ color: " #9c9c9c" }}>Aug 2025 - PRESENT</span>
          <br />
        </p>
      </Section>
      <Section sectionName="projects">
        <p style={{ marginBottom: "0.6vh" }}>
          <Folders size={13} color="black" />{" "}
          <a href="https://github.com/ZaydTawam/visa-coach">VISA COACH</a>
          <span style={{ float: "right", color: " #9c9c9c" }}>
            Jan 2025 - Jul 2025
          </span>
        </p>
        <p style={{ marginBottom: "0.6vh" }}>
          <Folders size={13} color="black" />{" "}
          <a href="https://github.com/ZaydTawam/Orion-Discord-Bot">
            DISCORD COMMUNITY BOT
          </a>
          <span style={{ float: "right", color: " #9c9c9c" }}>Feb 2024</span>
        </p>
        <p style={{ marginBottom: "0.6vh" }}>
          <Folders size={13} color="black" /> OTHELLO GAME
          <span style={{ float: "right", color: " #9c9c9c" }}>Jul 2024</span>
        </p>
        <p>
          <Folders size={13} color="black" />{" "}
          <a href="https://github.com/ZaydTawam/Task-Manager">TASK MANAGER</a>
          <span style={{ float: "right", color: " #9c9c9c" }}>Nov 2023</span>
        </p>
      </Section>
      <Section sectionName="contact" style={{ marginRight: "59.45vw" }}>
        <p className="section-content">EMAIL = 'tawamzayd@gmail.com'</p>
        <p className="section-content">
          LINKEDIN = '
          <a
            href="https://www.linkedin.com/in/zayd-tawam"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/zayd-tawam
          </a>
          '
        </p>
        <p className="section-content">
          GITHUB = '
          <a
            href="https://github.com/ZaydTawam"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/ZaydTawam
          </a>
          '
        </p>
      </Section>
    </div>
  );
};

export default MainContent;
