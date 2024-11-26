import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faCheckSquare } from "@fortawesome/free-regular-svg-icons";
import PropTypes from "prop-types";
import useDishStore from "../../../stores/dishDetailStore"; // Import your Zustand store

const OptionCard = ({
    title,
    description,
    options = [], // pass in an array of options
    type, // default to single selection
    dishId, // Pass the dish id as prop
}) => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const { dishes, updateDish } = useDishStore(); // Get your store actions

    // Initialize the selected options from the store if the dish already exists
    useEffect(() => {
        if (dishes[dishId]) {
            setSelectedOptions(dishes[dishId].selectedOptions || []);
        }
    }, [dishes, dishId]);

    const handleCheckboxChange = (option) => {
        if (type === "single") {
            setSelectedOptions([option.name]);

            // 更新該菜品的 selectedOptions
            updateDish(dishId, {
                selectedOptions: [option.name],
                extraCost: option.extraCost,
            });
        } else {
            setSelectedOptions((prev) => {
                const updatedOptions = prev.includes(option.name)
                    ? prev.filter((opt) => opt !== option.name) // Cancel selection
                    : [...prev, option.name]; // Add new selection

                // 計算總額外費用
                const totalExtraCost = updatedOptions.reduce((acc, optionName) => {
                    const selectedOption = options.find(opt => opt.name === optionName);
                    return acc + (selectedOption ? selectedOption.extraCost : 0);
                }, 0);

                // 更新該菜品的 selectedOptions 和 extraCost
                updateDish(dishId, {
                    selectedOptions: updatedOptions,
                    extraCost: totalExtraCost,
                });

                return updatedOptions;
            });
        }
    };

    return (
        <div className="border rounded-lg p-4 max-w-sm mx-auto mb-8 mt-8 font-notoTC">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-gray-500">{description}</p>

            <div className="mt-4 space-y-2">
                {options.map((option) => (
                    <label key={option.name} className="block cursor-pointer">
                        <input
                            type="checkbox"
                            className="hidden"
                            checked={selectedOptions.includes(option.name)} // render checkbox based on selection
                            onChange={() => handleCheckboxChange(option)} // handle checkbox change
                        />
                        <span className="flex items-center justify-between">
                            <span className="flex items-center">
                                <FontAwesomeIcon
                                    icon={selectedOptions.includes(option.name)
                                        ? faCheckSquare
                                        : faSquare}
                                    className="text-gray-500 mr-2"
                                />
                                {option.name}
                            </span>
                            <span className="text-gray-600">
                                {option.extraCost > 0
                                    ? `+${option.extraCost}元`
                                    : "免費"}
                            </span>
                        </span>
                    </label>
                ))}
            </div>
        </div>
    );
};

OptionCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            extraCost: PropTypes.number,
        }),
    ),
    type: PropTypes.oneOf(["single", "multiple"]),
    dishId: PropTypes.string.isRequired, // Ensure that each OptionCard has a unique dishId
};

export default OptionCard;
