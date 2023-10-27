const fetchUsers = async () => {
   const res = await fetch("https://reqres.in/api/users");
   const data = await res.json();
   return data.data;
};

import UsersCard from "@/components/UsersCard";

const HomePage = async () => {
   //se llaman los datos de la funcion que pide a la api
   const users = await fetchUsers();

   return <UsersCard users={users} />;
};

export default HomePage;
