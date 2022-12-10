import { useRouter } from 'next/router';
import React, { use, useEffect, useState } from 'react';

const UserLayout = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, [user]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return <>{children}</>;
};

export default UserLayout;
