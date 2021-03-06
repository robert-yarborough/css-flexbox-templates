import menu from './menu.scss';


const menuTemplate = `
<nav class="main-nav">
  <ul class="menu">
    <li class="menu-home">
      <a>
        <i class="fa fa-home"></i>
        <div class="menu-text">
          <h4>HOME</h4>
          <p>Start Here</p>
        </div>
      </a>
    </li>

    <li class="menu-products">
      <a>
        <i class="fa fa-shopping-basket"></i>
        <div class="menu-text">
          <h4>PRODUCTS</h4>
          <p>Shop Now</p>
        </div>
      </a>
    </li>

    <li class="menu-blog">
      <a>
        <i class="fa fa-pencil"></i>
        <div class="menu-text">
          <h4>BLOG</h4>
          <p>My Thoughts</p>
        </div>
      </a>
    </li>

    <li class="menu-contact">
      <a>
        <i class="fa fa-phone"></i>
        <div class="menu-text">
          <h4>CONTACT</h4>
          <p>Get in Touch</p>
        </div>
      </a>
    </li>

  </ul>
</nav>`;
export default menuTemplate;
