# ============================================
# 株式会社VALEK コーポレートサイト
# README (YAML形式)
# ============================================

project:
  name: "株式会社VALEK コーポレートサイト"
  description: >
    株式会社VALEK（バレック）の公式コーポレートサイト。
    軽貨物運送・一般貨物運送の事業紹介、および軽貨物ドライバーの採用情報を掲載。
  url: "https://valek.jp/"
  company: "株式会社VALEK（バレック）"
  stack: "HTML + CSS + JavaScript（静的サイト）"
  hosting: "GitHub Pages"
  domain: "valek.jp（カスタムドメイン）"

# ============================================
# ファイル構成
# ============================================

file_structure:
  root:
    - file: "index.html"
      description: "トップページ"
    - file: "service.html"
      description: "事業紹介"
    - file: "company.html"
      description: "会社概要"
    - file: "recruit.html"
      description: "採用情報トップ"
    - file: "contact.html"
      description: "お問い合わせ"
    - file: "CNAME"
      description: "GitHub Pages カスタムドメイン設定"
    - file: "README.md"
      description: "プロジェクト説明ファイル"

  recruit:
    - file: "recruit/detail.html"
      description: "募集要項・詳細"

  assets_css:
    - file: "assets/css/style.css"
      description: "共通スタイルシート"

  assets_js:
    - file: "assets/js/main.js"
      description: "共通JavaScript"

  assets_images:
    - file: "assets/images/logo.svg"
      description: "コーポレートロゴ"
    - file: "assets/images/hero.jpg"
      description: "トップ ヒーロー背景"
    - file: "assets/images/strength-01.jpg"
      description: "事業紹介 品質セクション"
    - file: "assets/images/strength-02.jpg"
      description: "事業紹介 人員体制セクション"
    - file: "assets/images/ceo.jpg"
      description: "代表写真"
    - file: "assets/images/uniform.jpg"
      description: "BURTLEユニフォーム"
    - file: "assets/images/driver-01.jpg"
      description: "ドライバー写真①"
    - file: "assets/images/driver-02.jpg"
      description: "ドライバー写真②"
    - file: "assets/images/vehicle.jpg"
      description: "車両写真"
    - file: "assets/images/og-image.jpg"
      description: "OGP画像（SNSシェア用）"

# ============================================
# ページ一覧
# ============================================

pages:
  - file: "index.html"
    name: "トップ"
    sections:
      - "ヒーロー（キャッチコピー＋CTA）"
      - "数字で見るVALEK（誤配率・ドライバー数・設立年）"
      - "事業紹介ダイジェスト（3カード）"
      - "採用バナー（斜めカットセクション）"

  - file: "service.html"
    name: "事業紹介"
    sections:
      - "ページヒーロー"
      - "強み01：誤配率0.001%以下の配送品質"
      - "強み02：120名以上の体制で即座に人材配置"
      - "サービス一覧（軽貨物・チャーター便・スポット便）"
      - "ご依頼の流れ（4ステップ）"
      - "CTA"

  - file: "company.html"
    name: "会社概要"
    sections:
      - "ページヒーロー"
      - "代表メッセージ"
      - "会社情報テーブル"
      - "アクセスマップ"

  - file: "recruit.html"
    name: "採用情報"
    sections:
      - "ページヒーロー"
      - "キャッチコピーセクション"
      - "VALEKで働く5つの魅力"
      - "ドライバーの1日（タイムライン）"
      - "収入モデル（安定派・ガッツリ派）"
      - "転職者の声（3名）"
      - "CTA"

  - file: "recruit/detail.html"
    name: "募集要項"
    sections:
      - "ページヒーロー"
      - "募集要項テーブル"
      - "車両について"
      - "福利厚生"
      - "応募資格（必須・歓迎）"
      - "こんな方に向いています"
      - "選考プロセス（4ステップ）"
      - "CTA"

  - file: "contact.html"
    name: "お問い合わせ"
    sections:
      - "ページヒーロー"
      - "電話・LINE導線"
      - "お問い合わせフォーム"
      - "アクセスマップ"

# ============================================
# 技術仕様
# ============================================

technology:
  fonts:
    - name: "Inter"
      usage: "英字・数字の見出し"
      source: "Google Fonts"
    - name: "Noto Sans JP"
      usage: "日本語本文"
      source: "Google Fonts"
    - name: "Bebas Neue"
      usage: "セクションラベル・装飾英字"
      source: "Google Fonts"

  colors:
    - name: "メイン背景"
      value: "#0a0a0a"
    - name: "サーフェス"
      value: "#111111"
    - name: "サーフェス2"
      value: "#1a1a1a"
    - name: "サーフェス3"
      value: "#222222"
    - name: "アクセント（オレンジ）"
      value: "#FF971D"
    - name: "アクセント（オレンジダーク）"
      value: "#e0850f"
    - name: "テキスト（ホワイト）"
      value: "#ffffff"
    - name: "テキスト（グレー100）"
      value: "#f0f0f0"
    - name: "テキスト（グレー300）"
      value: "#aaaaaa"
    - name: "テキスト（グレー500）"
      value: "#666666"
    - name: "テキスト（グレー700）"
      value: "#333333"

  interactions:
    hero:
      - "マウス追従オレンジオーブ（パララックス）"
      - "グリッドライン背景"
      - "スクロールインジケーターアニメーション"
      - "水平装飾ライン"
    scroll:
      - "スクロールプログレスバー"
      - "Intersection Observerによるフェードイン"
      - "スタガー（時間差）表示"
    numbers:
      - "カウントアップアニメーション"
    cards:
      - "ホバー時トップラインアニメーション"
      - "グローシャドウ"
      - "浮遊トランジション"
    buttons:
      - "シマーエフェクト（光が走る演出）"
      - "ホバー時浮遊＋シャドウ"
    sections:
      - "斜めカット（clip-path）"
      - "グラデーションライン区切り"
    global:
      - "SVGノイズテクスチャオーバーレイ"
      - "カスタムスクロールバー"
      - "セレクションカラー（オレンジ）"

  form:
    service: "Formspree"
    note: "GitHub Pagesは静的ホスティングのためサーバーサイド処理なし"

# ============================================
# セットアップ手順
# ============================================

setup:
  clone:
    command: "git clone https://github.com/tomohiro-hubs/valek_renew.git && cd valek_   renew"

  replacements:
    - target: "電話番号"
      search: "0566-91-7020"
      replace: "実際の電話番号"

    - target: "電話リンク"
      search: "tel:0566-91-7020"
      replace: "tel:実際の番号（ハイフンなし）"

    - target: "LINEリンク"
      search: 'href="#" ※LINE該当箇所'
      replace: "LINE公式アカウントURL"

    - target: "Formspree"
      search: "YOUR_FORM_ID"
      replace: "Formspreeで取得したフォームID"

    - target: "Google Maps"
      search: "iframe の src属性"
      replace: "Google Mapsから取得した実際の埋め込みURL"

    - target: "写真"
      search: "※ 写真撮影後に差し替え"
      replace: "<img>タグに差し替え"

    - target: "OGP"
      search: "未設定"
      replace: "各ページ<head>にOGPメタタグを追加"

  images:
    note: "撮影完了後 assets/images/ に格納し、HTMLのプレースホルダーを差し替え"
    example: |
      <div class="strength-image">
        <img src="assets/images/strength-01.jpg" alt="VALEKの配送品質" loading="lazy">
      </div>

  cname:
    file: "CNAME"
    content: "valek.jp"

  github_pages:
    steps:
      - "リポジトリの Settings → Pages を開く"
      - "Source を Deploy from a branch に設定"
      - "Branch を main / (root) に設定"
      - "Custom domain に valek.jp を入力"
      - "Enforce HTTPS にチェック"

  dns:
    a_records:
      - "185.199.108.153"
      - "185.199.109.153"
      - "185.199.110.153"
      - "185.199.111.153"
    cname_record:
      name: "www"
      value: "YOUR_USERNAME.github.io"

# ============================================
# 更新方法
# ============================================

maintenance:
  text_update:
    description: "各HTMLファイルを直接編集し git push でデプロイ"
    commands:
      - "git add ."
      - 'git commit -m "テキスト修正: ○○ページの△△を更新"'
      - "git push origin main"

  news_addition:
    description: "トップページにお知らせを追加する場合"
    insert_position: "index.html のフッター手前"
    template: |
      <section class="section bg-dark">
        <div class="container">
          <div class="section-label">News</div>
          <h2 class="section-heading">お知らせ</h2>
          <div style="border-bottom:1px solid rgba(255,151,29,0.06);padding:20px 0;">
            <span style="color:var(--c-orange);font-family:var(--font-en);font-size:0.82rem;margin-right:16px;">2025.XX.XX</span>
            <span style="color:var(--c-gray-300);font-size:0.9rem;">お知らせの内容をここに記載</span>
          </div>
        </div>
      </section>

# ============================================
# 推奨画像仕様
# ============================================

image_specs:
  - usage: "ヒーロー背景"
    size: "1920×1080px"
    format: "JPG（WebP推奨）"
    note: "圧縮率80程度"

  - usage: "セクション写真"
    size: "800×600px"
    format: "JPG（WebP推奨）"
    note: "アスペクト比4:3"

  - usage: "代表写真"
    size: "800×600px"
    format: "JPG"
    note: "上半身、背景はシンプルに"

  - usage: "OGP画像"
    size: "1200×630px"
    format: "JPG"
    note: "SNSシェア時に表示"

  - usage: "ロゴ"
    size: "任意"
    format: "SVG"
    note: "ベクター形式推奨"

# ============================================
# ブラウザ対応
# ============================================

browser_support:
  - browser: "Chrome（最新）"
    status: "対応"
  - browser: "Safari（最新）"
    status: "対応"
  - browser: "Firefox（最新）"
    status: "対応"
  - browser: "Edge（最新）"
    status: "対応"
  - browser: "iOS Safari"
    status: "対応"
  - browser: "Android Chrome"
    status: "対応"
  - browser: "IE 11"
    status: "非対応"

# ============================================
# ライセンス・連絡先
# ============================================

license: "本リポジトリは株式会社VALEKの資産です。無断転載・複製を禁じます。"

contact:
  company: "株式会社VALEK（バレック）"
  address: "〒472-0004 愛知県知立市南陽2-128"
  tel: "0566-91-7020"