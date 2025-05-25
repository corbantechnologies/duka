"use client";

import { useFollowShop } from "@/lib/react-query/queriesAndMutations";
import { Heart, Loader2 } from "lucide-react";

function FollowBtn({ shopId, className }) {
  const { mutateAsync: followShop, isPending, isSuccess } = useFollowShop();
  const handleClick = async () => {
    await followShop(shopId);
  };
  return (
    <button onClick={handleClick} className={`border-2 border-gray-900 transition-all duration-300 hover:bg-primary hover:text-white hover:border-transparent py-1 px-3 gap-2 rounded-full flex items-center ${className}`}>
      <Heart size={16} /> {isPending ? <Loader2 className="animate-spin" /> : 'Follow shop'}
    </button>
  );
}

export default FollowBtn;
