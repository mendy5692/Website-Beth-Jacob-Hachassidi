"use client";
import { usePathname } from "next/navigation";
import { items } from "./navbar-data";
import { nanoid } from "nanoid";
import "../nav-bar/navbar.css";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="nav-container row">
      <div className="logo row">
        <a href="/">Beth Jacob Hachassidi</a>
      </div>
      <ul className="buttons row">
        {items.map((list_item) => (
          <Navitem
            key={nanoid()}
            list_item={{ ...list_item, current: pathname === list_item.href }}
          />
        ))}
      </ul>
    </div>
  );
}

function Navitem({ list_item }) {
  return (
    <li>
      <a
        href={list_item.href}
        className={list_item.current ? "current" : undefined}
      >
        {list_item.title}
      </a>
    </li>
  );
}
