import Link from "next/link";

interface HeaderMenuLinkProps {
  item: {
    Title: string;
    href: string;
    slug: string;
  };
  isActive?: boolean;
}

const HeaderMenuLink = ({ item, isActive }: HeaderMenuLinkProps) => {
  console.log("Rendering HeaderMenuLink with item:", item);
  return (
    <li key={item.Title}>
      <Link href={`/${item.slug}`} className={isActive ? "active" : ""}>
        {item.Title}
      </Link>
    </li>
  );
};

export default HeaderMenuLink;
