import React, { useState, useEffect } from "react";
import SchoolEventPopup from "./Popup/SchoolEventPopup";
import SchoolEventPopupMobile from "./Popup/SchoolEventPopupMobile";
import { fetchContentsByArtName } from "../api/Api";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [newestEvent, setNewestEvent] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      const screenWidth = window.innerWidth;
      setIsMobile(screenWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  useEffect(() => {
    const fetchNewestEvent = async () => {
      try {
        const response = await fetchContentsByArtName("School Events");

        if (response && response.object && response.object.length > 0) {
          const sortedEvents = response.object.sort((a, b) => b.id - a.id);
          const newestEvent = sortedEvents[0];
          setNewestEvent(newestEvent);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchNewestEvent();
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="popup-container">
      {showPopup && newestEvent && (
        <div className="popup-content">
          {isMobile ? (
            <SchoolEventPopupMobile
              content={newestEvent}
              onClose={handleClosePopup}
            />
          ) : (
            <SchoolEventPopup
              content={newestEvent}
              onClose={handleClosePopup}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Popup;
