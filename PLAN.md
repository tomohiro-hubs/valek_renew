# ============================================
# 株式会社VALEK コーポレートサイト
# PLAN.md - プロジェクト計画書（YAML形式）
# ============================================

project:
  name: "株式会社VALEK コーポレートサイト リニューアル"
  client: "株式会社VALEK（バレック）"
  representative: "谷本 大樹"
  domain: "valek.jp"
  status: "制作中"

# ============================================
# プロジェクト概要
# ============================================

overview:
  purpose: >
    軽配送運送業務を主軸とする株式会社VALEKのコーポレートサイトをリニューアルし、
    事業紹介（法人向け）と採用情報（ドライバー募集）の両方を同等の比重で訴求する。

  goals:
    - "荷主・運送会社からの配送依頼の獲得"
    - "軽貨物ドライバーの採用応募数の増加"
    - "企業ブランドの確立とコーポレートイメージの刷新"

  target_users:
    business:
      description: "法人（荷主・運送会社）"
      needs:
        - "車両不足・人員不足の解消"
        - "緊急配送・繁忙期のスポット対応"
        - "高品質（低誤配率）な配送パートナーの確保"

    recruit:
      description: "求職者（ドライバー志望者）"
      demographics:
        age: "20〜30代中心"
        experience: "未経験者〜経験者"
        background: "異業種からの転職者多数"
      needs:
        - "高収入（月収40〜80万円）の実現"
        - "自由な働き方（直行直帰）"
        - "若手が活躍できる環境"

# ============================================
# 会社情報
# ============================================

company_info:
  name: "株式会社VALEK（バレック）"
  representative: "谷本 大樹"
  established: "2023年2月22日"
  address: "〒472-0004 愛知県知立市南陽2-128"
  business:
    - "軽貨物運送事業"
    - "一般貨物運送事業"
    - "チャーター便"
    - "スポット便"
  service_area:
    - "愛知県全域"
    - "静岡県浜松市"
  major_clients:
    - "ヤマト運輸株式会社"
    - "佐川急便株式会社"
    - "日本郵政グループ"
  active_drivers: "120名以上"
  error_rate: "0.001%以下"

# ============================================
# 差別化ポイント・USP
# ============================================

usp:
  primary:
    - point: "誤配率0.001%以下"
      detail: >
        徹底した教育体制と継続的な品質チェックにより、
        業界トップクラスの低誤配率を実現。
        荷主・エンドユーザーからの信頼を担保する。

    - point: "120名以上のドライバー体制"
      detail: >
        2023年設立から急速に人員を拡大。
        欠員エリアへの即日カバー、繁忙期増員、新規エリア展開に
        迅速に対応できる人材配置力が最大の武器。

  secondary:
    - "大手3社（ヤマト・佐川・郵政）との安定取引"
    - "設立2年での急成長"
    - "全国対応可能なチャーター便"
    - "1日単位のスポット便対応"

# ============================================
# 採用情報
# ============================================

recruitment:
  position: "軽貨物配送ドライバー"
  employment_type: "業務委託"
  area: "愛知エリア（積極採用強化中）"

  appeal_points:
    - title: "完全直行直帰OK"
      detail: "朝のみ営業所で積込、以降は自由に配送"
    - title: "若手中心で明るい職場"
      detail: "平均年齢25〜26歳、雰囲気◎"
    - title: "異業種出身者が多数活躍"
      detail: "元シェフ・水族館スタッフなど"
    - title: "稼ぎ方を選べる"
      detail: "安定派もガッツリ派もOK（年収700〜1,000万円）"
    - title: "BURTLE製ユニフォーム貸与"
      detail: "新ロゴデザイン、かっこいいスタイル"

  requirements:
    mandatory:
      - "普通自動車運転免許（AT限定可）"
      - "スマートフォン操作可能（地図アプリ・配達アプリ）"
      - "社会人としての基本的なマナー"
      - "体を動かす仕事に抵抗がない"
    preferred:
      - "配送ドライバー経験（軽貨物・宅配・ルート配送）"
      - "Amazon・ヤマト・郵便局の配送経験"
      - "個人事業主・フリーランス経験"
      - "長時間運転が苦にならない"
      - "高収入を目指す意欲"
    note: "経験・学歴・年齢・性別一切不問。完全未経験OK。"

  compensation:
    monthly_range: "40万〜80万円"
    unit_price: "1件160円〜"
    daily_income: "20,000〜25,000円"
    annual_range: "700〜1,000万円"
    raise: "品質評価により単価10円アップなど随時評価"
    models:
      stable:
        label: "安定派スタイル"
        monthly: "40万円〜"
        daily_deliveries: "100〜130個"
        monthly_days: "20日"
        annual: "約500〜600万円"
      aggressive:
        label: "ガッツリ派スタイル"
        monthly: "60〜80万円"
        daily_deliveries: "200個以上"
        monthly_days: "24〜26日"
        annual: "約700〜1,000万円"

  work_details:
    clients: "Amazon、ヤマト、佐川、郵政"
    vehicle: "軽自動車（黒ナンバー）"
    daily_volume: "150〜250個"
    pace: "慣れると1時間で20〜30個"
    hours: "8:00〜20:00（案件により変動）"
    schedule: "週5日シフト制 / 週休1〜2日 / 月6〜10日休み"
    style: "朝のみ営業所出社、以降直行直帰"
    app: "個人スマートフォンで専用配達アプリ使用（無料）"
    end_condition: "荷物がなくなり次第終了"
    break: "自分のタイミングでOK"

  daily_schedule:
    - time: "8:00 – 9:30"
      task: "荷物の持ち出しと車への積み込み"
    - time: "10:00 – 12:30"
      task: "午前の配達"
    - time: "12:30 – 13:30"
      task: "休憩"
    - time: "13:30 – 14:00"
      task: "二便の荷物持ち出しと積み込み"
    - time: "14:00 – 17:00"
      task: "午後の配達"
    - time: "17:00 – 17:30"
      task: "三便の荷物持ち出しと積み込み"
    - time: "18:00 – 19:00（最長21:00）"
      task: "最終配達・持ち戻り荷物と伝票の返却"

  vehicle_policy:
    no_vehicle: >
      黒ナンバー軽自動車を会社から貸出可能。
      慣れてきた後にリース車両の買取も可能。
    own_vehicle: >
      自己保有の場合はリース費用不要のため手取り増。

  benefits:
    - "BURTLE製ユニフォーム貸与（半袖・長袖・ジャンバー）"
    - "通信費補助 月5,000円"
    - "必要に応じてAndroid端末貸与"
    - "業務利用駐車場完備"

  selection_process:
    steps:
      - step: 1
        name: "応募"
        method: "フォーム / LINE / 電話"
      - step: 2
        name: "面接"
        method: "オンラインまたは対面"
      - step: 3
        name: "研修・同乗"
        duration: "約1〜2週間"
      - step: 4
        name: "正式稼働開始"
    lead_time: "応募から最短1週間で勤務開始OK"

  voices:
    - name: "Rさん"
      previous_job: "工場勤務"
      summary: >
        自分のペースで働け、配達した分だけ評価される。
        給与面でも大きな満足。休日相談もしやすい。

    - name: "Tさん"
      previous_job: "大手自動車メーカー（従業員7万人規模）"
      summary: >
        頑張りが直接収入に反映されモチベーション高い。
        休みの融通も利き、プライベートと両立。

    - name: "Kさん"
      previous_job: "未経験"
      summary: >
        丁寧な教育で安心してスタート。一人で黙々と仕事ができストレス少ない。
        体力仕事だが健康的に痩せられた。

# ============================================
# サイト設計
# ============================================

site_design:
  priority_balance:
    business: 50
    recruit: 50
    note: "事業紹介と採用情報を同等の比重で設計"

  sitemap:
    - path: "/"
      file: "index.html"
      name: "トップページ"
      role: "サイトの顔。事業・採用両方への導線ハブ。"

    - path: "/service"
      file: "service.html"
      name: "事業紹介"
      role: "法人向け。品質・体制・サービス内容を訴求。"

    - path: "/company"
      file: "company.html"
      name: "会社概要"
      role: "企業信頼性の担保。代表メッセージ・会社情報。"

    - path: "/recruit"
      file: "recruit.html"
      name: "採用情報トップ"
      role: "求職者向け。魅力・1日の流れ・収入・転職者の声。"

    - path: "/recruit/detail"
      file: "recruit/detail.html"
      name: "募集要項"
      role: "具体的条件の確認。応募決断を促す。"

    - path: "/contact"
      file: "contact.html"
      name: "お問い合わせ"
      role: "事業・採用共通。フォーム・電話・LINEの3導線。"

  page_sections:
    index:
      - name: "共通ヘッダー"
        detail: "ロゴ＋ナビ＋電話・CONTACTボタン。黒背景、全ページ共通。"
      - name: "ヒーローセクション"
        detail: >
          フルスクリーン。キャッチ「速く、正確に、届ける。」
          マウス追従オーブ、グリッド背景、スクロールインジケーター。
          CTAボタン2つ（事業内容/採用情報）。
      - name: "数字で見るVALEK"
        detail: "誤配率0.001%以下 / 120名以上 / 2023年設立。カウントアップアニメーション。"
      - name: "事業紹介ダイジェスト"
        detail: "軽貨物・チャーター便・スポット便の3カード。service.htmlへ誘導。"
      - name: "採用バナー"
        detail: >
          オレンジ背景＋斜めカット。
          5つのタグ（平均年齢/直行直帰/異業種/年収/ユニフォーム）。
          recruit.htmlへ誘導。
      - name: "共通フッター"
        detail: "会社情報、ナビリンク、コピーライト。グラデーションライン。"

    service:
      - name: "ページヒーロー"
        detail: "SERVICE タイトル。背景大文字装飾。"
      - name: "強み01：配送品質"
        detail: "誤配率0.001%以下。教育体制・品質チェックの仕組み解説。"
      - name: "強み02：人員体制"
        detail: "120名以上。即日カバー・増員・新規エリア展開の柔軟性。"
      - name: "サービス一覧"
        detail: "軽貨物・一般貨物 / チャーター便 / スポット便。番号付きブロック。"
      - name: "ご依頼の流れ"
        detail: "問い合わせ→見積り→手配→配送開始の4ステップ。"
      - name: "CTA"
        detail: "問い合わせフォーム＋電話ボタン。"

    company:
      - name: "ページヒーロー"
        detail: "COMPANY タイトル。"
      - name: "代表メッセージ"
        detail: "谷本代表の挨拶。写真（撮影後差し替え）。ビジョン・想い。"
      - name: "会社情報テーブル"
        detail: "会社名/代表/設立/所在地/事業内容/エリア/取引先/ドライバー数。"
      - name: "アクセスマップ"
        detail: "Google Maps埋め込み＋住所テキスト。"

    recruit:
      - name: "ページヒーロー"
        detail: "RECRUIT タイトル。"
      - name: "キャッチコピー"
        detail: "「未経験でも、月収60万円を目指せる。」大見出し＋補足テキスト。"
      - name: "5つの魅力"
        detail: "直行直帰/若手/異業種/稼ぎ方/ユニフォーム。アイコンカード5枚。"
      - name: "1日の流れ"
        detail: "8:00〜19:00のタイムライン形式。補足注記付き。"
      - name: "収入モデル"
        detail: "安定派（月40万〜）とガッツリ派（月60〜80万）の2カード対比。"
      - name: "転職者の声"
        detail: "R・T・Kさんの3名。前職＋転職後の変化。"
      - name: "CTA"
        detail: "オレンジ背景＋斜めカット。募集要項/フォーム/電話の3ボタン。"

    recruit_detail:
      - name: "ページヒーロー"
        detail: "REQUIREMENTS タイトル。"
      - name: "募集要項テーブル"
        detail: "業務内容/雇用形態/報酬/勤務時間/勤務地/勤務日数/昇給/試用期間。"
      - name: "車両について"
        detail: "貸出可能/自己保有メリットの2カード。"
      - name: "福利厚生"
        detail: "制服貸与/通信費補助/駐車場の3カード。"
      - name: "応募資格"
        detail: "必須要件4項目＋歓迎要件5項目。2カラムボックス。"
      - name: "こんな方に向いています"
        detail: "黙々派/高収入志向/素直に学べる/異業種挑戦者の4カード。"
      - name: "選考プロセス"
        detail: "応募→面接→研修→稼働の4ステップ。最短1週間。"
      - name: "CTA"
        detail: "フォーム/LINE/電話の3ボタン。"

    contact:
      - name: "ページヒーロー"
        detail: "CONTACT タイトル。"
      - name: "電話・LINE導線"
        detail: "電話番号＋LINEボタンの2カード横並び。"
      - name: "フォーム"
        detail: "種別/氏名/電話/メール/内容。Formspree連携。"
      - name: "アクセスマップ"
        detail: "Google Maps埋め込み＋住所。"

# ============================================
# デザイン方針
# ============================================

design:
  concept: >
    若手ドライバーに刺さるスタイリッシュ＆プロフェッショナルなダークUI。
    黒×オレンジのコントラストで力強さとスピード感を表現。
    AIが作ったとは思えない、プロのWebデザイナークオリティ。

  direction:
    - "若手向けにかっこいいデザイン"
    - "黒×オレンジをメインカラーに"
    - "モバイルファースト（スマホ採用応募を重視）"
    - "写真は今後撮影予定（現在はプレースホルダー）"

  color_system:
    primary_bg: "#0a0a0a"
    surface_1: "#111111"
    surface_2: "#1a1a1a"
    surface_3: "#222222"
    accent: "#FF971D"
    accent_dark: "#e0850f"
    accent_glow: "rgba(255, 151, 29, 0.15)"
    text_primary: "#ffffff"
    text_secondary: "#aaaaaa"
    text_muted: "#666666"

  typography:
    heading_en: "Inter（ウェイト800-900）"
    heading_ja: "Noto Sans JP（ウェイト900）"
    display: "Bebas Neue（セクションラベル・装飾）"
    body: "Noto Sans JP（ウェイト300-400）"
    note: "英字と日本語でフォントを使い分け、プロフェッショナルな印象を演出"

  visual_effects:
    - name: "ノイズテクスチャ"
      detail: "body::beforeでSVGノイズを極薄オーバーレイ。ダークUIに質感を追加。"
    - name: "グリッドライン背景"
      detail: "60px間隔のオレンジ微細グリッド。セクション背景に使用。"
    - name: "オーブアニメーション"
      detail: "ヒーローにオレンジグラデーション球体。マウス追従パララックス。"
    - name: "斜めカット"
      detail: "clip-pathでセクション間を斜めに切る。動きのあるレイアウト。"
    - name: "カウントアップ"
      detail: "数字セクションでスクロール到達時にカウントアニメーション。"
    - name: "スクロールプログレスバー"
      detail: "画面最上部にオレンジのプログレスバー。"
    - name: "フェードイン＋スタガー"
      detail: "Intersection Observerで要素ごとに時間差フェードイン。"
    - name: "シマーエフェクト"
      detail: "ボタンホバー時に光が横切る演出。"
    - name: "グロー発光"
      detail: "カードホバー時にオレンジの微発光シャドウ。"
    - name: "トップラインアニメーション"
      detail: "カードホバー時に上辺のオレンジラインが伸びる。"
    - name: "背景大文字"
      detail: "ページヒーローに超大サイズの透過英字を背景配置。"
    - name: "グラデーションライン"
      detail: "セクション区切りにオレンジ→透明のグラデーション線。"
    - name: "カスタムスクロールバー"
      detail: "6px幅のオレンジスクロールバー。"
    - name: "セレクションカラー"
      detail: "テキスト選択時にオレンジ背景。"

# ============================================
# 技術要件
# ============================================

technical:
  stack:
    - "HTML5"
    - "CSS3（カスタムプロパティ使用）"
    - "Vanilla JavaScript（フレームワークなし）"
    - "Google Fonts（外部読み込み）"

  hosting:
    platform: "GitHub Pages"
    type: "サーバーレス（静的ホスティング）"
    branch: "main"
    ssl: "Enforce HTTPS"
    domain: "valek.jp（CNAME設定）"

  form_handling:
    service: "Formspree"
    plan: "無料プラン（月50件まで）"
    note: "送信件数が増えた場合は有料プランへ移行を検討"

  responsive:
    approach: "モバイルファースト"
    breakpoints:
      - width: "768px"
        target: "タブレット以下"
      - width: "480px"
        target: "小型スマートフォン"
    considerations:
      - "スマートフォンからの採用応募を最重要視"
      - "タップしやすいCTAサイズ（最小44×44px）"
      - "電話番号タップ発信対応"
      - "LINEリンクのタップ導線"

  performance:
    - "画像は遅延読み込み（loading=lazy）"
    - "Google Fontsは display=swap でFOUT対策"
    - "CSSカスタムプロパティで一括管理"
    - "JavaScriptは即時実行関数でスコープ管理"
    - "IntersectionObserverで効率的なスクロール監視"

  seo:
    - "各ページに固有のtitle・descriptionを設定"
    - "セマンティックHTML（header/main/section/footer）"
    - "OGPメタタグ（デプロイ前に追加）"
    - "画像にalt属性を設定（写真差し替え時）"

  browser_support:
    supported:
      - "Chrome（最新）"
      - "Safari（最新）"
      - "Firefox（最新）"
      - "Edge（最新）"
      - "iOS Safari"
      - "Android Chrome"
    unsupported:
      - "Internet Explorer 11"

# ============================================
# 応募導線設計
# ============================================

conversion_flow:
  business:
    entry_points:
      - "トップページ → 事業紹介 → お問い合わせ"
      - "直接お問い合わせページへ"
      - "ヘッダーの電話番号タップ"
    contact_methods:
      - type: "フォーム"
        page: "contact.html"
        note: "種別「配送のご依頼」を選択"
      - type: "電話"
        page: "全ページヘッダー"
      - type: "LINE"
        page: "contact.html"

  recruit:
    entry_points:
      - "トップページ → 採用情報 → 募集要項 → お問い合わせ"
      - "トップページ → 採用情報 → CTA直接応募"
      - "直接採用ページへ（求人媒体からの流入想定）"
    contact_methods:
      - type: "フォーム"
        page: "contact.html"
        note: "種別「採用への応募」を選択"
      - type: "LINE"
        page: "recruit/detail.html, contact.html"
        note: "気軽な相談導線として"
      - type: "電話"
        page: "全ページヘッダー, recruit/detail.html"

  cta_placement:
    - page: "index.html"
      ctas:
        - "ヒーロー：事業内容/採用情報の2ボタン"
        - "採用バナー：採用情報を見るボタン"
    - page: "service.html"
      ctas:
        - "ページ下部：フォーム/電話の2ボタン"
    - page: "recruit.html"
      ctas:
        - "ページ下部：募集要項/フォーム/電話の3ボタン"
    - page: "recruit/detail.html"
      ctas:
        - "ページ下部：フォーム/LINE/電話の3ボタン"
    - page: "全ページ共通"
      ctas:
        - "ヘッダー：CONTACTボタン＋電話番号"

# ============================================
# デプロイ前チェックリスト
# ============================================

pre_deploy_checklist:
  content_replacement:
    - item: "電話番号"
      search: "000-000-0000 / tel:0000000000"
      status: "未対応"

    - item: "LINEリンク"
      search: 'href="#" ※LINE該当箇所'
      status: "未対応"

    - item: "FormspreeフォームID"
      search: "YOUR_FORM_ID"
      status: "未対応"

    - item: "Google Maps埋め込みURL"
      search: "iframe src属性"
      status: "未対応"

    - item: "写真素材"
      search: "※ 写真撮影後に差し替え"
      status: "撮影予定"

    - item: "OGPメタタグ"
      search: "未設定"
      status: "未対応"

    - item: "ファビコン"
      search: "未設定"
      status: "未対応"

    - item: "フッター年表記"
      search: "2025"
      status: "公開年に合わせて確認"

  infrastructure:
    - item: "CNAMEファイル作成"
      content: "valek.jp"
      status: "未対応"

    - item: "GitHub Pages有効化"
      status: "未対応"

    - item: "DNS A/CNAMEレコード設定"
      status: "未対応"

    - item: "HTTPS強制有効化"
      status: "未対応"

  testing:
    - item: "Chrome表示確認"
      status: "未テスト"
    - item: "Safari表示確認"
      status: "未テスト"
    - item: "Firefox表示確認"
      status: "未テスト"
    - item: "iOS Safari表示確認"
      status: "未テスト"
    - item: "Android Chrome表示確認"
      status: "未テスト"
    - item: "レスポンシブ（375px）確認"
      status: "未テスト"
    - item: "レスポンシブ（768px）確認"
      status: "未テスト"
    - item: "フォーム送信テスト"
      status: "未テスト"
    - item: "電話タップ発信テスト"
      status: "未テスト"
    - item: "LINE導線テスト"
      status: "未テスト"
    - item: "全ページリンク確認"
      status: "未テスト"
    - item: "OGP表示テスト（SNSシェア）"
      status: "未テスト"
    - item: "PageSpeed Insights計測"
      status: "未テスト"

# ============================================
# 画像素材リスト（撮影予定）
# ============================================

photo_shooting_list:
  - filename: "hero.jpg"
    usage: "トップページ ヒーロー背景"
    spec: "1920×1080px / JPG"
    subject: "配送車両が走る様子 or ドライバーの作業風景"
    priority: "高"

  - filename: "strength-01.jpg"
    usage: "事業紹介 品質セクション"
    spec: "800×600px / JPG"
    subject: "丁寧に荷物を扱うドライバー or 研修の様子"
    priority: "高"

  - filename: "strength-02.jpg"
    usage: "事業紹介 人員体制セクション"
    spec: "800×600px / JPG"
    subject: "複数のドライバーが並ぶ集合写真 or 車両が並ぶ光景"
    priority: "高"

  - filename: "ceo.jpg"
    usage: "会社概要 代表写真"
    spec: "800×600px / JPG"
    subject: "谷本代表の上半身。背景シンプル。"
    priority: "高"

  - filename: "uniform.jpg"
    usage: "採用ページ ユニフォーム訴求"
    spec: "800×600px / JPG"
    subject: "BURTLEユニフォーム着用のドライバー"
    priority: "中"

  - filename: "driver-01.jpg"
    usage: "採用ページ ドライバー写真①"
    spec: "800×600px / JPG"
    subject: "若手ドライバーの作業風景"
    priority: "中"

  - filename: "driver-02.jpg"
    usage: "採用ページ ドライバー写真②"
    spec: "800×600px / JPG"
    subject: "笑顔のドライバー or 荷物を持つ姿"
    priority: "中"

  - filename: "vehicle.jpg"
    usage: "募集要項 車両セクション"
    spec: "800×600px / JPG"
    subject: "黒ナンバー軽自動車"
    priority: "中"

  - filename: "og-image.jpg"
    usage: "OGP画像（SNSシェア）"
    spec: "1200×630px / JPG"
    subject: "ロゴ＋キャッチコピー＋車両 or ドライバー"
    priority: "高"

  - filename: "logo.svg"
    usage: "ヘッダー・フッター・OGP"
    spec: "SVG"
    subject: "VALEKコーポレートロゴ"
    priority: "高"
    note: "現サイトからSVGデータを流用可能"

# ============================================
# 今後の拡張予定
# ============================================

future_enhancements:
  short_term:
    - item: "写真撮影＆差し替え"
      priority: "高"
    - item: "OGPメタタグ追加"
      priority: "高"
    - item: "ファビコン設定"
      priority: "高"
    - item: "Google Analytics導入"
      priority: "中"
    - item: "Google Search Console登録"
      priority: "中"

  mid_term:
    - item: "お知らせ（News）セクション追加"
      priority: "中"
    - item: "採用動画の撮影・埋め込み"
      priority: "中"
    - item: "ドライバーインタビュー記事の拡充"
      priority: "低"
    - item: "WebP画像対応（パフォーマンス改善）"
      priority: "低"

  long_term:
    - item: "ブログ / コラムセクション（SEO強化）"
      priority: "低"
    - item: "静岡エリア専用ページ"
      priority: "低"
    - item: "英語ページ対応"
      priority: "低"
    - item: "CMS導入検討（更新頻度が増えた場合）"
      priority: "低"