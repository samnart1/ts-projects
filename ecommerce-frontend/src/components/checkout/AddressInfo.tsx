// import { Skeleton } from "@mui/material";

import { FaAddressBook } from "react-icons/fa";
import Skeleton from "../shared/Skeleton";
import { useState } from "react";
import AddressInfoModal from "./AddressInfoModal";
import AddAddressForm from "./AddAddressForm";
import { useSelector } from "react-redux";
import AddressList from "./AddressList";

const AddressInfo = ({ address }) => {
    const noAddressExist = !address || address.length == 0;
    const { isLoading, btnLoader } = useSelector((state) => state.errors);

    const [openAddressModal, setOpenAddressModal] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState("");

    const addNewAddressHandler = () => {
        console.log("new handler, here i am!");
        setSelectedAddress("");
        setOpenAddressModal(true);
    };

    return (
        <div className="pt-4">
            {noAddressExist ? (
                <div className="p-6 rounded-lg max-w-md mx-auto flex flex-col items-center justify-center">
                    <FaAddressBook size={50} className="text-gray-500 mb-4" />
                    <h1 className="mb-2 text-slate-900 text-center font-semibold text-2xl">
                        No Address Added Yet
                    </h1>
                    <p className="mb-6 text-slate-800 text-center ">
                        Please add your address to complete purchase
                    </p>

                    <button
                        onClick={addNewAddressHandler}
                        className="px-4 py-2 bg-blue-600 text-white font-medium rounded cursor-pointer hover:bg-blue-700 transition-all"
                    >
                        Add Address
                    </button>
                </div>
            ) : (
                <div className="relative p-6 rounded-lg max-w-md mx-auto">
                    <h1 className="text-slate-800 text-center font-bold text-2xl">
                        Select Address
                    </h1>
                    {isLoading ? (
                        <div className="py-4 px-8">
                            <Skeleton />
                        </div>
                    ) : (
                        <>
                            <div className="space-y-4 pt-6">
                                <AddressList
                                    addresses={address}
                                    setSelectedAddress={setSelectedAddress}
                                    setOpenAddressModal={setOpenAddressModal}
                                />
                            </div>
                            {address.length > 0 && (
                                <div>
                                    <button
                                        onClick={addNewAddressHandler}
                                        className="px-4 py-2 bg-blue-600 text-white font-medium rounded cursor-pointer hover:bg-blue-700 transition-all mt-4"
                                    >
                                        Add Address
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            )}

            <AddressInfoModal
                open={openAddressModal}
                setOpen={setOpenAddressModal}
            >
                <AddAddressForm
                    address={selectedAddress}
                    setOpenAddressModal={setOpenAddressModal}
                />
            </AddressInfoModal>
        </div>
    );
};

export default AddressInfo;
