import React, { useEffect, useState } from "react";
import Datatable from "./Datatable/Datatable";
const Users: React.FC = () => {
  // const [data, setData] = useState<Object[]>([]);
  useEffect(() => {
    const dataStr = localStorage.getItem("userData");
    if (!!dataStr) {
      // setData(JSON.parse(dataStr));
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
  const data = [{
    name: "Vikas Negi",
    mobile_no: "7340986087",
    govt_id: "",
    age: "22",
    sex: "MALE",
    address: "#102E, Shivalik Vihar, Karoran Road, Nayagaon, Mohali, Punjab",
    city: "Mohali",
    state: "Punjab",
    zipcode: "160103",
    selectedCountry: "Republic of India",
  }];
  return (
    <div>
      <Datatable columns={columns} data={data} />
    </div>
  );
};

export default Users;
