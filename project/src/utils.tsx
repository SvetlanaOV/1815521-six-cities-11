import dayjs from 'dayjs';

export const humanizeDate = (date: string) => dayjs(date).format('MMMM YYYY');
