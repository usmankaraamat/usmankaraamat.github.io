# Usman’s little corner of the internet

A static personal portfolio featuring Hisaab and Eatify.

The published site lives in `dist/`. No build step or runtime dependencies.
Run a static HTTP server against `dist/` to preview it locally.
GitHub Actions publishes `dist/` to GitHub Pages on pushes to `main`.

Enable GitHub Pages with GitHub Actions as the source when creating the repository.
The intended repository is `usmankaraamat/usmankaraamat.github.io`.

The screenshots are existing demo captures. The CV is the supplied professional PDF.

Page views are counted through the same private Supabase product-insights
endpoint as Eatify and Hisaab. It stores a random local browser ID and page name
only. View totals with `portfolio_usage_summary` and per-page counts with
`product_event_daily` in the Supabase SQL editor.

