import { useState } from "react";
import { Application, CapabilityLevel } from "../../../../types";
import { ChevronRight, ChevronDown } from "lucide-react";

type NavigationProps = {
  items: CapabilityLevel[];
  onSelect: (applications: Application[]) => void;
};

const Navigation = ({ items, onSelect }: NavigationProps) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleSelect = (itemName: string, applications: Application[]) => {
    setSelectedItem(itemName);
    onSelect(applications);
  };

  return (
    <ul className="flex flex-col space-y-2 pr-6  border-r-2 border-gray-200 w-72 ">
      {items.map((item, index) => (
        <NavigationItem
          key={index}
          item={item}
          onSelect={handleSelect}
          level={0}
          selectedItem={selectedItem}
        />
      ))}
    </ul>
  );
};

const NavigationItem = ({
  item,
  onSelect,
  level,
  selectedItem,
}: {
  item: CapabilityLevel;
  onSelect: (itemName: string, applications: Application[]) => void;
  level: number;
  selectedItem: string | null;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  const handleSelect = () => {
    onSelect(item.name, item.applications);
  };

  const isSelected = selectedItem === item.name;

  return (
    <li className="flex flex-col">
      <div
        className="flex items-center cursor-pointer hover:bg-gray-100"
        onClick={toggleExpand}
        style={{ paddingLeft: `${level * 16}px` }}
      >
        {item.children && (
          <span className="mr-2">
            {isExpanded ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </span>
        )}
        <p
          onClick={handleSelect}
          className={`${
            isSelected ? "text-blue-600 font-semibold" : ""
          } hover:text-blue-500`}
        >
          {item.name}
        </p>
      </div>
      {isExpanded && item.children && (
        <ul>
          {item.children.map((child, index) => (
            <NavigationItem
              key={index}
              item={child}
              onSelect={onSelect}
              level={level + 1}
              selectedItem={selectedItem}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default Navigation;
