import Link from "next/link";

const menu = [
  { label: "Feed", href: "/feed" },
  { label: "Artists", href: "/artists/kim-sujin" },
  { label: "Subscriptions", href: "/my/subscriptions" },
  { label: "Cart", href: "/cart" },
  { label: "Orders", href: "/orders" },
];

export function GlobalNav() {
  return (
    <nav className="fixed top-0 left-1/2 z-50 w-[1440px] -translate-x-1/2 border-b border-cyan-100/80 bg-cyan-50/60 shadow-sm backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4">
        <Link href="/feed" className="text-lg font-semibold text-cyan-900">
          printtie
        </Link>
        <div className="flex space-x-6 text-[14px]">
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-cyan-700 hover:text-cyan-900"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
