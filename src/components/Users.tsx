import React, { useEffect, useState } from "react";
import Datatable from "./Datatable/Datatable";
import { useNavigate } from "react-router-dom";
const Users: React.FC = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<Object[]>([]);
  useEffect(() => {
    const dataStr = localStorage.getItem("userData");
    if (!!dataStr) {
      setData(JSON.parse(dataStr));
    }
  }, []);
  const columns = [
    { data: "name", title:"Name"  },
    { data: "mobile_no", title:"Mobile No." },
    { data: "govt_id", title:"Govt. ID" },
    { data: "age", title:"Age" },
    { data: "sex", title:"Sex" },
    { data: "address", title:"Address" },
    { data: "city", title:"City" },
    { data: "state", title:"State" },
    { data: "zipcode", title:"Zipcode" },
    { data: "selectedCountry", title:"Country" },
  ];
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="border text-center text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight ">
          User List{" "}
        </h2>
        <button
          type="button"
          className="text-white hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
          style={{ background: "#04aa6d" }}
          onClick={()=>navigate("/register")}
        >
          Add User
        </button>
      </div>
      <Datatable columns={columns} data={data} />
    </div>
  );
};

export default Users;
