const DashboardCard = ({
  title,
  value,
  percentage,
  icon,
  trend,
  insight,
  action,
}) => {
  return (
    <div className="p-5 rounded-xl border-2 border-slate-100">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1 mb-3">
          <div className="flex items-center gap-1">
            {icon}
            <span className="text-sm text-[#676767] font-medium">{title}</span>
          </div>
          <span className="text-2xl font-bold">{value}</span>
        </div>
        <div className="flex items-center gap-2">
          {trend}
          <span className="text-sm text-[#676767] font-medium">
            {percentage}
          </span>
        </div>
      </div>
      <p className="text-[15px] tracking-wide mb-1">{insight}</p>
      <p className="text-sm text-[#676767]">{action}</p>
    </div>
  );
};

export default DashboardCard;
