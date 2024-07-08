import React, { useState, useEffect } from "react";
import SchoolEventPopup from "./Events/SchoolEventPopup";
import SchoolEventPopupMobile from "./Events/SchoolEventPopupMobile";
import { fetchContentsByArtName } from "../api/Api";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(true); // Initially true to show popup
  const [newestEvent, setNewestEvent] = useState(null); // State to store the newest event
  const [isMobile, setIsMobile] = useState(false); // State to track if the screen is mobile

  useEffect(() => {
    // Function to check if the screen width is mobile
    const checkIfMobile = () => {
      const screenWidth = window.innerWidth;
      setIsMobile(screenWidth < 768); // Adjust the breakpoint as per your design
    };

    // Call the function initially and on resize
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
          // Sort events by id in descending order to get the newest event first
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
