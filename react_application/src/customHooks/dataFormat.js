import { useCallback } from "react";

const useFormat = () => {
  const formatValue = useCallback((value, type) => {
    switch (type) {
      case "seconds":
        return formatSeconds(value);
      case "bytes":
        return formatBytes(value);
      case "datetime":
        return formatDateTime(value,"time");
      case "array":
        return formatArray(value);
      case "minutes":
        return formatMinutes(value);
      case "date":
        return formatDateTime(value,"date");
      default:
        return value; 
    }
  }, []);




const formatArray=(arr)=>{
    const formattedString =
    arr.length > 1
      ? arr.slice(0, -1).join(", ") + " & " + arr[arr.length - 1]
      : arr[0] || "";
    
      return formattedString
  
  }
  const formatSeconds = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    return [hours, minutes, secs]
        .map(unit => String(unit).padStart(2, '0'))
        .join(':');
  };

  const formatMinutes=(seconds)=>{
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    let result = [];

    if (hours > 0) {
        result.push(`${hours} ${hours === 1 ? 'hour' : 'hours'}`);
    }
    if (minutes > 0) {
        result.push(`${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`);
    }
    if (secs > 0 || result.length === 0) { // Always show seconds if no other value exists
        result.push(`${secs} ${secs === 1 ? 'second' : 'seconds'}`);
    }

    return result.join(' ');

  }
  const formatBytes = (bytes) => {
    return Math.round(bytes / 1024) + " MB";
  };

  const formatDateTime = (isoString,type) => {
    const [datePart, timePart] = isoString.split('T'); 
    const [year, month, day] = datePart.split('-'); 
    let [hours, minutes] = timePart.replace('Z', '').split(':'); 

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const monthName = monthNames[parseInt(month, 10) - 1];
    const hourNum = parseInt(hours, 10);
    const ampm = hourNum >= 12 ? 'PM' : 'AM';
    hours = hourNum % 12 || 12;
    if(type=='time'){
    return `${day} ${monthName} ${year}, ${String(hours).padStart(2, '0')}:${minutes} ${ampm}`;
    }
    else if(type=='date'){
        return `${day} ${monthName} ${year}`;
    }
  };

  return { formatValue };
};

export default useFormat;
