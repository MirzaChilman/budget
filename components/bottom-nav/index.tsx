"use client";
import { WalletCards } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
const BottomNav = [
	{
		label: "Budget",
		icon: <WalletCards />,
		href: "/",
	},
	{
		label: "Reports",
		icon: <WalletCards />,
		href: "/reports",
	},
	{
		label: "Transaction",
		icon: <WalletCards />,
	},

	{
		label: "Accounts",
		icon: <WalletCards />,
		href: "/accounts",
	},
	{
		label: "User",
		icon: <WalletCards />,
		href: "/user",
	},
];

export const BottomNavbar = () => {
	const [tab, setTab] = useState(BottomNav[0].label);
	return (
		<section className="flex justify-around gap-1">
			{BottomNav.map((item, index) => {
				return (
					<Link
						className={`flex flex-col items-center pt-2 no-underline  ${
							item.label === "Transaction" ? "flex-2" : "flex-3"
						} ${tab === item.label ? "text-primary" : "text-gray-500"}`}
						href={""}
						key={item.label}
						onClick={() => setTab(item.label)}
					>
						<span>{item.icon}</span>
						<span className="text-sm">{item.label}</span>
					</Link>
				);
			})}
		</section>
	);
};
