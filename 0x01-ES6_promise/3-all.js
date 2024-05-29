import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return createUser().then((data) => uploadPhoto()
    .then((ph) => console.log(`${ph.body} ${data.firstName} ${data.lastName}`)));
}
