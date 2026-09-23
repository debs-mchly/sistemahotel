import Link from "next/link";

export default function SistemaLayout({ children }) {
  return (
    <div className="sistema">
      <aside className="sidebar">

        <div className="logo">
          <span className="logoIcon">▣</span>

          <div>
            <strong>Grand Plaza</strong>
            <small>CENTRAL DE RESERVAS</small>
          </div>
        </div>

        <nav className="menu">

          <Link
            href="/dashboard"
            className="menuItem ativo"
          >
            <span>▦</span>
            Dashboard
          </Link>

          <Link
            href="/reservas"
            className="menuItem"
          >
            <span>▣</span>
            Reservas
          </Link>

          <Link
            href="/hospedes"
            className="menuItem"
          >
            <span>♙</span>
            Hóspedes
          </Link>

          <Link
            href="/quartos"
            className="menuItem"
          >
            <span>▤</span>
            Quartos
          </Link>

          <Link
            href="/financeiro"
            className="menuItem"
          >
            <span>▤</span>
            Financeiro
          </Link>

          <Link
            href="/relatorios"
            className="menuItem"
          >
            <span>▥</span>
            Relatórios
          </Link>

        </nav>

        <div className="menuBottom">

          <Link
            href="/configuracoes"
            className="menuItem"
          >
            <span>⚙</span>
            Configurações
          </Link>

          <Link
            href="/suporte"
            className="menuItem"
          >
            <span>?</span>
            Suporte
          </Link>

        </div>

      </aside>

      <main className="conteudo">
        {children}
      </main>

    </div>
  );
}