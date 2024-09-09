const numberRange = ({ length = 0, multiplier = 0 }: { length: number; multiplier: number }) =>
  Array.from({ length }, (_, i) => (i + 1) * multiplier);

export default numberRange;
