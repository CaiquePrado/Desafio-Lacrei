import { NavigationItem } from "./styles";

interface NavItemProps {
  label: string;
  to: string;
  title: string;
}

export const NavItem = ({ label, to, title }: NavItemProps) => {
  return (
    <NavigationItem title={title} to={to}>
      {label}
    </NavigationItem>
  );
};
