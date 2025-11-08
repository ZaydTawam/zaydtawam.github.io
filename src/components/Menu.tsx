interface Props {
  activeSection: string;
  scroll: (offSet: number) => void;
}

const Menu = ({ activeSection, scroll }: Props) => {
  return (
    <>
      <p
        className="menu-item"
        id="menu-about"
        style={{ color: activeSection === "about" ? "#000000" : "#9c9c9c" }}
        onClick={() => {
          scroll(0);
        }}
      >
        about
      </p>
      <p
        className="menu-item"
        id="menu-experience"
        style={{
          color: activeSection === "experience" ? "#000000" : "#9c9c9c",
        }}
        onClick={() => {
          scroll(0.405);
        }}
      >
        experience
      </p>
      <p
        className="menu-item"
        id="menu-projects"
        style={{ color: activeSection === "projects" ? "#000000" : "#9c9c9c" }}
        onClick={() => {
          scroll(0.81);
        }}
      >
        projects
      </p>
      <p
        className="menu-item"
        id="menu-contact"
        style={{ color: activeSection === "contact" ? "#000000" : "#9c9c9c" }}
        onClick={() => {
          scroll(1.215);
        }}
      >
        contact
      </p>
    </>
  );
};

export default Menu;
