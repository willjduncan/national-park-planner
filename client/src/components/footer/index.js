import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  React.useEffect(() => {
    var element = document.getElementById("footer");
    if (location.pathname === "/add") {
      element.classList.add("footer-add");
    } else {
      element.classList.remove("footer-add");
    }
  }, [location]);

  return (
    <>
      <footer class="page-footer">
        <div class="container">
          <div class="row">
            <div class="col l6 s12 footer-width">
              <h5 class="white-text">National Park Picker</h5>
              <p class="grey-text text-lighten-4">Explore the Outdoors</p>
            </div>
            <div id="resources" class="col l4 offset-l2 s12 footer-width">
              <h5 class="white-text">Need more Information?</h5>
              <h6 class="white-text">Check out these sites!</h6>
              <ul>
                <li class="grey-text text-lighten-3">
                  Get more information at the{" "}
                  <a
                    id="nat-park-site"
                    class="grey-text text-lighten-3 underline"
                    href="https://www.nps.gov/index.htm"
                    target="_blank"
                  >
                    National Park Service
                  </a>
                </li>
                <li class="grey-text text-lighten-3">
                  Reserve campsites and tours at{" "}
                  <a
                    id="rec-site"
                    class="grey-text text-lighten-3 underline"
                    href="https://www.recreation.gov/"
                    target="_blank"
                  >
                    Recreation.gov
                  </a>
                </li>
                <li class="grey-text text-lighten-3">
                  Look at maps and print pamphlets from{" "}
                  <a
                    id="map-site"
                    class="grey-text text-lighten-3 underline"
                    href="http://npmaps.com/"
                    target="_blank"
                  >
                    {" "}
                    NP Maps
                  </a>
                </li>
                <li class="grey-text text-lighten-3">
                  Discover more hikes and trails at{" "}
                  <a
                    class="grey-text text-lighten-3 underline"
                    href="https://www.hikingproject.com/nationalparks"
                    target="_blank"
                  >
                    {" "}
                    Hiking Project
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">© 2022 Copyright Text</div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
