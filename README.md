# My Blog

HonoとHonoxを使用して構築された静的ブログサイトです。Cloudflare Pagesにデプロイできます。

## 技術スタック

- **フレームワーク**: [Hono](https://hono.dev/) - 軽量なWebフレームワーク
- **メタフレームワーク**: [Honox](https://honox.dev/) - Hono用のフルスタックフレームワーク
- **ビルドツール**: [Vite](https://vitejs.dev/)
- **MDX**: Markdown + JSXの組み合わせでコンテンツを作成
- **デプロイ先**: [Cloudflare Pages](https://pages.cloudflare.com/)

## プロジェクト構造

```
myblog/
├── app/                    # アプリケーションコード
│   ├── components/         # Reactコンポーネント
│   ├── islands/           # インタラクティブなコンポーネント
│   ├── routes/            # ページルート
│   │   └── posts/         # ブログ投稿（MDX形式）
│   ├── client.ts          # クライアントサイドエントリーポイント
│   └── server.ts          # サーバーサイドエントリーポイント
├── content/               # コンテンツファイル
│   └── posts/             # ブログ投稿（Markdown形式）
├── public/                # 静的ファイル
├── dist/                  # ビルド出力
├── package.json
├── vite.config.ts         # Vite設定
└── wrangler.toml          # Cloudflare Workers設定
```

## セットアップ

### 前提条件

- Node.js 18以上
- npm または yarn

### インストール

```bash
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

開発サーバーが起動し、`http://localhost:3000`でアクセスできます。

### プレビュー

```bash
npm run preview
```

Cloudflare Workersのローカル環境でプレビューできます。

## ビルドとデプロイ

### ビルド

```bash
npm run build
```

### デプロイ

```bash
npm run deploy
```

Cloudflare Pagesにデプロイされます。

## ブログ投稿の作成

### MDX形式（推奨）

`app/routes/posts/`ディレクトリに`YYYY-MM-DD.mdx`形式でファイルを作成します。

```mdx
---
title: "投稿タイトル"
date: "2025-01-13"
description: "投稿の説明"
---

# 投稿タイトル

ここにMarkdownとJSXを組み合わせたコンテンツを記述します。

<CustomComponent prop="value" />
```

### Markdown形式

`content/posts/`ディレクトリにMarkdownファイルを作成します。

## カスタマイズ

### レイアウトの変更

`app/components/Layout.tsx`を編集してサイト全体のレイアウトを変更できます。

### スタイリング

CSSファイルを`app/`ディレクトリに配置し、必要に応じてインポートしてください。

### 新しいページの追加

`app/routes/`ディレクトリに新しいファイルを追加することで、新しいページを作成できます。

## 開発

### 利用可能なスクリプト

- `npm run dev` - 開発サーバーを起動
- `npm run build` - プロダクション用にビルド
- `npm run preview` - ローカルでプレビュー
- `npm run deploy` - Cloudflare Pagesにデプロイ

### ディレクトリ構造の説明

- `app/components/` - 再利用可能なReactコンポーネント
- `app/islands/` - インタラクティブなコンポーネント（クライアントサイドで実行）
- `app/routes/` - ページルートとAPIエンドポイント
- `content/` - 静的コンテンツファイル

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。
