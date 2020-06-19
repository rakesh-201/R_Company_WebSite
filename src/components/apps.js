import React, { useState, useEffect } from "react";
import Img33 from "../images/img12.png";
import B_Site from "../images/B_Site.gif";

const img = {
  border: "4px solid #007bff",
  borderRadius: "20px",
};

function Apps() {
  const [vid, setVid] = useState(Img33);
  const [vid1, setVid1] = useState(Img33);

  // useEffect(() => {
  //   var image = document.getElementById("img");
  //   vid ? (image.src = { B_Site }) : (image.src = { Img33 });
  //   return () => {};
  // }, [vid]);

  return (
    <div className="container mb-3">
      <div className="media mt-3 bg-light ">
        <img
          onMouseOver={() => setVid(B_Site)}
          onMouseOut={() => setVid(Img33)}
          src={vid}
          style={img}
          className="mr-3"
          id="img"
          width="290px"
          height="200px"
          alt="..."
        />
        <div className="media-body text-left ">
          <h4 className="mt-4">B_Site</h4>
          <p>
            This is a site made for the bind people. It is a voice controlled
            Web App. It has functionalities like news, music, diary.
          </p>
          <button className="btn btn-primary ">Go To Site</button>
        </div>
      </div>
      <div className="media mt-3 bg-light">
        <div className="media-body text-left">
          <h4 className="mt-4 ">B_Site</h4>
          <p>
            It is a copy of the above Web App. As the above Web App is voice
            controlled, it is a bit slower hence a need of building this site
            arise. It has functionalities like news, music, diary. It is much
            more faster than the above site.
          </p>
          <button className="btn btn-primary ">Go To Site</button>
        </div>
        <img
          onMouseOver={() => setVid1(B_Site)}
          onMouseOut={() => setVid1(Img33)}
          src={vid1}
          className="mr-3"
          style={img}
          width="290px"
          height="200px"
          alt="..."
        />
      </div>
    </div>
  );
}

export default Apps;
