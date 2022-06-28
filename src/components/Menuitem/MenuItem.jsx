import React from "react";

import "./MenuItem.css";

const MenuItem = ({ title, price, tags }) => (
  <div className="app__menuitem">
    <div className="app__menuitem-header">
      {/* Menu items */}
      <div className="app__menuitem-name">
        <p className="p__cormorant" style={{ color: "DCCA87" }}>
          {title}
        </p>
      </div>

      <div className="app__menuitem-dash" />

      {/* Menu item price */}
      <div className="app__menuitem-name">
        <p className="p__cormorant">{price}</p>
      </div>
    </div>

    <div className="app__menuitem-sub">
      <p className="p__opensans" style={{ color: "#AAAAAA'" }}>
        {tags}
      </p>
    </div>
  </div>
);

export default MenuItem;
