import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import BusinessHoursSelector from "../../authPage/BusinessHoursSelector";
import { useStoreInfoQuery } from "../../../hooks/setting/useStoreInfoQuery.jsx";
import { useEffect } from "react";
import PropTypes from "prop-types";
import HeaderSkeleton from "../../../skeleton/common/HeaderSkeleton.jsx";

function StoreForm({
    storeId,
    formData,
    setFormData,
    isUpdating,
    isMutationError,
}) {
    const {
        storeInfo,
        isLoading: isLoadingStore,
        isError: isQueryError,
    } = useStoreInfoQuery(storeId);

    //set formData = storeInfo
    useEffect(() => {
        if (storeInfo) {
            setFormData((prev) => ({
                name: storeInfo.name || "",
                description: storeInfo.description || "",
                file: null,
                filePath: storeInfo.picture || "",
                address: storeInfo.address || "",
                phoneNumber: storeInfo.phoneNumber || "",
                businessHours: storeInfo.businessHours
                    ? storeInfo.businessHours.map((day) =>
                          day.map((period) => ({
                              first: period.first || "09:00",
                              second: period.second || "18:00",
                          })),
                      )
                    : prev.businessHours,
            }));
        }
    }, [storeInfo, setFormData]);

    const handleInputChange = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const localPath = event.target.value;
            setFormData((prev) => ({
                ...prev,
                file: file,
                filePath: localPath,
            }));
        }
    };

    if (isLoadingStore) {
        return <HeaderSkeleton />; //temp
    }

    if (isQueryError || isMutationError) {
        return (
            <div className="flex flex-col justify-center items-center">
                載入發生錯誤
            </div>
        ); //temp
    }

    return (
        <div className="p-4 max-w-screen">
            <form className="p-4 space-y-4 font-semibold font-notoTC">
                {/* Store name */}
                <div>
                    <label className="block text-gray-700 mb-1">
                        商家名稱：
                    </label>
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                            handleInputChange("name", e.target.value)
                        }
                        className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="輸入商家名稱"
                    />
                </div>

                {/* Store description */}
                <div>
                    <label className="block text-gray-700 mb-1">
                        商家描述：
                    </label>
                    <textarea
                        rows="3"
                        value={formData.description}
                        onChange={(e) =>
                            handleInputChange("description", e.target.value)
                        }
                        className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="輸入商家描述"
                    />
                </div>

                {/* Upload image */}
                <div className="w-full">
                    <label className="block text-gray-700 mb-1">圖片：</label>
                    <div className="flex items-center w-full space-x-2">
                        <div className="flex-1">
                            <input
                                type="text"
                                value={formData.filePath}
                                readOnly
                                className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="請選擇圖片"
                            />
                        </div>
                        <div className="flex-none w-30">
                            <label
                                htmlFor="file-upload"
                                className="bg-orange-500 text-white px-4 py-2 rounded-lg cursor-pointer whitespace-nowrap"
                            >
                                <FontAwesomeIcon
                                    icon={faUpload}
                                    className="mr-1"
                                />
                                上傳圖片
                            </label>
                        </div>
                        <input
                            id="file-upload"
                            type="file"
                            className="hidden"
                            onChange={handleFileChange}
                        />
                    </div>
                </div>

                {/* Store address */}
                <div>
                    <label className="block text-gray-700 mb-1">
                        商家地址：
                    </label>
                    <input
                        type="text"
                        value={formData.address}
                        onChange={(e) =>
                            handleInputChange("address", e.target.value)
                        }
                        className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="輸入商家地址"
                    />
                </div>

                {/* Store phone number */}
                <div>
                    <label className="block text-gray-700 mb-1">
                        商家電話：
                    </label>
                    <input
                        type="number"
                        value={formData.phoneNumber}
                        onChange={(e) =>
                            handleInputChange("phoneNumber", e.target.value)
                        }
                        className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="輸入商家電話"
                    />
                </div>

                {/* Store business hours */}
                <div>
                    <label className="block text-gray-700 mb-1">
                        營業時間：
                    </label>
                    <BusinessHoursSelector
                        businessHours={formData.businessHours}
                        onUpdate={(hours) =>
                            handleInputChange("businessHours", hours)
                        }
                    />
                </div>
            </form>
        </div>
    );
}

StoreForm.propTypes = {
    storeId: PropTypes.string.isRequired,
    formData: PropTypes.object.isRequired,
    setFormData: PropTypes.func.isRequired,
    isUpdating: PropTypes.bool,
    isMutationError: PropTypes.bool.isRequired,
};
export default StoreForm;
