// ゴルフクラブの実売相場データ。全数値はaucfan/Yahoo!オークション実ページの表示値のみ(取得日必須)。
// 収集方式: brandsell.net/sports-sell.comと同一(collect.py)。まとめ売り/フルセット/ヘッド単体/カバー単体/フリマ出品/高反発加工品は最高値から除外。

export type SoubaRow = {
  category: string;
  count: string;
  avg: string;
  max: string;
  maxNote: string;
  aucfanUrl: string;
  yahooUrl: string;
};

export type SoubaMaker = {
  slug: string;
  name: string;
  en: string;
  intro: string;
  rows: SoubaRow[];
  reading: string[];
  fetchedAt: string;
  notes?: string;
  models?: SoubaRow[]; // 型番・モデル別の実売(P2・2026-09-22追補)
  modelsIntro?: string; // 型番別データの読み方(実データから言えることのみ)
  modelsFetchedAt?: string;
};

export const SOUBA: SoubaMaker[] = [
  {
    slug: "taylormade",
    name: "テーラーメイド",
    en: "TAYLORMADE",
    intro: "ツアー使用率の高いテーラーメイドは、Qi4D／Qi35など現行モデルの流通が厚く、ドライバーは直近30日で2,900件超の落札があります。RORS PROTOなどのツアープロト仕様が上限を作るため、通常モデルの相場とは分けて読む必要があります。",
    rows: [
      {category: "ドライバー", count: "2,901件（直近30日）", avg: "18,972円", max: "100,000円", maxNote: "テーラーメイド Qi4D LS ドライバー 9.0度（新品・未使用・単品出品）。落札日2026年6月27日", aucfanUrl: "https://aucfan.com/intro/q-~a5c6a1bca5e9a1bca5e1a5a4a5c920a5c9a5e9a5a4a5d0a1bc/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%86%E3%83%BC%E3%83%A9%E3%83%BC%E3%83%A1%E3%82%A4%E3%83%89%20%E3%83%89%E3%83%A9%E3%82%A4%E3%83%90%E3%83%BC/0/"},
      {category: "アイアン", count: "756件（直近30日）", avg: "40,375円", max: "392,546円", maxNote: "RORS PROTO 7本セット（中古・極美品・単品出品）。ツアープロト仕様のため通常モデルの上限とは別物。落札日2026年9月9日", aucfanUrl: "https://aucfan.com/intro/q-~a5c6a1bca5e9a1bca5e1a5a4a5c920a5a2a5a4a5a2a5f3/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%86%E3%83%BC%E3%83%A9%E3%83%BC%E3%83%A1%E3%82%A4%E3%83%89%20%E3%82%A2%E3%82%A4%E3%82%A2%E3%83%B3/0/"},
      {category: "パター", count: "723件（直近30日）", avg: "15,150円", max: "131,000円", maxNote: "ツアー支給品 スパイダーX ブラック TOUR GSS プロトタイプ（中古・極美品）。市販モデルの上限とは別物。落札日2026年4月4日", aucfanUrl: "https://aucfan.com/intro/q-~a5c6a1bca5e9a1bca5e1a5a4a5c920a5d1a5bfa1bc/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%86%E3%83%BC%E3%83%A9%E3%83%BC%E3%83%A1%E3%82%A4%E3%83%89%20%E3%83%91%E3%82%BF%E3%83%BC/0/"},
      {category: "フェアウェイウッド", count: "300件（直近90日）", avg: "17,305円", max: "71,307円", maxNote: "テーラーメイド Qi4D TOUR 7W フェアウェイウッド FW フレックスS（中古・美品・単品出品）。落札日2026年6月24日", aucfanUrl: "https://aucfan.com/intro/q-~a5c6a1bca5e9a1bca5e1a5a4a5c920a5d5a5a7a5a2a5a6a5a7a5a4a5a6a5c3a5c9/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%86%E3%83%BC%E3%83%A9%E3%83%BC%E3%83%A1%E3%82%A4%E3%83%89%20%E3%83%95%E3%82%A7%E3%82%A2%E3%82%A6%E3%82%A7%E3%82%A4%E3%82%A6%E3%83%83%E3%83%89/0/"},
    ],
    reading: ["ドライバーの上限はQi4D LSの新品で10万円前後、中古の使用感ありは平均値（約1.9万円）付近まで幅があります。", "アイアンの平均約4万円は旧モデルや単品番手を含む値で、現行モデルのセット新品は20〜30万円台で落札されています。"],
    fetchedAt: "2026年9月16日",
    models: [
      {category: "Qi35 ドライバー", count: "355件（直近30日）", avg: "19,071円", max: "74,690円", maxNote: "テーラーメイド Qi35 LS 8° ドライバー フレックスS（新品・未使用・単品出品）。落札日2026年9月1日", aucfanUrl: "https://aucfan.com/intro/q-~a5c6a1bca5e9a1bca5e1a5a4a5c9205169333520a5c9a5e9a5a4a5d0a1bc/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%86%E3%83%BC%E3%83%A9%E3%83%BC%E3%83%A1%E3%82%A4%E3%83%89%20Qi35%20%E3%83%89%E3%83%A9%E3%82%A4%E3%83%90%E3%83%BC/0/"},
      {category: "Qi10 ドライバー", count: "301件（直近30日）", avg: "15,777円", max: "51,146円", maxNote: "テーラーメイド Qi10 10.5° ドライバー フレックスS（中古・やや傷あり・単品出品）。落札日2026年3月30日", aucfanUrl: "https://aucfan.com/intro/q-~a5c6a1bca5e9a1bca5e1a5a4a5c9205169313020a5c9a5e9a5a4a5d0a1bc/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%86%E3%83%BC%E3%83%A9%E3%83%BC%E3%83%A1%E3%82%A4%E3%83%89%20Qi10%20%E3%83%89%E3%83%A9%E3%82%A4%E3%83%90%E3%83%BC/0/"},
      {category: "ステルス2 ドライバー", count: "113件（直近30日）", avg: "10,839円", max: "99,900円", maxNote: "ステルス2 ドライバー レッドブルレーシング 9.0°（限定モデル）（新品・未使用・単品出品）。落札日2026年4月5日", aucfanUrl: "https://aucfan.com/intro/q-~a5c6a1bca5e9a1bca5e1a5a4a5c920a5b9a5c6a5eba5b93220a5c9a5e9a5a4a5d0a1bc/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%86%E3%83%BC%E3%83%A9%E3%83%BC%E3%83%A1%E3%82%A4%E3%83%89%20%E3%82%B9%E3%83%86%E3%83%AB%E3%82%B92%20%E3%83%89%E3%83%A9%E3%82%A4%E3%83%90%E3%83%BC/0/"},
      {category: "P790 アイアン", count: "96件（直近30日）", avg: "57,786円", max: "189,800円", maxNote: "P790 Shadowfall アイアン 5-P 6本 N.S.PRO MODUS3 TOUR 105（新品・未使用・単品出品）。落札日2026年5月7日", aucfanUrl: "https://aucfan.com/intro/q-~a5c6a1bca5e9a1bca5e1a5a4a5c9205037393020a5a2a5a4a5a2a5f3/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%86%E3%83%BC%E3%83%A9%E3%83%BC%E3%83%A1%E3%82%A4%E3%83%89%20P790%20%E3%82%A2%E3%82%A4%E3%82%A2%E3%83%B3/0/"},
    ],
    modelsFetchedAt: "2026年9月22日",
    modelsIntro: "現行Qi35・前作Qi10・2世代前のステルス2と、人気アイアンP790を個別集計しました。Qi10は「Qi4D／Qi35を併記した出品」「ヘッド単体」が上位に多く混入するため、モデル名が単独で確認できる単品のみを最高値に採用しています。ステルス2の上限はレッドブルレーシング限定モデルです。",
  },
  {
    slug: "callaway",
    name: "キャロウェイ",
    en: "CALLAWAY",
    intro: "キャロウェイはドライバー・アイアンの流通量が大きく、パターはオデッセイ（同社ブランド）として集計しています。X PROTOTYPEやAPEX MBのツアー系アイアンが上限を作り、通常モデルは平均値付近が目安です。",
    rows: [
      {category: "ドライバー", count: "1,927件（直近30日）", avg: "20,165円", max: "110,000円", maxNote: "Callaway キャロウェイ 日本正規品 QUANTUM MINI クアンタムミニドライバー ATHLEMAX カーボ（中古・極美品・単品出品）。落札日2026年9月14日", aucfanUrl: "https://aucfan.com/intro/q-~a5ada5e3a5eda5a6a5a7a5a420a5c9a5e9a5a4a5d0a1bc/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%82%AD%E3%83%A3%E3%83%AD%E3%82%A6%E3%82%A7%E3%82%A4%20%E3%83%89%E3%83%A9%E3%82%A4%E3%83%90%E3%83%BC/0/"},
      {category: "アイアン", count: "680件（直近30日）", avg: "31,051円", max: "299,000円", maxNote: "キャロウェイ X PROTOTYPEアイアン（中古・美品・単品出品）。落札日2026年4月20日", aucfanUrl: "https://aucfan.com/intro/q-~a5ada5e3a5eda5a6a5a7a5a420a5a2a5a4a5a2a5f3/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%82%AD%E3%83%A3%E3%83%AD%E3%82%A6%E3%82%A7%E3%82%A4%20%E3%82%A2%E3%82%A4%E3%82%A2%E3%83%B3/0/"},
      {category: "パター", count: "1,605件（直近30日）", avg: "8,279円", max: "169,000円", maxNote: "オデッセイ DAMASCUS GRAND 限定350本（中古・単品出品）。落札日2026年4月19日", aucfanUrl: "https://aucfan.com/intro/q-~a5aaa5c7a5c3a5bba5a420a5d1a5bfa1bc/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%82%AA%E3%83%87%E3%83%83%E3%82%BB%E3%82%A4%20%E3%83%91%E3%82%BF%E3%83%BC/0/"},
      {category: "フェアウェイウッド", count: "300件（直近90日）", avg: "13,160円", max: "97,067円", maxNote: "キャロウェイ QUANTUM Ti 3W フェアウェイウッド FW フレックスS（中古・美品・単品出品）。落札日2026年9月8日", aucfanUrl: "https://aucfan.com/intro/q-~a5ada5e3a5eda5a6a5a7a5a420a5d5a5a7a5a2a5a6a5a7a5a4a5a6a5c3a5c9/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%82%AD%E3%83%A3%E3%83%AD%E3%82%A6%E3%82%A7%E3%82%A4%20%E3%83%95%E3%82%A7%E3%82%A2%E3%82%A6%E3%82%A7%E3%82%A4%E3%82%A6%E3%83%83%E3%83%89/0/"},
    ],
    reading: ["ドライバーはQUANTUM／Ai SMOKE系の現行品が10万円前後で上限、平均約2万円は旧モデルを含みます。", "パターの平均約8千円はオデッセイの流通量の多さを反映しています。限定品・TOULONは10万円超の別相場です。"],
    fetchedAt: "2026年9月16日",
    models: [
      {category: "エリート ドライバー", count: "191件（直近30日）", avg: "17,508円", max: "75,000円", maxNote: "エリート サウンドストーム ドライバー（限定版）（新品・未使用・単品出品）。落札日2026年4月4日", aucfanUrl: "https://aucfan.com/intro/q-~a5ada5e3a5eda5a6a5a7a5a420a5a8a5eaa1bca5c820a5c9a5e9a5a4a5d0a1bc/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%82%AD%E3%83%A3%E3%83%AD%E3%82%A6%E3%82%A7%E3%82%A4%20%E3%82%A8%E3%83%AA%E3%83%BC%E3%83%88%20%E3%83%89%E3%83%A9%E3%82%A4%E3%83%90%E3%83%BC/0/"},
      {category: "Ai SMOKE ドライバー", count: "121件（直近30日）", avg: "15,589円", max: "56,545円", maxNote: "PARADYM Ai SMOKE ◆◆◆S ツアーバージョン（CE限定） 10.5° フレックスS（中古・目立った傷なし・単品出品）。落札日2026年6月7日", aucfanUrl: "https://aucfan.com/intro/q-~a5ada5e3a5eda5a6a5a7a5a420416920534d4f4b4520a5c9a5e9a5a4a5d0a1bc/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%82%AD%E3%83%A3%E3%83%AD%E3%82%A6%E3%82%A7%E3%82%A4%20Ai%20SMOKE%20%E3%83%89%E3%83%A9%E3%82%A4%E3%83%90%E3%83%BC/0/"},
      {category: "パラダイム ドライバー", count: "95件（直近30日）", avg: "13,656円", max: "80,000円", maxNote: "PARADYM ◆◆◆S（トリプルダイヤモンド） 10.5° ドライバー（新品・未使用・単品出品）。落札日2026年5月6日", aucfanUrl: "https://aucfan.com/intro/q-~a5ada5e3a5eda5a6a5a7a5a420a5d1a5e9a5c0a5a4a5e020a5c9a5e9a5a4a5d0a1bc/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%82%AD%E3%83%A3%E3%83%AD%E3%82%A6%E3%82%A7%E3%82%A4%20%E3%83%91%E3%83%A9%E3%83%80%E3%82%A4%E3%83%A0%20%E3%83%89%E3%83%A9%E3%82%A4%E3%83%90%E3%83%BC/0/"},
      {category: "APEX アイアン", count: "82件（直近30日）", avg: "32,587円", max: "259,800円", maxNote: "APEX MB ツアー アイアン 7本（一部未使用）。マッスルバックのため通常モデルの上限とは別物（中古・目立った傷なし・単品出品）。落札日2026年6月21日", aucfanUrl: "https://aucfan.com/intro/q-~a5ada5e3a5eda5a6a5a7a5a4204150455820a5a2a5a4a5a2a5f3/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%82%AD%E3%83%A3%E3%83%AD%E3%82%A6%E3%82%A7%E3%82%A4%20APEX%20%E3%82%A2%E3%82%A4%E3%82%A2%E3%83%B3/0/"},
    ],
    modelsFetchedAt: "2026年9月22日",
    modelsIntro: "現行エリート・前作Ai SMOKE・2世代前のパラダイムと、APEXアイアンを個別集計しました。ドライバーはツアー支給・ヘッド単体・トリプルダイヤモンド系の上位混入が多く、単品の市販品のみを採用しています。APEXの上限はマッスルバック（MB）のため、キャビティの通常モデルは平均値付近が目安です。",
  },
  {
    slug: "titleist",
    name: "タイトリスト",
    en: "TITLEIST",
    intro: "タイトリストはT100／T150系アイアンとGT系ドライバーの流通が厚く、パターは同社のスコッティキャメロンとして集計しています。サークルT（ツアー支給）モデルは一般流通品と価格帯が全く異なるため、上限値は別物として扱ってください。",
    rows: [
      {category: "ドライバー", count: "1,007件（直近30日）", avg: "23,075円", max: "134,000円", maxNote: "ツアー支給品 GTS3 10度 VENTUS TR BLUE 6X（中古・極美品）。落札日2026年8月7日", aucfanUrl: "https://aucfan.com/intro/q-~a5bfa5a4a5c8a5eaa5b9a5c820a5c9a5e9a5a4a5d0a1bc/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%82%BF%E3%82%A4%E3%83%88%E3%83%AA%E3%82%B9%E3%83%88%20%E3%83%89%E3%83%A9%E3%82%A4%E3%83%90%E3%83%BC/0/"},
      {category: "アイアン", count: "475件（直近30日）", avg: "39,609円", max: "328,000円", maxNote: "ツアー支給品 T150 PROTO 4i-PW 7本セット（新品・スペックシート付き）。通常モデルの上限とは別物。落札日2026年4月5日", aucfanUrl: "https://aucfan.com/intro/q-~a5bfa5a4a5c8a5eaa5b9a5c820a5a2a5a4a5a2a5f3/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%82%BF%E3%82%A4%E3%83%88%E3%83%AA%E3%82%B9%E3%83%88%20%E3%82%A2%E3%82%A4%E3%82%A2%E3%83%B3/0/"},
      {category: "パター", count: "1,200件（直近30日）", avg: "31,002円", max: "2,245,100円", maxNote: "スコッティキャメロン 009M GSS サークルT（ツアー支給・未使用・COA付き）。一般流通モデルの上限とは別物。落札日2026年7月12日", aucfanUrl: "https://aucfan.com/intro/q-~a5b9a5b3a5c3a5c6a5a3a5ada5e3a5e1a5eda5f320a5d1a5bfa1bc/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%82%B9%E3%82%B3%E3%83%83%E3%83%86%E3%82%A3%E3%82%AD%E3%83%A3%E3%83%A1%E3%83%AD%E3%83%B3%20%E3%83%91%E3%82%BF%E3%83%BC/0/"},
      {category: "ウェッジ", count: "303件（直近30日）", avg: "10,333円", max: "59,800円", maxNote: "ツアー支給 ボーケイ 260-08 プロトタイプ 60度（中古・美品）。落札日2026年7月16日", aucfanUrl: "https://aucfan.com/intro/q-~a5dca1bca5b1a5a420a5a6a5a7a5c3a5b8/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%9C%E3%83%BC%E3%82%B1%E3%82%A4%20%E3%82%A6%E3%82%A7%E3%83%83%E3%82%B8/0/"},
    ],
    reading: ["ドライバーはGT系のツアー支給品が13万円台、一般流通の新品は12万円前後です。", "ウェッジはボーケイSM系の中古が1万円前後（平均約1万円）で、ツアー支給プロトのみ5万円超です。"],
    fetchedAt: "2026年9月16日",
    models: [
      {category: "GT2 ドライバー", count: "93件（直近30日）", avg: "35,995円", max: "120,000円", maxNote: "GT2 ドライバー 9.0° フレックスX（新品・未使用・単品出品）。落札日2026年8月16日", aucfanUrl: "https://aucfan.com/intro/q-~a5bfa5a4a5c8a5eaa5b9a5c82047543220a5c9a5e9a5a4a5d0a1bc/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%82%BF%E3%82%A4%E3%83%88%E3%83%AA%E3%82%B9%E3%83%88%20GT2%20%E3%83%89%E3%83%A9%E3%82%A4%E3%83%90%E3%83%BC/0/"},
      {category: "TSR2 ドライバー", count: "54件（直近30日）", avg: "17,558円", max: "84,000円", maxNote: "TSR2 ドライバー 9° TENSEI AV BLUE 65 S（新品・未使用・単品出品）。落札日2026年7月19日", aucfanUrl: "https://aucfan.com/intro/q-~a5bfa5a4a5c8a5eaa5b9a5c8205453523220a5c9a5e9a5a4a5d0a1bc/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%82%BF%E3%82%A4%E3%83%88%E3%83%AA%E3%82%B9%E3%83%88%20TSR2%20%E3%83%89%E3%83%A9%E3%82%A4%E3%83%90%E3%83%BC/0/"},
      {category: "T100 アイアン", count: "62件（直近30日）", avg: "41,559円", max: "217,800円", maxNote: "T100 OILCAN（オイルカン）アイアン 5-PW 6本 MODUS3 TOUR115 S（新品・未使用・単品出品）。落札日2026年4月14日", aucfanUrl: "https://aucfan.com/intro/q-~a5bfa5a4a5c8a5eaa5b9a5c8205431303020a5a2a5a4a5a2a5f3/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%82%BF%E3%82%A4%E3%83%88%E3%83%AA%E3%82%B9%E3%83%88%20T100%20%E3%82%A2%E3%82%A4%E3%82%A2%E3%83%B3/0/"},
      {category: "スコッティキャメロン ニューポート2", count: "65件（直近30日）", avg: "33,839円", max: "333,800円", maxNote: "スコッティキャメロン ボタンバック ニューポート2（デッドストック）。復刻・限定仕様のため通常品の上限とは別物（新品・未使用・単品出品）。落札日2026年4月12日", aucfanUrl: "https://aucfan.com/intro/q-~a5b9a5b3a5c3a5c6a5a3a5ada5e3a5e1a5eda5f320a5cba5e5a1bca5dda1bca5c832/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%82%B9%E3%82%B3%E3%83%83%E3%83%86%E3%82%A3%E3%82%AD%E3%83%A3%E3%83%A1%E3%83%AD%E3%83%B3%20%E3%83%8B%E3%83%A5%E3%83%BC%E3%83%9D%E3%83%BC%E3%83%882/0/"},
    ],
    modelsFetchedAt: "2026年9月22日",
    modelsIntro: "現行GT2・前作TSR2・T100アイアンと、パターのスコッティキャメロン ニューポート2を個別集計しました。ニューポート2の上限は復刻・限定仕様（ボタンバック）で、通常の市販品とは別相場です。GT2はツアー支給品を除外しても新品が12万円で落札されており、平均落札価格（約3.6万円）もQi35・G440を上回ります。",
  },
  {
    slug: "ping",
    name: "ピン",
    en: "PING",
    intro: "ピンはG440／G740など現行モデルの流通が厚く、アイアンは9本セットの新品が20万円台で動いています。パターは往年のPING 1-A・アンサー系の希少モデルに需要がありますが、通常の中古は数千円〜数万円が中心です。",
    rows: [
      {category: "ドライバー", count: "1,398件（直近30日）", avg: "18,529円", max: "99,306円", maxNote: "ピン G440 K 10.5° ドライバー DR フレックスR（中古・美品・単品出品）。落札日2026年8月17日", aucfanUrl: "https://aucfan.com/intro/q-~a5d4a5f320a5c9a5e9a5a4a5d0a1bc/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%94%E3%83%B3%20%E3%83%89%E3%83%A9%E3%82%A4%E3%83%90%E3%83%BC/0/"},
      {category: "アイアン", count: "527件（直近30日）", avg: "46,082円", max: "221,800円", maxNote: "PING ピン G740 アイアン 5-P UW 50 56 9本セット ALTA J CB BLUE R（新品・未使用・単品出品）。落札日2026年9月4日", aucfanUrl: "https://aucfan.com/intro/q-~a5d4a5f320a5a2a5a4a5a2a5f3/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%94%E3%83%B3%20%E3%82%A2%E3%82%A4%E3%82%A2%E3%83%B3/0/"},
      {category: "パター", count: "719件（直近30日）", avg: "6,366円", max: "100,000円", maxNote: "【未開封品】34インチ PING CLASSIC 1-A 85068 ピン オリジナル クラシック ヴィンテージ センタ（新品・未使用・単品出品）。落札日2026年5月13日", aucfanUrl: "https://aucfan.com/intro/q-~a5d4a5f320a5d1a5bfa1bc/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%94%E3%83%B3%20%E3%83%91%E3%82%BF%E3%83%BC/0/"},
      {category: "フェアウェイウッド", count: "300件（直近90日）", avg: "15,741円", max: "67,745円", maxNote: "ピン G440 LST 3W フェアウェイウッド FW フレックスX（中古・美品・単品出品）。落札日2026年8月14日", aucfanUrl: "https://aucfan.com/intro/q-~a5d4a5f320a5d5a5a7a5a2a5a6a5a7a5a4a5a6a5c3a5c9/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%94%E3%83%B3%20%E3%83%95%E3%82%A7%E3%82%A2%E3%82%A6%E3%82%A7%E3%82%A4%E3%82%A6%E3%83%83%E3%83%89/0/"},
    ],
    reading: ["ドライバーはG440 Kの新品・美品が9万円台で上限、平均約1.9万円は旧世代（G410／G425等）を含みます。", "フェアウェイウッドはG440系の単品が6万円台が上限で、集計期間は直近90日です。"],
    fetchedAt: "2026年9月16日",
    models: [
      {category: "G440 ドライバー", count: "591件（直近30日）", avg: "34,494円", max: "99,306円", maxNote: "G440 K 10.5° ドライバー フレックスR（中古・目立った傷なし・単品出品）。落札日2026年8月17日", aucfanUrl: "https://aucfan.com/intro/q-~a5d4a5f3204734343020a5c9a5e9a5a4a5d0a1bc/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%94%E3%83%B3%20G440%20%E3%83%89%E3%83%A9%E3%82%A4%E3%83%90%E3%83%BC/0/"},
      {category: "G430 ドライバー", count: "324件（直近30日）", avg: "22,245円", max: "60,107円", maxNote: "G430 MAX 10K 10.5° ドライバー フレックスR（中古・目立った傷なし・単品出品）。落札日2026年4月27日", aucfanUrl: "https://aucfan.com/intro/q-~a5d4a5f3204734333020a5c9a5e9a5a4a5d0a1bc/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%94%E3%83%B3%20G430%20%E3%83%89%E3%83%A9%E3%82%A4%E3%83%90%E3%83%BC/0/"},
      {category: "G430 アイアン", count: "40件（直近30日）", avg: "29,703円", max: "146,347円", maxNote: "G430 アイアン 9本セット（中古・やや傷あり・単品出品）。落札日2026年5月30日", aucfanUrl: "https://aucfan.com/intro/q-~a5d4a5f3204734333020a5a2a5a4a5a2a5f3/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%94%E3%83%B3%20G430%20%E3%82%A2%E3%82%A4%E3%82%A2%E3%83%B3/0/"},
      {category: "i230 アイアン", count: "33件（直近30日）", avg: "40,085円", max: "109,387円", maxNote: "i230 アイアン 7本セット レフティ フレックスS（中古・やや傷あり・単品出品）。落札日2026年8月25日", aucfanUrl: "https://aucfan.com/intro/q-~a5d4a5f3206932333020a5a2a5a4a5a2a5f3/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%94%E3%83%B3%20i230%20%E3%82%A2%E3%82%A4%E3%82%A2%E3%83%B3/0/"},
    ],
    modelsFetchedAt: "2026年9月22日",
    modelsIntro: "現行G440・前作G430のドライバーと、G430・i230のアイアンを個別集計しました。G440ドライバーは直近30日で591件と6メーカーの型番中で最多の流通量です。G430ドライバーは「ヘッド＋付属品セット」出品が上位に多く、単品のみを採用しています。",
  },
  {
    slug: "xxio",
    name: "ゼクシオ（ダンロップ）",
    en: "XXIO",
    intro: "ゼクシオ（ダンロップ）はアベレージゴルファー向けの定番で、フルセットでの出品が多いのが特徴です。ここでは単品・単セットの落札のみを最高値に採用しています。プライム（PRIME）系は通常ゼクシオより高価格帯です。",
    rows: [
      {category: "ドライバー", count: "430件（直近30日）", avg: "19,468円", max: "88,110円", maxNote: "返品OK 中古未使用 ゼクシオ(XXIO) プライム ドライバー 2025 1W SP-1300 10.5 R（新品・未使用・単品出品）。落札日2026年6月14日", aucfanUrl: "https://aucfan.com/intro/q-~a5bca5afa5b7a5aa20a5c9a5e9a5a4a5d0a1bc/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%82%BC%E3%82%AF%E3%82%B7%E3%82%AA%20%E3%83%89%E3%83%A9%E3%82%A4%E3%83%90%E3%83%BC/0/"},
      {category: "アイアン", count: "586件（直近30日）", avg: "16,627円", max: "192,511円", maxNote: "新品■2025.4■ダンロップ■ゼクシオ プライム-2025■７本アイアン■6-9/P-WEDGE/A-WEDGE/S-（新品・未使用・単品出品）。落札日2026年6月8日", aucfanUrl: "https://aucfan.com/intro/q-~a5bca5afa5b7a5aa20a5a2a5a4a5a2a5f3/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%82%BC%E3%82%AF%E3%82%B7%E3%82%AA%20%E3%82%A2%E3%82%A4%E3%82%A2%E3%83%B3/0/"},
      {category: "フェアウェイウッド", count: "300件（直近90日）", avg: "15,238円", max: "56,500円", maxNote: "未使用品！【中古】ダンロップ ゼクシオ プライム 2025 フェアウェイウッド SP1300(R) 5W(18度) 63（新品・未使用・単品出品）。落札日2026年3月24日", aucfanUrl: "https://aucfan.com/intro/q-~a5bca5afa5b7a5aa20a5d5a5a7a5a2a5a6a5a7a5a4a5a6a5c3a5c9/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%82%BC%E3%82%AF%E3%82%B7%E3%82%AA%20%E3%83%95%E3%82%A7%E3%82%A2%E3%82%A6%E3%82%A7%E3%82%A4%E3%82%A6%E3%83%83%E3%83%89/0/"},
      {category: "ユーティリティ", count: "246件（直近30日）", avg: "10,529円", max: "42,188円", maxNote: "ダンロップ XXIO(2026) プラス H7 ユーティリティ UT フレックスS（中古・極美品・単品出品）。落札日2026年4月3日", aucfanUrl: "https://aucfan.com/intro/q-~a5bca5afa5b7a5aa20a5e6a1bca5c6a5a3a5eaa5c6a5a3/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%82%BC%E3%82%AF%E3%82%B7%E3%82%AA%20%E3%83%A6%E3%83%BC%E3%83%86%E3%82%A3%E3%83%AA%E3%83%86%E3%82%A3/0/"},
    ],
    reading: ["ドライバーの上限はプライム2025の未使用で8.8万円、通常のゼクシオ現行は5〜7万円台が目安です。", "フェアウェイウッド・ユーティリティは単品で4〜6万円台が上限、平均は1〜1.5万円で旧モデルが厚い層です。"],
    fetchedAt: "2026年9月16日",
    models: [
      {category: "ゼクシオ14 ドライバー", count: "53件（直近30日）", avg: "48,474円", max: "86,300円", maxNote: "ゼクシオ14+ ドライバー 9° SPEEDER NX GOLD 50S（限定品・新品・単品出品）。落札日2026年8月4日", aucfanUrl: "https://aucfan.com/intro/q-~a5bca5afa5b7a5aa313420a5c9a5e9a5a4a5d0a1bc/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%82%BC%E3%82%AF%E3%82%B7%E3%82%AA14%20%E3%83%89%E3%83%A9%E3%82%A4%E3%83%90%E3%83%BC/0/"},
      {category: "ゼクシオ13 ドライバー", count: "20件（直近30日）", avg: "22,375円", max: "51,906円", maxNote: "ゼクシオ13 レディース ドライバー 12.5° MP1300L（A）（新品・未使用・単品出品）。落札日2026年9月22日", aucfanUrl: "https://aucfan.com/intro/q-~a5bca5afa5b7a5aa313320a5c9a5e9a5a4a5d0a1bc/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%82%BC%E3%82%AF%E3%82%B7%E3%82%AA13%20%E3%83%89%E3%83%A9%E3%82%A4%E3%83%90%E3%83%BC/0/"},
      {category: "ゼクシオ13 アイアン", count: "45件（直近30日）", avg: "17,571円", max: "110,400円", maxNote: "ゼクシオ13 INTERNATIONAL アイアン #5〜SW 8本 MP1300K（新品・未使用・単品出品）。落札日2026年7月7日", aucfanUrl: "https://aucfan.com/intro/q-~a5bca5afa5b7a5aa313320a5a2a5a4a5a2a5f3/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%82%BC%E3%82%AF%E3%82%B7%E3%82%AA13%20%E3%82%A2%E3%82%A4%E3%82%A2%E3%83%B3/0/"},
    ],
    modelsFetchedAt: "2026年9月22日",
    modelsIntro: "現行ゼクシオ14（2025年11〜12月発売）と前作ゼクシオ13のドライバー、ゼクシオ13アイアンを個別集計しました。ゼクシオはレディースモデル（MP1300L／MP1400L）の流通が厚く、上位落札の多くがレディース新品です。ゼクシオ12は上位がプライム（別ライン）とゼクシオ14で占められ単品の判定ができなかったため掲載していません。",
  },
  {
    slug: "bridgestone",
    name: "ブリヂストン",
    en: "BRIDGESTONE",
    intro: "ブリヂストンはBX1／BX2 HTなど現行モデルとB-Limitedのツアー系が中心で、他メーカーに比べて平均落札価格は控えめです。ドライバーの上限はB-Limited BX1 TOURで8万円台、アイアンは6〜7本セットの新品が12〜15万円台です。",
    rows: [
      {category: "ドライバー", count: "452件（直近30日）", avg: "12,911円", max: "88,106円", maxNote: "ブリヂストン BRIDGESTONE B-Limited BX1 TOUR 9° ドライバー DR フレックスX（中古・極美品・単品出品）。落札日2026年5月2日", aucfanUrl: "https://aucfan.com/intro/q-~a5d6a5eaa5c2a5b9a5c8a5f320a5c9a5e9a5a4a5d0a1bc/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%96%E3%83%AA%E3%83%82%E3%82%B9%E3%83%88%E3%83%B3%20%E3%83%89%E3%83%A9%E3%82%A4%E3%83%90%E3%83%BC/0/"},
      {category: "アイアン", count: "372件（直近30日）", avg: "41,291円", max: "149,952円", maxNote: "新品BRIDGESTONE 258CBP アイアン 5~P 6本セット トラビル 95 硬さS【日本仕様 TRAVIL（新品・未使用・単品出品）。落札日2026年4月13日", aucfanUrl: "https://aucfan.com/intro/q-~a5d6a5eaa5c2a5b9a5c8a5f320a5a2a5a4a5a2a5f3/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%96%E3%83%AA%E3%83%82%E3%82%B9%E3%83%88%E3%83%B3%20%E3%82%A2%E3%82%A4%E3%82%A2%E3%83%B3/0/"},
      {category: "フェアウェイウッド", count: "300件（直近90日）", avg: "9,163円", max: "59,080円", maxNote: "ブリヂストン BRIDGESTONE GOLF BX1 ST フェアウェイウッド Tour AD FI 6 【5W】 シ（中古・使用感あり・単品出品）。落札日2026年5月25日", aucfanUrl: "https://aucfan.com/intro/q-~a5d6a5eaa5c2a5b9a5c8a5f320a5d5a5a7a5a2a5a6a5a7a5a4a5a6a5c3a5c9/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%96%E3%83%AA%E3%83%82%E3%82%B9%E3%83%88%E3%83%B3%20%E3%83%95%E3%82%A7%E3%82%A2%E3%82%A6%E3%82%A7%E3%82%A4%E3%82%A6%E3%83%83%E3%83%89/0/"},
      {category: "ユーティリティ", count: "225件（直近30日）", avg: "8,760円", max: "34,080円", maxNote: "ブリヂストン BRIDGESTONE GOLF BX2 HT ユーティリティ Diamana BS50h II 【U6】（中古・極美品・単品出品）。落札日2026年8月2日", aucfanUrl: "https://aucfan.com/intro/q-~a5d6a5eaa5c2a5b9a5c8a5f320a5e6a1bca5c6a5a3a5eaa5c6a5a3/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%96%E3%83%AA%E3%83%82%E3%82%B9%E3%83%88%E3%83%B3%20%E3%83%A6%E3%83%BC%E3%83%86%E3%82%A3%E3%83%AA%E3%83%86%E3%82%A3/0/"},
    ],
    reading: ["ドライバーはB-Limited BX1 TOURの中古極美品が8.8万円で上限、平均約1.3万円は旧モデル（ツアーステージ等）を含みます。", "ユーティリティは単品で3万円台が上限で、平均は約9千円です。"],
    fetchedAt: "2026年9月16日",
    models: [
      {category: "B1ST ドライバー", count: "18件（直近30日）", avg: "10,316円", max: "33,227円", maxNote: "B1 ST 9.5° ドライバー フレックスS（新品・未使用・単品出品）。落札日2026年8月22日", aucfanUrl: "https://aucfan.com/intro/q-~a5d6a5eaa5c2a5b9a5c8a5f3204231535420a5c9a5e9a5a4a5d0a1bc/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%96%E3%83%AA%E3%83%82%E3%82%B9%E3%83%88%E3%83%B3%20B1ST%20%E3%83%89%E3%83%A9%E3%82%A4%E3%83%90%E3%83%BC/0/"},
      {category: "B3 ドライバー", count: "53件（直近30日）", avg: "12,781円", max: "42,188円", maxNote: "B3 MAX 9.5° ドライバー フレックスS（中古・未使用に近い・単品出品）。落札日2026年5月30日", aucfanUrl: "https://aucfan.com/intro/q-~a5d6a5eaa5c2a5b9a5c8a5f320423320a5c9a5e9a5a4a5d0a1bc/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%96%E3%83%AA%E3%83%82%E3%82%B9%E3%83%88%E3%83%B3%20B3%20%E3%83%89%E3%83%A9%E3%82%A4%E3%83%90%E3%83%BC/0/"},
      {category: "TOUR B X ドライバー", count: "55件（直近30日）", avg: "9,936円", max: "15,307円", maxNote: "TOUR B X 10.5° ドライバー フレックスSR（中古・やや傷あり・単品出品）。落札日2026年9月19日", aucfanUrl: "https://aucfan.com/intro/q-~a5d6a5eaa5c2a5b9a5c8a5f320544f55522042205820a5c9a5e9a5a4a5d0a1bc/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%96%E3%83%AA%E3%83%82%E3%82%B9%E3%83%88%E3%83%B3%20TOUR%20B%20X%20%E3%83%89%E3%83%A9%E3%82%A4%E3%83%90%E3%83%BC/0/"},
      {category: "TOUR B アイアン", count: "112件（直近30日）", avg: "29,569円", max: "125,000円", maxNote: "ツアーB BX2HT アイアン 7本（6〜P・50°・56°）純正スピーダーBS50i S（新品・未使用・単品出品）。落札日2026年6月28日", aucfanUrl: "https://aucfan.com/intro/q-~a5d6a5eaa5c2a5b9a5c8a5f320544f5552204220a5a2a5a4a5a2a5f3/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%96%E3%83%AA%E3%83%82%E3%82%B9%E3%83%88%E3%83%B3%20TOUR%20B%20%E3%82%A2%E3%82%A4%E3%82%A2%E3%83%B3/0/"},
    ],
    modelsFetchedAt: "2026年9月22日",
    modelsIntro: "現行B1 ST／B3と前作TOUR B X のドライバー、TOUR B系アイアンを個別集計しました。ドライバーは他メーカーより流通量が少なく（B1 STは直近30日18件）、最高値も3〜6万円台と控えめです。TOUR B X は「ゴルフセット（複数本まとめ）」が上位に混入するため単品のみを採用しています。",
  },
];
