import { Translation } from "./Translations";


const errorEndTranslation = Translation("please-try-again-later");

export const DeleteMesage = (deleteTranslationKey, deleteStatus) => {
    let deletingTranslation;
    let targetTranslation = Translation(deleteTranslationKey);

    if(deleteStatus === true) deletingTranslation = Translation("was-delete-succesfully");
    else if(deleteStatus === false) deletingTranslation = Translation("there-was-an-error-deleting");

    if (deleteStatus === false) return `${deletingTranslation} ${targetTranslation} ${errorEndTranslation}`;
    else if (deleteStatus === true) return `${targetTranslation} ${deletingTranslation}.`;
};

export const CreateMessage = (deleteTranslationKey, deleteStatus) => {
    let deletingTranslation;
    let targetTranslation = Translation(deleteTranslationKey);

    if(deleteStatus === true) deletingTranslation = Translation("was-created-succesfully");
    else if(deleteStatus === false) deletingTranslation = Translation("there-was-an-error-creating");

    if (deleteStatus === false) return `${deletingTranslation} ${targetTranslation} ${errorEndTranslation}`;
    else if (deleteStatus === true) return `${targetTranslation} ${deletingTranslation}.`;
};

export const UpdateMessage = (deleteTranslationKey, deleteStatus) => {
    let deletingTranslation;
    let targetTranslation = Translation(deleteTranslationKey);

    if(deleteStatus === true) deletingTranslation = Translation("was-updated-succesfully");
    else if(deleteStatus === false) deletingTranslation = Translation("there-was-an-error-updating");

    if (deleteStatus === false) return `${deletingTranslation} ${targetTranslation} ${errorEndTranslation}`;
    else if (deleteStatus === true) return `${targetTranslation} ${deletingTranslation}.`;
};
