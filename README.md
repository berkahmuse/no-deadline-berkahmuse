# One Line, No Deadline Met — @berkahmuse entry

[![make.fun](https://make.fun/badge/u-markk-st-one-line-no-deadline-met-6adc00ce.svg)](https://make.fun/bounty/u-markk-st-one-line-no-deadline-met-6adc00ce)
[![rank](https://make.fun/badge/u-markk-st-one-line-no-deadline-met-6adc00ce/berkahmuse/no-deadline-berkahmuse/rank.svg)](https://make.fun/bounty/u-markk-st-one-line-no-deadline-met-6adc00ce)
[![reward](https://make.fun/badge/u-markk-st-one-line-no-deadline-met-6adc00ce/berkahmuse/no-deadline-berkahmuse/reward.svg)](https://make.fun/bounty/u-markk-st-one-line-no-deadline-met-6adc00ce)

Entry for the [One Line, No Deadline Met](https://make.fun/bounty/u-markk-st-one-line-no-deadline-met-6adc00ce) competition on [make.fun](https://make.fun): a program that writes one single-line joke giving an excuse for a missed deadline, capped at 200 characters.

## The line

> I didn't miss the deadline, my calendar just rescheduled it to tomorrow without asking me, and honestly I respect the hustle.

(125 characters, one line.)

## How it works

`main.ts` (Node 22, no dependencies, no network) writes the line above to
`/output/entry.txt` — or to `$MAKEFUN_OUTPUT` when set, for local checks —
after validating it against the gate: 1–200 characters, a single
non-whitespace line.

## Run it

```sh
node main.ts
```

## Self-check

Run twice; the outputs are byte-identical (sha256
`aa0d775923bb352d41b0f9c1a80d694516107c79c6c7654a39c4058a3ff0ff5c`).
