// ============================================================
// CoCo壱番屋 メニューデータ
// 2026年3月版 テイクアウト用メニューブック準拠
// ◎価格はテイクアウト税込価格（テイクアウト料込み）
// ============================================================

const MENU = {

  // ベースカレー（カテゴリ別）
  baseCategories: [
    { id: 'limited', label: '⏰ 期間限定' },
    { id: 'meat',    label: '🥩 肉類' },
    { id: 'seafood', label: '🦐 魚介類' },
    { id: 'veggie',  label: '🥦 野菜類' },
    { id: 'other',   label: '🍳 その他' },
  ],

  baseItems: [
    // 期間/数量限定（2026年3月時点）
    { id: 'the_gyu',           category: 'limited', name: 'THE牛カレー',                        price: 1286, img: 'https://www.ichibanya.co.jp/sys/upload/save/46967261969a8ca6910338_370.png', note: 'なくなり次第終了' },
    { id: 'sasami2',           category: 'limited', name: '手仕込ささみカツ(2本)カレー',         price: 1244, img: 'https://www.ichibanya.co.jp/sys/upload/save/150971871969a8caea949ce_370.png', note: '6月以降なくなり次第終了' },
    { id: 'sakura_ebi',        category: 'limited', name: '桜えびとあさりの春野菜カレー',        price: 1066, img: 'https://www.ichibanya.co.jp/sys/upload/save/41525516669a8cb56decbd_370.png',  note: 'なくなり次第終了' },
    // 肉類
    { id: 'pork',              category: 'meat',    name: 'ポークカレー',                        price: 700,  img: 'https://www.ichibanya.co.jp/sys/upload/save/115193121569980c4156231.png' },
    { id: 'beef',              category: 'meat',    name: 'ビーフカレー',                        price: 848,  img: 'https://www.ichibanya.co.jp/sys/upload/save/28793311366b40ecf261d6.png', note: '甘口不可' },
    { id: 'chicken_stew',      category: 'meat',    name: 'チキンにこみカレー',                  price: 988,  img: 'https://www.ichibanya.co.jp/sys/upload/save/165247091066207a7c57997.png' },
    { id: 'fried_chicken5',    category: 'meat',    name: 'フライドチキン(5個)カレー',           price: 1005, img: null },
    { id: 'hamburg2',          category: 'meat',    name: 'ハンバーグ(2個)カレー',               price: 1030, img: null },
    { id: 'buta_shabu',        category: 'meat',    name: '豚しゃぶカレー',                      price: 1036, img: null },
    { id: 'menchi',            category: 'meat',    name: 'メンチカツカレー',                    price: 1026, img: null },
    { id: 'sausage4',          category: 'meat',    name: 'ソーセージ(4本)カレー',               price: 1048, img: null },
    { id: 'chicken_katsu',     category: 'meat',    name: 'チキンカツカレー',                    price: 1048, img: null },
    { id: 'pari_chicken',      category: 'meat',    name: 'パリパリチキンカレー',                price: 1048, img: null },
    { id: 'rosu_katsu',        category: 'meat',    name: 'ロースカツカレー',                    price: 1052, img: null },
    { id: 'tonkatsu',          category: 'meat',    name: '手仕込とんかつカレー',                price: 1246, img: null, note: '芳醇ソース1つ付' },
    // 魚介
    { id: 'fish_fry2',         category: 'seafood', name: 'フィッシュフライ(2本)カレー',         price: 912,  img: null },
    { id: 'asari',             category: 'seafood', name: 'たっぷりあさりカレー',                price: 912,  img: null },
    { id: 'ebi_asari',         category: 'seafood', name: 'エビあさりカレー',                    price: 938,  img: null },
    { id: 'ika',               category: 'seafood', name: 'イカカレー',                          price: 964,  img: null },
    { id: 'ebi_nikomi',        category: 'seafood', name: 'エビにこみカレー',                    price: 964,  img: null },
    { id: 'seafood_mix',       category: 'seafood', name: '海の幸カレー',                        price: 1070, img: null },
    // 野菜
    { id: 'nasu6',             category: 'veggie',  name: 'なす(6個)カレー',                     price: 880,  img: null },
    { id: 'spinach',           category: 'veggie',  name: 'ほうれん草カレー',                    price: 952,  img: null },
    { id: 'yasai',             category: 'veggie',  name: 'やさいカレー',                        price: 972,  img: null },
    // その他
    { id: 'pork_mild',         category: 'other',   name: 'ポークカレー（甘口）',                price: 700,  img: null, note: '甘口ポークソース' },
    { id: 'veg_curry',         category: 'other',   name: 'ここイチベジカレー',                  price: 737,  img: null, note: '甘口不可' },
    { id: 'low_carb',          category: 'other',   name: '低糖質カレー',                        price: 779,  img: null, note: 'ライスの代わりにカリフラワー使用' },
    { id: 'natto',             category: 'other',   name: '納豆カレー',                          price: 867,  img: null },
    { id: 'toro_tama',         category: 'other',   name: 'とろ～りたまフライカレー',            price: 899,  img: null, note: 'タマゴ加工品使用' },
    { id: 'scramble',          category: 'other',   name: 'スクランブルエッグカレー',            price: 920,  img: null },
    { id: 'cream_croquette2',  category: 'other',   name: 'クリームコロッケ(カニ入り)(2個)カレー', price: 942, img: null },
    { id: 'kinoko',            category: 'other',   name: 'きのこカレー',                        price: 942,  img: null },
    { id: 'cheese',            category: 'other',   name: 'チーズカレー',                        price: 964,  img: null },
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
  ],

  // 辛さ
  spicyLevels: [
    { label: '甘口',    diff: 0 },
    { label: '普通',    diff: 0 },
    { label: '1辛',    diff: 25 },
    { label: '2辛',    diff: 50 },
    { label: '3辛',    diff: 75 },
    { label: '4辛',    diff: 100 },
    { label: '5辛',    diff: 125 },
    { label: '6〜10辛', diff: 150 },
    { label: '15辛',   diff: 175 },
    { label: '20辛',   diff: 200 },
  ],

  // ソースの量
  sauceSizes: [
    { label: '普通（増量なし）', diff: 0 },
    { label: 'ソース増し（お玉約1杯）', diff: 167 },
    { label: 'ソース増し増し（お玉約2杯）', diff: 334 },
  ],

  // トッピングカテゴリ
  toppingCategories: [
    { id: 'meat_t',    label: '🥩 お肉' },
    { id: 'seafood_t', label: '🦐 魚介' },
    { id: 'veggie_t',  label: '🥦 野菜' },
    { id: 'egg_t',     label: '🧀 チーズ・たまご' },
  ],

  toppings: [
    // お肉
    { id: 't_hamburg1',       category: 'meat_t',    name: 'ハンバーグ(1個)',          price: 165 },
    { id: 't_sausage2',       category: 'meat_t',    name: 'ソーセージ(2本)',          price: 174 },
    { id: 't_fc3',            category: 'meat_t',    name: 'フライドチキン(3個)',      price: 183 },
    { id: 't_chicken_nikomi', category: 'meat_t',    name: 'チキンにこみ',            price: 288 },
    { id: 't_fc5',            category: 'meat_t',    name: 'フライドチキン(5個)',      price: 305 },
    { id: 't_menchi',         category: 'meat_t',    name: 'メンチカツ',              price: 326 },
    { id: 't_half_buta',      category: 'meat_t',    name: 'ハーフ豚しゃぶ',          price: 168 },
    { id: 't_buta_shabu',     category: 'meat_t',    name: '豚しゃぶ',                price: 336 },
    { id: 't_chicken_katsu',  category: 'meat_t',    name: 'チキンカツ',              price: 348 },
    { id: 't_pari',           category: 'meat_t',    name: 'パリパリチキン',          price: 348 },
    { id: 't_rosu',           category: 'meat_t',    name: 'ロースカツ',              price: 352 },
    { id: 't_sasami1',        category: 'meat_t',    name: '手仕込ささみカツ(1本)',   price: 272, note: '期間限定' },
    { id: 't_tonkatsu',       category: 'meat_t',    name: '手仕込とんかつ',          price: 546 },
    // 魚介
    { id: 't_fish1',          category: 'seafood_t', name: 'フィッシュフライ(1本)',   price: 106 },
    { id: 't_half_asari',     category: 'seafood_t', name: 'ハーフあさり',            price: 106 },
    { id: 't_half_ika',       category: 'seafood_t', name: 'ハーフイカ',              price: 132 },
    { id: 't_half_ebi',       category: 'seafood_t', name: 'ハーフエビにこみ',        price: 132 },
    { id: 't_tuna',           category: 'seafood_t', name: 'ツナ',                    price: 138 },
    { id: 't_asari',          category: 'seafood_t', name: 'たっぷりあさり',          price: 212 },
    { id: 't_ebi_asari',      category: 'seafood_t', name: 'エビあさり',              price: 238 },
    { id: 't_ebi',            category: 'seafood_t', name: 'エビにこみ',              price: 264 },
    { id: 't_ika',            category: 'seafood_t', name: 'イカ',                    price: 264 },
    { id: 't_petit_ebi',      category: 'seafood_t', name: 'プチエビフライ',          price: 176 },
    { id: 't_sakura_asari',   category: 'seafood_t', name: '桜えびとあさりの春野菜', price: 366, note: '数量限定' },
    { id: 't_seafood',        category: 'seafood_t', name: '海の幸',                  price: 370 },
    // 野菜
    { id: 't_nasu3',          category: 'veggie_t',  name: 'なす(3個)',               price: 90 },
    { id: 't_corn',           category: 'veggie_t',  name: 'コーン',                  price: 91 },
    { id: 't_potato',         category: 'veggie_t',  name: '単品ポテト',              price: 91 },
    { id: 't_half_spinach',   category: 'veggie_t',  name: 'ハーフほうれん草',        price: 126 },
    { id: 't_half_yasai',     category: 'veggie_t',  name: 'ハーフやさい',            price: 136 },
    { id: 't_garlic',         category: 'veggie_t',  name: '旨辛にんにく',            price: 174 },
    { id: 't_spinach',        category: 'veggie_t',  name: 'ほうれん草',              price: 252 },
    { id: 't_yasai',          category: 'veggie_t',  name: 'やさい',                  price: 272 },
    // チーズ・たまご
    { id: 't_half_scramble',  category: 'egg_t',     name: 'ハーフスクランブルエッグ', price: 110 },
    { id: 't_scramble',       category: 'egg_t',     name: 'スクランブルエッグ',      price: 220 },
    { id: 't_half_cooked_egg',category: 'egg_t',     name: '半熟タマゴ',              price: 120 },
    { id: 't_yude_egg',       category: 'egg_t',     name: 'ゆでタマゴ',              price: 120 },
    { id: 't_toro_tama',      category: 'egg_t',     name: 'とろ～りたまフライ',      price: 199 },
    { id: 't_half_kinoko',    category: 'egg_t',     name: 'ハーフきのこ',            price: 121 },
    { id: 't_kinoko',         category: 'egg_t',     name: 'きのこ',                  price: 242 },
    { id: 't_cream_croquette',category: 'egg_t',     name: 'クリームコロッケ(カニ入り)(1個)', price: 121 },
    { id: 't_half_cheese',    category: 'egg_t',     name: 'ハーフチーズ',            price: 132 },
    { id: 't_cheese',         category: 'egg_t',     name: 'チーズ',                  price: 264 },
    { id: 't_natto',          category: 'egg_t',     name: '納豆',                    price: 167 },
    { id: 't_tartar',         category: 'egg_t',     name: 'クリーミータルタルソース', price: 74 },
    { id: 't_wasabi_tartar',  category: 'egg_t',     name: 'わさびタルタル',          price: 143, note: '数量限定' },
    { id: 't_egg_tartar',     category: 'egg_t',     name: '半熟タマゴタルタルソース', price: 194 },
  ],

  // サイドメニュー
  sideCategories: [
    { id: 'salad',      label: '🥗 サラダ' },
    { id: 'side_other', label: '🍟 サイド' },
  ],

  sides: [
    // サラダ（単品価格）
    { id: 's_yasai_salad',  category: 'salad',      name: 'ヤサイサラダ',              price: 251 },
    { id: 's_caesar',       category: 'salad',      name: 'シーザーサラダ',            price: 296 },
    { id: 's_egg_salad',    category: 'salad',      name: 'タマゴサラダ',              price: 371 },
    { id: 's_tuna_salad',   category: 'salad',      name: 'ツナサラダ',                price: 399 },
    { id: 's_corn_salad',   category: 'salad',      name: 'コーンサラダ',              price: 342 },
    { id: 's_potato_salad', category: 'salad',      name: 'ポテトサラダ',              price: 342 },
    { id: 's_ika_salad',    category: 'salad',      name: 'イカサラダ',                price: 389 },
    { id: 's_sau_salad',    category: 'salad',      name: 'ソーセージ(2本)サラダ',     price: 425 },
    { id: 's_fc_salad',     category: 'salad',      name: 'フライドチキン(3個)サラダ', price: 434 },
    { id: 's_ebi_salad',    category: 'salad',      name: 'プチエビフライサラダ',      price: 427 },
    // サイド
    { id: 's_fries',        category: 'side_other', name: 'フライドポテト',            price: 172 },
    { id: 's_fries_large',  category: 'side_other', name: 'フライドポテト(大盛)',      price: 344 },
    { id: 's_cococoroq',    category: 'side_other', name: 'ここロッケ',                price: 158 },
    { id: 's_chicken',      category: 'side_other', name: 'ここデチキン',              price: 298 },
    { id: 's_nan',          category: 'side_other', name: '単品ミニナン',              price: 148 },
    { id: 's_rakkyo',       category: 'side_other', name: 'らっきょう',                price: 50 },
    { id: 's_rice150',      category: 'side_other', name: 'ライス単品(150g)',          price: 161 },
  ],

  TAKEOUT_FEE: 0, // 価格にテイクアウト料込み済み
};
