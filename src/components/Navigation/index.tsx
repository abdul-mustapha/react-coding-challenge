import NavigationItem from "./NavigationItem";

const Navigation = () => {
  return (
    <NavigationItem
      items={[{ name: "Hello" }, { name: "World", items: [{ name: "hey" }] }]}
    />
  );
};

export default Navigation;
