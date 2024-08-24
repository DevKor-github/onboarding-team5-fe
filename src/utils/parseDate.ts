export const parseDate = (value: string | undefined) => {
  if (!value) {
    return;
  }
  const date = new Date(value);
  const parsedDate = date
    .toLocaleTimeString()
    .split(':')
    ?.slice(0, -1)
    .join(':');
  return parsedDate;
};
