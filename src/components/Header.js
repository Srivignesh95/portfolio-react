import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav style={{ padding: '20px', background: 'rgb(44, 62, 80)', textAlign: 'right' }}>
      <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
      <Link to="/projects" style={{ marginRight: "15px" }}>Projects</Link>
      <Link to="/experience" style={{ marginRight: "15px" }}>Experience</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
