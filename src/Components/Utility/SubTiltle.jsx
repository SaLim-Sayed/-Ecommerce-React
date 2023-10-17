import React from "react";
import { Nav } from "react-bootstrap";

const SubTiltle = ({ title, btntitle, pathText }) => {
  return (
    <div className="d-flex justify-content-between pt-4">
      <div className="sub-tile">{title}</div>
      {btntitle ? (
        <Nav.Link href={`${pathText}`} style={{ textDecoration: "none" }}>
          <div className="shopping-now">{btntitle}</div>
        </Nav.Link>
      ) : null}
    </div>
  );
};

export default SubTiltle;
