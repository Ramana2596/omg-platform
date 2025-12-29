import AccountMenu from "../components/AccountMenu";

export const metadata = {
    title: "Account - OMG Platform",
};

export default function AccountLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="account-area container">
            <aside className="account-aside">
                <AccountMenu />
            </aside>
            <main className="account-main">{children}</main>
        </div>
    );
}
