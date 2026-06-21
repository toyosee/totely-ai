import { stats } from '../../data';

export function TrustBadges() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
      {stats.map((stat, idx) => {
        const Icon = stat.icon;
        return (
          <div key={idx} className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
              <Icon size={20} />
            </div>
            <div>
              <div className="text-lg font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}