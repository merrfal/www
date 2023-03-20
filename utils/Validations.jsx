const Formats = [
  "png",
  "jpg",
  "jpeg",
  "googleusercontent",
  "firebasestorage",
  "firbease",
  "webp",
];

export const ImageValidation = (link, words = Formats) => words.some((word) => link.includes(word));
