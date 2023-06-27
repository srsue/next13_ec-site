export default function Page() {
  return (
<body>
  <header className="header inner">
    <h1 className="logo"><img src='/image/logo.svg' /></h1>
    <nav className="nav">
      <nav className="navl">
        <ul>
          <li><a href="/all">ALL</a></li>
          <li><a href="/new">NEW</a></li>
          <li><a href="/vintage">VINTAGE</a></li>
          <li><a href="/category">CATEGORY</a></li>
          <li><a href="/lookbook">LOOKBOOK</a></li>
          <li><a href="/blog">BLOG</a></li>
        </ul>
      </nav>
      <nav className="navr">
        <ul>
          <li><a href="/login">LOGIN</a></li>
          <li><a href="/contact">CONTACT</a></li>
        </ul>
      </nav>
    </nav>
  </header>
  <div className="border wrapper">
    <hr/>
  </div>
  <main className="main inner">
    <div className="image">
      <img src="/image/item.jpg" alt="#" />
    </div>
    <div className="item">
      <div className="title">
        <h2>TOTALLY Short Sleeve Shirt</h2>
      </div>
      <p className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam officia molestias eligendi, hic repudiandae itaque beatae illum necessitatibus optio quis sapiente sint suscipit nobis tempora qui quibusdam? Perspiciatis non, magnam saepe adipisci ad pariatur rem magni repudiandae assumenda quia earum fuga cumque consequuntur nulla beatae corporis libero, sit reprehenderit suscipit.</p>
      <p className="price">￥9,999 <small>+tax</small></p>
      <table className="table">
        <tr>
          <th>Color</th>
          <th>Size</th>
          <th className="right">-</th>
        </tr>
        <tr>
          <td>White</td>
          <td>S</td>
          <td className="right"></td>
        </tr>
        <tr>
          <td>White</td>
          <td>M</td>
          <td className="right"></td>
        </tr>
        <tr className="last">
          <td>White</td>
          <td>L</td>
          <td className="right"></td>
        </tr>
      </table>
      <button type="submit">
        <a>ADD TO CART</a>
      </button>
      <table className="size">
        <tr>
          <th>Size</th>
          <th>Chest</th>
          <th>Weist</th>
          <th>Height</th>
        </tr>
        <tr>
          <th>S</th>
          <td>99-99</td>
          <td>99-99</td>
          <td>99-99</td>
        </tr>
        <tr>
          <th>M</th>
          <td>99-99</td>
          <td>99-99</td>
          <td>99-99</td>
        </tr>
        <tr>
          <th>L</th>
          <td>99-99</td>
          <td>99-99</td>
          <td>99-99</td>
        </tr>
      </table>
    </div>
  </main>
  <div className="footer footer inner">
    <small>xxx &copy; xxxxx</small>
  </div>
</body>
  )
}
