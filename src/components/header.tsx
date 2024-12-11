
import Cta from "../components/cta";

type Link = {
  label: string;
  url: string;
};

const links: Link[] = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "About",
    url: "/turtlehead-tacos",
  },
];

const Header = (props: any) => {
  const { _site } = props;
  const { c_deskFooter, c_deskHeader } = _site;

  const linkDoms = links.map((link) => (
    <div key={link.label}>
      <a href={link.url} target="_blank" rel="noreferrer">
        {link.label}
      </a>
    </div>
  ));

  return (
    <>
      <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <img src="your-logo-url.png" alt="Veridian Logo" className="logo-image" />
          <span className="logo-text">VERIDIAN</span>&nbsp;
          <span className="logo-subtext">HEALTHCARE</span>
        </div>
        <div className="menu">
          <a href="#" className="menu-item">Specialties</a>
          <a href="#" className="menu-item">Locations</a>
        </div>
      </div>
      <div className="navbar-right">
        <a href="#" className="nav-link">FOR MEDICAL PROVIDERS</a>
        <a href="#" className="nav-link">CAREERS</a>
        <a href="#" className="nav-link">DONATE</a>
        <a href="#" className="nav-link">PAY BILL</a>
        <button className="button button-outline">Schedule Appointment</button>
        <button className="button button-filled">Find a Provider</button>
      </div>
    </nav>
  );
};

export default Navbar;
    </>
  );
};

export default Header;
