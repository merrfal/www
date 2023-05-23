import sqLangauge  from "../locales/sq_AL.json";

//TODO: Manage the language in case of multiple languages

export const Translation = (key) => {
    const language = sqLangauge;
    const translation = language[key];

    return translation || "INVALID_LOCALE_KEY";
}