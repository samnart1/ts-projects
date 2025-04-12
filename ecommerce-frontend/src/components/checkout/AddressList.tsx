import {
    FaBuilding,
    FaCheckCircle,
    FaEdit,
    FaStreetView,
    FaTrash,
} from "react-icons/fa";
import { MdLocationCity, MdPinDrop, MdPublic } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { selectUserCheckoutAddress } from "../../store/action";

const AddressList = ({
    addresses,
    setSelectedAddress,
    setOpenAddressModal,
}) => {
    const dispatch = useDispatch();
    const { selectedUserCheckoutAddress } = useSelector((state) => state.auth);

    const handleAddressSelection = (addresses: any) => {
        dispatch(selectUserCheckoutAddress(addresses));
    };

    function onEditButtonHandler(address: any): void {
        setSelectedAddress(address);
        setOpenAddressModal(true);
    }

    function onDeleteButtonHandler(address: any): void {
        setSelectedAddress(address);
    }

    return (
        <div className="space-y-4">
            {addresses.map((address) => (
                <div
                    key={addresses.addressId}
                    onClick={() => handleAddressSelection(address)}
                    className={`p-4 border rounded-md cursor-pointer relative ${
                        selectedUserCheckoutAddress?.addressId ===
                        address.addressId
                            ? "bg-green-100"
                            : "bg-white"
                    }`}
                >
                    <div className="flex items-start">
                        <div className="space-y-1">
                            <div className="flex items-center">
                                <FaBuilding
                                    size={14}
                                    className="mr-2 text-gray-600"
                                />
                                <p className="font-semibold">
                                    {address.buildingName}
                                </p>
                                {selectedUserCheckoutAddress?.addressId ===
                                    address.addressId && (
                                    <FaCheckCircle className="text-green-500 ml-2" />
                                )}
                            </div>

                            <div className="flex items-center">
                                <FaStreetView
                                    size={17}
                                    className="mr-2 text-gray-600"
                                />
                                <p>{address.street}</p>
                            </div>

                            <div className="flex items-center">
                                <MdLocationCity
                                    size={17}
                                    className="mr-2 text-gray-600"
                                />
                                <p>
                                    {address.city}, {address.state}
                                </p>
                            </div>

                            <div className="flex items-center">
                                <MdPinDrop
                                    size={17}
                                    className="mr-2 text-gray-600"
                                />
                                <p>{address.pincode}</p>
                            </div>

                            <div className="flex items-center">
                                <MdPublic
                                    size={17}
                                    className="mr-2 text-gray-600"
                                />
                                <p>{address.country}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-3 absolute top-4 right-2">
                        <button onClick={() => onEditButtonHandler(address)}>
                            <FaEdit size={18} className="text-teal-700" />
                        </button>
                        <button onClick={() => onDeleteButtonHandler(address)}>
                            <FaTrash size={17} className="text-rose-600" />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AddressList;
