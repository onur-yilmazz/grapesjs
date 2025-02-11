export default function Layout({ children }) {
    return (
      <div>
        <nav className="p-4 bg-blue-500 text-white">
          <a href="/" className="font-bold">Ana Sayfa</a>
          <a href="/editor" className="ml-4">Tema Editörü</a>
        </nav>
        <main>{children}</main>
      </div>
    );
  }
  