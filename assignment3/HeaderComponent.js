const HeaderComponent = () => {
  return (
    <div className="header-component">
      <div className="logo">
        <img src="https://img.freepik.com/free-vector/branding-identity-corporate-vector-logo-design_460848-8717.jpg?w=2000" />
      </div>
      <div className="search">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>      
      <div className="user">
        <img src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png"/>
      </div>
    </div>
  );
};

export default HeaderComponent;
