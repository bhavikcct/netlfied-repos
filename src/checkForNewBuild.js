import { toast } from "react-toastify";

export async function checkForNewBuild() {
  try {
    const response = await fetch("/build-timestamp.txt");
    if (!response.ok) throw new Error("Failed to fetch build timestamp");

    const newTimestamp = await response.text();
    const currentTimestamp = localStorage.getItem("build-timestamp");

    if (currentTimestamp && currentTimestamp !== newTimestamp) {
      localStorage.setItem("build-timestamp", newTimestamp);
      toast.info('New version available. Click to update.');
      console.log(122);
      if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage({ type: 'SKIP_WAITING' });
      }
      // window.location.reload();
    }

  } catch (error) {
    console.error("Error checking for new build:", error);
  }
}
