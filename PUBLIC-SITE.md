# Miami Creators public frontend

## Development

Use `npm ci --ignore-scripts` and `npm run dev:site`. Build with `npm run build:site`; preview with `npm run preview:site`.

## Public behavior

- Four approved creator profiles are featured; only public names, bios, niches, photos and available social links are bundled.
- Featured is the active catalog category. Other categories require catalog access and are disabled.
- The blurred section is decorative: no additional applicant records are sent to the browser. CSS blur is not an access-control mechanism.
- View more creators opens /plans. Catalog access is requested through the scheduling URL already used by the original project. Prices and scope are agreed directly; there is no checkout or automatic paid unlock.
- Creator applications are closed. No personal-data collection form, fake submission, local inbox or simulated email verification is included in the public UI.
- No tracking or database is used by this frontend.

## Deployment

Vercel uses the static builder and `vercel-build` script, publishing `dist-showcase`. Explicit static-only builds avoid deploying the legacy api/ endpoints. File-system routes serve assets before the SPA fallback. Test /catalog, /plans, /creators/apply and a direct refresh after deployment.

The earlier redesign and backend versions remain in Git history. This frontend does not claim the wider catalog is immediately available or a payment was made.
