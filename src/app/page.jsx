export default function Page() {
  return (
<body>
  <header className="header inner">
    <h1 className="logo"><img src='/image/logo.svg' /></h1>
    <nav className="nav">
      <nav className="navl">
        <ul>
          <li>ALL</li>
          <li>NEW</li>
          <li>VINTAGE</li>
          <li>CATEGORY</li>
          <li>LOOKBOOK</li>
          <li>BLOG</li>
        </ul>
      </nav>
      <nav className="navr">
        <ul>
          <li>LOGIN</li>
          <li>CONTACT</li>
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
      <p className="text">テキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキスト テキストテキストテキスト</p>
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