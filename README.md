# Game Fermentation Lab

遊戲發酵室 `Game Fermentation Lab` 官方網站原型。

這是一個使用 `Next.js` 與 `Tailwind CSS` 製作的單頁式品牌網站，網站定位介於議題型遊戲品牌、創意實驗室與社群內容品牌之間，包含品牌介紹、專案展示、開發流程與 YouTube 入口。

## 專案特色

- 現代、乾淨、低彩度的淺藍品牌視覺
- Hero 主視覺與 12 張專案封面圖
- 單頁式 section navigation
- React / Next.js 元件化架構
- 專案資料獨立維護於 `data/projects.ts`
- 已配置 GitHub Pages 靜態部署

## 技術棧

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS 4

## 本機開發

安裝依賴：

```bash
npm install
```

啟動開發伺服器：

```bash
npm run dev
```

預設網址：

```text
http://127.0.0.1:3005
```

## 專案結構

```text
app/                  App Router 頁面與全域樣式
components/           首頁區塊元件
data/                 專案資料
types/                TypeScript 型別
public/images/        網站使用的靜態圖片
.github/workflows/    GitHub Pages 部署流程
```

## GitHub Pages 部署

這個專案已設定為部署到：

```text
https://sam0404044.github.io/game-fermentation-lab/
```

部署方式：

1. 推送到 `main`
2. GitHub Actions 會自動執行
3. 產出靜態網站到 `out/`
4. 自動部署到 GitHub Pages

Pages 相關設定已包含：

- `output: "export"`
- `trailingSlash: true`
- `basePath: "/game-fermentation-lab"`
- `assetPrefix: "/game-fermentation-lab/"`
- `images.unoptimized: true`

## 主要檔案

- `app/page.tsx`：首頁入口
- `components/hero-section.tsx`：Hero 區塊
- `components/projects-section.tsx`：專案展示
- `data/projects.ts`：12 筆專案資料
- `next.config.ts`：GitHub Pages 部署設定

## 備註

- `output/imagegen/` 內的生圖原始輸出已被 `.gitignore` 忽略
- 網站正式使用的圖片已放入 `public/images/`
- `minimal-next-smoke/` 是先前用來排查 Next.js 環境的最小測試專案
