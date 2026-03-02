(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(a){if(a.ep)return;a.ep=!0;const s=i(a);fetch(a.href,s)}})();const b=`
<nav id="navbar" role="navigation" aria-label="Main navigation">
  <div class="container">
    <div class="nav-inner">
      <a href="#" class="nav-logo" aria-label="Oshlink home">OSH<span>LINK</span></a>
      <ul class="nav-links" role="list">
        <li><a href="#how-it-works">How It Works</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#results">Results</a></li>
        <li><a href="#audit-form">Start Audit</a></li>
      </ul>
      <div class="nav-cta">
        <a href="#audit-form" class="btn btn-primary">Get Your Free Audit →</a>
      </div>
    </div>
  </div>
</nav>
`,g=`
<section id="hero" aria-labelledby="hero-headline">
  <div class="hero-bg" aria-hidden="true">
    <svg viewBox="0 0 1440 900" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="rg1" cx="70%" cy="40%" r="60%">
          <stop offset="0%" stop-color="#984447" stop-opacity="0.07"/>
          <stop offset="100%" stop-color="#1C2321" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="1440" height="900" fill="url(#rg1)"/>
      <path class="path-anim" d="M 200 700 Q 400 400 700 350 T 1200 200" stroke="#984447" stroke-opacity="0.18" style="animation-delay:0.2s"/>
      <path class="path-anim" d="M 0 500 Q 300 200 600 300 T 1000 150" stroke="#984447" stroke-opacity="0.1" style="animation-delay:0.8s"/>
      <path class="path-anim" d="M 400 900 Q 600 600 900 500 T 1440 400" stroke="#984447" stroke-opacity="0.08" style="animation-delay:1.2s"/>
      <!-- circuit nodes -->
      <circle cx="700" cy="350" r="4" fill="#984447" fill-opacity="0.35"/>
      <circle cx="1200" cy="200" r="3" fill="#984447" fill-opacity="0.25"/>
      <circle cx="600" cy="300" r="3" fill="#984447" fill-opacity="0.2"/>
      <circle cx="400" cy="900" r="3" fill="#984447" fill-opacity="0.15"/>
    </svg>
    <div class="hero-gradient"></div>
  </div>
  <div class="container">
    <div class="hero-content">
      <p class="hero-eyebrow">AI Automation Agency</p>
      <h1 class="hero-headline" id="hero-headline">
        Your team is spending<br>
        thousands of hours<br>
        on work <em>AI can do in seconds</em>.
      </h1>
      <p class="hero-subheadline">
        Oshlink builds custom AI systems that handle your operations,
        sales follow-up, and client support — so your people can focus
        on work that actually moves the needle.
      </p>
      <p class="hero-body">
        We're not selling software. We design, build, and deploy end-to-end
        automation infrastructure tailored to how your business actually works.
        Most clients see measurable time savings within the first two weeks.
      </p>
      <div class="hero-pills" role="list" aria-label="Service categories">
        <span class="pill" role="listitem">· AI Workflow Automation</span>
        <span class="pill" role="listitem">· Voice Agents &amp; AI Calling</span>
        <span class="pill" role="listitem">· CRM &amp; Lead Nurturing</span>
        <span class="pill" role="listitem">· Document Processing</span>
      </div>
      <div class="hero-ctas">
        <a href="#audit-form" class="btn btn-primary">Audit My Business for Free</a>
        <a href="#how-it-works" class="btn btn-ghost">See How It Works ↓</a>
      </div>
    </div>
  </div>
</section>
`,w=["NovaTech","PeakScale","Meridian","Altura Group","ClearPath","Orion Labs","Bluefin Co","Axiom Pro","NovaTech","PeakScale","Meridian","Altura Group","ClearPath","Orion Labs","Bluefin Co","Axiom Pro"],k=`
<section id="logo-ticker" aria-label="Trusted by">
  <div class="container">
    <p class="ticker-label">Trusted by growth-stage businesses across Australia and beyond</p>
  </div>
  <div class="ticker-track" aria-hidden="true">
    <div class="ticker-inner">
      ${w.map(e=>`<div class="ticker-logo">${e}</div>`).join("")}
    </div>
  </div>
  <div class="container">
    <p class="ticker-label-below">Join 40+ businesses that have automated their operations with Oshlink.</p>
  </div>
</section>
`,x=`
<section id="how-it-works" class="section" aria-labelledby="hiw-headline">
  <div class="container">
    <span class="section-eyebrow">Process</span>
    <h2 class="section-headline reveal" id="hiw-headline">From First Call to Full Automation in 3 Steps</h2>
    <div class="hiw-grid">
      <div class="hiw-card reveal" style="transition-delay:0.1s">
        <div class="hiw-num" aria-hidden="true">01</div>
        <h3>We Audit Your Operations</h3>
        <p>In a free 45-minute session, we map every repetitive, manual process costing your team time and money. Most businesses uncover 15–25 hours of automatable work per week.</p>
      </div>
      <div class="hiw-card reveal" style="transition-delay:0.2s">
        <div class="hiw-num" aria-hidden="true">02</div>
        <h3>We Build Your Custom System</h3>
        <p>No templates. No off-the-shelf tools. We design workflows, voice agents, and integrations specifically for your stack — whether that's HubSpot, Salesforce, a custom CRM, or something we build from scratch.</p>
      </div>
      <div class="hiw-card reveal" style="transition-delay:0.3s">
        <div class="hiw-num" aria-hidden="true">03</div>
        <h3>You Get Time Back, Permanently</h3>
        <p>We deploy, test, and hand over a system your team can run without us. Most clients are live in 14 days or less, with ongoing support available if needed.</p>
      </div>
    </div>
    <div class="hiw-cta reveal">
      <a href="#audit-form" class="btn btn-primary">Book a Free Audit Session →</a>
    </div>
  </div>
</section>
`,A=[{front:"Never Miss a Warm Lead Again",cat:"Client Acquisition",bullets:["AI qualifies and responds to inbound leads 24/7","Automated multi-channel follow-up sequences","Integrates with your existing CRM in days","Clients report 3× faster response time to new leads"]},{front:"Answer Every Call. Close More Deals.",cat:"Voice Infrastructure",bullets:["AI voice agents handle calls, FAQs, and bookings","Natural-sounding, trained on your business tone","Escalates to human staff when needed","Works after hours, on weekends, during peak seasons"]},{front:"Eliminate the Work That Clogs Your Week",cat:"Workflow Automation",bullets:["End-to-end automation of repetitive internal processes","Connects your tools without a developer on retainer","Custom-built on n8n, Make, or native APIs","Average time saved: 18 hours/week per client"]},{front:"Your CRM Should Work, Not Just Exist",cat:"CRM Management",bullets:["Auto-update contacts, deals, and tasks from any trigger","AI-driven lead scoring and pipeline management","Sync across email, calls, forms, and messaging apps","Works with HighLevel, HubSpot, Salesforce, and more"]},{front:"Support That Never Sleeps or Burns Out",cat:"Customer Support",bullets:["AI handles Tier-1 support across chat, email, and phone","Trained on your knowledge base and FAQs","Escalation paths built in for complex issues","Reduce support load by up to 70% from week one"]},{front:"Kill Manual Data Entry, Permanently",cat:"Document Processing",bullets:["Extract, validate, and route data from any document","Works with invoices, contracts, forms, and PDFs","Integrates into your existing approval workflows","Eliminates transcription errors at the source"]}],C=`
<section id="services" class="section section--alt" aria-labelledby="services-headline">
  <div class="container">
    <span class="section-eyebrow">What We Build</span>
    <h2 class="section-headline reveal" id="services-headline">We Build the Systems Your Business Runs On</h2>
    <p class="section-sub reveal">Six core solutions, all custom-built for your operations.<br>No bloated retainers, no cookie-cutter installs.</p>
    <p class="flip-hint">Tap a card to see details</p>
    <div class="services-grid" role="list">
      ${A.map((e,t)=>`
        <div class="flip-card reveal" style="transition-delay:${t*.07}s" role="listitem" tabindex="0" aria-label="${e.front}" aria-expanded="false">
          <div class="flip-card-inner">
            <div class="flip-front" aria-hidden="false">
              <div class="flip-front-glow" aria-hidden="true"></div>
              <div class="flip-front-content">
                <span class="service-category">${e.cat}</span>
                <h3>${e.front}</h3>
              </div>
            </div>
            <div class="flip-back" aria-hidden="true">
              <ul>
                ${e.bullets.map(i=>`<li>${i}</li>`).join("")}
              </ul>
            </div>
          </div>
        </div>
      `).join("")}
    </div>
  </div>
</section>
`,I=[{type:"E-commerce Operations",quote:'"We had two people doing nothing but processing orders and chasing suppliers all day. Oshlink automated the whole pipeline in under three weeks. Those two staff now run our partnerships team."',attr:"Operations Director, Sydney-based retailer",metric:"40 hrs/week reclaimed"},{type:"Professional Services Firm",quote:`"Our voice agent handles 80% of inbound enquiries now. We haven't missed a lead since go-live and our close rate went up because we're actually responding fast."`,attr:"Managing Director, Brisbane consulting firm",metric:"3× faster lead response time"},{type:"Health & Wellness Business",quote:'"The onboarding automation alone saved us roughly $4,000 a month in admin time. It was running in 14 days."',attr:"Founder, multi-location wellness studio",metric:"$4k/month saved in admin costs"}],M=`
<section id="results" class="section" aria-labelledby="results-headline">
  <div class="container">
    <span class="section-eyebrow">Client Results</span>
    <h2 class="section-headline reveal" id="results-headline">Real Results, Not Marketing Numbers</h2>
    <div class="results-grid">
      ${I.map((e,t)=>`
        <article class="result-card reveal" style="transition-delay:${t*.12}s" aria-label="Client result from ${e.type}">
          <span class="result-client-type">${e.type}</span>
          <blockquote class="result-quote">${e.quote}</blockquote>
          <cite class="result-attribution">${e.attr}</cite>
          <div class="result-metric">
            <span class="metric-value">↑</span>
            <span class="metric-label">${e.metric}</span>
          </div>
        </article>
      `).join("")}
    </div>
  </div>
</section>
`,q=`
<section id="roi-calculator" class="section" aria-labelledby="roi-headline">
  <div class="container">
    <span class="section-eyebrow">ROI Calculator</span>
    <h2 class="section-headline reveal" id="roi-headline">See Exactly What Manual Work Is Costing You</h2>
    <p class="section-sub reveal">Adjust the sliders below. The numbers are based on average automation savings across our client base — not projections.</p>
    <div class="roi-layout">
      <div class="roi-sliders reveal">
        <div class="slider-group">
          <label for="s-team">
            Team members doing repetitive manual tasks
            <span class="slider-value" id="v-team">5</span>
          </label>
          <input type="range" id="s-team" min="1" max="50" value="5" aria-label="Number of team members">
        </div>
        <div class="slider-group">
          <label for="s-hours">
            Hours per week spent on automatable work
            <span class="slider-value" id="v-hours">20</span>
          </label>
          <input type="range" id="s-hours" min="1" max="60" value="20" aria-label="Hours per week">
        </div>
        <div class="slider-group">
          <label for="s-rate">
            Average hourly cost per team member (AUD)
            <span class="slider-value" id="v-rate">$45</span>
          </label>
          <input type="range" id="s-rate" min="20" max="200" value="45" step="5" aria-label="Hourly rate in AUD">
        </div>
      </div>
      <div class="roi-results reveal" aria-live="polite" aria-label="ROI calculation results">
        <div class="roi-result-item">
          <p class="roi-result-label">What you're spending annually on this work</p>
          <p class="roi-result-value" id="roi-spend">$234,000</p>
        </div>
        <div class="roi-result-item">
          <p class="roi-result-label">Conservative estimate of what automation saves you</p>
          <p class="roi-result-value positive" id="roi-save">$140,400</p>
        </div>
        <div class="roi-result-item">
          <p class="roi-result-label">Estimated payback period on an Oshlink engagement</p>
          <p class="roi-result-value neutral" id="roi-payback">~2 months</p>
        </div>
        <p class="roi-below">These estimates are conservative. Book a free audit to get a number specific to your actual operations.</p>
        <a href="#audit-form" class="btn btn-primary roi-cta">Get My Exact Savings Estimate →</a>
      </div>
    </div>
  </div>
</section>
`,E=`
<section id="audit-form" class="section section--alt" aria-labelledby="form-headline">
  <div class="container">
    <div class="form-layout">
      <div class="form-left reveal">
        <span class="section-eyebrow">Free Efficiency Audit</span>
        <h2 id="form-headline">Find Out Exactly Where You're Losing Time and Money</h2>
        <p class="section-sub" style="margin-bottom:0;">This isn't a sales call. A specialist reviews your operations and sends you a specific breakdown of what's automatable in your business — for free.</p>
      </div>
      <div class="form-card reveal">
        <div class="step-indicator" aria-label="Form progress">
          <div class="step-dot active" id="dot-1" aria-label="Step 1 of 2">1</div>
          <div class="step-line"></div>
          <div class="step-dot" id="dot-2" aria-label="Step 2 of 2">2</div>
        </div>
        <form id="audit-form-el" novalidate>
          <!-- Step 1 -->
          <div class="form-step active" id="step-1">
            <div class="form-group">
              <label for="f-firstname">First Name</label>
              <input type="text" id="f-firstname" name="firstname" placeholder="Jane" required autocomplete="given-name">
            </div>
            <div class="form-group">
              <label for="f-email">Work Email</label>
              <input type="email" id="f-email" name="email" placeholder="jane@company.com" required autocomplete="email">
            </div>
            <div class="form-group">
              <label for="f-industry">Industry</label>
              <select id="f-industry" name="industry" required>
                <option value="">Select your industry…</option>
                <option>E-commerce &amp; Retail</option>
                <option>Professional Services</option>
                <option>Health &amp; Wellness</option>
                <option>Real Estate</option>
                <option>Finance &amp; Insurance</option>
                <option>Technology</option>
                <option>Hospitality &amp; Events</option>
                <option>Construction &amp; Trades</option>
                <option>Other</option>
              </select>
            </div>
            <button type="button" class="btn btn-primary" id="step1-next" style="align-self:flex-start">Start My Audit →</button>
          </div>
          <!-- Step 2 -->
          <div class="form-step" id="step-2">
            <div class="form-group">
              <label for="f-company">Company Name</label>
              <input type="text" id="f-company" name="company" placeholder="Acme Corp" required autocomplete="organization">
            </div>
            <div class="form-group">
              <label for="f-teamsize">Team Size</label>
              <select id="f-teamsize" name="teamsize" required>
                <option value="">Select team size…</option>
                <option>1–5</option>
                <option>6–20</option>
                <option>21–50</option>
                <option>50+</option>
              </select>
            </div>
            <div class="form-group">
              <label>Biggest Bottleneck</label>
              <div class="pill-group" role="radiogroup" aria-label="Biggest bottleneck">
                ${["Lead follow-up","Internal operations","Customer support","Document handling"].map((e,t)=>`
                  <div class="pill-radio">
                    <input type="radio" id="bn-${t}" name="bottleneck" value="${e}">
                    <label for="bn-${t}">${e}</label>
                  </div>
                `).join("")}
              </div>
            </div>
            <div class="form-group">
              <label for="f-notes">Anything else we should know? <span style="color:var(--text-muted);">(optional)</span></label>
              <textarea id="f-notes" name="notes" placeholder="Tell us a bit about your operations…" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary" style="align-self:flex-start">Submit &amp; Get My Report</button>
          </div>
          <!-- Success -->
          <div class="form-step" id="step-success" style="display:none;align-items:center;text-align:center;padding:2rem 0;">
            <svg width="52" height="52" viewBox="0 0 52 52" fill="none" aria-hidden="true">
              <circle cx="26" cy="26" r="25" stroke="#984447" stroke-width="1.5"/>
              <path d="M15 26l8 8 14-14" stroke="#984447" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <h3 style="margin-top:1rem;">You're on the list.</h3>
            <p>A specialist will review your submission and respond within 24 business hours with a specific breakdown — not a brochure.</p>
          </div>
        </form>
        <p class="trust-text">No spam. No cold pitch. A real specialist reviews your answers and responds within 24 business hours with a specific breakdown — not a brochure.</p>
      </div>
    </div>
  </div>
</section>
`,S=[{q:"How long does it actually take to go live?",a:"For most clients, the first automation is running within 7–14 days of the audit. Complex multi-system builds take 3–6 weeks. We'll tell you exactly during the free audit — no vague timelines."},{q:"Do we need to change the tools we already use?",a:"Almost never. We build around your existing stack. If a tool is creating the problem, we'll tell you, but we don't push replacements you don't need."},{q:"What happens if something breaks after handover?",a:"Every build includes a 30-day post-launch support window. Ongoing support retainers are available for businesses that want Oshlink to maintain and expand their systems over time."},{q:"Is this just a chatbot?",a:"No. Chatbots are one tool in a much larger automation ecosystem. We build full workflows: data pipelines, voice agents, CRM automation, document processing, multi-step triggers — whatever your operation actually needs."},{q:"How much does it cost?",a:"Engagements vary by scope. The free audit gives you a clear project scope and a fixed-price quote before you commit to anything. Most clients recoup the investment within the first 60–90 days."}],L=`
<section id="faq" class="section" aria-labelledby="faq-headline">
  <div class="container">
    <span class="section-eyebrow">FAQ</span>
    <h2 class="section-headline reveal" id="faq-headline" style="text-align:center;margin-bottom:3rem;">Questions We Get Asked Before the First Call</h2>
    <div class="faq-container reveal">
      ${S.map((e,t)=>`
        <div class="faq-item" id="faq-item-${t}">
          <button class="faq-question" aria-expanded="false" aria-controls="faq-ans-${t}" id="faq-btn-${t}">
            ${e.q}
            <span class="faq-icon" aria-hidden="true">+</span>
          </button>
          <div class="faq-answer" id="faq-ans-${t}" role="region" aria-labelledby="faq-btn-${t}">
            <div class="faq-answer-inner">${e.a}</div>
          </div>
        </div>
      `).join("")}
    </div>
  </div>
</section>
`,B=`
<footer id="footer" role="contentinfo">
  <div class="container">
    <div class="footer-newsletter reveal">
      <h3>Get a free automation idea for your industry every two weeks.</h3>
      <p>No fluff, no pitch.</p>
      <form class="newsletter-form" onsubmit="handleNewsletter(event)" aria-label="Newsletter signup">
        <input type="email" placeholder="Your work email" aria-label="Work email address" required>
        <button type="submit" class="btn btn-primary" style="white-space:nowrap;">Send Me Ideas</button>
      </form>
    </div>
    <div class="footer-grid">
      <div class="footer-brand">
        <span class="footer-logo">OSH<span>LINK</span></span>
        <p>Custom AI systems that automate your operations, sales, and support — built for your business, not a template.</p>
      </div>
      <div class="footer-col">
        <h4>Services</h4>
        <ul>
          <li><a href="#services">Client Acquisition</a></li>
          <li><a href="#services">Voice Infrastructure</a></li>
          <li><a href="#services">Workflow Automation</a></li>
          <li><a href="#services">CRM Management</a></li>
          <li><a href="#services">Customer Support</a></li>
          <li><a href="#services">Document Processing</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#results">Case Studies</a></li>
          <li><a href="#audit-form">Free Audit</a></li>
          <li><a href="#">About Oshlink</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <ul>
          <li><a href="mailto:info@oshlink.com">info@oshlink.com</a></li>
        </ul>
        <div class="social-links" aria-label="Social media links">
          <a href="#" class="social-link" aria-label="LinkedIn" rel="noopener noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="#" class="social-link" aria-label="X (Twitter)" rel="noopener noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="#" class="social-link" aria-label="YouTube" rel="noopener noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 Oshlink. All rights reserved.</p>
      <nav class="footer-legal" aria-label="Legal links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms</a>
      </nav>
    </div>
  </div>
</footer>
`,T=`
<nav id="floating-nav" role="navigation" aria-label="Mobile bottom navigation">
  <div class="floating-nav-inner">
    <a href="#hero" class="fn-link" aria-label="Home">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
      Home
    </a>
    <a href="#services" class="fn-link">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
      </svg>
      Services
    </a>
    <a href="#audit-form" class="fn-cta">Start Audit</a>
  </div>
</nav>
`,H=document.getElementById("app");H.innerHTML=[b,g,k,x,C,M,q,E,L,B,T].join("");const W=document.getElementById("navbar");window.addEventListener("scroll",()=>{W.classList.toggle("scrolled",window.scrollY>40)},{passive:!0});const m=document.querySelectorAll(".reveal"),v=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add("visible"),v.unobserve(t.target))})},{threshold:.12,rootMargin:"0px 0px -40px 0px"});m.forEach(e=>v.observe(e));setTimeout(()=>{m.forEach(e=>{e.getBoundingClientRect().top<window.innerHeight&&e.classList.add("visible")})},100);const $=document.querySelectorAll(".flip-card");$.forEach(e=>{e.addEventListener("keydown",t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),e.classList.toggle("flipped"),e.setAttribute("aria-expanded",e.classList.contains("flipped")))}),e.addEventListener("click",()=>{window.matchMedia("(hover: none)").matches&&(e.classList.toggle("flipped"),e.setAttribute("aria-expanded",e.classList.contains("flipped")))})});function h(){const e=parseInt(document.getElementById("s-team").value),t=parseInt(document.getElementById("s-hours").value),i=parseInt(document.getElementById("s-rate").value);document.getElementById("v-team").textContent=e,document.getElementById("v-hours").textContent=t,document.getElementById("v-rate").textContent=`$${i}`;const o=e*t*52*i,a=Math.round(o*.6),s=Math.max(1,Math.round(15e3/(a/12))),n=y=>"$"+y.toLocaleString("en-AU");document.getElementById("roi-spend").textContent=n(o),document.getElementById("roi-save").textContent=n(a);let r;s<=1?r="~1 month":s<=2?r="~2 months":s<=3?r="~3 months":r=`~${s} months`,document.getElementById("roi-payback").textContent=r}["s-team","s-hours","s-rate"].forEach(e=>{var t;(t=document.getElementById(e))==null||t.addEventListener("input",h)});h();const c=document.getElementById("step1-next"),O=document.getElementById("step-1"),f=document.getElementById("step-2"),d=document.getElementById("dot-1"),l=document.getElementById("dot-2");c==null||c.addEventListener("click",()=>{const e=document.getElementById("f-firstname"),t=document.getElementById("f-email"),i=document.getElementById("f-industry");let o=!0;[e,t,i].forEach(a=>{!a.value.trim()||a.type==="email"&&!a.checkValidity()?(a.style.borderColor="var(--accent)",a.setAttribute("aria-invalid","true"),o=!1):(a.style.borderColor="",a.removeAttribute("aria-invalid"))}),o&&(O.style.display="none",f.classList.add("active"),d.classList.remove("active"),d.classList.add("done"),l.classList.add("active"),l.scrollIntoView({behavior:"smooth",block:"nearest"}))});var p;(p=document.getElementById("audit-form-el"))==null||p.addEventListener("submit",e=>{e.preventDefault(),f.style.display="none";const t=document.getElementById("step-success");t.style.display="flex",t.style.flexDirection="column",l.classList.remove("active"),l.classList.add("done")});const u=document.querySelectorAll(".faq-item");u.forEach(e=>{const t=e.querySelector(".faq-question"),i=e.querySelector(".faq-answer"),o=e.querySelector(".faq-answer-inner");t==null||t.addEventListener("click",()=>{const a=e.classList.contains("open");u.forEach(s=>{s.classList.remove("open");const n=s.querySelector(".faq-answer"),r=s.querySelector(".faq-question");n&&(n.style.maxHeight="0"),r&&r.setAttribute("aria-expanded","false")}),a||(e.classList.add("open"),i.style.maxHeight=o.scrollHeight+"px",t.setAttribute("aria-expanded","true"))})});window.handleNewsletter=function(e){e.preventDefault();const t=e.target.querySelector('input[type="email"]'),i=e.target.querySelector("button");t&&i&&(i.textContent="✓ Subscribed!",i.disabled=!0,t.value="",setTimeout(()=>{i.textContent="Send Me Ideas",i.disabled=!1},3e3))};
