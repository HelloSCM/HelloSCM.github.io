# Chenming Shang · Academic Homepage

Built with Jekyll and based on [Shaoyan Liu’s Academic Homepage template](https://github.com/shaoyanliu/academic-homepage).

## Customize

| What to change | File |
| --- | --- |
| Name, affiliation, email, social links, avatar, SEO | `_config.yml` |
| Bio and homepage headings | `index.md` |
| Education and internships | `_data/experience.yml` |
| Navigation | `_data/navigation.yml` |
| Papers and selected papers (`selected: true`) | `_data/publications.yml` |
| Publication topic labels | `_data/publication_topics.yml` |
| Service, awards, and scholarships | `_data/activities.yml` |
| Mascot photo | `mascot.md` |
| Colors, spacing, typography | `assets/css/theme.css`, `layout-wide.css`, `style.css` |
| Favicon | `assets/img/favicon.svg` |

Use `code`, `paper`, and `project` for publication links. Point `paper` to an abstract or article landing page. For a homepage paper thumbnail, set `image` and `image_alt` on the publication entry. Keep local asset paths root-based, such as `/assets/img/publications/evoch.png`.

Set `lead_author: true` on papers where Chenming is first or joint first author. Within each year, the publications page lists these papers first and assigns numbers across years. Use `author_note` for authorship notes shown after the byline.

Use `featured_order` to set the display order of selected papers on the homepage.

Set one `topic` per publication using an ID from `_data/publication_topics.yml`. The same topic appears as the paper label and controls the Publications filters.

## Optional daily Scholar updates

1. Set `scholar.enabled: true` and `scholar.profile_id` in `_config.yml`. The ID is the `user=` value in your public Google Scholar profile URL. Set `google_scholar` to your own profile link.
2. In **Settings → Secrets and variables → Actions**, add repository secret **`SERPAPI_API_KEY`** containing your own SerpApi key. Never put the key in a file or commit it.
3. Add repository variable **`ENABLE_SCHOLAR_SYNC`** with value **`true`**.
4. Run **Update Google Scholar statistics** manually once and inspect the run summary.

The scheduled run is daily at **05:16 America/New_York**, including daylight-saving changes. GitHub schedules can be delayed; this is not a real-time service. SerpApi account quotas and pricing apply; check your current plan. Failed fetches do not replace the last valid statistics. A profile change cannot reuse another profile's snapshot.

Successful runs update `_data/scholar_stats.yml` and commit changed data. The Pages workflow also listens for completion of the Scholar workflow, so updates committed with GitHub's built-in token trigger a fresh deployment. No personal API key, Scholar ID, or statistics ship with this template.

## Optional analytics and search verification

GoatCounter is off by default. Set `analytics.goatcounter_code` to your own account code to enable it. Set `analytics.show_count: true` only if you want the public total and have enabled public counter access in GoatCounter. Keep `show_count: false` for private dashboards. Check privacy/consent requirements applicable to your site before enabling analytics.

For Google Search Console, add your own HTML-tag verification value to `google_site_verification`. Submit your deployed `/sitemap.xml`. Verification, sitemap submission, and search indexing are separate steps; this template does not guarantee ranking.

Fonts and icon styles load from Google Fonts and cdnjs even when analytics is disabled. Their notices are in `THIRD_PARTY_NOTICES.md`.

## Preview locally

Install a current supported Ruby and Bundler, then:

```sh
bundle install
bundle exec jekyll serve --port 4001 --baseurl ""
```

Open [the local preview](http://127.0.0.1:4001/). Restart Jekyll after changing `_config.yml`.

Offline Scholar tests:

```sh
python3 -m venv .venv
. .venv/bin/activate
pip install -r scripts/requirements-scholar.txt
python -m unittest discover -s tests
```

## Credits and license

This template grew out of Shaoyan Liu's customized personal website, originally based on [Yaoyao Liu's personal website](https://github.com/yaoyao-liu/personal-website) and [Minimal Light](https://github.com/yaoyao-liu/minimal-light). It is independently maintained and preserves the original **CC0 1.0** license in `LICENSE`.

See `THIRD_PARTY_NOTICES.md` for component-specific credits and licenses.
