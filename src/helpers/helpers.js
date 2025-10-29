// export const truncate = (string, length) => {
//     if (string.length > length) {
//       return string.slice(0, length) + '...';
//     }
//     return string;
//   };

export function truncate(input, length = 5) {
  if (input.length > length) {
    return input.substring(0, length) + "...";
  }
  return input;
}