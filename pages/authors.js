import { React, useState, useEffect } from 'react';
import { getAuthors } from '../api/authorData';
import AuthorCard from '../components/AuthorCard';
import { useAuth } from '../utils/context/authContext';

export default function Authors() {
  const [authors, setAuthors] = useState([]);
  const { user } = useAuth();

  const getAllTheAuthors = () => {
    getAuthors(user.uid).then(setAuthors);
  };

  useEffect(() => {
    getAllTheAuthors();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.uid]);

  return (
    <div className="d-flex flex-wrap">
      {authors.map((authorObj) => (
        <AuthorCard key={authorObj.firebaseKey} authorObj={authorObj} onUpdate={getAllTheAuthors} />
      ))}
    </div>
  );
}
