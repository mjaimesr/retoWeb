export default function Navbar() {
  return (
    <header className="flex items-center justify-between border-b border-gray-200 bg-white px-4 py-3">
      <div className="text-lg font-semibold text-gray-900">Navbar</div>

      <nav className="flex items-center gap-4 text-sm text-gray-600">
        <a href="#">
          Inicio
        </a>
        <a
          href="#"
        >
          search
        </a>
      </nav>
    </header>
  );
}
