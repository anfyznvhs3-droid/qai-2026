# 中澤港 · R統計解析（無料PDF 2冊）(2026-09-19)

## 출처

- **트리거:** [@tokei389950 / 2101075847734034743](https://x.com/tokei389950/status/2101075847734034743) (2026-09-18)
- **著者:** 中澤 港（神戸大学）— Minato Nakazawa
- **PDF ①:** [Rによる統計解析の基礎](https://minato.sip21c.org/statlib/stat.pdf) — 基礎·t検定·ANOVA·相関·回帰·生存·GAM（~170p）
- **PDF ②:** [Rによる保健医療データ解析演習](https://minato.sip21c.org/msb/medstatbook.pdf) — 演習版·ロジスティック·生存分析·`fmsb` CRAN
- **サイト:** [minato.sip21c.org/msb/](https://minato.sip21c.org/msb/)
- **Scout:** _(미실행 — fxtwitter + msb 페이지, 2026-09-19)_

## 요지

有料だったR統計教科書を**無料公開**。「Rは無料なのに解説書だけ有料はおかしい」。コードを**動かしながら** t検定·ノンパラ·ANOVA·回帰·ロジスティック·**生存時間分析**まで。AIに読み込ませてもよい（著者トーン）。

## MIX 잠재 — **Data·PDF pull 優先度高** (deferred)

| 統計内容 | 製造 K-AI 対応 | 軸 |
| --- | --- | --- |
| t検定 · **Welch** | 2群比較（設備A vs B）— 等分散仮定 ❌ | PDF §6 |
| ANOVA | 多水準·多設備群 | PDF §6 |
| 相関·回帰 | ベースライン·説明 | Model · PDF |
| ロジスティック | 分類·不良率 | Model |
| **生存時間分析** | **予知保全·故障まで時間** Task_Class | Model · PDF §5–6 |
| 信頼区間·検定の意味 | `gem-typesafe-satellite` Wilson · bootstrap | PDF §6 |
| 例題付き | validation 表の**書き方**テンプレ | PDF |

**Python 移植:** R 코드そのまま ❌ — `scipy` · `statsmodels` · `lifelines`(生存) で同型。

## 域の境界

- **医療·保険データ** — PDF ストーリーは **製造 KPI** に置換（診断 ❌）
- 17日で読破 ❌ — **該当章だけ** grep（生存·検定·CI）
- `gem-quant-ts-playbook` と補完 — 時系列·コストは quant-ts、**古典推論表**は本書

## pull 条件 (`mix-application-plan`)

|  과제 | pull 章 |
| --- | --- |
| 分類·品質 | ロジスティック · 2標本検定 · CI |
| 予知保全·故障 | **生存時間分析** |
| 多設備比較 | ANOVA · 事後検定 |
| 全般 | PDF §6 **信頼区間·検定の脚注** |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| id | `gem-nakazawa-r-statistics` |
| 유형 | `playbook` |
| 상태 | **deferred** · **pull 優先: Data/PDF metrics** |
| 적용 축 | Data(検証) · Model(生存·分類) · PDF §4–6 |

## 관련

- `gem-quant-ts-playbook` · `gem-typesafe-satellite` · `gem-weightwatcher-memorization`(canary)
- [`reports/leakage-audit-checklist.md`](../reports/leakage-audit-checklist.md)
- [`docs/mix-application-plan.md`](../docs/mix-application-plan.md)
