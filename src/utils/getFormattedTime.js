export function getFormattedTime(timestamp) {
    const now = new Date();
    const timeDifference = now - new Date(timestamp); // difference in milliseconds

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) {
        return `${seconds} sec ago`;
    } else if (minutes < 60) {
        return `${minutes} min ago`;
    } else if (hours < 24) {
        return `${hours} hr ago`;
    } else {
        return `${days} day${days > 1 ? "s" : ""} ago`;
    }
}
