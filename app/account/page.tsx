export default function AccountDashboard() {
    return (
        <div className="account-dashboard container">
            <header className="page-header">
                <h1>Dashboard</h1>
                <p>Overview of your enrolled products, onboarding and payments.</p>
            </header>

            <section className="dashboard-grid">
                <div className="card">
                    <h3>Enrolled Products</h3>
                    <p>No enrollments yet — explore our <a href="/products">products</a>.</p>
                </div>

                <div className="card">
                    <h3>Onboarding Status</h3>
                    <p>Not started</p>
                </div>

                <div className="card">
                    <h3>Payments & Refunds</h3>
                    <p>No recent transactions</p>
                </div>

                <div className="card">
                    <h3>Account Settings</h3>
                    <p>Update your profile and subscription preferences.</p>
                </div>
            </section>
        </div>
    );
}
