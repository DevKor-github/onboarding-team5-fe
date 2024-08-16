import { useState } from "react";

interface TastePickerProps {
    label: string;
    defaultColor: string;
    selectedColor: string;
}

const TastePicker = ({
    label,
    defaultColor,
    selectedColor,
}: TastePickerProps) => {
    const [selected, setSelected] = useState(false);

    const toggleSelection = () => {
        setSelected(!selected);
    };

    return (
        <button
            type="button"
            className={`rounded-16 px-12 text-white mx-[2px] h-32 ${
                selected
                    ? selectedColor
                    : `${defaultColor} hover:${defaultColor}`
            }`}
            onClick={toggleSelection}
        >
            {label}
        </button>
    );
};

export default TastePicker;
