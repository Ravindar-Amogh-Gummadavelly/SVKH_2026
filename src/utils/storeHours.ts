import { STORE_INFO } from '../data/storeInfo';

export interface StoreStatus {
  isOpen: boolean;
  displayText: string;
  nextChangeText: string;
  todaySchedule: string;
}

/**
 * Parses time string like '10:00 AM' into minutes from midnight
 */
function timeToMinutes(timeStr: string): number {
  const match = timeStr.match(/(\d+):(\d+)\s*(AM|PM)/i);
  if (!match) return 0;
  
  let hours = parseInt(match[1], 10);
  const minutes = parseInt(match[2], 10);
  const period = match[3].toUpperCase();

  if (period === 'PM' && hours < 12) hours += 12;
  if (period === 'AM' && hours === 12) hours = 0;

  return hours * 60 + minutes;
}

export function getCurrentStoreStatus(): StoreStatus {
  const now = new Date();
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDayName = dayNames[now.getDay()];
  
  const todayHourObj = STORE_INFO.schedule.find(s => s.day.toLowerCase() === currentDayName.toLowerCase()) || STORE_INFO.schedule[0];

  if (todayHourObj.isClosed) {
    return {
      isOpen: false,
      displayText: 'CLOSED NOW',
      nextChangeText: 'Closed today',
      todaySchedule: `${todayHourObj.day}: Closed`
    };
  }

  const openMinutes = timeToMinutes(todayHourObj.openTime);
  const closeMinutes = timeToMinutes(todayHourObj.closeTime);
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const isOpen = currentMinutes >= openMinutes && currentMinutes < closeMinutes;

  if (isOpen) {
    return {
      isOpen: true,
      displayText: 'OPEN NOW',
      nextChangeText: `Closes at ${todayHourObj.closeTime}`,
      todaySchedule: `${todayHourObj.day}: ${todayHourObj.openTime} - ${todayHourObj.closeTime}`
    };
  } else if (currentMinutes < openMinutes) {
    return {
      isOpen: false,
      displayText: 'CLOSED NOW',
      nextChangeText: `Opens today at ${todayHourObj.openTime}`,
      todaySchedule: `${todayHourObj.day}: ${todayHourObj.openTime} - ${todayHourObj.closeTime}`
    };
  } else {
    return {
      isOpen: false,
      displayText: 'CLOSED NOW',
      nextChangeText: `Opens tomorrow at 10:00 AM`,
      todaySchedule: `${todayHourObj.day}: ${todayHourObj.openTime} - ${todayHourObj.closeTime}`
    };
  }
}
