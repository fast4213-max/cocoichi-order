// ============================================================
// CoCo壱番屋 メニューデータ
// 価格は2025年時点・税込・テイクアウト+54円別途
// 地域により価格が異なる場合があります
// ============================================================

const MENU = {

  // ベースカレー（カテゴリ別）
  baseCategories: [
    { id: 'meat', label: '🥩 肉類' },
    { id: 'seafood', label: '🦐 魚介類' },
    { id: 'veggie', label: '🥦 野菜類' },
    { id: 'other', label: '🍳 その他' },
  ],

  baseItems: [
    // 肉類
    { id: 'pork', category: 'meat', name: 'ポークカレー', price: 646, menuId: 1293, img: 'https://www.ichibanya.co.jp/sys/upload/save/115193121569980c4156231.png' },
    { id: 'pork_mild', category: 'meat', name: '甘口ポークカレー', price: 646, menuId: 1294, img: null, note: '辛さ普通〜20辛のみ選択不可' },
    { id: 'beef', category: 'meat', name: 'ビーフカレー', price: 794, menuId: 1307, img: 'https://www.ichibanya.co.jp/sys/upload/save/28793311366b40ecf261d6.png', note: '甘口不可' },
    { id: 'chicken_stew', category: 'meat', name: 'チキンにこみカレー', price: 934, menuId: 1617, img: 'https://www.ichibanya.co.jp/sys/upload/save/165247091066207a7c57997.png' },
    { id: 'fried_chicken5', category: 'meat', name: 'フライドチキン(5個)カレー', price: 951, menuId: 1782, img: null },
    { id: 'hamburg2', category: 'meat', name: 'ハンバーグ(2個)カレー', price: 976, menuId: 1301, img: null },
    { id: 'buta_shabu', category: 'meat', name: '豚しゃぶカレー', price: 982, menuId: 1303, img: null },
    { id: 'menchi', category: 'meat', name: 'メンチカツカレー', price: 972, menuId: 1302, img: null },
    { id: 'sausage4', category: 'meat', name: 'ソーセージ(4本)カレー', price: 994, menuId: 1300, img: null },
    { id: 'chicken_katsu', category: 'meat', name: 'チキンカツカレー', price: 994, menuId: 1299, img: null },
    { id: 'pari_chicken', category: 'meat', name: 'パリパリチキンカレー', price: 994, menuId: 1298, img: null },
    { id: 'rosu_katsu', category: 'meat', name: 'ロースカツカレー', price: 998, menuId: 1297, img: null },
    { id: 'tonkatsu', category: 'meat', name: '手仕込とんかつカレー', price: 1192, menuId: 1618, img: null },
    { id: 'gyusuji', category: 'meat', name: '牛すじ煮込みカレー', price: 1132, menuId: 1800, img: null },
    // 魚介
    { id: 'ebi_fry', category: 'seafood', name: 'プチエビフライカレー', price: 822, menuId: 1914, img: null },
    { id: 'fish_fry2', category: 'seafood', name: 'フィッシュフライ(2本)カレー', price: 858, menuId: 1314, img: null },
    { id: 'asari', category: 'seafood', name: 'たっぷりあさりカレー', price: 858, menuId: 1313, img: null },
    { id: 'ika', category: 'seafood', name: 'イカカレー', price: 910, menuId: 1312, img: null },
    { id: 'ebi_nikomi', category: 'seafood', name: 'エビにこみカレー', price: 910, menuId: 1311, img: null },
    { id: 'ebi_asari', category: 'seafood', name: 'エビあさりカレー', price: 884, menuId: 1779, img: null },
    { id: 'seafood', category: 'seafood', name: '海の幸カレー', price: 1016, menuId: 1310, img: null },
    // 野菜
    { id: 'nasu6', category: 'veggie', name: 'なす(6個)カレー', price: 826, menuId: 1780, img: null },
    { id: 'spinach', category: 'veggie', name: 'ほうれん草カレー', price: 898, menuId: 1315, img: null },
    { id: 'yasai', category: 'veggie', name: 'やさいカレー', price: 918, menuId: 1316, img: null },
    // その他
    { id: 'veg_curry', category: 'other', name: 'ここイチベジカレー', price: 683, menuId: 1327, img: null },
    { id: 'omu', category: 'other', name: 'オムカレー', price: 779, menuId: 1676, img: null },
    { id: 'natto', category: 'other', name: '納豆カレー', price: 813, menuId: 1324, img: null },
    { id: 'scramble', category: 'other', name: 'スクランブルエッグカレー', price: 866, menuId: 1323, img: null },
    { id: 'cheese', category: 'other', name: 'チーズカレー', price: 910, menuId: 1322, img: null },
    { id: 'kinoko', category: 'other', name: 'きのこカレー', price: 888, menuId: 1320, img: null },
    { id: 'low_carb', category: 'other', name: '低糖質カレー', price: 725, menuId: 1325, img: null, note: 'ご飯量変更不可' },
  ],

  // ご飯の量
  riceSizes: [
    { label: '150g', diff: -90 },
    { label: '200g', diff: -60 },
    { label: '250g', diff: -30 },
    { label: '300g（基本）', diff: 0 },
    { label: '350g', diff: 65 },
    { label: '400g', diff: 130 },
    { label: '500g', diff: 260 },
    { label: '600g', diff: 390 },
    { label: '700g', diff: 520 },
    { label: '800g', diff: 650 },
  ],

  // 辛さ
  spicyLevels: [
    { label: '甘口', diff: 0 },
    { label: '普通', diff: 0 },
    { label: '1辛', diff: 25 },
    { label: '2辛', diff: 50 },
    { label: '3辛', diff: 75 },
    { label: '4辛', diff: 100 },
    { label: '5辛', diff: 125 },
    { label: '6〜10辛', diff: 150 },
    { label: '15辛', diff: 175 },
    { label: '20辛', diff: 200 },
  ],

  // トッピング（カテゴリ別）
  toppingCategories: [
    { id: 'meat_t', label: '🥩 お肉' },
    { id: 'seafood_t', label: '🦐 魚介' },
    { id: 'veggie_t', label: '🥦 野菜' },
    { id: 'egg_t', label: '🧀 チーズ・たまご' },
  ],

  toppings: [
    // お肉
    { id: 't_hamburg1', category: 'meat_t', name: 'ハンバーグ(1個)', price: 165 },
    { id: 't_sausage2', category: 'meat_t', name: 'ソーセージ(2本)', price: 174 },
    { id: 't_fc3', category: 'meat_t', name: 'フライドチキン(3個)', price: 183 },
    { id: 't_chicken_nikomi', category: 'meat_t', name: 'チキンにこみ', price: 288 },
    { id: 't_fc5', category: 'meat_t', name: 'フライドチキン(5個)', price: 305 },
    { id: 't_buta_shabu', category: 'meat_t', name: '豚しゃぶ', price: 336 },
    { id: 't_half_buta', category: 'meat_t', name: 'ハーフ豚しゃぶ', price: 168 },
    { id: 't_chicken_katsu', category: 'meat_t', name: 'チキンカツ', price: 348 },
    { id: 't_pari', category: 'meat_t', name: 'パリパリチキン', price: 348 },
    { id: 't_rosu', category: 'meat_t', name: 'ロースカツ', price: 352 },
    { id: 't_menchi', category: 'meat_t', name: 'メンチカツ', price: 326 },
    { id: 't_tonkatsu', category: 'meat_t', name: '手仕込とんかつ', price: 546 },
    { id: 't_gyusuji', category: 'meat_t', name: '牛すじ煮込み', price: 486, note: '一部店舗限定' },
    // 魚介
    { id: 't_fish1', category: 'seafood_t', name: 'フィッシュフライ(1本)', price: 106 },
    { id: 't_half_asari', category: 'seafood_t', name: 'ハーフあさり', price: 106 },
    { id: 't_half_ika', category: 'seafood_t', name: 'ハーフイカ', price: 132 },
    { id: 't_half_ebi', category: 'seafood_t', name: 'ハーフエビにこみ', price: 132 },
    { id: 't_tuna', category: 'seafood_t', name: 'ツナ', price: 138 },
    { id: 't_asari', category: 'seafood_t', name: 'たっぷりあさり', price: 212 },
    { id: 't_ebi_asari', category: 'seafood_t', name: 'エビあさり', price: 238 },
    { id: 't_ebi', category: 'seafood_t', name: 'エビにこみ', price: 264 },
    { id: 't_ika', category: 'seafood_t', name: 'イカ', price: 264 },
    { id: 't_seafood', category: 'seafood_t', name: '海の幸', price: 370 },
    // 野菜
    { id: 't_nasu3', category: 'veggie_t', name: 'なす(3個)', price: 90 },
    { id: 't_corn', category: 'veggie_t', name: 'コーン', price: 91 },
    { id: 't_potato', category: 'veggie_t', name: '単品ポテト', price: 91 },
    { id: 't_half_spinach', category: 'veggie_t', name: 'ハーフほうれん草', price: 126 },
    { id: 't_tomato', category: 'veggie_t', name: '完熟カットトマト', price: 116 },
    { id: 't_half_yasai', category: 'veggie_t', name: 'ハーフやさい', price: 136 },
    { id: 't_garlic', category: 'veggie_t', name: '旨辛にんにく', price: 174 },
    { id: 't_spinach', category: 'veggie_t', name: 'ほうれん草', price: 252 },
    { id: 't_yasai', category: 'veggie_t', name: 'やさい', price: 272 },
    // チーズ・たまご
    { id: 't_half_egg', category: 'egg_t', name: 'ハーフスクランブルエッグ', price: 110 },
    { id: 't_yude_egg', category: 'egg_t', name: 'ゆでタマゴ', price: 120 },
    { id: 't_half_cooked_egg', category: 'egg_t', name: '半熟タマゴ', price: 120 },
    { id: 't_half_kinoko', category: 'egg_t', name: 'ハーフきのこ', price: 121 },
    { id: 't_cream_croquette', category: 'egg_t', name: 'クリームコロッケ(カニ入り1個)', price: 121 },
    { id: 't_half_cheese', category: 'egg_t', name: 'ハーフチーズ', price: 132 },
    { id: 't_tartar', category: 'egg_t', name: 'クリーミータルタルソース', price: 74 },
    { id: 't_wasabi_tartar', category: 'egg_t', name: 'わさびタルタル', price: 143, note: '数量限定' },
    { id: 't_egg_tartar', category: 'egg_t', name: '半熟タマゴタルタルソース', price: 194 },
    { id: 't_cheese', category: 'egg_t', name: 'チーズ', price: 264 },
    { id: 't_natto', category: 'egg_t', name: '納豆', price: 167 },
  ],

  // サイドメニュー
  sideCategories: [
    { id: 'salad', label: '🥗 サラダ' },
    { id: 'side_other', label: '🍟 サイド' },
  ],

  sides: [
    // サラダ
    { id: 's_yasai_salad', category: 'salad', name: 'ヤサイサラダ', price: 230 },
    { id: 's_caesar', category: 'salad', name: 'シーザーサラダ', price: 275 },
    { id: 's_egg_salad', category: 'salad', name: 'タマゴサラダ', price: 350 },
    { id: 's_corn_salad', category: 'salad', name: 'コーンサラダ', price: 321 },
    { id: 's_tuna_salad', category: 'salad', name: 'ツナサラダ', price: 368 },
    { id: 's_potato_salad', category: 'salad', name: 'ポテトサラダ', price: 321 },
    { id: 's_ika_salad', category: 'salad', name: 'イカサラダ', price: 362 },
    { id: 's_ebi_salad', category: 'salad', name: 'プチエビフライサラダ', price: 406 },
    { id: 's_fc_salad', category: 'salad', name: 'フライドチキン(3個)サラダ', price: 413 },
    { id: 's_sau_salad', category: 'salad', name: 'ソーセージ(2本)サラダ', price: 404 },
    // サイド
    { id: 's_fries', category: 'side_other', name: 'フライドポテト', price: 172 },
    { id: 's_fries_large', category: 'side_other', name: 'フライドポテト(大盛)', price: 344 },
    { id: 's_cororocke', category: 'side_other', name: 'ここロッケ', price: 158 },
    { id: 's_hurricane', category: 'side_other', name: 'ハリケーンポテト', price: 211 },
    { id: 's_nan', category: 'side_other', name: 'ナン', price: 296 },
    { id: 's_rakkyo', category: 'side_other', name: 'らっきょう', price: 50 },
    { id: 's_chicken', category: 'side_other', name: 'CoCo de チキン', price: 298 },
    { id: 's_curry_pan', category: 'side_other', name: 'ポークカレーパン', price: 320 },
  ],

  TAKEOUT_FEE: 54,  // カレー類テイクアウト追加料金
  TAKEOUT_FEE_SALAD: 21, // サラダ類テイクアウト追加料金
};
