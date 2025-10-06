import Link from "next/link";

interface HeaderMenuLinkProps {
    item: {
        label: string;
        href: string;
    };
    isActive?: boolean;
}

const HeaderMenuLink = ({ item, isActive }: HeaderMenuLinkProps) => {

  return (
    <li key={item.label}>
      <Link href={item.href} className={isActive ? 'active' : ''}>{item.label}</Link>
    </li>
  );
};

export default HeaderMenuLink;