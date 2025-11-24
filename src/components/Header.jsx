import { useSelector } from "react-redux";
import Logo from "../assets/Netflix-Logo.png";
import { signOutUser } from "../services/authService";
import ProfileIcon from "../assets/Profile-icon.jpg";

export default function Header() {
  const handleSignOut = async () => {
    const result = await signOutUser();
    console.log(result);
  };

  const user = useSelector((store) => store.user);
  const Profile = user?.photoURL || ProfileIcon;

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
