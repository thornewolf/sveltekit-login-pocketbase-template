export const serializeNonPojos = (obj: any): any => {
    return structuredClone(obj);
}