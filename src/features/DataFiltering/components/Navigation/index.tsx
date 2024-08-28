import { Application, CapabilityLevel } from "../../../../types";

type NavigationProps = {
  items: CapabilityLevel[];
  onSelect: (applications: Application[]) => void;
};

const Navigation = ({ items, onSelect }: NavigationProps) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <p onClick={() => onSelect(item.applications)}>{item.name}</p>
          {item.children && (
            <Navigation items={item.children} onSelect={onSelect} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
