import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const userCreation = createUser();
  const photoUpload = uploadPhoto();
  return userCreation
    .then((userCreationData) => photoUpload
      .then((photoUploadData) => console.log(`${photoUploadData.body} ${userCreationData.firstName} ${userCreationData.lastName}`)))
    .catch(() => console.log('Signup system offline'));
}
