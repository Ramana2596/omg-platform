"use client";
import Link from "next/link";

export default function AccountMenu() {
    return (
        <nav className="account-menu">
            <ul>
                <li><Link href="/account">Dashboard</Link></li>
                <li><Link href="/account/courses">My Courses / Simulations</Link></li>
                <li><Link href="/account/onboarding">Onboarding Status</Link></li>
                <li><Link href="/account/payments">Payments & Refunds</Link></li>
                <li><Link href="/account/settings">Account Settings</Link></li>
                <li><a href="#" onClick={(e) => e.preventDefault()}>Log out</a></li>
            </ul>
        </nav>
    );
}
