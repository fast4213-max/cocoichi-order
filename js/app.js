// ============================================================
// CocoOrder - メインアプリロジック
// ============================================================

// ★★★ GASデプロイ後にここにURLを貼り付ける ★★★
const GAS_URL = 'https://script.google.com/macros/s/AKfycbyHVxeID9LarDyQVq7UHwW6-Ht9P_T99MYo-M6Y4oH6OWL3zq5DxfSvdENkdouWkoc/exec';

// アプリの状態
const state = {
  name: '',
  step: 'name',      // name → base → customize → cart → done
  currentOrder: null,
  cart: [],
};

// ============================================================
// 初期化
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  renderStep('name');
});

// ============================================================
// ステップレンダリング
// ============================================================
function renderStep(step) {
  state.step = step;
  updateStepper(step);

  const main = document.getElementById('main');
  main.classList.remove('slide-in');
  void main.offsetWidth; // reflow
  main.classList.add('slide-in');

  switch (step) {
    case 'name':     renderName(); break;
    case 'base':     renderBase(); break;
    case 'customize': renderCustomize(); break;
    case 'cart':     renderCart(); break;
    case 'done':     renderDone(); break;
  }
}

function updateStepper(step) {
  const steps = ['name', 'base', 'customize', 'cart'];
  const labels = ['名前', 'メニュー', 'カスタマイズ', '確認'];
  const stepper = document.getElementById('stepper');
  const idx = steps.indexOf(step);
  if (idx === -1) { stepper.innerHTML = ''; return; }

  stepper.innerHTML = steps.map((s, i) => `
    <div class="step-item ${i < idx ? 'done' : i === idx ? 'active' : ''}">
      <div class="step-circle">${i < idx ? '✓' : i + 1}</div>
      <div class="step-label">${labels[i]}</div>
    </div>
    ${i < steps.length - 1 ? '<div class="step-line ' + (i < idx ? 'done' : '') + '"></div>' : ''}
  `).join('');
}

// ============================================================
// 画面①: 名前入力
// ============================================================
function renderName() {
  document.getElementById('main').innerHTML = `
    <div class="hero-section">
      <div class="logo-area">
        <span class="logo-icon">🍛</span>
        <h1 class="app-title">CoCo壱番屋<br>テイクアウト注文</h1>
        <p class="app-sub">お名前を入力してスタート</p>
      </div>
    </div>
    <div class="card">
      <label class="field-label">お名前</label>
      <input
        type="text"
        id="nameInput"
        class="text-input"
        placeholder="例：田中"
        autocomplete="off"
        maxlength="20"
      />
      <button class="btn-primary" onclick="submitName()" id="nameBtn">
        注文をはじめる →
      </button>
    </div>
  `;
  document.getElementById('nameInput').focus();
  document.getElementById('nameInput').addEventListener('keydown', e => {
    if (e.key === 'Enter') submitName();
  });
}

function submitName() {
  const val = document.getElementById('nameInput').value.trim();
  if (!val) {
    shake(document.getElementById('nameInput'));
    return;
  }
  state.name = val;
  renderStep('base');
}

// ============================================================
// 画面②: ベースカレー選択
// ============================================================
function renderBase() {
  const cats = MENU.baseCategories;
  const items = MENU.baseItems;

  document.getElementById('main').innerHTML = `
    <div class="page-header">
      <h2>${state.name} さんのカレーを選択</h2>
      <p class="page-sub">ベースカレーを1品選んでください</p>
    </div>
    <div class="tab-bar" id="baseTabs">
      ${cats.map((c, i) => `
        <button class="tab-btn ${i === 0 ? 'active' : ''}" onclick="switchBaseTab('${c.id}', this)">
          ${c.label}
        </button>
      `).join('')}
    </div>
    ${cats.map((c, i) => `
      <div class="menu-grid" id="cat-${c.id}" style="${i !== 0 ? 'display:none' : ''}">
        ${items.filter(x => x.category === c.id).map(item => `
          <div class="menu-card" onclick="selectBase(${JSON.stringify(item).replace(/"/g, '&quot;')}, this)">
            <div class="menu-img-wrap">
              ${item.img
                ? `<img src="${item.img}" alt="${item.name}" class="menu-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
                : ''}
              <div class="menu-img-placeholder" style="${item.img ? 'display:none' : 'display:flex'}">🍛</div>
            </div>
            <div class="menu-info">
              <div class="menu-name">${item.name}</div>
              ${item.note ? `<div class="menu-note">※${item.note}</div>` : ''}
              <div class="menu-price">¥${item.price.toLocaleString()}<span class="price-sub">税込・テイクアウト価格</span></div>
            </div>
          </div>
        `).join('')}
      </div>
    `).join('')}
  `;
}

function switchBaseTab(catId, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  MENU.baseCategories.forEach(c => {
    const el = document.getElementById(`cat-${c.id}`);
    if (el) el.style.display = c.id === catId ? '' : 'none';
  });
}

function selectBase(item, el) {
  document.querySelectorAll('.menu-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  state.currentOrder = {
    baseId: item.id,
    baseName: item.name,
    basePrice: item.price,
    riceSize: '300g（基本）',
    riceDiff: 0,
    spicyLevel: '普通',
    spicyDiff: 0,
    sauceType: 'ポークソース（基本）',
    sauceTypeDiff: 0,
    // ソース種別変更時にライス差額を再計算するヘルパー
    recalcRiceDiff() {
      const sizes = this.sauceType === 'ビーフソース'
        ? MENU.riceSizesBeef : MENU.riceSizes;
      const found = sizes.find(r => r.label === this.riceSize);
      this.riceDiff = found ? found.diff : 0;
    },
    sauceSize: '普通（増量なし）',
    sauceDiff: 0,
    toppings: [],
    sides: [],
    get totalPrice() {
      return this.basePrice + this.riceDiff + this.spicyDiff + this.sauceTypeDiff + this.sauceDiff
        + this.toppings.reduce((s, t) => s + t.price, 0)
        + this.sides.reduce((s, t) => s + t.price, 0);
    }
  };
  setTimeout(() => renderStep('customize'), 200);
}

// ============================================================
// 画面③: カスタマイズ
// ============================================================
function renderCustomize() {
  const o = state.currentOrder;

  document.getElementById('main').innerHTML = `
    <div class="page-header">
      <h2>🍛 ${o.baseName}</h2>
      <p class="page-sub">お好みにカスタマイズしてください</p>
    </div>

    <!-- ご飯の量 -->
    <div class="section-card">
      <div class="section-title">🍚 ご飯の量</div>
      <div class="rice-grid">
        ${MENU.riceSizes.map(r => `
          <button
            class="option-btn ${r.label === o.riceSize ? 'active' : ''}"
            onclick="selectRice('${r.label}', this)"
          >
            ${r.label}
            <span class="option-diff">${r.diff === 0 ? '' : r.diff > 0 ? '+¥'+r.diff : '-¥'+Math.abs(r.diff)}</span>
          </button>
        `).join('')}
      </div>
    </div>

    <!-- 辛さ -->
    <div class="section-card">
      <div class="section-title">🌶️ 辛さ</div>
      <div class="spicy-grid">
        ${MENU.spicyLevels.map(s => `
          <button
            class="spicy-btn ${s.label === o.spicyLevel ? 'active' : ''} ${getSpicyClass(s.label)}"
            onclick="selectSpicy('${s.label}', ${s.diff}, this)"
          >
            ${s.label}
            <span class="option-diff">${s.diff > 0 ? '+¥'+s.diff : ''}</span>
          </button>
        `).join('')}
      </div>
    </div>

    <!-- ソースの種類 -->
    <div class="section-card">
      <div class="section-title">🍛 ソースの種類</div>
      <div class="rice-grid">
        ${MENU.sauceTypes.map(t => `
          <button
            class="option-btn ${t.label === o.sauceType ? 'active' : ''}"
            onclick="selectSauceType('${t.label}', ${t.diff}, this)"
          >
            ${t.label}
            <span class="option-diff">${t.diff > 0 ? '+¥'+t.diff : ''}</span>
          </button>
        `).join('')}
      </div>
    </div>

    <!-- ソースの量 -->
    <div class="section-card">
      <div class="section-title">🍲 ソースの量</div>
      <div class="rice-grid">
        ${MENU.sauceSizes.map(s => `
          <button
            class="option-btn ${s.label === o.sauceSize ? 'active' : ''}"
            onclick="selectSauce('${s.label}', ${s.diff}, this)"
          >
            ${s.label}
            <span class="option-diff">${s.diff > 0 ? '+¥'+s.diff : ''}</span>
          </button>
        `).join('')}
      </div>
    </div>

    <!-- トッピング -->
    <div class="section-card">
      <div class="section-title">➕ トッピング <span class="badge-optional">複数選択可</span></div>
      <div class="tab-bar" id="toppingTabs">
        ${MENU.toppingCategories.map((c, i) => `
          <button class="tab-btn ${i === 0 ? 'active' : ''}" onclick="switchToppingTab('${c.id}', this)">
            ${c.label}
          </button>
        `).join('')}
      </div>
      ${MENU.toppingCategories.map((c, i) => `
        <div class="topping-list" id="tcат-${c.id}" style="${i !== 0 ? 'display:none' : ''}">
          ${MENU.toppings.filter(t => t.category === c.id).map(t => `
            <label class="topping-row ${o.toppings.find(x => x.id === t.id) ? 'checked' : ''}">
              <input type="checkbox" class="topping-cb" value="${t.id}"
                ${o.toppings.find(x => x.id === t.id) ? 'checked' : ''}
                onchange="toggleTopping('${t.id}', '${t.name}', ${t.price}, this)"
              />
              <span class="topping-name">${t.name}</span>
              ${t.note ? `<span class="menu-note">※${t.note}</span>` : ''}
              <span class="topping-price">+¥${t.price}</span>
            </label>
          `).join('')}
        </div>
      `).join('')}
    </div>

    <!-- サイドメニュー -->
    <div class="section-card">
      <div class="section-title">🥗 サイドメニュー <span class="badge-optional">複数選択可</span></div>
      <div class="tab-bar" id="sideTabs">
        ${MENU.sideCategories.map((c, i) => `
          <button class="tab-btn ${i === 0 ? 'active' : ''}" onclick="switchSideTab('${c.id}', this)">
            ${c.label}
          </button>
        `).join('')}
      </div>
      ${MENU.sideCategories.map((c, i) => `
        <div class="topping-list" id="scat-${c.id}" style="${i !== 0 ? 'display:none' : ''}">
          ${MENU.sides.filter(s => s.category === c.id).map(s => `
            <label class="topping-row ${o.sides.find(x => x.id === s.id) ? 'checked' : ''}">
              <input type="checkbox" class="side-cb" value="${s.id}"
                ${o.sides.find(x => x.id === s.id) ? 'checked' : ''}
                onchange="toggleSide('${s.id}', '${s.name}', ${s.price}, this)"
              />
              <span class="topping-name">${s.name}</span>
              <span class="topping-price">¥${s.price}</span>
            </label>
          `).join('')}
        </div>
      `).join('')}
    </div>

    <div class="sticky-bottom">
      <div class="total-bar">
        <span>小計</span>
        <span class="total-price" id="customizeTotal">¥${o.totalPrice.toLocaleString()}</span>
      </div>
      <button class="btn-primary" onclick="addToCart()">
        🛒 カートに追加
      </button>
    </div>
    <div class="bottom-spacer"></div>
  `;
}

function getSpicyClass(label) {
  if (label === '甘口') return 'spicy-0';
  if (label === '普通') return 'spicy-1';
  if (label === '1辛' || label === '2辛') return 'spicy-2';
  if (label === '3辛' || label === '4辛') return 'spicy-3';
  if (label === '5辛') return 'spicy-4';
  return 'spicy-5';
}

function selectRice(label, btn) {
  btn.closest('.rice-grid').querySelectorAll('.option-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  state.currentOrder.riceSize = label;
  state.currentOrder.recalcRiceDiff();
  updateCustomizeTotal();
}

function selectSpicy(label, diff, btn) {
  document.querySelectorAll('.spicy-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  state.currentOrder.spicyLevel = label;
  state.currentOrder.spicyDiff = diff;
  updateCustomizeTotal();
}

function selectSauceType(label, diff, btn) {
  btn.parentElement.querySelectorAll('.option-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  state.currentOrder.sauceType = label;
  state.currentOrder.sauceTypeDiff = diff;
  // ソース変更でライス差額も再計算
  state.currentOrder.recalcRiceDiff();
  // ライスボタンの表示も更新
  renderRiceButtons();
  updateCustomizeTotal();
}

function renderRiceButtons() {
  const o = state.currentOrder;
  const sizes = o.sauceType === 'ビーフソース' ? MENU.riceSizesBeef : MENU.riceSizes;
  const grid = document.querySelector('.rice-grid');
  if (!grid) return;
  grid.innerHTML = sizes.map(r => `
    <button
      class="option-btn ${r.label === o.riceSize ? 'active' : ''}"
      onclick="selectRice('${r.label}', this)"
    >
      ${r.label}
      <span class="option-diff">${r.diff === 0 ? '' : r.diff > 0 ? '+¥'+r.diff : '-¥'+Math.abs(r.diff)}</span>
    </button>
  `).join('');
}

function selectSauce(label, diff, btn) {
  document.querySelectorAll('.option-btn').forEach(b => {
    // ご飯ボタンは別グループなのでsauce専用クラスで区別
    if (b.closest('.sauce-grid')) b.classList.remove('active');
  });
  // option-btnはご飯と共用なので親で区別できないため直接querySelectorAll
  btn.parentElement.querySelectorAll('.option-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  state.currentOrder.sauceSize = label;
  state.currentOrder.sauceDiff = diff;
  updateCustomizeTotal();
}

function toggleTopping(id, name, price, cb) {
  const row = cb.closest('.topping-row');
  if (cb.checked) {
    if (!state.currentOrder.toppings.find(t => t.id === id)) {
      state.currentOrder.toppings.push({ id, name, price });
    }
    row.classList.add('checked');
  } else {
    state.currentOrder.toppings = state.currentOrder.toppings.filter(t => t.id !== id);
    row.classList.remove('checked');
  }
  updateCustomizeTotal();
}

function toggleSide(id, name, price, cb) {
  const row = cb.closest('.topping-row');
  if (cb.checked) {
    if (!state.currentOrder.sides.find(s => s.id === id)) {
      state.currentOrder.sides.push({ id, name, price });
    }
    row.classList.add('checked');
  } else {
    state.currentOrder.sides = state.currentOrder.sides.filter(s => s.id !== id);
    row.classList.remove('checked');
  }
  updateCustomizeTotal();
}

function switchToppingTab(catId, btn) {
  document.querySelectorAll('#toppingTabs .tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  MENU.toppingCategories.forEach(c => {
    const el = document.getElementById(`tcат-${c.id}`);
    if (el) el.style.display = c.id === catId ? '' : 'none';
  });
}

function switchSideTab(catId, btn) {
  document.querySelectorAll('#sideTabs .tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  MENU.sideCategories.forEach(c => {
    const el = document.getElementById(`scat-${c.id}`);
    if (el) el.style.display = c.id === catId ? '' : 'none';
  });
}

function updateCustomizeTotal() {
  const el = document.getElementById('customizeTotal');
  if (el) el.textContent = `¥${state.currentOrder.totalPrice.toLocaleString()}`;
}

function addToCart() {
  // スナップショットとしてコピー
  state.cart.push({
    baseId: state.currentOrder.baseId,
    baseName: state.currentOrder.baseName,
    basePrice: state.currentOrder.basePrice,
    riceSize: state.currentOrder.riceSize,
    riceDiff: state.currentOrder.riceDiff,
    spicyLevel: state.currentOrder.spicyLevel,
    spicyDiff: state.currentOrder.spicyDiff,
    sauceType: state.currentOrder.sauceType,
    sauceTypeDiff: state.currentOrder.sauceTypeDiff,
    sauceSize: state.currentOrder.sauceSize,
    sauceDiff: state.currentOrder.sauceDiff,
    toppings: [...state.currentOrder.toppings],
    sides: [...state.currentOrder.sides],
    totalPrice: state.currentOrder.totalPrice,
  });
  renderStep('cart');
}

// ============================================================
// 画面④: カート確認
// ============================================================
function renderCart() {
  const grandTotal = state.cart.reduce((s, o) => s + o.totalPrice, 0);

  document.getElementById('main').innerHTML = `
    <div class="page-header">
      <h2>🛒 注文確認</h2>
      <p class="page-sub">${state.name} さんの注文内容</p>
    </div>

    ${state.cart.map((order, i) => `
      <div class="cart-card">
        <div class="cart-item-header">
          <span class="cart-item-name">🍛 ${order.baseName}</span>
          <button class="btn-remove" onclick="removeCartItem(${i})">✕</button>
        </div>
        <div class="cart-details">
          <div class="cart-detail-row">
            <span>ご飯の量</span><span>${order.riceSize}</span>
          </div>
          <div class="cart-detail-row">
            <span>辛さ</span><span>${order.spicyLevel}</span>
          </div>
          <div class="cart-detail-row">
            <span>ソースの種類</span><span>${order.sauceType}</span>
          </div>
          <div class="cart-detail-row">
            <span>ソースの量</span><span>${order.sauceSize}</span>
          </div>
          ${order.toppings.length > 0 ? `
            <div class="cart-detail-row">
              <span>トッピング</span>
              <span>${order.toppings.map(t => `${t.name} ¥${t.price}`).join('、')}</span>
            </div>
          ` : ''}
          ${order.sides.length > 0 ? `
            <div class="cart-detail-row">
              <span>サイド</span>
              <span>${order.sides.map(s => `${s.name} ¥${s.price}`).join('、')}</span>
            </div>
          ` : ''}
        </div>
        <div class="cart-subtotal">小計: ¥${order.totalPrice.toLocaleString()}</div>
      </div>
    `).join('')}

    <button class="btn-secondary" onclick="renderStep('base')">
      ＋ 別の品を追加する
    </button>

    <div class="grand-total-card">
      <span>合計金額</span>
      <span class="grand-total-price">¥${grandTotal.toLocaleString()}</span>
    </div>

    <button class="btn-primary btn-confirm" onclick="submitOrder()" id="submitBtn">
      ✅ 注文を確定する
    </button>
  `;
}

function removeCartItem(idx) {
  state.cart.splice(idx, 1);
  if (state.cart.length === 0) {
    renderStep('base');
  } else {
    renderCart();
  }
}

// ============================================================
// 注文送信
// ============================================================
async function submitOrder() {
  const btn = document.getElementById('submitBtn');
  btn.disabled = true;
  btn.textContent = '送信中…';

  const payload = {
    name: state.name,
    orders: state.cart,
    grandTotal: state.cart.reduce((s, o) => s + o.totalPrice, 0),
  };

  try {
    if (GAS_URL === 'YOUR_GAS_URL_HERE') {
      // GAS未設定でもデモ動作
      await new Promise(r => setTimeout(r, 800));
    } else {
      await fetch(GAS_URL, {
        method: 'POST',
        mode: 'no-cors', // GASはno-corsが必要
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    }
    renderStep('done');
  } catch (err) {
    btn.disabled = false;
    btn.textContent = '✅ 注文を確定する';
    alert('送信に失敗しました。もう一度お試しください。\n' + err.message);
  }
}

// ============================================================
// 画面⑤: 完了
// ============================================================
function renderDone() {
  const grandTotal = state.cart.reduce((s, o) => s + o.totalPrice, 0);

  document.getElementById('main').innerHTML = `
    <div class="done-screen">
      <div class="done-icon">✅</div>
      <h2 class="done-title">${state.name} さんの注文<br>受け付けました！</h2>
      <div class="done-total">合計 ¥${grandTotal.toLocaleString()}</div>
      <div class="done-items">
        ${state.cart.map(o => `
          <div class="done-item">🍛 ${o.baseName}（${o.spicyLevel}）</div>
        `).join('')}
      </div>
      <p class="done-note">集計担当者に送信されました</p>
      <button class="btn-secondary" onclick="resetApp()">
        別の人の注文へ
      </button>
    </div>
  `;
}

function resetApp() {
  state.name = '';
  state.step = 'name';
  state.currentOrder = null;
  state.cart = [];
  renderStep('name');
}

// ============================================================
// ユーティリティ
// ============================================================
function shake(el) {
  el.classList.add('shake');
  setTimeout(() => el.classList.remove('shake'), 400);
}
