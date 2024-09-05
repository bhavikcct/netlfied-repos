import { toast } from "react-toastify";

export async function checkForNewBuild() {
  try {
    const response = await fetch("/build-timestamp.txt");
    if (!response.ok) throw new Error("Failed to fetch build timestamp");

    const newTimestamp = await response.text();
    const currentTimestamp = localStorage.getItem("build-timestamp");

    if (currentTimestamp && currentTimestamp !== newTimestamp) {
      console.log(122);
      console.log("New build detected. Reloading page.");
      alert("New build detected. Reloading page.");
      window.location.reload();
      toast.success("New build detected. Reloading page.");
    }

    localStorage.setItem("build-timestamp", newTimestamp);
  } catch (error) {
    console.error("Error checking for new build:", error);
  }
}
