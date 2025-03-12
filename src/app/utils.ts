export const getLocalTimeStamp = (timestamp: string) => {
    const timestampNumber = Number(timestamp);
    const date = new Date(timestampNumber * 1000); // Multiply by 1000 to convert to milliseconds
    const localTime = date.toLocaleString(); // Convert to local time format
    return localTime;
}