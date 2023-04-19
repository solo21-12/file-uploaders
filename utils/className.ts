export const className = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};
