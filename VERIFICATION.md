# Verification checklist

**For the team, not the panel.** These claims appear on the site but have not
been confirmed by the component owner. Some are tagged in the content brief
as "not yet verified"; others were flagged while the pages were written. Tick
an item once the owner has answered, and fix the page if the answer changes
anything.

Each item gives the **claim**, **where** it appears, and the **question** to
answer.

Last updated: 2026-10-11.

---

## Shazni M.S.M.: recommendation (`recommendation.html`)

- [ ] **The 92.5% cold-band share is a hardcoded literal, not a computed result.**
  - Where: Results › "Does the learner learn?" (stat), and Method, part 2 ›
    "Why the blend is not a hedge".
  - Question: the figure is typed into `evaluate_learner.py`, not computed
    from the run. Can it be computed from the run, and does it still come out
    at 92.5%? Is it a share of tourists or of scored interactions? The page
    says the bands partition scored interactions.
- [ ] **The monorepo README §7d still carries the stale block-importance figures.**
  - Where: the site's Feature selection › Block importance shows the corrected
    split_user table (0.0673 / 0.0221 / 0.0043 / −0.0020).
  - Question: `R26-IT-155/README.md` lines 464–467 still show 0.0658 / 0.0363 /
    0.0052 / 0.0001. Update §7d, and any report that quotes those numbers, so
    the repo and the site agree.
- [ ] **No figures for the 5+ evidence band.**
  - Where: Results › AUC table caption ("the table shows the first three").
  - Question: why is the 5+ band missing? Is it empty, or too small to report?
    Either supply the figures or give a reason the page can state.
- [ ] **The adaptive gains have no confidence intervals on the page.**
  - Where: Stated limitations (+0.0009 NDCG, +0.0021 AUC, "interval spans
    zero").
  - Question: what are the actual intervals? Showing them would be stronger
    than "spans zero".
- [ ] **8,755 interactions from 630 tourists.**
  - Where: Results › the full ablation (caption).
  - Question: do these counts belong to the pooled ablation? How do they
    relate to the cold-band share?
- [ ] **The Phase 4 corrections are attributed to the component owner.**
  - Where: block importance, the 63-feature reconciliation, the definitions of
    "the incumbent" (Phase 3c linear scorer) and of ±/sd, split_temporal
    9 / 54 / 83 / 17, the evidence bands, and the full ablation.
  - Question: the brief tags these "from the component owner". Confirm you
    supplied or approved each one.
- [ ] **Our framing of the ablation.**
  - Where: Method, part 1, under the mechanisms table: "Two of these
    mechanisms, graded rewards and category coupling, score higher on pooled
    AUC when removed."
  - Question: is that a fair one-line summary of the ablation?
- [ ] **TAF spelling.**
  - Where: Sub-objective pull-quote ("modeling", "module").
  - Question: is the quote verbatim from the TAF? The rest of the site uses
    "modelling" and "component".

## Haifa M.A.F.: transport (`transport.html`)

The whole page is built from `transport/reports/`, because
`transport/README.md` still says "Phase 0, scaffold only". Every figure on the
page needs your sign-off. The items below are the specific open questions.

- [ ] **How legs beyond the 72 routed attractions are priced.**
  - Where: Contribution to the system ("every leg … including legs from the
    2,778 derived towns"), and the Home page's Transport card.
  - Question: the route dataset covers 72 attractions and 2,556 pairs. How is
    a leg priced and a mode chosen when the pair is not in that dataset
    (calibrated haversine? a fallback?)? The page currently says nothing about
    it.
- [ ] **Phase 4d has not been run; the ground truth has not been collected.**
  - Where: Stated limitations › scoring engine, item 1.
  - Question: `transport/scripts/expert_evaluation.py` exists, but there is no
    `reports/expert_evaluation.md` and no labels. Will the expert-panel
    evaluation run before submission? If it does, the Results section and
    this limitation must change.
- [ ] **Engine limitation 1: no accuracy evaluation exists.**
  - Where: Stated limitations › scoring engine.
  - Question: confirm the wording, "Whether the engine chooses the right mode
    is not established."
- [ ] **Engine limitation 2: the weights are declared, not fitted.**
  - Where: Stated limitations › scoring engine.
  - Question: confirm that no weight profile has been validated against
    observed tourist behaviour.
- [ ] **Engine limitation 3: one mode almost always wins (98.5%).**
  - Where: Stated limitations › scoring engine; Results.
  - Question: confirm 2,515 of 2,554 private-car choices under `balanced`.
    Do you accept "hard to distinguish from a constant"?
- [ ] **Engine limitation 4: the feasibility filter rarely binds.**
  - Where: Stated limitations › scoring engine.
  - Question: confirm 3.36 candidate modes against 3.34 feasible (about 0.02
    removed per pair), and that only two pairs lost every candidate.
- [ ] **Engine limitation 5: only driving is validated.**
  - Where: Stated limitations › scoring engine; calibration limitation 2.
  - Question: confirm that private car is effectively the only OSRM-calibrated
    mode, and that bus, train, motorcycle and walking are not validated either.
- [ ] **The two excluded pairs.**
  - Where: Results ("2,554 of the dataset's 2,556 pairs were scored").
  - Question: confirm that `mode_scorer.py` skips a pair when no candidate
    survives the filter, and that this happened for exactly two pairs.
- [ ] **Terrain direction and per-terrain percentages.**
  - Where: Calibration › correction factors by terrain.
  - Question: confirm that each factor multiplies the dataset distance, and
    the per-terrain errors: coastal +5.94%, urban +7.93%, hilly −11.19%, rural
    −11.39%, rolling −6.13%.
- [ ] **The two-estimator explanation.**
  - Where: Calibration, under the terrain paragraph.
  - Question: confirm that each factor is the median of `osrm_km / dataset_km`
    per terrain, and each error is the median of per-pair percentage errors.
- [ ] **The car time factor reading.**
  - Where: Calibration › Fallbacks.
  - Question: confirm that 0.8396 shortens dataset times toward OSRM's, and
    that calibrated times are therefore optimistic twice over.
- [ ] **The headline stat is 44.4%, not −2.87%.**
  - Where: Calibration (stat).
  - Question: are you comfortable leading with "44.4% within 10%", given the
    21.02 km mean absolute error?
- [ ] **The "Options" stage description is ours.**
  - Where: Method › stage 1, "The candidate modes for the leg."
  - Question: is this accurate? The brief names the stage but doesn't
    describe it.
- [ ] **The 75 unreliable coordinates.**
  - Where: Data foundation › Coordinate quality ("overall").
  - Question: is the denominator the 258 registry attractions?
- [ ] **The stale README.**
  - Question: update `transport/README.md` so the repo documents what the
    site cites.

## Vithanage D. D. H. L. J: budget (`budget.html`)

- [ ] **The median-gain definition.**
  - Where: Results › optimizer table (+9.7% / +9.4%) and the by-level table.
  - Question: is median value gain computed over all trips or only over the
    trips the optimizer wins? Also: the sign formatting differs (+9.7% against
    9.1%), and so does the precision (18.1 against 18.01).
- [ ] **How to read the over-budget AUC of 0.6009.**
  - Where: Results › Part 1, prediction table.
  - Question: what is this model used for? Does it supply P(over budget) in
    the objective function? Is an AUC of 0.60 adequate for that job? The page
    currently gives the number with no interpretation.
- [ ] **The contribution section and "independent of day-wise scheduling".**
  - Where: Contribution to the system ("what was left out, and why"), against
    the Novelty claim.
  - Question: what is "left out": attractions from the itinerary? If so, how
    does that fit a component that "operates independently of day-wise
    scheduling" and does not generate itineraries?
- [ ] **Objective 1 never names the five approach families or L1–L3.**
  - Where: Objective 1.
  - Question: what are the five families and the three limitations? The page
    can only say they exist.
- [ ] **The "other 117 factors" error in the component's own report.**
  - Where: Objective 3 › "How to read these effects". The site now reads "the
    other recorded factors".
  - Question: the training table has 117 features in total, spending features
    included, so "the other 117" is wrong. Correct
    `budget/reports/spend_experience_model.md`.
- [ ] **The caveat "runs the other way".**
  - Where: Results › "Caveat: only attraction value is scored".
  - Question: confirm the quoted reading. The construction favours the plan,
    so 57.8% is conservative. What the caveat does limit is any whole-trip
    claim.
- [ ] **The model comparison and the spending finding.**
  - Where: Objective 3 (stat 0.0493; the model table).
  - Question: confirm the four rows, and the reading that most of what the
    model knows comes from interest, transport mode and pace, not from
    spending.
- [ ] **The curves rest on the additive spline model.**
  - Where: Objective 3.
  - Question: confirm that the served curves come from the spline model
    (R² 0.0469), not the deployed booster.
- [ ] **The ties, and the identical 36.0%.**
  - Where: Results › optimizer table (ties 6.2% / 9.2%).
  - Question: confirm the ties. Why does the plan win exactly 36.0% under both
    splits?
- [ ] **What "value" means, and the half-split scoring.**
  - Where: Results › Part 2.
  - Question: confirm that the optimizer's ensemble is fitted on one half of
    the data and its allocations are scored by a model fitted on the other
    half.
- [ ] **Three categories in the TAF against five in the optimizer.**
  - Where: Objective 4 › "Implemented scope".
  - Question: the TAF names accommodation, activities and transportation; the
    optimizer splits five. Is it acceptable to state this as implemented scope,
    or should the thesis explain it?
- [ ] **RMSE: 2.77% or 2.76%?**
  - Where: Results › prediction table.
  - Question: the model table's RMSEs (0.4408 against 0.4533) give 2.76%
    lower, not 2.77%. Confirm this is rounding.
- [ ] **The stale README.**
  - Question: `budget/README.md`'s header still says "Phase 0, scaffold only".
    Update it.

## Whole team: Home page and shared claims (`index.html`)

- [ ] **The process count.**
  - Where: What we built. The page says "separate processes" and gives no
    number.
  - Question: the repo README says "five processes", but its diagram lists six
    including the Vite client (:5173). Which count is right?
- [ ] **The two design properties.**
  - Where: What we built (the browser only talks to the gateway; the system
    degrades visibly with a named fallback banner).
  - Question: confirm that both still hold in the current build.
- [ ] **Attractions are not trip start or end points.**
  - Where: Registry table, "Trip start or end" column (CP = No).
  - Question: confirm that `/api/locations` serves CL, CH and CT only.
- [ ] **Registry counts.**
  - Where: Registry.
  - Question: confirm CL 104 (with coordinates; 114 in total) and
    129 = 104 + 25. The 114 is not on the site.
