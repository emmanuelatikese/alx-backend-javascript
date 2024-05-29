import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  try {
    const photoAns = await uploadPhoto();
    const userAns = await createUser();
    return {
      photo: photoAns,
      user: userAns,
    };
  } catch (err) {
    return {
      photo: null,
      user: null,
    };
  }
}
