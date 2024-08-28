type NavigationItem = {
  name: string;
  items?: NavigationItem[];
};

type Navigation = {
  items: NavigationItem[];
};

const NavigationComponent = ({ items }: Navigation) => {
  return (
    <>
      {items.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
          {item.items && <NavigationComponent items={item.items} />}
        </div>
      ))}
    </>
  );
};

export default NavigationComponent;
