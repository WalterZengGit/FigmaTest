export default function Header() {
  return (
    <header className="bg-white fixed top-0 left-0 w-full shadow-md z-50 flex justify-between items-center px-6 py-3">
      <nav className="flex space-x-6 text-gray-700 text-lg font-semibold">
        <a href="#about" className="hover:text-blue-600">關於我們</a>
        <a href="#plans" className="hover:text-blue-600">方案列表</a>
      </nav>
    </header>
  );
}