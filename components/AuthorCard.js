/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';

export default function AuthorCard({ authObj }) {
  return (
    <>
      <div>User</div>
      <div>firebaseKey: {authObj.firebaseKey}</div>
      <div>Email: {authObj.email}</div>
      <div>First Name: {authObj.firstName}</div>
      <div>Last Name: {authObj.lastName}</div>
      <div>Favorite: {authObj.favorite}</div>
    </>
  );
}

AuthorCard.propTypes = {
  authObj: PropTypes.shape({
    email: PropTypes.string,
    firebaseKey: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    favorite: PropTypes.bool,
    image: PropTypes.string,
  }).isRequired,
};

// export default function AuthorCard(
//   {
//     email, firebaseKey, firstName, lastName, favorite, image,
//   },
// ) {
//   return (
//     <>
//       <div>User</div>
//       <div>firebaseKey: {firebaseKey}</div>
//       <div>Email: {email}</div>
//       <div>First Name: {firstName}</div>
//       <div>Last Name: {lastName}</div>
//       <div>Favorite: {favorite}</div>
//       <img src={image} alt={firstName} />
//     </>
//   );
// }

// AuthorCard.propTypes = {
//   email: PropTypes.string,
//   firebaseKey: PropTypes.string,
//   firstName: PropTypes.string,
//   lastName: PropTypes.string,
//   favorite: PropTypes.bool,
//   image: PropTypes.string,
// };

// AuthorCard.defaultProps = {
//   email: 'blah@blah.com',
//   firstName: 'Taty',
//   lastName: 'Pro',
//   favorite: true,
//   image: 'https://www.millcitypress.net/wp-content/uploads/2018/08/author-bios.jpg',
//   firebaseKey: '',
// };
