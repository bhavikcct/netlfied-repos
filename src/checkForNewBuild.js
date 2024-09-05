export async function checkForNewBuild() {
    try {
      const response = await fetch('/build-timestamp.txt');
      if (!response.ok) throw new Error('Failed to fetch build timestamp');
      
      const newTimestamp = await response.text();
      const currentTimestamp = localStorage.getItem('build-timestamp');
  
      if (currentTimestamp && currentTimestamp !== newTimestamp) {
        console.log('New build detected. Reloading page.');
        window.location.reload();
      }
  
      localStorage.setItem('build-timestamp', newTimestamp);
    } catch (error) {
      console.error('Error checking for new build:', error);
    }
  }
  