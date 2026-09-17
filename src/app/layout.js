import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        
        <header>
          <h1>🏨 HotelPro Admin</h1>

          <nav>
  <Link href="/dashboard">Dashboard</Link>
  <Link href="/quartos">Quartos</Link>
  <Link href="/reservas">Reservas</Link>
  <Link href="/hospedes">Hóspedes</Link>
  <Link href="/relatorios">Relatórios</Link>
  <Link href="/configuracoes">Configurações</Link>
  <Link href="/suporte">Suporte</Link>
</nav>
        </header>

        <main>
          {children}
        </main>

      </body>
    </html>
  );
}