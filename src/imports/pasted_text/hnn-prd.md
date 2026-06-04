Markdown






# Product Requirement Document (PRD)
## Project Kiro: Hood News Network (HNN) Web Platform

| Metadata | Details |
| :--- | :--- |
| **Author / Client** | Kiro |
| **Brand Subject** | Hood Anchor Ye (Carldez Goodley) |
| **Product** | HNN Web Platform (Desktop & Mobile) |
| **Document Version** | 1.0 |
| **Status** | Ready for Development |

---

## 1. Executive Summary & Objective
The objective of this project is to build a high-performance web platform for the **Hood News Network (HNN)**. The platform acts as a direct, street-level parody of premium corporate news giants like CNN. It combines rigid, urgent cable-news UI elements (breaking news flashes, heavy video modules, infinite live scrolling tickers) with a raw, grassroots cultural identity. 

The site will serve as HNN's independent media hub, housing live video streaming, an un-censored video archive, an exclusive e-commerce streetwear shop, and an anonymous crowdsourced community tip portal. The ultimate goal is to establish HNN as the official "Cable News for the Culture," bypassing traditional mainstream media filters to deliver urgent city updates straight from the people who live it.

---

## 2. Core User Personas
*   **The Viewer ("The Culture"):** Local Atlanta residents and global fans looking for unfiltered, authentic, street-level breaking news without mainstream media sanitization. They engage heavily with raw footage and are prime buyers of exclusive merchandise drops.
*   **The Content Creator (Hood Anchor Ye & Crew):** Administrative users needing the ability to push instantaneous live-stream feeds, upload un-edited footage, modify scrolling news ticker text, and drop limited merchandise collections.
*   **The Informant ("The Streets"):** Neighborhood locals who want to securely and anonymously submit tips, videos, and eyewitness footage of active situations before mainstream news desks arrive on the scene.

---

## 3. Functional Requirements & Feature Breakdown

### Feature Group 1: The HNN Newsroom (Media Hub)
The frontend interface must explicitly mimic a high-urgency corporate cable news site.

*   **FR-1.1: Global Breaking News Ticker**
    *   **Description:** A high-contrast, constantly scrolling horizontal text ticker running infinitely at the header or footer of the viewport.
    *   **Admin Control:** The backend admin panel must allow real-time text injection, deletion, and editing for urgent culture alerts, traffic updates, or neighborhood warnings.
    *   **Behavior:** Must remain smooth, continuous, and highly visible across all screen sizes without stuttering.

*   **FR-1.2: Persistent Live Stream Window**
    *   **Description:** A prominent, high-priority video player located at the top center of the homepage (resembling CNN’s live broadcast section).
    *   **Active State:** When Hood Anchor Ye goes live on-scene from his mobile device, the web player dynamically switches to an active "LIVE NOW" state. This triggers flashing red graphic indicators and a dramatic, heavy-bass intro audio alert.
    *   **Offline State:** When there is no active live stream, the player automatically rolls over to a 24/7 continuous loop of top archived segments, past broadcasts, and programmatic network content.

*   **FR-1.3: The Uncensored Vault (Video Grid)**
    *   **Description:** A categorized, searchable video library bypassing standard social media algorithmic shadow-bans and censorship guidelines.
    *   **Content Pillars:** Organized into core segments: *HNN Situation Room* (extended live interviews on scene), *Community Spotlights* (local Atlanta businesses and figures), and *Raw & Uncut* (raw footage too graphic or unfiltered for corporate television).
    *   **Hosting Requirement:** Requires self-hosted video cloud hosting or a premium secure API infrastructure (e.g., Vimeo OTT, AWS Elemental, or Mux) to avoid automated third-party platform copyright strikes and takedowns.

### Feature Group 2: The HNN Supply Closet (E-Commerce Integrated)
A seamless checkout integration designed to mimic a corporate "newsroom supply closet" but packed with premium streetwear culture.

*   **FR-2.1: Tiered Merchandise Catalog**
    *   **Description:** An integrated digital storefront providing clean, visually striking product listings with fast filtering options.
    *   **The Anchor Collection:** Premium lifestyle garments mirroring the anchor's viral layout (custom silk/velvet bathrobes, monogrammed pajama pants, slippers).
    *   **HNN Press Gear:** Traditional newsroom apparel rebranded for the streets ("HNN Press" hoodies, heavy-weight graphic tees, signature caps).
    *   **Field Reporter Kits:** Equipment to monetize and expand the citizen journalism fleet (branded replica HNN microphone cubes, portable ring lights, heavy-duty phone stabilization rigs).
    *   **Integration:** Full backend sync with Shopify or a headless e-commerce API for inventory management and standard payment gateway processing (Apple Pay, Credit Cards, Crypto).

*   **FR-2.2: Limited Drop Mechanic**
    *   **Description:** Support for countdown timers, flash sales, exclusive gated access, and "Sold Out" stamp overlays to capitalize on street-culture hype drops.

### Feature Group 3: The Neighborhood Bureau (Crowdsourcing & Interactive)
Community-driven features built on absolute trust, local safety, and digital discretion.

*   **FR-3.1: Anonymous Secure Tip Drop**
    *   **Description:** A highly secure, ultra-simplified drag-and-drop file upload portal built directly into the UI.
    *   **Anonymity Layer:** The system backend must automatically strip all metadata, geotags, and EXIF data upon file ingestion to guarantee the complete anonymity of the informant.
    *   **Flow:** No signup, email login, or account verification is required to submit a tip. Users simply drop the video/photo file and optionally add a text note detailing the location and event.

*   **FR-3.2: The HNN Town Hall (Community Forum)**
    *   **Description:** A lightweight, community discussion board focused entirely on local neighborhood affairs (gentrification, local politics, neighborhood safety, city development).
    *   **Moderation Guardrails:** Requires custom, automated moderation filters to prevent commercial spam and botting, while explicitly allowing authentic local vocabulary, slang, and cultural discussion to thrive without corporate censorship or shadow-banning.

---

## 4. Visual Identity & UX/UI Guidelines
The user interface uses clean, rigid structure to create the parody; corporate grids make the un-sanitized content pop.


*   **Color Palette:** Urgent Crimson Red (`#FF0000`) for breaking news elements, Dark Asphalt Gray/Black (`#121212`) for background depth, and High-Visibility Yellow (`#FFCC00`) for primary alerts.
*   **Typography:** Bold, aggressive, authoritative sans-serif fonts reminiscent of legacy global news network banners (e.g., Impact, Helvetica Compressed, or heavy grotesque faces).
*   **Atmosphere:** High-production value meets the block. The UI must look ultra-professional, forcing a hilarious and engaging contrast against the raw, unedited content being served.

---

## 5. Technical Requirements & Architecture Considerations

*   **Hosting & Scalability:** Traffic patterns will be highly volatile. When a major breaking incident occurs in metro Atlanta, traffic will spike violently. The platform must be built on a serverless architecture or backed by a robust Content Delivery Network (like Cloudflare Enterprise) to seamlessly absorb instant viral surges of hundreds of thousands of concurrent mobile hits without crashing.
*   **Video Delivery Engine:** Integration with a ultra-low-latency streaming infrastructure (e.g., AWS Interactive Video Service [IVS] or Mux Video). This ensures that live streams pushed from a mobile field device by Hood Anchor Ye translate instantly and crisply to the desktop and mobile web hub.
*   **Mobile-First Design:** Data indicates over 85% of traffic will originate from mobile viewports via direct links clicked inside external apps like TikTok, Instagram, or X. The mobile web experience must be incredibly lightweight, fast, responsive, and optimized for minimal battery and data consumption during long video playback stretches.

---

## 6. Success Metrics & KPIs
1.  **Uptime Resilience:** Maintaining less than 0.1% platform downtime during high-profile breaking news traffic spikes.
2.  **Conversion Rate:** E-commerce store conversion rate of greater than 2.5% during newly announced "Supply Closet" limited merchandise drops.
3.  **User Retention:** Sustaining high weekly returning user metrics driven by consistent text ticker changes and real-time updates to the Uncensored Vault.