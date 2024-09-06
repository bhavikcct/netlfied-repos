import { toast } from "react-toastify";
import { useState } from "react";
import Modal from "./modal/build-modal";
export function useCheckForNewBuild() {
  const [showModal, setShowModal] = useState(false);

  const checkForNewBuild = async () => {
    try {
      const response = await fetch("/build-timestamp.txt");
      if (!response.ok) throw new Error("Failed to fetch build timestamp");

      const newTimestamp = await response.text();
      const currentTimestamp = localStorage.getItem("build-timestamp");

      if (currentTimestamp && currentTimestamp !== newTimestamp) {
        toast.info("New version available. Click to update.");
        setShowModal(true);
      }

      localStorage.setItem("build-timestamp", newTimestamp);
    } catch (error) {
      console.error("Error checking for new build:", error);
    }
  };

  const handleReload = () => {
    setShowModal(false);
    window.location.reload();
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return {
    checkForNewBuild,
    modal: (
      <Modal
        isOpen={showModal}
        onClose={handleClose}
        onConfirm={handleReload}
      />
    ),
  };
}
