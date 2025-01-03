import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import ReviewCardList from "../components/reviewPage/ReviewCardList";
import RatingBar from "../components/reviewPage/RatingBar";
import getStoreClient from "../api/store/getStoreClient";
import useMerchantStore from "../stores/merchantStore";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const star1Percentage = 10.0;
const star2Percentage = 15.0;
const star3Percentage = 40.0;
const star4Percentage = 20.0;
const star5Percentage = 15.0;
const star1Count = 2;
const star2Count = 3;
const star3Count = 8;
const star4Count = 4;
const star5Count = 3;

const Review = () => {
    const { merchantId } = useParams();
    const getMerchantById = useMerchantStore((state) => state.getMerchantById);
    const [merchant, setMerchant] = useState(null);
    const [reviewIdList, setReviewIdList] = useState([]);
    const navigate = useNavigate();
    const handleClose = () => {
        navigate(-1);
    };

    useEffect(() => {
        const merchantData = getMerchantById(merchantId);
        if (merchantData) {
            setMerchant(merchantData);
            setReviewIdList(merchantData.reviewIdList);
        } else {
            // Fetch merchant data if not in store
            const fetchMerchantData = async () => {
                try {
                    const res = await getStoreClient.getMerchantsByIdList([
                        merchantId,
                    ]);
                    setMerchant(res.data[0]);
                    setReviewIdList(res.data[0]?.reviewIdList || null);
                } catch (error) {
                    console.error("Failed to fetch merchant data:", error);
                }
            };
            fetchMerchantData();
        }
    }, [merchantId, getMerchantById]);

    return !merchant || !reviewIdList ? (
        <div className="font-notoTC flex justify-center items-center mt-4 fa-2x">
            <FontAwesomeIcon icon={faSpinner} spinPulse />
        </div>
    ) : (
        <div className="overflow-y-auto font-notoTC fixed top-0 left-0 w-full h-full  bg-white flex flex-col justify-start items-start">
            <div className="w-full mt-8">
                <div className="absolute top-4 right-4">
                    <button
                        className="text-gray-500 hover:text-gray-700"
                        onClick={handleClose}
                    >
                        <FontAwesomeIcon icon={faTimes} className="w-8 h-8" />
                    </button>
                </div>
                <div className="title flex flex-col items-center">
                    <h2 className="text-xl font-bold text-black text-center">
                        {merchant.name}的評論
                    </h2>

                    <div className="flex items-center mt-4 text-left">
                        <span className="text-3xl font-bold">
                            {Number(merchant.rating.toFixed(1))}
                        </span>
                        <FontAwesomeIcon
                            icon={faStar}
                            className="text-yellow-300 ml-2 w-8 h-8"
                        />
                    </div>

                    <div className="mt-4 text-left w-3/4 max-w-md mx-5">
                        <RatingBar
                            stars={5}
                            percentage={star1Percentage}
                            count={star1Count}
                        />
                        <RatingBar
                            stars={4}
                            percentage={star2Percentage}
                            count={star2Count}
                        />
                        <RatingBar
                            stars={3}
                            percentage={star3Percentage}
                            count={star3Count}
                        />
                        <RatingBar
                            stars={2}
                            percentage={star4Percentage}
                            count={star4Count}
                        />
                        <RatingBar
                            stars={1}
                            percentage={star5Percentage}
                            count={star5Count}
                        />
                    </div>
                </div>

                <ReviewCardList
                    reviewIdList={reviewIdList}
                    merchantId={merchantId}
                ></ReviewCardList>
            </div>
        </div>
    );
};

export default Review;
