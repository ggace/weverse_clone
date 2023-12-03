import './Header.css';

function Header(){

  return (
      <section id="header">
        <section id="header-left">
          <div className="header-element" id="back">&lt;</div>
        </section>
        
        <section id="header-right">
          <img className="header-element" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJVCj-2ubDcJlzE85aP_0WExgzTe46gVQjF_9b14OTX7rzJOWiNcDLXKtiLRVQBWOVDXA&usqp=CAU" alt="" id="logo" />
          <div className="header-element" id="shop">
            <img src="https://e7.pngegg.com/pngimages/772/45/png-clipart-shopping-cart-shopping-centre-icon-shopping-cart-text-retail-thumbnail.png" alt="" />
          </div>
          <div className="header-element" id="search">
            <img src="https://cdn-icons-png.flaticon.com/512/54/54481.png" alt="" />
          </div>
          <div className="header-element" id="plus">
            <img src="https://cdn-icons-png.flaticon.com/512/7066/7066144.png" alt="" />
          </div>
        </section>
      </section>
  );
}

export default Header;

