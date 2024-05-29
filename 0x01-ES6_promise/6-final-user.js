import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((data) => data.map((data) => [{
      status: data.status,
      value: data.status === 'fullfilled'
        ? data.value : `${data.reason} `,
    }]));
}
