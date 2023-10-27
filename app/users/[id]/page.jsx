const getUserId = async (id) => {
   const res = await fetch(`https://reqres.in/api/users/${id}`);
   const data = await res.json();
   return data.data;
};

const UserIdPage = async ({ params }) => {
   const userId = await getUserId(params.id);
   console.log(userId);
   return (
      <div className="bg-slate-800 p-10 rounded-md">
         <img
            src={userId.avatar}
            alt="photo user"
            className="m-auto my-4 rounded-md"
         />
         <h3 className="text-3xl font-bold">
            {userId.id}. {userId.first_name} {userId.last_name}
         </h3>
         <p className="text-slate-400">Email: {userId.email}</p>
      </div>
   );
};

export default UserIdPage;
