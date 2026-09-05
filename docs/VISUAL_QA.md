# VietnamGo — Visual QA

_Date: 2026-08-31_

## Before

The live homepage had a strong content concept but felt visually uneven: several homepage CSS layers overrode one another, typography hierarchy was inconsistent, cards lacked depth/hover feedback, and spacing varied between sections.

## Visual pass shipped

- Added one final coherent visual layer in `app/home-v2.css` rather than another file.
- Normalized ink, muted, paper, coral and mint tokens.
- Improved nav scale and link states.
- Added consistent button height, hover lift and shadows.
- Added clearer card surfaces and hover treatment.
- Strengthened editorial heading tracking and section contrast.
- Preserved mobile single-column behavior and removed hover lift on touch widths.

## Verification

- `npm run build`: PASS, 21/21 static pages.
- Planner, dynamic guide and affiliate route code was not changed.
- New visual styles require the latest branch to be deployed before a fresh production screenshot can be captured.

## Remaining

Latest live QA: Netlify production now serves commit `ff20956`. The homepage has a visible split editorial hero with the Ha Long Bay image card, dark editorial copy, floating planner panel and responsive mobile stack. Desktop and mobile screenshots were captured after deployment; the AICoworker browser toolbar overlay is not part of the website. Core Web Vitals and a full device matrix remain outside this pass.
