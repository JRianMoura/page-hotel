import Link from "next/link";

const links = [
  {
    path: "/",
    pathname: "Home",
  },
  {
    path: "/",
    pathname: "Procurar Hotel",
  },
  {
    path: "/",
    pathname: "Sobre",
  },
  {
    path: "/",
    pathname: "Contatos",
  },
];

const Nav = ({ containerStyle, listStyles }) => {
  return (
    <nav className={`${containerStyle}`}>
      <ul className={`${listStyles}`}>
        {links.map((link, index) => {
          return (
            <li>
              <Link href={link.path}> {link.pathname} </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
