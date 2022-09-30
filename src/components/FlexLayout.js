import React  from "react";

const FlexLayout = ({children}) => {
  return (
    <div className="flex flex-wrap max-h-full my-8 flex-row mx-auto justify-between">
      {children}
    </div>
  );
};

export default FlexLayout;
