import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((result) => ([{ status: 'resolved', value: result[0] },
      { status: 'resolved', value: result[1] }]))
    .catch((error) => ([{ status: 'rejected', value: error }]));
}
