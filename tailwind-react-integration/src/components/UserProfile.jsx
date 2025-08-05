function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 sm:p-4 md:p-8 max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg">
      <img className="rounded-full md:w-36 md:h-36 sm:w-24 sm:h-24 mx-auto" src="https://via.assets.so/shoe.png?id=1&q=95&w=360&h=360&fit=fill" alt="User" />
      <h1 className="sn:text-lg md:text-xl text-blue-800 my-4">John Doe</h1>
      <p className="text-gray-600 sm:text-sm md:text-base">Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile;