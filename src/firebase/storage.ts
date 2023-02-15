import {
  getDownloadURL,
  StorageReference,
  uploadString,
} from "firebase/storage";

export const addImage = async (ref: StorageReference, file: string) => {
  return await uploadString(ref, file, "data_url").then(async () => {
    return getDownloadURL(ref);
  });
};
