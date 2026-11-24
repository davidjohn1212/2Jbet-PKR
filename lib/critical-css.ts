/** Above-the-fold styles inlined so first paint is not blocked by the full stylesheet. */
export const CRITICAL_CSS = `
html{background:#fff;color:#1a1a2e;-webkit-font-smoothing:antialiased;text-size-adjust:100%}
body{margin:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;font-size:1rem;line-height:1.5;color:#1a1a2e;background:#fff}
*,*::before,*::after{box-sizing:border-box}
.page{width:100%;min-height:100vh;margin:0;padding:0 2.5rem 3rem}
.site-header{padding:1rem 2.5rem;border-bottom:1px solid #e8eaed;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.06)}
.site-header-inner{display:flex;align-items:center;justify-content:space-between;gap:1rem;max-width:1200px;margin:0 auto}
.site-brand{display:inline-flex;align-items:center;gap:.5rem;text-decoration:none;color:#1a1a2e;font-weight:700}
.site-brand-icon{width:28px;height:28px;border-radius:6px;display:block}
.site-brand-tag{margin-left:.25rem;color:#5f6368;font-weight:600}
.site-nav{display:flex;align-items:center;gap:1rem}
.site-nav a{color:#1a1a2e;text-decoration:none;font-weight:500}
.mobile-menu-toggle{display:none;background:none;border:0;padding:.25rem;cursor:pointer}
.mobile-menu-toggle span{display:block;width:20px;height:2px;background:#1a1a2e;margin:4px 0}
.hero-row{display:flex;align-items:center;justify-content:space-between;gap:2.5rem;margin-bottom:2.5rem;padding:2.5rem;background:#fff;border-radius:16px;box-shadow:0 4px 12px rgba(0,0,0,.08)}
.hero-content{flex:1;min-width:0}
.content-title{font-size:1.875rem;font-weight:700;line-height:1.25;margin:0 0 .5rem;color:#1a1a2e;letter-spacing:-.02em}
.hero-lead{font-size:1rem;color:#5f6368;margin:0 0 1rem;line-height:1.5}
.actions-row{display:flex;align-items:center;gap:1rem;margin-bottom:2rem}
.hero-content .actions-row{margin-bottom:0}
.btn-primary{display:inline-flex;align-items:center;justify-content:center;padding:1rem 2.5rem;font-size:1rem;font-weight:600;color:#fff;background:#166534;border:none;border-radius:12px;text-decoration:none;box-shadow:0 2px 8px rgba(22,101,52,.35)}
.hero-icon-wrap{flex-shrink:0}
.hero-promo-image{width:min(38vw,200px);height:auto;display:block}
@media (max-width:720px){
.page{padding:0 1rem 2rem}
.site-header{padding:.75rem 1rem}
.site-nav{display:none}
.mobile-menu-toggle{display:block}
.hero-row{flex-direction:column-reverse;align-items:flex-start;gap:1.25rem;padding:1.25rem;margin-bottom:1.5rem}
.content-title{font-size:1.5rem}
}
`.replace(/\n/g, "");