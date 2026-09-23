"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SistemaLayout({ children }) {
  const pathname = usePathname();

  const menuItems = [
    {
      href: "/dashboard",
      icon: "▦",
      label: "Dashboard",
    },
    {
      href: "/reservas",
      icon: "▣",
      label: "Reservas",
    },
    {
      href: "/hospedes",
      icon: "♙",
      label: "Hóspedes",
    },
    {
      href: "/quartos",
      icon: "▱",
      label: "Quartos",
    },
    {
      href: "/financeiro",
      icon: "▤",
      label: "Financeiro",
    },
    {
      href: "/relatorios",
      icon: "▥",
      label: "Relatórios",
    },
  ];

  return (
    <div className="sistema">

      {/* SIDEBAR */}
      <aside className="sidebar">

        {/* LOGO */}
        <div className="logo">
          <span className="logoIcon">▣</span>

          <div>
            <strong>Grand Plaza</strong>
            <small>CENTRAL DE RESERVAS</small>
          </div>
        </div>

        {/* MENU PRINCIPAL */}
        <nav className="menu">

          {menuItems.map((item) => {
            const ativo =
              pathname === item.href ||
              pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`menuItem ${ativo ? "ativo" : ""}`}
              >
                <span>{item.icon}</span>
                {item.label}
              </Link>
            );
          })}

        </nav>

        {/* MENU INFERIOR */}
        <div className="menuBottom">

          <Link
            href="/configuracoes"
            className={`menuItem ${
              pathname.startsWith("/configuracoes") ? "ativo" : ""
            }`}
          >
            <span>⚙</span>
            Configurações
          </Link>

          <Link
            href="/suporte"
            className={`menuItem ${
              pathname.startsWith("/suporte") ? "ativo" : ""
            }`}
          >
            <span>?</span>
            Suporte
          </Link>

        </div>

      </aside>

      {/* CONTEÚDO DAS PÁGINAS */}
      <main className="conteudo">
        {children}
      </main>

    </div>
  );
}