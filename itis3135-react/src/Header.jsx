export default function Header() {
  return (
    <header>
      <h1>Sankalp Kumar’s Super Kangaroo</h1>
      <h2>ITIS 3135</h2>
      <nav>
        <ul className="primary-nav">
          <li><a href="/">Home</a></li>
          <li><a href="/introduction">Introduction</a></li>
          <li><a href="/contract">Contract</a></li>
        </ul>
        <ul className="secondary-nav">
          <li><a href="https://yourusername.github.io/itis3135/">Main Site</a></li>
          <li><a href="https://yourusername.github.io/itis3135-react/">React3</a></li>
        </ul>
      </nav>
    </header>
  )
}
