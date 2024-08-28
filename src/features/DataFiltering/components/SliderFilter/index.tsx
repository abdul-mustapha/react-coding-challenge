import React from "react";

type SpendFilterProps = {
  spendRange: number;
  onChange: (value: number) => void;
};

const SpendFilter = ({ spendRange, onChange }: SpendFilterProps) => {
  const handleSpendChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    onChange(value);
  };

  return (
    <div className="mt-2">
      <p className="text-sm font-medium text-gray-700 mb-2">
        Max Spend: £{spendRange.toLocaleString()}
      </p>
      <input
        type="range"
        min="0"
        max="100000"
        value={spendRange}
        onChange={handleSpendChange}
        className="w-full"
      />
    </div>
  );
};

export default SpendFilter;
