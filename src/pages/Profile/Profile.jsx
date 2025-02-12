import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import useAxiosPubic from '../../Hooks/useAxiosPubic';

const Profile = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPubic();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      if (!user?.email) return;
      
      try {
        const response = await axiosPublic.get(`/users/email/${user.email}`);
        setUserData(response.data);
      } catch (err) {
        setError("User not found");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [user?.email, axiosPublic]);

  if (loading) return <p>Loading profile...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="max-w-md mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-3">User Profile</h2>
      <p><strong>Name:</strong> {userData?.name}</p>
      <p><strong>Email:</strong> {userData?.userEmail}</p>
      <p>Status:{userData?.status}</p>
    </div>
  );
};

export default Profile;
