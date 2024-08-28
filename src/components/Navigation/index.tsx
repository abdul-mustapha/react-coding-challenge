import { FolderStructure } from "../../types";

type NavigationProps = {
  items: FolderStructure[];
};

const Navigation = ({ items }: NavigationProps) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <p>{item.name}</p>
          {item.children && (
            <Navigation
              items={item.children.filter(
                (child): child is FolderStructure => "children" in child
              )}
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
