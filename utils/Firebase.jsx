const FirebaseNotReadableModifiers = ["http", "https", "://", "."];

export const isStorageReadable = (url) => {
    if ([null, undefined, ""].includes(url)) return false;
    
    const isFromStorage = FirebaseNotReadableModifiers.forEach((modifier) => {
        if (url.includes(modifier)) return false;
    });

    return isFromStorage;
};
