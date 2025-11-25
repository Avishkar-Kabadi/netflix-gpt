import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Netflix-Logo.png";
import USER_AVTAR from "../assets/Profile-icon.jpg";
import { listenToAuthChanges, signOutUser } from "../services/authService";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = listenToAuthChanges(dispatch, navigate);

    return () => {
      unsubscribe();
    };
  }, []);

  const handleSignOut = async () => {
    try {
      await signOutUser();
    } catch (error) {
      navigate("/error");
    }
  };

  const user = useSelector((store) => store.user);
  const Profile = user?.photoURL || USER_AVTAR;

  return (
    <>
      <div className="absolute top-0 left-0 w-full z-20 bg-linear-to-b from-black to-transparent flex justify-between items-center">
        <div className="px-2 sm:px-8 py-2">
          <img className="w-24 sm:w-36 md:w-44" src={Logo} alt="Netflix Logo" />
        </div>
        {user && (
          <div className="px-2 sm:px-8 py-2 flex items-center space-x-2 sm:space-x-4">
            <img
              src={Profile}
              alt="User Profile Icon"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-sm object-cover cursor-pointer"
            />
            <button
              onClick={handleSignOut}
              className="text-white text-xs font-bold sm:text-sm md:text-base opacity-90 hover:opacity-100 transition duration-150 cursor-pointer p-1"
            >
              (Sign Out)
            </button>
          </div>
        )}
      </div>
    </>
  );
}
