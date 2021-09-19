import { IColumn } from "pages/Questions/interfaces";
import React from "react";

const columns: IColumn[] = [
  {
    dataField: "id",
    text: "Id",
    sort: true,
    formatter: (cellContent, row) => (
        <>
          <a className="mb-0" href={"#"}>{row.id}</a>
        </>
      ),
  },
  {
    dataField: "user",
    text: "User",
    sort: true
  },
  {
    dataField: "title",
    text: "Title",
    sort: true
  },
  {
    dataField: "description",
    text: "Description",
    sort: true
  },
  {
    dataField: "date_added",
    text: "Date added",
    sort: true
  }
];

export default columns;