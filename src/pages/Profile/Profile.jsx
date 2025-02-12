import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosPubic from "../../Hooks/useAxiosPubic";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Firebace/Firebace.init";

const Profile = () => {
  const { user,resendVerificationEmail,signOutUser } = useAuth();
  const axiosPublic = useAxiosPubic();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
 
  const navigate = useNavigate();

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

  
    useEffect(() => {
        if (auth.currentUser?.emailVerified) {
            navigate("/"); // Redirect after verification
        }
    }, [user, navigate]);

    const handleLogOut = ()=>{
      signOutUser()
      .then(res=>{
    
      })
      .catch(error=>{
    
      })
     }

  if (loading) return <p>Loading profile...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className=" min-h-screen ">
       <div className=" flex justify-between items-center">
      <div className="flex items-center gap-10 my-4">
        <div className="">
          <img
            src={"https://via.placeholder.com/150"} // Profile picture
            alt="Profile"
            className="w-60 h-60 rounded-full object-cover border-4 border-blue-600 shadow-md"
          />
        </div>

      
       <div>
          <h2 className="text-3xl font-semibold  text-blue-600 mt-4">
            {userData?.name}
          </h2>
          <p>
            <strong className="text-gray-500">Email:</strong>{" "}
            {userData?.userEmail}
          </p>
          <p>
            <strong className="text-gray-500">Status:</strong>{" "}
            {userData?.status || "Not Verified"}
          </p>

          <p>
            <strong className="text-gray-500">Bio:</strong>{" "}
            {userData?.bio || "No bio available"}
          </p>

        </div>

       

       </div>
       <div className="flex flex-col  gap-6 ">
          <button onClick={resendVerificationEmail}  className="btn">Verify</button>
          <button className="btn">Update Profile</button>
          <button onClick={handleLogOut} className="">Log OUT</button>
        </div>

        

      </div>
      <div className=" ">
        
        
          {/* Divider */}
          <div className="my-6 border-t border-gray-300"></div>

          {/* Crime Reports */}
          <div className="flex  justify-center ">
            <div className="text-center">
            <h3 className="text-xl font-semibold text-blue-600">
              Your Crime Reports
            </h3>

            <p className="mt-2 text-gray-500">You have no crime reports yet.</p>
            </div>
          </div>

          {/* Additional Information */}
        
        </div>
      </div>
   
  );
};

export default Profile;
