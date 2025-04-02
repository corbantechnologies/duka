
const DashboardCard = ({title, value, percentage, icon, trend}) => {
  return (
    <div className="p-5 rounded-xl bg-primaryLight">
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
                <div className="size-10 grid place-content-center rounded-full">
                {icon}
                </div>
                <div className="flex flex-col">
                    <span className="text-sm text-[#676767] font-medium">{title}</span>
                    <span className="text-2xl font-bold">{value}</span>
                </div>
            </div>
            <div className="flex items-center gap-2">
            {trend}
            <span className="text-sm text-[#676767] font-medium">{percentage}</span>
            </div>
        </div>
    </div>
  )
}

export default DashboardCard