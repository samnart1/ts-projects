// import { Skeleton } from "@mui/material";

import { FaAddressBook } from "react-icons/fa";
import Skeleton from "../shared/Skeleton";
import { useState } from "react";
import AddressInfoModal from "./AddressInfoModal";
import AddAddressForm from "./AddAddressForm";

const AddressInfo = () => {
    const noAddressExist = true;
    const isLoading = false;

    const [openAddressModal, setOpenAddressModal] = useState(false);
    const [selectAddress, setSelectedAddress] = useState("");

    const AddNewAddressHandler = () => {
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
                        onClick={AddNewAddressHandler}
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
                        <div className="space-y-4 pt-6">
                            <p>Address list here...</p>
                        </div>
                    )}
                </div>
            )}

            <AddressInfoModal open={openAddressModal} setOpen={setOpenAddressModal} children={undefined}>
                <AddAddressForm />
            </AddressInfoModal>
        </div>
    );
};

export default AddressInfo;
