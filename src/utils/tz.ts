const tzs = {
  '+07:00': 'WIB',
  '+08:00': 'WITA',
  '+09:00': 'WIT',
};

export const tzToAbbreviation = (tz: string) => {
  for (const [key, value] of Object.entries(tzs)) {
    if (key == tz) {
      return value;
    }
  }
};
