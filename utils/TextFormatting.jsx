export const CapitalizeText = (title) => {
    const words = title.split(" ");
    
    const capitalized = words.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    
    return capitalized.join(" ");
}
