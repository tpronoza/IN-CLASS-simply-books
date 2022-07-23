import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleAuthor } from '../../../api/authorData';
import AuthorForm from '../../../components/forms/AuthorForm';

export default function EditAuthor() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleAuthor(firebaseKey).then(setEditItem);
  }, [firebaseKey]);

  return (<AuthorForm obj={editItem} />);
}
