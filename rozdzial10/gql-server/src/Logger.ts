export const log = async (
  resolver: any,
  parent: any,
  args: any,
  context: any,
  info: any
) => {
  if (!parent) {
    console.log("Rozpoczynam rejestrowanie...");
  }

  const result = await resolver(parent, args, context, info);

  console.log("Zakończono wywołanie resolwera.");

  return result;
};
