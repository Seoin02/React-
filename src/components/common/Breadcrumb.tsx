import React from "react";
import { Category } from "../../constants/category";

interface IBreadCrumbsPros {
  readonly category?: string;
  readonly crumb?: string;
}

const BreadCrumb = ({ category = "", crumb = "" }: IBreadCrumbsPros): JSX.Element => {
  const resolveCategory = Category[category] || category;

  return (
    <div className="text-sm breadcrumbs">
      <ul>
        <li>{resolveCategory}</li>
        <li>{crumb}</li>
      </ul>
    </div>
  );
};

export default BreadCrumb;
