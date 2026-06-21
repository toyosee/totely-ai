import { useState } from 'react';
import {
  MessageCircle,
  Sparkles,
  ArrowRight,
  ShoppingBag,
  Store,
  Truck,
  ChevronDown,
  Check,
  CreditCard,
} from 'lucide-react';

interface Message {
  type: 'bot' | 'option' | 'dropdown';
  text?: string;
  options?: { id: string; label: string; icon?: React.ReactNode }[];
  items?: { name: string; price: string; store: string }[];
}

export function WhatsAppMockup() {
  const [step, setStep] = useState(0);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [selectedStore, setSelectedStore] = useState<string | null>(null);
  const [showPinInput, setShowPinInput] = useState(false);
  const [pin, setPin] = useState('');

  const stores = [
    { id: 'station', name: 'Station Market', address: 'Station Road, Kaduna' },
    { id: 'central', name: 'Central Market', address: 'Central Area, Kaduna' },
    { id: 'kawo', name: 'Kawo Market', address: 'Kawo, Kaduna' },
  ];

  const products = [
    { id: 'rice', name: 'Rice 5kg', price: '₦6,200', store: 'Station Market' },
    { id: 'beans', name: 'Beans 2kg', price: '₦2,500', store: 'Station Market' },
    { id: 'tomatoes', name: 'Tomatoes 1kg', price: '₦1,000', store: 'Central Market' },
    { id: 'onions', name: 'Onions 1kg', price: '₦800', store: 'Central Market' },
    { id: 'bread', name: 'Bread 2 loaves', price: '₦1,600', store: 'Station Market' },
  ];

  const toggleItem = (itemName: string) => {
    setSelectedItems((prev) =>
      prev.includes(itemName) ? prev.filter((id) => id !== itemName) : [...prev, itemName]
    );
  };

  const handleContinue = () => {
    if (selectedItems.length > 0) {
      setStep(2);
    }
  };

  const handleStoreSelect = (storeId: string) => {
    setSelectedStore(storeId);
    setStep(3);
  };

  const handleConfirm = () => {
    setShowPinInput(true);
  };

  const handlePinSubmit = () => {
    if (pin.length === 4) {
      setStep(4);
      setShowPinInput(false);
    }
  };

  const handleOptionClick = (optionId: string) => {
    switch (optionId) {
      case 'start':
      case 'browse':
        setStep(1);
        break;
      case 'continue':
        if (selectedItems.length > 0) setStep(2);
        break;
      case 'clear':
        setSelectedItems([]);
        break;
      case 'back':
        setStep(1);
        break;
      case 'confirm':
        handleConfirm();
        break;
      case 'edit':
        setStep(1);
        break;
      case 'new':
        setStep(0);
        setSelectedItems([]);
        setSelectedStore(null);
        setPin('');
        break;
      case 'track':
        // Track order action placeholder
        break;
      default:
        break;
    }
  };

  const renderMessages = () => {
    const messages: Message[] = [];

    // Welcome
    messages.push({
      type: 'bot',
      text: "Hi! I'm Totely 👋<br />Your personal shopping assistant.",
    });
    messages.push({
      type: 'bot',
      text: 'What would you like to buy today?',
    });

    // Step 0: Welcome options
    if (step === 0) {
      messages.push({
        type: 'option',
        options: [
          { id: 'start', label: 'Start Shopping', icon: <ShoppingBag size={16} /> },
          { id: 'browse', label: 'Browse Categories' },
          { id: 'help', label: 'Help' },
        ],
      });
    }

    // Step 1: Product Selection
    if (step === 1) {
      messages.push({
        type: 'bot',
        text: '🛍️ <strong>Select items you need:</strong>',
      });
      messages.push({
        type: 'dropdown',
        items: products.map((p) => ({
          name: p.name,
          price: p.price,
          store: p.store,
        })),
      });
      messages.push({
        type: 'option',
        options: [
          {
            id: 'continue',
            label: `Continue (${selectedItems.length} items)`,
            icon: <ArrowRight size={16} />,
          },
          { id: 'clear', label: 'Clear All' },
        ],
      });
    }

    // Step 2: Store Selection
    if (step === 2) {
      messages.push({
        type: 'bot',
        text: '📍 <strong>Where would you like to get your order from?</strong>',
      });
      messages.push({
        type: 'dropdown',
        options: stores.map((s) => ({
          id: s.id,
          label: `${s.name} • ${s.address}`,
          icon: <Store size={14} />,
        })),
      });
      messages.push({
        type: 'option',
        options: [{ id: 'back', label: 'Back to Items' }],
      });
    }

    // Step 3: Order Summary with PIN
    if (step === 3 && selectedStore) {
      const total =
        selectedItems.reduce((sum, name) => {
          const product = products.find((p) => p.name === name);
          return sum + parseInt(product?.price.replace(/[₦,]/g, '') || '0');
        }, 0) + 1000;

      const store = stores.find((s) => s.id === selectedStore);

      messages.push({
        type: 'bot',
        text: `
          <strong>📋 Order Summary</strong><br /><br />
          ${selectedItems
            .map((name) => {
              const p = products.find((pr) => pr.name === name);
              return `• ${p?.name} — ${p?.price}<br />`;
            })
            .join('')}
          <br />
          Subtotal: ₦${(total - 1000).toLocaleString()}<br />
          Delivery Fee: ₦1,000<br />
          <strong>Total: ₦${total.toLocaleString()}</strong><br /><br />
          Store: ${store?.name}<br />
          Address: ${store?.address}
        `,
      });
      messages.push({
        type: 'option',
        options: [
          { id: 'confirm', label: 'Confirm Order', icon: <Check size={16} /> },
          { id: 'edit', label: 'Edit Cart' },
        ],
      });
    }

    // Step 4: Confirmation
    if (step === 4) {
      const total =
        selectedItems.reduce((sum, name) => {
          const p = products.find((pr) => pr.name === name);
          return sum + parseInt(p?.price.replace(/[₦,]/g, '') || '0');
        }, 0) + 1000;

      messages.push({
        type: 'bot',
        text: `
          <strong>✅ Order Confirmed!</strong><br /><br />
          Order #TOT-2024-001<br />
          Amount: ₦${total.toLocaleString()}<br />
          Store: ${stores.find((s) => s.id === selectedStore)?.name}<br /><br />
          📦 Estimated delivery: 1-2 hours<br />
          🔗 Track your order: <a href="#" class="text-blue-600 underline">Track Now</a>
        `,
      });
      messages.push({
        type: 'option',
        options: [
          { id: 'track', label: 'Track Order', icon: <Truck size={16} /> },
          { id: 'new', label: 'New Order' },
        ],
      });
    }

    return messages;
  };

  return (
    <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl shadow-gray-200/50 overflow-hidden border border-gray-100/50 transition-all duration-500 hover:shadow-gray-300/40">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3 flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-red-400" />
        <span className="w-3 h-3 rounded-full bg-yellow-400" />
        <span className="w-3 h-3 rounded-full bg-green-400" />
        <span className="ml-2 text-white text-sm font-medium flex items-center gap-2">
          <MessageCircle size={14} />
          Totely
        </span>
        <Sparkles size={14} className="text-white/60 ml-auto animate-pulse" />
        <span className="text-white/60 text-xs">Online</span>
      </div>

      {/* Messages */}
      <div className="p-4 space-y-3 bg-gradient-to-b from-gray-50 to-gray-100/50 min-h-[500px] max-h-[500px] overflow-y-auto flex flex-col">
        {renderMessages().map((msg, idx) => (
          <div
            key={idx}
            className="animate-fadeInUp"
            style={{ animationDelay: `${idx * 0.1}s`, opacity: 0 }}
          >
            {/* Bot Message */}
            {msg.type === 'bot' && (
              <div className="bg-white rounded-2xl rounded-bl-md px-4 py-3 max-w-[90%] self-start shadow-sm border border-gray-100 text-sm leading-relaxed">
                <div dangerouslySetInnerHTML={{ __html: msg.text || '' }} />
              </div>
            )}

            {/* Options */}
            {msg.type === 'option' && msg.options && (
              <div className="flex flex-col gap-2 max-w-[90%] self-start w-full">
                {msg.options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleOptionClick(opt.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                      opt.id === 'continue' || opt.id === 'confirm'
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-100 hover:shadow-blue-200 hover:scale-[1.02]'
                        : opt.id === 'clear' || opt.id === 'back' || opt.id === 'edit'
                        ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        : 'bg-white border border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-blue-50'
                    }`}
                  >
                    {opt.icon}
                    {opt.label}
                  </button>
                ))}
              </div>
            )}

            {/* Product Dropdown */}
            {msg.type === 'dropdown' && msg.items && (
              <div className="bg-white rounded-2xl rounded-bl-md p-3 max-w-[95%] self-start shadow-sm border border-gray-100 w-full">
                <div className="space-y-2">
                  {msg.items.map((item) => {
                    const isSelected = selectedItems.includes(item.name);
                    return (
                      <div
                        key={item.name}
                        onClick={() => toggleItem(item.name)}
                        className={`flex items-center justify-between p-2 rounded-xl cursor-pointer transition-all duration-200 ${
                          isSelected
                            ? 'bg-blue-50 border border-blue-200'
                            : 'hover:bg-gray-50 border border-transparent'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${
                              isSelected ? 'bg-blue-600 border-blue-600' : 'border-gray-300'
                            }`}
                          >
                            {isSelected && <Check size={12} className="text-white" />}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">{item.name}</div>
                            <div className="text-xs text-gray-500">{item.store}</div>
                          </div>
                        </div>
                        <span className="text-sm font-semibold text-gray-900">{item.price}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Store Dropdown */}
            {msg.type === 'dropdown' && msg.options && (
              <div className="bg-white rounded-2xl rounded-bl-md p-3 max-w-[95%] self-start shadow-sm border border-gray-100 w-full">
                <div className="space-y-2">
                  {msg.options.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => handleStoreSelect(opt.id)}
                      className="w-full flex items-center gap-3 p-2 rounded-xl hover:bg-blue-50 transition-all duration-200 text-left"
                    >
                      <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                        <Store size={16} />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{opt.label}</div>
                        <div className="text-xs text-gray-500">Tap to select</div>
                      </div>
                      <ChevronDown size={16} className="ml-auto text-gray-400" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* PIN Input */}
            {showPinInput && step === 3 && (
              <div className="bg-white rounded-2xl rounded-bl-md p-4 max-w-[90%] self-start shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                  <CreditCard size={16} className="text-blue-600" />
                  <span className="text-sm font-medium text-gray-700">Enter your PIN</span>
                </div>
                <div className="flex gap-2 mb-3">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-12 h-12 bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-center text-lg font-bold text-gray-900"
                    >
                      {pin[i] || '•'}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0, '⌫'].map((num, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        if (num === '⌫') {
                          setPin((prev) => prev.slice(0, -1));
                        } else if (num !== '' && pin.length < 4) {
                          setPin((prev) => prev + num);
                        }
                      }}
                      className="py-2 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium transition text-center"
                    >
                      {num}
                    </button>
                  ))}
                </div>
                {pin.length === 4 && (
                  <button
                    onClick={handlePinSubmit}
                    className="w-full mt-3 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg shadow-blue-100 hover:scale-[1.02] transition"
                  >
                    Confirm Payment
                  </button>
                )}
              </div>
            )}
          </div>
        ))}

        {/* Typing Indicator */}
        {step === 0 && (
          <div className="flex items-center gap-2 text-xs text-gray-400 animate-pulse self-start">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span>Totely is online...</span>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-white px-4 py-3 border-t border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <MessageCircle size={14} />
          <span>Type a message...</span>
        </div>
        {step === 1 && selectedItems.length > 0 && (
          <button
            onClick={handleContinue}
            className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-200 hover:scale-110 transition-transform"
          >
            <ArrowRight size={16} />
          </button>
        )}
        {step !== 1 && (
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
            <ArrowRight size={16} />
          </div>
        )}
      </div>
    </div>
  );
}