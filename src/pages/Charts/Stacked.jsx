import React from 'react'
import { Header, StackedComponent } from "../../components";

const Stacked = () => {
  return (
    <div className="m-4 md:m-10 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Expense and Budget" />
      <div className="w-full">
        <StackedComponent />
      </div>
    </div>
  );
}

export default Stacked