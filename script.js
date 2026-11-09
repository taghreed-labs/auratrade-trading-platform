// Scaling Stage
function scaleStage() {
    const container = document.getElementById('stage-container');
    const w = window.innerWidth;
    const h = window.innerHeight;
    
    if (w < 900) {
        container.style.transform = 'none';
        container.style.width = '100%';
        container.style.height = 'auto';
    } else {
        const scale = Math.min(w / 1672, h / 941);
        container.style.transform = `scale(${scale})`;
        container.style.width = '1672px';
        container.style.height = '941px';
    }
}
window.addEventListener('resize', scaleStage);
scaleStage();

// Starfield Canvas
const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');
canvas.width = 1672;
canvas.height = 941;

const stars = [];
for (let i = 0; i < 180; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        alpha: Math.random() * 0.8 + 0.2
    });
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#ffffff';
    stars.forEach(star => {
        ctx.globalAlpha = star.alpha;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
    });
    requestAnimationFrame(drawStars);
}
drawStars();

// Video Glow Handling
const video = document.getElementById('glow-video');
video.addEventListener('loadeddata', () => {
    video.classList.add('ready');
});

// Unique Layouts & Views for Each Tab
const viewsData = {
    home: {
        heroTitle: "Trade Smarter, <span>Faster, Safer.</span>",
        heroLede: "The first fully integrated on-chain trading experience. No dashboards, no delays — AuraTrade empowers you to trade directly from your favorite DeFi apps and terminals.",
        sidebarHtml: `
            <div class="sidebar-top">
                <div class="sidebar-brand">AuraTrade Terminal</div>
                <div class="nav-links">
                    <a href="#" class="side-link" style="color:var(--text); background:rgba(147,18,255,0.15)">Live Overview</a>
                    <a href="#" class="side-link">Order Book</a>
                    <a href="#" class="side-link">Liquidity Pools</a>
                </div>
            </div>
            <div class="pro-card"><span>AuraTrade Pro v2.4</span><button class="btn-primary" style="padding: 5px; font-size: 11px;">Active Node</button></div>
        `,
        mainHtml: `
            <div class="dash-topbar">
                <span style="font-size: 12px; color: var(--muted);">Overview & Live Analytics</span>
                <div class="user-badge"><div class="user-dot"></div><span>Alex T. 0x3f4…9c7e</span></div>
            </div>
            <div class="custom-grid-2">
                <div class="dash-card">
                    <div class="card-header"><span>Revenue generated (since inception)</span><span style="color: var(--green)">+12.5%</span></div>
                    <div style="font-size: 24px; font-weight: 700; font-family: 'Space Grotesk', sans-serif;">214,402 <span style="font-size:14px; color:var(--muted)">USDT</span></div>
                    <svg viewBox="0 0 300 50" width="100%" height="30" preserveAspectRatio="none" style="margin-top:10px;">
                        <path d="M0 40 Q 75 10, 150 25 T 300 10 L 300 50 L 0 50 Z" fill="rgba(147,18,255,0.2)"/>
                        <path d="M0 40 Q 75 10, 150 25 T 300 10" fill="none" stroke="#9312ff" stroke-width="2"/>
                    </svg>
                </div>
                <div class="dash-card">
                    <div class="card-header"><span>Monthly Performance Metrics</span><span style="color: var(--violet-glow)">January 2024</span></div>
                    <div style="display: flex; flex-direction: column; gap: 6px; font-size: 12px;">
                        <div style="display:flex; justify-content:space-between;"><span>Total Snipes:</span> <span style="font-weight:600">1,284 (+8.4%)</span></div>
                        <div style="display:flex; justify-content:between;"><span>Avg. Execution:</span> <span style="font-weight:600">0.42s</span></div>
                        <div style="display:flex; justify-content:between;"><span>Win Rate:</span> <span style="font-weight:600; color:var(--green)">68.2%</span></div>
                    </div>
                </div>
            </div>
        `
    },
    ecosystem: {
        heroTitle: "Decentralized <span>Ecosystem & Vaults.</span>",
        heroLede: "Explore our cross-chain liquidity pools, automated market makers, and institutional-grade security infrastructure built for Web3 traders.",
        sidebarHtml: `
            <div class="sidebar-top">
                <div class="sidebar-brand">Ecosystem Nodes</div>
                <div class="nav-links">
                    <a href="#" class="side-link" style="color:var(--text); background:rgba(147,18,255,0.15)">Active Vaults</a>
                    <a href="#" class="side-link">Cross-Chain Bridge</a>
                    <a href="#" class="side-link">Security Audits</a>
                </div>
            </div>
            <div class="pro-card"><span>TVL Status</span><span style="color:var(--green); font-weight:600;">$48.2M Secured</span></div>
        `,
        mainHtml: `
            <div class="dash-topbar">
                <span style="font-size: 12px; color: var(--muted);">Active Liquidity Vaults & Pools</span>
                <button class="btn-primary" style="padding: 4px 12px; font-size:11px;">Deposit Liquidity</button>
            </div>
            <div class="custom-grid-2">
                <div class="dash-card">
                    <div class="card-header"><span>Ethereum Mainnet Vault</span><span style="color:var(--green)">APY 14.2%</span></div>
                    <div style="font-size: 20px; font-weight: 700; font-family: 'Space Grotesk', sans-serif;">$24.1M <span style="font-size:12px; color:var(--muted)">TVL</span></div>
                    <p style="font-size: 11px; color: var(--muted); margin-top: 6px;">Multi-sig protected smart contract with automated rebalancing algorithms.</p>
                </div>
                <div class="dash-card">
                    <div class="card-header"><span>Solana High-Speed Bridge</span><span style="color:var(--green)">APY 19.8%</span></div>
                    <div style="font-size: 20px; font-weight: 700; font-family: 'Space Grotesk', sans-serif;">$15.6M <span style="font-size:12px; color:var(--muted)">TVL</span></div>
                    <p style="font-size: 11px; color: var(--muted); margin-top: 6px;">Instant cross-chain execution supporting sub-second meme coin snipes.</p>
                </div>
            </div>
        `
    },
    markets: {
        heroTitle: "Global On-Chain <span>Markets & Order Books.</span>",
        heroLede: "Track real-time token pairs, high-frequency order books, and cross-chain execution feeds with zero slippage.",
        sidebarHtml: `
            <div class="sidebar-top">
                <div class="sidebar-brand">Market Pairs</div>
                <div class="nav-links">
                    <a href="#" class="side-link" style="color:var(--text); background:rgba(147,18,255,0.15)">Spot Markets</a>
                    <a href="#" class="side-link">Perpetuals</a>
                    <a href="#" class="side-link">Trending Tokens</a>
                </div>
            </div>
            <div class="pro-card"><span>24h Volume</span><span style="font-weight:600; font-family:'Space Grotesk';">$128.4M</span></div>
        `,
        mainHtml: `
            <div class="dash-topbar">
                <span style="font-size: 12px; color: var(--muted);">Live Token Feed & Order Book</span>
                <span style="font-size: 11px; color:var(--green);">● Live Feed Connected</span>
            </div>
            <div class="dash-card" style="flex:1;">
                <table class="mini-table">
                    <thead>
                        <tr><th>Pair</th><th>Last Price</th><th>24h Change</th><th>24h Volume</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><b>ETH / USDC</b></td><td>$3,482.10</td><td style="color:var(--green)">+4.12%</td><td>$42.5M</td></tr>
                        <tr><td><b>SOL / USDT</b></td><td>$184.40</td><td style="color:var(--red)">-1.25%</td><td>$31.2M</td></tr>
                        <tr><td><b>BTC / USDC</b></td><td>$67,420.00</td><td style="color:var(--green)">+6.80%</td><td>$54.7M</td></tr>
                    </tbody>
                </table>
            </div>
        `
    },
    governance: {
        heroTitle: "Community <span>Governance & Proposals.</span>",
        heroLede: "Shape the future of AuraTrade. Stake $AURA tokens, vote on protocol upgrades, and govern community treasury funds.",
        sidebarHtml: `
            <div class="sidebar-top">
                <div class="sidebar-brand">DAO Governance</div>
                <div class="nav-links">
                    <a href="#" class="side-link" style="color:var(--text); background:rgba(147,18,255,0.15)">Active Proposals</a>
                    <a href="#" class="side-link">Staking Pool</a>
                    <a href="#" class="side-link">Treasury Info</a>
                </div>
            </div>
            <div class="pro-card"><span>Staked $AURA</span><span style="font-weight:600;">18.4M Tokens</span></div>
        `,
        mainHtml: `
            <div class="dash-topbar">
                <span style="font-size: 12px; color: var(--muted);">Active DAO Proposals #43</span>
                <span style="font-size: 11px; background:rgba(147,18,255,0.2); color:var(--violet-glow); padding:2px 8px; border-radius:4px;">Voting Open</span>
            </div>
            <div class="custom-grid-2">
                <div class="dash-card">
                    <div class="card-header"><span>Proposal #43: Cross-Chain Expansion</span><span>62% Yes</span></div>
                    <p style="font-size: 12px; color: var(--text);">Allocate 500,000 $AURA from treasury to deploy liquidity pools on Layer 2 networks.</p>
                    <div style="display:flex; gap:8px; margin-top:8px;">
                        <button class="btn-primary" style="padding:4px 12px; font-size:11px;">Vote For</button>
                        <button class="btn-secondary" style="padding:4px 12px; font-size:11px;">Against</button>
                    </div>
                </div>
                <div class="dash-card">
                    <div class="card-header"><span>Staking Rewards APY</span><span style="color:var(--green)">Active</span></div>
                    <div style="font-size: 22px; font-weight: 700; font-family: 'Space Grotesk', sans-serif;">14.2% <span style="font-size:12px; color:var(--muted)">APY</span></div>
                    <p style="font-size: 11px; color: var(--muted);">Lock $AURA tokens for 90 days to earn protocol revenue sharing bonuses.</p>
                </div>
            </div>
        `
    },
    analytics: {
        heroTitle: "Advanced Terminal <span>Analytics & Reports.</span>",
        heroLede: "Deep-dive into execution metrics, slippage analytics, gas optimization reports, and historical trading performance.",
        sidebarHtml: `
            <div class="sidebar-top">
                <div class="sidebar-brand">Performance Metrics</div>
                <div class="nav-links">
                    <a href="#" class="side-link" style="color:var(--text); background:rgba(147,18,255,0.15)">Gas Optimization</a>
                    <a href="#" class="side-link">Execution Speed</a>
                    <a href="#" class="side-link">MEV Protection</a>
                </div>
            </div>
            <div class="pro-card"><span>Success Rate</span><span style="color:var(--green); font-weight:600;">99.8%</span></div>
        `,
        mainHtml: `
            <div class="dash-topbar">
                <span style="font-size: 12px; color: var(--muted);">Gas Efficiency & Execution Speed</span>
                <span style="font-size: 11px; color: var(--violet-glow)">Real-Time Telemetry</span>
            </div>
            <div class="custom-grid-2">
                <div class="dash-card">
                    <div class="card-header"><span>Average Gas Saved</span><span style="color:var(--green)">+14.2%</span></div>
                    <div style="font-size: 22px; font-weight: 700; font-family: 'Space Grotesk', sans-serif;">$412,000 <span style="font-size:12px; color:var(--muted)">Total</span></div>
                    <p style="font-size: 11px; color: var(--muted); margin-top: 6px;">Optimized routing blocks reduce transaction overhead across all paired terminals.</p>
                </div>
                <div class="dash-card">
                    <div class="card-header"><span>Sub-Second Execution</span><span style="color:var(--green)">Optimal</span></div>
                    <div style="font-size: 22px; font-weight: 700; font-family: 'Space Grotesk', sans-serif;">88.4% <span style="font-size:12px; color:var(--muted)">Trades</span></div>
                    <p style="font-size: 11px; color: var(--muted); margin-top: 6px;">Lightning-fast mempool integration bypasses network congestion delays.</p>
                </div>
            </div>
        `
    }
};

function switchTab(tabKey, event) {
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');

    const view = viewsData[tabKey];
    if (!view) return;

    const hero = document.getElementById('hero-content');
    const panel = document.getElementById('dashboard-content');
    
    hero.style.opacity = '0';
    panel.style.opacity = '0';

    setTimeout(() => {
        hero.innerHTML = `
            <h1>${view.heroTitle}</h1>
            <p class="lede">${view.heroLede}</p>
            <div class="hero-buttons">
                <button class="btn-primary">Get Started</button>
                <button class="btn-secondary">Explore</button>
            </div>
        `;

        panel.innerHTML = `
            <div class="sidebar">${view.sidebarHtml}</div>
            <div class="dash-main">${view.mainHtml}</div>
        `;

        hero.style.opacity = '1';
        panel.style.opacity = '1';
    }, 200);
}