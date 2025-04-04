'use client';

import { ProductClient } from "./components/client";

const RecentOrders = () => {

  return(
    <div className="flex-col">
      <div className="flex-1 space-y-4 ">
        <ProductClient data={[]} />
      </div>
    </div>
  );
};

export default RecentOrders;