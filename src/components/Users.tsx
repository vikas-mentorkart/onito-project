import React, { useEffect } from "react";
import DataTable from "datatables.net-dt";
import "datatables.net-responsive-dt";
const Users: React.FC = () => {
  useEffect(() => {
    const dataStr = localStorage.getItem("userData");
    if (!!dataStr) {
      let table = new DataTable("#myTable", {
        data: JSON.parse(dataStr),
        columns: [
          { data: "name" },
          { data: "mobile_no" },
          { data: "govt_id" },
          { data: "age" },
          { data: "sex" },
          { data: "address" },
          { data: "city" },
          { data: "state" },
          { data: "zipcode" },
          { data: "selectedCountry" },
        ],
      });
    }
  }, []);
  return (
    <div>
      <table id="myTable"></table>
    </div>
  );
};

export default Users;
