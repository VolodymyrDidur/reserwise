export const isPlaceOpen = (workingHours: string): boolean => {
    const today = new Date();
    const currentDay = today.toLocaleString("en-US", {weekday: "short"}).toLowerCase();
    const currentTime = getTimeInMinutes(today);

    const hours = workingHours.split("\n");
    for (let i = 0; i < hours.length; i++) {
        const [day, timeRange] = hours[i].split(": ");
        if (day.trim().toLowerCase() === currentDay) {
            const [startTime, endTime] = timeRange.split(" - ");
            if (isTimeWithinRange(startTime, endTime, currentTime)) {
                return true;
            }
        }
    }

    return false;
};

const isTimeWithinRange = (startTime: string, endTime: string, currentTime: number): boolean => {
    const parseTime = (timeString: string): number => {
        const [hourString, minuteString] = timeString.split(":");
        const hour = parseInt(hourString);
        const minute = parseInt(minuteString);

        return hour * 60 + minute;
    };

    const start = parseTime(startTime);
    const end = parseTime(endTime);

    if (start <= end) {
        return currentTime >= start && currentTime <= end;
    } else {
        return currentTime >= start || currentTime <= end;
    }
};

const getTimeInMinutes = (date: Date): number => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return hours * 60 + minutes;
};
