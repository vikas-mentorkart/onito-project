import React, { useEffect, useRef } from "react";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import DataTables, { Config } from "datatables.net-dt";
export default function Datatable({ ...props }: Config) {
  const tableRef = useRef<HTMLTableElement>(null);
  useEffect(() => {
    const dt = new DataTables(tableRef.current!, {
      ...props,
    });
    return () => {
      dt.destroy();
    };
  }, [props]);
  return (
      <div className="row justify-content-center">
        <div className="col-md-10">
          <table
            id="table_id"
            className=" table table p-3 mb-2 bg-success bg-gradient"
            ref={tableRef}
          >
          </table>
        </div>
      </div>
  );
}
