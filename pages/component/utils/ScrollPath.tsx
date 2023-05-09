import { Link } from "react-scroll"

const ScrollPath = ({ to, children }) => (
  <Link to={to} smooth={true} duration={1500}>
    {children}
  </Link>
)

export default ScrollPath
