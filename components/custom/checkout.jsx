import useCart from "@/hooks/use-cart";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";

const addressOptions = [
  { id: 1, label: "Langata", cost: 200 },
  { id: 2, label: "South C", cost: 300 },
  { id: 3, label: "South B", cost: 350 },
  { id: 4, label: "Nairobi West", cost: 250 },
  { id: 5, label: "Karen", cost: 500 },
  { id: 6, label: "Kilimani", cost: 400 },
  { id: 7, label: "Lavington", cost: 500 },
  { id: 8, label: "Thika Road", cost: 1200 },
  { id: 9, label: "CBD", cost: 500 },
  { id: 10, label: "Ngong Town", cost: 1200 },
  { id: 11, label: "Ngong Road", cost: 450 },
  { id: 12, label: "Westlands", cost: 500 },
  { id: 13, label: "Eastleigh", cost: 600 },
  { id: 14, label: "Naivasha Road", cost: 450 },
  { id: 15, label: "Mbagathi Road", cost: 300 },
  { id: 16, label: "Kileleshwa", cost: 500 },
  { id: 17, label: "Hurlingham", cost: 300 },
  { id: 18, label: "Madaraka", cost: 250 },
  { id: 19, label: "Industrial Area", cost: 400 },
  { id: 20, label: "Mombasa Road", cost: 350 },
  { id: 21, label: "Upperhill", cost: 400 },
  { id: 22, label: "Kitengela", cost: 1200 },
  { id: 23, label: "Kikuyu", cost: 700 },
  { id: 24, label: "Carnivore", cost: 100 },
  { id: 25, label: "Rongai", cost: 500 },
  
];

const Checkout = ({ onLoadingChange }) => {
  const [addressId, setAddressId] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  const subtotalPrice = items.reduce((total, item) => {
    return total + item.product.price * item.quantity;
  }, 0);

  const selectedAddress = addressOptions.find((option) => option.id === addressId);
  const shippingCost = selectedAddress ? selectedAddress.cost : 0;

  const totalPrice = subtotalPrice + shippingCost;

  const productIds = items.map((item) => ({
    id: item.product.id,
    quantity: String(item.quantity),
  }));

  function validatePhoneNumber(number) {
    const regex = /^0\d{9}$/;
    return regex.test(number);
  }

  const handleValidation = () => {
    if (!validatePhoneNumber(phoneNumber)) {
      toast.error('Invalid phone number', {
        id: 'phone_number_error',
      });
      return false;
    }
    return true;
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    if (!handleValidation()) {
      return false;
    }
    const amount = totalPrice;
    alert('Amount to pay: ' + amount);
    removeAll()
  };

  return (
    <div className="space-y-4 py-4">
      <h1 className="text-lg font-medium text-gray-900">Payment information</h1>
      <form onSubmit={handlePayment} className="space-y-3">
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
          <select
            value={addressId ?? ''}
            id="address"
            onChange={(e) => setAddressId(Number(e.target.value))}
            required
            disabled={loading}
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-white text-base font-dm-sans text-gray-900"
          >
            <option value="" disabled>
              Select an address
            </option>
            {addressOptions.map((option) => (
              <option key={option.id} value={option.id} className="font-sans">
                {option.label}
              </option>
            ))}
          </select>

        </div>

        <Input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
          disabled={loading}
        />

        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>Ksh {subtotalPrice}</span>
          </div>
          {selectedAddress && (
            <div className="flex justify-between">
              <span>Delivery:</span>
              <span>Ksh {shippingCost}</span>
            </div>
          )}
          <div className="flex justify-between font-bold">
            <span>Total:</span>
            <span>Ksh {totalPrice}</span>
          </div>
        </div>

        <Button
          type="submit"
          disabled={loading || !addressId}
          className="w-full flex gap-1 items-center"
        >
          {loading && <Loader2 className="animate-spin" />}
          {loading ? 'Processing...' : 'Pay Now'}
        </Button>
      </form>
    </div>
  );
};

export default Checkout;
