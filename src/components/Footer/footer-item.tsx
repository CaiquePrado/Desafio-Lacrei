import { NavigationItem } from "./styles";

interface NavItemProps {
  label: string;
  to: string;
}

export const FooterItem = ({ label, to }: NavItemProps) => {
  return <NavigationItem to={to}>{label}</NavigationItem>;
};
