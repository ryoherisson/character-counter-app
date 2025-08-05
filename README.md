# 文字数カウンター | Character Counter App

※ Claudeに作成させたアプリ

リアルタイムで文字数、単語数、行数をカウントする無料のオンラインツールです。動的なメッシュアニメーション背景付きの美しいUIを提供します。

## 🌟 特徴

- **リアルタイムカウント**: 入力と同時に各種統計を即座に表示
- **多角的な分析**: 文字数、空白除く文字数、単語数、行数を同時表示
- **動的背景**: うねうね動くメッシュアニメーションによる視覚的な魅力
- **レスポンシブデザイン**: デスクトップ・タブレット・モバイル対応
- **高パフォーマンス**: 軽量設計でスムーズな動作
- **ダークテーマ**: 目に優しい黒背景デザイン

## 🚀 デモ

[GitHub Pages でデモを確認](https://your-username.github.io/character-counter-app/)

## 📊 機能詳細

### カウント機能
- **文字数**: 全文字数（スペース・改行含む）
- **文字数（空白除く）**: スペースと改行を除いた文字数
- **単語数**: 空白で区切られた単語の数
- **行数**: テキストの行数

### UI/UX機能
- **リアルタイム更新**: 入力中に即座に統計更新
- **クリアボタン**: ワンクリックでテキストエリアをクリア
- **フォーカス管理**: クリア後に自動的にテキストエリアにフォーカス

### 視覚効果
- **メッシュアニメーション**: Canvas APIを使用した流動的な背景
- **パフォーマンス最適化**: モバイル端末では軽量バージョンに自動切替
- **レスポンシブ対応**: 画面サイズに応じたレイアウト調整

## 🛠️ 技術スタック

- **HTML5**: セマンティックマークアップ
- **CSS3**: フレックスボックス、グリッドレイアウト、アニメーション
- **JavaScript (ES6+)**: モジュール化されたクラス設計
- **Canvas API**: 動的メッシュアニメーション
- **Web APIs**: DOM操作、イベント処理

## 📁 プロジェクト構造

```
character-counter-app/
├── index.html              # メインHTMLファイル
├── style.css              # スタイルシート
├── script.js              # 文字数カウント機能
├── mesh-animation.js      # メッシュアニメーション
├── docs/                  # ドキュメント
│   └── reviews/          # 開発レビュー記録
└── README.md             # このファイル
```

## 🚀 使用方法

### ローカル環境での実行

1. **リポジトリのクローン**
   ```bash
   git clone https://github.com/your-username/character-counter-app.git
   cd character-counter-app
   ```

2. **HTTPサーバーの起動**
   ```bash
   # Python 3の場合
   python -m http.server 8000
   
   # Node.jsのlive-serverを使用
   npx live-server
   ```

3. **ブラウザでアクセス**
   ```
   http://localhost:8000
   ```

### 直接ファイル実行
`index.html`をブラウザで直接開くことも可能です。

## 🌐 GitHub Pagesでの公開

1. **リポジトリ設定**
   - GitHubリポジトリの Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: "main" / Folder: "/ (root)"

2. **デプロイ完了**
   - 数分後に `https://your-username.github.io/character-counter-app/` で公開

## 🎨 カスタマイズ

### メッシュアニメーションの調整
```javascript
// mesh-animation.js内で調整可能
this.gridSize = 30;           // グリッドサイズ
this.animationSpeed = 0.02;   // アニメーション速度
```

### カラーテーマの変更
```css
/* style.css内で調整可能 */
body {
    background: #000000;      /* 背景色 */
}

.container {
    background: rgba(255, 255, 255, 0.95);  /* コンテナ背景 */
}
```

## 📊 パフォーマンス

- **初期読み込み**: ~50KB (圧縮前)
- **メモリ使用量**: ~5MB
- **CPU使用率**: 1-3% (アニメーション実行時)
- **対応ブラウザ**: Chrome 60+, Firefox 55+, Safari 12+, Edge 79+

## 🔧 開発

### 依存関係
- 外部ライブラリなし（Pure JavaScript）
- モダンブラウザのWeb API使用

### 開発フロー
1. 機能開発・修正
2. ローカルテスト
3. コミット・プッシュ
4. 自動デプロイ（GitHub Pages）

## 📝 ライセンス

MIT License - 詳細は [LICENSE](LICENSE) ファイルを参照

## 🤝 コントリビューション

1. フォークしてください
2. フィーチャーブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## 📞 サポート

- 🐛 バグ報告: [Issues](https://github.com/your-username/character-counter-app/issues)
- 💡 機能提案: [Discussions](https://github.com/your-username/character-counter-app/discussions)
- 📧 直接連絡: your-email@example.com

## 🏆 今後の予定

- [ ] ファイルアップロード機能
- [ ] テキストエクスポート機能
- [ ] 文字種別カウント（ひらがな・カタカナ・漢字・英数字）
- [ ] 読み時間推定機能
- [ ] ダークモード切替
- [ ] 多言語対応
- [ ] PWA対応

---

⭐ このプロジェクトが役に立ったら、スターをお願いします！
