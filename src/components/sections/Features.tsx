import { features } from '../../data';

export function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-blue-600 text-sm font-semibold bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100 mb-4">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark">
            Everything You Need to Shop Smarter
          </h2>
          <p className="text-gray-600 mt-4">
            Totely brings together the best of local commerce, all through your WhatsApp chat.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group p-8 bg-white rounded-2xl border border-gray-100/50 hover:border-blue-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-dark mt-4">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mt-2">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}