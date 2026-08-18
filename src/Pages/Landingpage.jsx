import React from "react";

function LandingPage() {
    return (
        <div className="Landing-page">
            <div className="topbar">
                <div>
                    <div className="eyebrow">Tuesday, August 18, 2026</div>
                    <h1 className="page-title">Welcome to ShopAdmin</h1>
                    <p className="page-subtitle">Store is looking healthy.Here is a clear view of what is happening today.</p>
                </div>
                <div className="topbar-date">Admin overview</div>
            </div>

            <section className="hero-panel landing-hero">
                <div className="landing-hero-copy">
                    <div className="eyebrow" style={{ color: "#f5b096"}}>The store is beautiful organised</div>
                </div>
                <h1>Welcome to ShopAdmin</h1>
                <p>Manage products, update prices, monitor inventory and streamline your e-commere operations from one focused workspace</p>
                <a className="button button-ghost" href="/add-product">Add a product</a>

                <div className="landing-trust">
                    <span className="trust-dot">.</span>
                </div>
                <div className="hero-art landing-art" aria-hidden="true">
                    <div className="art-orbit orbit-one" />
                    <div className="art-orbit orbit-two" />
                    <div className="hero-stat">
                        <strong>+18%</strong>
                        <span>catalog activity this month</span>
                    </div>
                    <div className="art-mini-card">
                        <span>Inventory health</span>
                        <strong>86%</strong>
                        <i>
                            <b />
                        </i>
                    </div>
                    </div>                
            </section> 

            <div className="dashboard-grid">
                <div className="stat-card">
                    <div className="stat-label">Total products</div>
                    <div className="stat-value">07</div>
                    <div className="stat-note">added this month</div>
                </div>
                <div className="stat-card">
                    <div className="stat-label">Healthy inventory</div>
                    <div className="stat-value">86%</div>
                    <div className="stat-note">half from last week</div>
                </div>
                <div className="stat-card">
                    <div className="stat-label">Store status</div>
                    <div className="stat-value">Live</div>
                    <div className="stat-note">All systems operational</div>
                </div>
            </div>
            <div className="section-heading">
                <h2>What would you like to do?</h2>
                <span>Quick actions</span>
            </div>
            <div className="dashboard-grid">
                <a className="panel quick-card" href="/product">
                <strong>Manage catalog</strong>
                <span>Review prices, products and stock</span>
                </a>

                <a className="panel quick-card" href="/search">
                <strong>Find a product</strong>
                <span>Search the inventory instantly</span>
                </a>

                <a className="panel quick-card" href="/add-product">
                <strong>Add something new</strong>
                <span>Grow your catalog</span>
                </a>
            </div>
        </div>
    );
}

export default LandingPage;