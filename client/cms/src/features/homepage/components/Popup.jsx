import React, { useState, useEffect } from "react";
import SchoolEventPopup from "./Events/SchoolEventPopup";
import { fetchContentsByArtName } from "../api/Api";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(true); // Initially true to show popup
  const [newestEvent, setNewestEvent] = useState(null); // State to store the newest event

  useEffect(() => {
    const fetchNewestEvent = async () => {
      try {
        const response = await fetchContentsByArtName("School Events");
        console.log("Filtered contents:", response);

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
          <SchoolEventPopup content={newestEvent} onClose={handleClosePopup} />
        </div>
      )}
    </div>
  );
};

export default Popup;
