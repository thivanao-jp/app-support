Array.prototype.at || Object.defineProperty(Array.prototype, "at", { configurable: !0, writable: !0, value: function(t) {
  let a = Math.trunc(Number(t) || 0);
  return a < 0 && (a += this.length), this[a];
} });
const At = "ALPINE", Pt = "STANDARD", Tt = {
  " | 妄想スキー場": " | Daydream Ski",
  傾き操作をやめる: "Disable tilt controls",
  傾き操作を使う: "Use tilt controls",
  自由滑走: "Free skiing",
  索道で山頂へ: "Lift to the summit",
  山からの眺め: "Mountain view",
  索道に乗ってもう一度: "Ride the lift and ski again",
  滑走を止める: "Stop skiing",
  滑りはじめる: "Start skiing",
  "軽く傾けてターン、大きく傾けて減速。ジャンプ台の空中でバック転。": "Tilt gently to turn, further to slow down. Backflip in the air after a ramp.",
  "支柱の滑車を越えるたびに揺れます。ドラッグで見回せます。": "Feel each pulley at the towers. Drag to look around.",
  "ドラッグで見回す。山の眺めから、最初のひと滑りへ。": "Drag to look around, then start your first run.",
  ゴンドラ: "Gondola",
  ペアリフト: "Double chair",
  "４人乗り高速リフト": "High-speed quad",
  "支柱ごと4〜8輪": "4–8 wheels per tower",
  輪: " wheels",
  広告のプライバシー設定は現在不要です: "No ad privacy options are currently required",
  設定を開けませんでした: "Could not open settings",
  写真を共有できませんでした: "Could not share the photo",
  "山域の端に到達しました。コースへ復帰して続きを滑れます。": "You reached the edge of this mountain. Return to the course to continue.",
  "ゴールの外側を通り過ぎました。ゴール手前のコースへ戻れます。": "You passed outside the finish area. Return to the course before the finish.",
  "コース外で進みにくくなっています。近くのコースへ復帰できます。": "It looks difficult to keep moving off the course. You can return to the course nearby.",
  "近くのコースへ戻り、ここまでの滑走を続けられます。": "Return to the course nearby and continue this run.",
  "コースへ復帰しました。続きを滑れます": "Back on the course. Continue your run.",
  "{0} — 「滑りはじめる」でスタート": "{0} — Tap “Start skiing” to begin",
  山頂への到着後に滑りはじめられます: "You can start skiing after reaching the summit",
  乗車中もドラッグで景色を見回せます: "Drag to look around while riding",
  "山麓駅へ移動しました。山頂へ出発します": "At the base station. Heading for the summit.",
  "山頂に到着。滑走スタート！": "At the summit. Let's ski!",
  "山頂に到着しました。滑りはじめられます。": "At the summit. You can start skiing.",
  "広告を利用できないか、視聴が完了しませんでした。索道はそのまま進みます": "The ad was unavailable or unfinished. Your lift ride will continue.",
  "先に「傾き操作を使う」を押してください": "First tap “Use tilt controls”",
  "タック固定 ON — ダブルタップでも解除": "Tuck locked — double-tap to unlock",
  タック固定を解除しました: "Tuck unlocked",
  "BGMを再生できませんでした。もう一度お試しください。": "Could not play music. Please try again.",
  "描画が中断されました。再読み込みしてください": "Rendering stopped. Please reload.",
  "コースの通過点を、山頂から順番に置きます。「引き直す」で既存の点を消せます。": "Place course points from the top down. “Redraw course” clears existing points.",
  "山麓駅と山頂駅を順に置きます。2点目で支柱とケーブルを確認します。": "Place the base station and then the summit station. The second point previews the lift.",
  "山頂から順に、2〜30個の通過点を置いてください。": "Place 2–30 points, starting from the top.",
  "通過点は30個までです。ひとつ戻して置き直せます。": "Up to 30 points. Undo a point to place a new one.",
  "通過点 {0}個 ／ この地点の標高 {1}m": "{0} points / Elevation here: {1} m",
  "長さ {0}m ／ 支柱 {1}本。設置できます。": "Length {0} m / {1} towers. Ready to build.",
  "もう一方の駅を置いてください。": "Place the other station.",
  "選択地点 {0}m。矢印で移動、Enterで配置。Shiftで大きく移動。": "Selected elevation: {0} m. Arrows to move, Enter to place. Shift for larger steps.",
  新しいスキー場ができました: "Your new ski resort is ready",
  "この端末にスキー場を保存しました。": "Saved this resort on this device.",
  "保存できませんでした。{0}": "Could not save. {0}",
  "保存されたスキー場はまだありません。": "No saved resort yet.",
  "保存した配置を開きました。「このスキー場で遊ぶ」で反映します。": "Saved layout loaded. Tap “Play this resort” to apply it.",
  "保存データを読み込めません。最初の配置に戻せます。": "Could not load the saved data. You can restore the default layout.",
  "最初の配置に戻しました。保存データは上書きしていません。": "Default layout restored. Saved data is unchanged.",
  分: "m ",
  "秒・滑走 ": "s · Distance ",
  "木に衝突！ ごろごろ…": "Hit a tree! Rolling…",
  "設備に衝突！": "Hit an obstacle!",
  "バランスを崩しました！": "Lost your balance!",
  "着地失敗！": "Hard landing!",
  "バック転、着地成功！": "Backflip landed!",
  "立ち上がりました。滑走を再開できます。": "Back on your feet. Ready to ski.",
  "障害物の手前で停止しました。": "Stopped before an obstacle.",
  "広告を準備中…": "Preparing ad…",
  山頂へスキップ: "Skip to the summit",
  広告を見て山頂へ: "Watch an ad to skip the lift",
  "山頂まで {0} m": "Summit: {0} m",
  "今日の滑走 {0} m": "Distance skied: {0} m",
  "タック固定中 · 解除": "Tuck locked · Unlock",
  タック固定: "Lock tuck",
  エッジで停止中: "Edge braking",
  ロッジへ滑走中: "Skiing to the lodge",
  おつかれさまでした: "A great run",
  "ごろごろ…": "Rolling…",
  "ジャンプ {0}m": "Jump {0} m",
  踏み切り準備: "Preparing to jump",
  ハの字で減速: "Snowplow braking",
  エッジで減速: "Edge braking",
  バランス注意: "Watch your balance",
  タック固定中: "Tuck locked",
  直滑降姿勢: "Tucked position",
  滑走中: "Skiing",
  "滑車 {0} / {1}": "Pulley {0} / {1}",
  こぶ斜面: "Mogul slope",
  圧雪斜面: "Groomed slope",
  "コースへ戻る ／ ": "Back to course / ",
  "ゴールまで ": "Finish: ",
  "{0}。再読み込みをお試しください。": "{0}. Please try reloading.",
  標高データが不正です: "Invalid elevation data",
  駅は地図の内側に設置してください: "Place stations inside the map",
  設備の種類が不正です: "Invalid lift type",
  "駅の間隔は150〜3,500mにしてください": "Keep stations 150–3,500 m apart",
  高低差が20m以上になる場所を選んでください: "Choose points with at least 20 m of elevation difference",
  "支柱が高くなりすぎます。駅の位置を変えてください": "The towers would be too tall. Move the stations.",
  保存データの形式を確認してください: "Check the saved data format",
  コースが山域の範囲外です: "The course is outside this mountain",
  隣り合う通過点は1m以上離してください: "Keep adjacent course points at least 1 m apart",
  "コース・滑車の設定が不正です": "Invalid course or pulley settings",
  "傾き操作 ON": "Tilt controls ON",
  "タッチ・キー操作": "Touch / keyboard controls",
  今の持ち方で水平を合わせます: "Hold still to set your neutral position",
  "傾きを取得できません。画面で操作できます": "Tilt is unavailable. You can use touch controls.",
  傾き操作にはHTTPS接続が必要です: "Tilt controls require HTTPS",
  この端末では傾きを取得できません: "Tilt is not available on this device",
  "傾きの許可がありません。タッチで操作できます": "Tilt permission was not granted. You can use touch controls.",
  "傾きを取得できません。タッチで操作できます": "Tilt is unavailable. You can use touch controls.",
  "傾き操作を開始できません。タッチで操作できます": "Could not enable tilt. You can use touch controls.",
  山の情報を読み込めません: "Could not load the mountain",
  標高データを読み込めません: "Could not load elevation data",
  白馬: "Hakuba",
  長野: "Nagano",
  アルプスの長い斜面: "Long Alpine slopes",
  "稜線を眺めながら、ロッジを目指す。": "Follow the ridgeline views down to the lodge.",
  富良野: "Furano",
  北海道: "Hokkaido",
  北の山並み: "Northern peaks",
  "北海道の山肌に引いた、長い一本。": "A long run across the mountains of Hokkaido.",
  蔵王: "Zao",
  "山形・宮城": "Yamagata / Miyagi",
  山から谷へ: "From peak to valley",
  "起伏を読みながら滑る、東北の山。": "Read the terrain on a mountain in northern Japan.",
  富士山: "Mount Fuji",
  "山梨・静岡": "Yamanashi / Shizuoka",
  "妄想・火山ダウンヒル": "Imaginary volcano downhill",
  "大きな標高差を一気に。雪の富士山を遊び場に。": "A big descent on an imaginary snowy Mount Fuji.",
  阿蘇: "Aso",
  熊本: "Kumamoto",
  "妄想・カルデラの雪山": "An imaginary snowy caldera",
  "九州の火山を雪景色に変えて滑る。": "Turn a Kyushu volcano into a snowy playground.",
  クルージング: "Cruising",
  滑らかな斜面で景色とターンを楽しむ: "Enjoy the views and turns on a smooth slope",
  ダウンヒル: "Downhill",
  "こぶなし・旗門つき。直滑降姿勢で加速": "Gates and smooth snow. Tuck to pick up speed.",
  ジャンプツアー: "Jump tour",
  "２つのジャンプ台をつなぎ、空中でバック転": "Two ramps to link, with backflips in the air",
  こぶチャレンジ: "Mogul challenge",
  凹凸と細かな切り返しを楽しむ: "Enjoy bumps and quick turns",
  "こぶ＋ジャンプ": "Moguls + jumps",
  "凹凸のリズムから、大きなジャンプへ": "Follow the rhythm of the bumps into big jumps",
  コースの選択を確認してください: "Check your course selection",
  "{0} ／ {1} — 約{2}km・標高差{3}m": "{0} / {1} — About {2} km · {3} m vertical drop",
  ターン練習: "Turn practice",
  "圧雪斜面と赤・青の旗門。軽く傾けて曲がり、大きく傾けて減速。": "Groomed snow and red-blue gates. Tilt gently to turn, further to slow.",
  こぶ: "Moguls",
  "出発してすぐにこぶ斜面。小さな左右の切り返しを試せます。": "Moguls near the start. Try quick left-right turns.",
  ジャンプ台: "Kicker",
  "最初の黄色い旗まで約110m。台を抜けると離陸し、空中でバック転。": "About 110 m to the first yellow flags. Launch off the ramp and backflip.",
  "こぶ斜面に２つのジャンプ台。台の前後は滑らかな雪面です。": "Two ramps on a mogul course, with smooth approaches and landings.",
  サンセット: "Sunset",
  ブルーバード: "Bluebird",
  フォレスト: "Forest",
  "アルパイン・レッド": "Alpine Red",
  ミッドナイト: "Midnight",
  アイスブルー: "Ice Blue",
  購入済み: "Purchased",
  "購入する · {0}": "Buy · {0}",
  販売準備中: "Coming soon",
  "快適パック 有効": "Comfort Pack active",
  無料版: "Free edition",
  " · 着せ替えパック": " · Outfit pack",
  アルパイン着せ替えパックで使えます: "Available in the Alpine Outfit Pack",
  購入が完了しました: "Purchase complete",
  購入の承認待ちです: "Awaiting purchase approval",
  購入をキャンセルしました: "Purchase cancelled",
  "購入できませんでした。時間をおいてお試しください": "Purchase unavailable. Please try again later.",
  購入情報を復元しました: "Purchases restored",
  購入情報を復元できませんでした: "Could not restore purchases",
  "公開後にApp Storeでレビューできます": "You can review the app on the App Store after release",
  妄想スキー場: "Daydream Ski",
  雪山とスキー場: "Snowy mountain and ski resort",
  常時表示ミニマップ: "Always-visible mini-map",
  メニューを開く: "Open menu",
  メニュー: "Menu",
  バランスの不安定さ: "Loss of balance",
  "メニューからサンプルや傾き操作を選べます。": "Choose samples and tilt controls from the menu.",
  "↑ ジャンプ · ダブルタップでタック固定": "↑ Jump · Double-tap to lock tuck",
  バック転: "Backflip",
  左へ: "Left",
  ハの字: "Snowplow",
  右へ: "Right",
  メニューを閉じる: "Close menu",
  "山・コースを選ぶ": "Choose mountain / course",
  サンプル: "Samples",
  景色を見る: "Enjoy the view",
  索道で登る: "Ride the lift",
  コースの出発点へ戻る: "Return to the course start",
  出発点へ: "Back to start",
  "コース・索道をつくる": "Build course / lift",
  操作設定: "Controls",
  "快適パック・着せ替え": "Comfort Pack & outfits",
  写真モード: "Photo mode",
  スキー場BGM: "Resort music",
  BGM音量: "Music volume",
  "傾き操作OFF：画面の左半分・右半分を長押ししてターン。両側を同時に押すとハの字のブレーキ。指を離すと解除します。": "Tilt OFF: hold the left or right half of the screen to turn. Hold both sides to snowplow. Release to stop braking.",
  "傾き操作ON：端末を左右に傾けてターン・減速。": "Tilt ON: tilt your device left or right to turn and slow down.",
  "共通：ダブルタップでタック固定・解除。上スワイプでジャンプ。下スワイプして押し続けるとタック。": "Both modes: double-tap to lock or unlock tuck. Swipe up to jump. Swipe down and hold to tuck.",
  現在の状態: "Current status",
  "今日の滑走 0 m": "Distance skied: 0 m",
  ゲレンデマップ: "Resort map",
  "北 ↑": "N ↑",
  コースと現在地: "Course and current position",
  コース: "Course",
  索道: "Lift",
  作者の他のアプリ: "More apps by this developer",
  レビューを書く: "Write a review",
  プライバシーと出典: "Privacy & credits",
  広告のプライバシー設定: "Ad privacy settings",
  国土地理院の標高タイルを加工して作成: "Created using elevation tiles from GSI Japan",
  "雪・コース・設備は仮想です": "Snow, courses and facilities are fictional",
  山をひらいています: "Opening the mountain",
  "斜面と、遠くの稜線を読み込み中": "Loading slopes and distant ridgelines",
  再読み込み: "Reload",
  自分だけのスキー場: "Your own ski resort",
  地図をタップして配置します: "Tap the map to place points",
  閉じる: "Close",
  コースと索道を配置する地図: "Map for placing courses and lifts",
  "コースの通過点を、山頂から順番に置きます。": "Place course points from the top down.",
  つくるもの: "Build",
  滑走コース: "Ski course",
  "リフト・ゴンドラ": "Chairlift / gondola",
  雪面: "Snow surface",
  ジャンプ台を２か所に設置: "Add two jump ramps",
  ターンの旗門を設置: "Add turning gates",
  索道の種類: "Lift type",
  支柱あたりの滑車: "Wheels per tower",
  "支柱に合わせる（4・6・8輪）": "Match each tower (4 / 6 / 8)",
  "4輪": "4 wheels",
  "6輪": "6 wheels",
  "8輪": "8 wheels",
  "コース線は実標高を10mごとに確認し、登り・交差・逆戻りを防ぎます。近くの下り地点へ補正できなければ配置できません。黄色い旗はジャンプ台。160m超のコースに２か所を自動配置します。地図の上が北。白く明るい場所ほど標高が高く、等高線が密な場所ほど急斜面です。": "The course checks real elevation every 10 m and prevents climbs, crossings, and doubling back. If no nearby downhill correction works, the point cannot be placed. Yellow flags mark jump ramps. Courses longer than 160 m get two ramps. North is up. Brighter snow is higher; closer contour lines mean steeper slopes.",
  コースを引き直す: "Redraw course",
  ひとつ戻す: "Undo point",
  このスキー場で遊ぶ: "Play this resort",
  保存スロット: "Save slot",
  端末に保存: "Save on device",
  保存したスキー場を開く: "Open saved resort",
  最初の配置に戻す: "Restore default layout",
  "索道は2つの駅を置くと自動で架かります。高い側が山頂駅になります。": "Place two stations to create a lift. The higher station becomes the summit station.",
  "タック固定・解除": "Lock / unlock tuck",
  小ジャンプ: "Small jump",
  "Language / 言語": "Language",
  "端末の設定 / System": "System",
  日本語: "日本語",
  傾きの感度: "Tilt sensitivity",
  今の持ち方を水平にする: "Set this position as neutral",
  視点: "Camera",
  追いかける視点: "Chase camera",
  自分の目線: "First person",
  索道の早送り: "Lift fast-forward",
  通常: "Normal",
  "10倍": "10×",
  "30倍": "30×",
  索道の見回し方向を逆にする: "Reverse lift look controls",
  滑走以外でもミニマップを表示: "Show minimap outside skiing too",
  転倒あり: "Allow falls",
  他のスキーヤー: "Other skiers",
  索道の揺れ: "Lift vibration effects",
  振動: "Haptics",
  衝撃音: "Impact sounds",
  "画面のダブルタップか「タック固定」で固定・解除できます。固定中もターン・ハの字で減速でき、メニューや中断時は固定を解除します。画面を下へスワイプし、指を置いたままでタック（クローチング姿勢）。離すと解除。上へスワイプで小ジャンプ。スワイプした指は姿勢操作に専念し、もう片方の指の左右長押し・端末の傾きでターンできます。キーボードは↑長押しでタック。ターンもできます。Jで小さくジャンプ。ジャンプ台を滑り抜けると大きく跳び、空中のXでバック転。転倒をOFFにすると、木の手前で停止します。": "Double-tap or use “Lock tuck” to lock or unlock. You can still turn and snowplow; opening a menu or interrupting play unlocks tuck. Swipe down and hold to tuck temporarily, or swipe up for a small jump. Steer with another finger or device tilt. Keyboard: hold ↑ to tuck, J to hop, X to backflip after a ramp. With falls disabled, you stop before trees.",
  "振動は対応端末・iOSアプリで利用できます。早送り中は振動と衝撃音を省略します。": "Haptics require a supported device and the iOS app. Fast-forwarding disables lift haptics and impact sounds.",
  "左右に軽く傾けるとターン、大きく傾けるとエッジと横滑りで減速。傾きを戻すと再び滑ります。傾き操作OFFでは画面の左右を同時に押すとハの字で減速できます。パソコンは ← → で同じ操作、↓／スペースでハの字。": "Tilt gently to turn, further to slow with edges and skidding. Return to neutral to glide again. With tilt OFF, hold both sides to snowplow. Keyboard: ← → to steer, ↓ or Space to snowplow.",
  "縦持ち・横持ちに対応。持ち替え時は一度静止して、その姿勢を中立にします。ブラウザの傾き操作にはHTTPS接続が必要です。センサーがなくても画面の左右を長押しして遊べます。": "Portrait and landscape supported. Hold still after rotating to set neutral. Browser tilt requires HTTPS. Touch controls work without motion sensors.",
  サンプルで遊ぶ: "Try a sample",
  "今いる山で、滑り方を試せます": "Try different styles on this mountain",
  サンプルを閉じる: "Close samples",
  "圧雪斜面・赤青の旗門。傾けてターンと減速。": "Groomed snow and red-blue gates. Tilt to turn and slow.",
  "出発してすぐにこぶ斜面。切り返しを練習。": "Moguls near the start. Practice quick turns.",
  "最初の台まで約110m。黄色い旗を目指してバック転。": "About 110 m to the first ramp. Head for yellow flags and try a backflip.",
  "こぶと２つのジャンプ台をまとめて体験。": "Try moguls and two jump ramps together.",
  転倒なしで練習する: "Practice without falls",
  "選んだコースの出発点に移動します。端末に保存したスキー場は上書きしません。": "Move to the start of the selected course. Saved resorts are unchanged.",
  "今日は、どの山へ？": "Which mountain today?",
  コース選択を閉じる: "Close course selection",
  "北の山並みから、雪に包まれた火山まで。": "From northern peaks to snow-covered volcanoes.",
  "山と滑り方を選んで、麓のロッジを目指そう。": "Choose a mountain and style, then head for the lodge.",
  山を選ぶ: "Choose a mountain",
  滑り方を選ぶ: "Choose a style",
  このコースを滑る: "Ski this course",
  "実地形を使った架空のコースです。現地の滑走ルートではありません。": "Fictional courses on real terrain. Not routes for skiing in the real world.",
  "ロッジに到着！": "At the lodge!",
  ホームでコースを選ぶ: "Home / choose a course",
  ゴールの景色を見る: "Enjoy the finish view",
  次の滑りを選ぶ: "Choose your next run",
  "コースへ戻りますか？": "Return to the course?",
  近くのコースへ復帰: "Return to nearby course",
  索道に乗ってやり直す: "Ride the lift and restart",
  この場所で続ける: "Continue here",
  コースへ復帰: "Return to course",
  ゴールへ: "To the finish",
  下り方向: "Downhill",
  "広告なし、索道の即時スキップと高速移動、保存枠5つ、写真モード、録画。買い切りでずっと使えます。": "No ads, instant lift skip and fast travel, five save slots, photo mode, and recording. A one-time purchase.",
  アルパイン着せ替えパック: "Alpine Outfit Pack",
  "3コーデの色を部位ごとに組み合わせられます。快適パックとは別売りです。滑走性能は変わりません。": "Mix colors from three Alpine outfits for each item. Sold separately from the Comfort Pack. Ski performance stays the same.",
  コーデを選ぶ: "Choose a preset",
  部位ごとにカスタマイズ: "Customize each item",
  ジャケット: "Jacket",
  パンツ: "Pants",
  ヘルメット: "Helmet",
  ゴーグル: "Goggles",
  スキー板: "Skis",
  ポール: "Poles",
  着せ替えパック: "Outfit Pack",
  "デバッグプレビュー：有料色を試着できます。購入権利は付与されません。": "Debug preview: try paid colors without granting a purchase entitlement.",
  デバッグ中は購入できません: "Purchases disabled in debug preview",
  "レッド・ミッドナイト・アイスブルーの3コーデ。快適パックとは別売りです。滑走性能は変わりません。": "Three outfits: Red, Midnight and Ice Blue. Sold separately from the Comfort Pack. Ski performance stays the same.",
  ウェアを選ぶ: "Choose your outfit",
  購入を復元: "Restore purchases",
  "快適パックは広告なし・便利機能と保存枠、アルパインパックは遊具・天気・スノーモービルなどの体験と衣装を広げます。どちらも買い切りで、片方の購入にもう片方は含まれません。価格はApp Storeから取得します。購入はAppleの確認画面で確定します。": "The Comfort Pack removes ads and adds convenience features and save slots. The Alpine pack adds experiences such as giant features, weather and the snowmobile, plus outfits. Both are separate one-time purchases. Prices come from the App Store; confirm purchases in Apple's purchase sheet.",
  "羽田空港へのアプローチを楽しむフライトシミュレーター。": "A flight simulator for approaches to Haneda Airport.",
  "Daydream Rail 3D / 妄想鉄道 3D": "Daydream Rail 3D",
  "実在の街に、自分だけの鉄道をつくる。": "Build your own railway through real cities.",
  "コース・設定・ウェアの選択は端末内に保存します。位置情報の取得、アカウント登録、独自のアクセス解析はありません。": "Courses, settings and outfit choices are stored on your device. No location access, account signup or developer-operated analytics.",
  "写真は共有操作を行った場合だけ、選択した共有先へ送られます。": "Photos are sent only to the destination you choose when sharing.",
  "国土地理院の標高タイルを加工しています。雪・樹木・施設・コースは仮想です。現地の安全な滑走ルートを示すものではありません。": "Uses modified elevation tiles from GSI Japan. Snow, trees, facilities and courses are fictional. They do not indicate safe real-world ski routes.",
  写真を共有: "Share photo",
  写真モードを終了: "Exit photo mode",
  "滑走おつかれさまでした！": "Great run!",
  無料で山頂へスキップ: "Skip to the summit for free",
  このまま乗って景色も楽しめます: "Or stay on the lift and enjoy the view",
  "支柱あと{0}本で無料スキップ": "Towers until free skip: {0}",
  下りながら停止位置へ: "Gliding downhill to a stop",
  起動後の最初のプレイはすぐにスキップできます: "Your first run after launch can skip immediately",
  "購入と復元はAppleのStoreKitを利用します。索道乗車中のバナー広告と、任意視聴の広告（山頂へのスキップ・アルパインのおためし）にGoogle AdMobを利用し、同意状態を確認してから読み込みます。快適パックでは両方の広告を表示しません。広告SDKは広告配信・不正対策などのために端末情報や利用情報を処理する場合があります。": "Purchases and restores use Apple StoreKit. Lift rides show banner ads, and optional rewarded ads offer immediate skips and Alpine trials. Google AdMob loads after checking consent. The Comfort Pack removes both ad formats. The ad SDK may process device and usage information for ad delivery and fraud prevention.",
  "ゴール！": "Finished!",
  "2倍速で移動": "Ride at 2× speed",
  "2倍速中 · 通常へ": "2× speed · Back to normal",
  "2倍": "2×",
  トラッキングの許可設定: "Tracking permission settings",
  "パーソナライズ広告は、iOSのトラッキング許可と必要な地域別同意に応じて利用します。トラッキングを許可しない場合は非パーソナライズ広告をリクエストします。同意状況によって広告が表示されないこともあります。許可の有無でアプリの機能や視聴完了時の報酬は変わりません。選択は「トラッキングの許可設定」と「広告のプライバシー設定」から見直せます。": "Personalized ads depend on iOS tracking permission and any required regional consent. Without tracking permission, the app requests non-personalized ads. Ads may be unavailable depending on consent. Your choice does not change app features or rewards for completed views. Review your choices under Tracking permission settings and Ad privacy settings.",
  "山域の端に到達しました。下りのコース地点へ復帰できます。": "You reached the edge of this mountain. Return to a lower point on the course.",
  "ゴールの外側を通り過ぎました。下りのコース地点へ戻れます。": "You passed the finish area. Return to a lower point on the course.",
  "コース外で進みにくくなっています。現在地より低いコース地点へ復帰できます。": "It is difficult to keep moving off course. You can return to a lower point on the course.",
  "現在地より低いコース地点へ戻り、滑走を続けられます。": "Return to a lower point on the course and keep skiing.",
  "現在地より低く、続けて滑れるコース地点がありません。索道で登り直すか、この場所で続けてください。": "There is no lower course point you can continue skiing from. Ride the lift or continue here.",
  スキーギアを仕立てる: "Build your ski kit",
  スタイルを選ぶ: "Choose a style",
  ギアを組み合わせる: "Mix your gear",
  カスタム: "Custom",
  ALPINE: At,
  STANDARD: Pt,
  "🔒 ALPINE": "🔒 ALPINE",
  "🔒 パック": "🔒 Pack",
  選択中の衣装を着たスキーヤーの回転プレビュー: "Rotating preview of the skier in the selected outfit",
  選択中のギアの色: "Colors for selected gear",
  "妄想ビッグエアやハーフパイプ・かき氷の山などの大型遊具、スノーモービルでの自由走行と救助、吹雪・ナイター・朝焼け、パウダー雪面と雪煙、衣装と装備の追加色。一部は無料でも毎日おためしできます。快適パックとは別売りです。": "Big air, the half-pipe, the shaved-ice mountain and other giant features, free roaming and rescues by snowmobile, blizzard, night and dawn skies, powder snow with spray, and extra clothing and gear colors. Some can be tried for free every day. Sold separately from the Comfort Pack.",
  下りの復帰地点なし: "No lower course point",
  胸のロゴ: "Chest emblem",
  ウェアのロゴ: "Jacket emblem",
  山のエンブレム: "Summit",
  "{0} の実標高地図": "Real elevation map: {0}",
  "山域を選んで、実際の標高地図にコースと索道を配置します": "Choose a mountain and draw your course and lift on its real elevation map.",
  編集する山域: "Mountain to edit",
  "白馬・富良野・蔵王は雪山の定番。富士山・阿蘇は実地形を雪山に見立てた架空の舞台です。山域ごとに保存できます。": "Hakuba, Furano and Zao are classic ski regions. Fuji and Aso are imagined snow worlds on real terrain. Save layouts separately for each mountain.",
  "各地の雪山と、実地形を雪景色に見立てた架空の舞台から選べます。コースと索道は実際のスキー場の再現ではありません。保存枠は全山域共通で、無料版は1枠、快適パックは5枠です。": "Choose from ski mountains and imagined snow worlds on real terrain. Courses and lifts do not reproduce real resorts. Save slots are shared across all mountains: one for free players, five with the Comfort Pack.",
  ニセコ: "Niseko",
  アンヌプリの雪山: "Annupuri slopes",
  "ニセコアンヌプリの地形で、自分のラインを描く。": "Draw your own line on Niseko Annupuri terrain.",
  野沢温泉: "Nozawa Onsen",
  毛無山の長い斜面: "Long Kenashi slopes",
  "山頂から麓へ、起伏をつないで滑る。": "Follow the terrain from summit to base.",
  妙高: "Myoko",
  新潟: "Niigata",
  火山の大きな斜面: "Broad volcanic slopes",
  "妙高山の地形を、自分だけのコースへ。": "Shape a personal course on Mt. Myoko.",
  安比高原: "Appi Kogen",
  岩手: "Iwate",
  北東北の広い斜面: "Wide northern slopes",
  "前森山の地形を見ながら滑り下りる。": "Ski the slopes of Maemori terrain.",
  雪山の定番: "Ski country",
  もし雪山なら: "What if it snowed?",
  レーシングライン: "Racing stripes",
  ネコのエンブレム: "Cat emblem",
  ロゴなし: "No emblem",
  "索道の左右を反転（右ドラッグで左を見る）": "Invert lift look horizontally (drag right to look left)",
  "索道の上下を反転（下ドラッグで上を見る）": "Invert lift look vertically (drag down to look up)",
  滑走コースとミニマップ: "Ski course and minimap",
  "◉ 追跡視点": "◉ Chase view",
  "◎ 目線視点": "◎ First-person view",
  目線視点に切り替え: "Switch to first-person view",
  追跡視点に切り替え: "Switch to chase view",
  コース名: "Course name",
  マイコース: "My course",
  "山域の内側に通過点を置いてください。": "Place the waypoint inside the mountain area.",
  "この先は登り坂か長い平坦区間です。下り方向の地点を選んでください。": "The route climbs or stays flat too long here. Choose a downhill point.",
  "下りになる位置へ約{0}m補正しました。通過点 {1}個 ／ 標高 {2}m": "Moved about {0} m to a downhill line. {1} waypoints / {2} m elevation",
  "通過点 {0}個 ／ 標高 {1}m ／ 累計の下り {2}m": "{0} waypoints / {1} m elevation / {2} m net descent",
  "通過点 {0} 付近に登り坂か長い平坦区間があります。下りになる位置へ動かしてください。": "There is a climb or long flat near waypoint {0}. Move it to a downhill line.",
  "スタートからゴールまで標高差10m以上の下りにしてください。": "Make the route descend at least 10 m from start to finish.",
  "高地 {0}m": "High {0} m",
  "低地 {0}m": "Low {0} m",
  "線が交差・逆戻りします。別の下り方向を選んでください。": "The line crosses or doubles back. Choose another downhill direction.",
  "通過点 {0} 付近でコースが交差・接近しています。": "The course crosses or overlaps near waypoint {0}.",
  "通過点 {0} 付近でコースが逆戻りしています。": "The course doubles back near waypoint {0}.",
  "{0} {1}コース": "{0} Course {1}",
  山: "Mountain",
  "{0} ／ {1} — 保存枠 {2}": "{0} / {1} — Save slot {2}",
  この自作コースを滑る: "Ski this custom course",
  "保存枠 {0}": "Save slot {0}",
  "通過点 {0}個": "{0} waypoints",
  この保存枠には快適パックが必要です: "This save slot requires the Comfort Pack",
  保存したコースが見つかりません: "Saved course not found",
  保存したコースを読み込めません: "Could not load the saved course",
  パウダー雪面はアルパインパックの特典です: "Powder snow is an Alpine pack feature",
  パウダー雪面はアルパインパックで利用できます: "Powder snow requires the Alpine pack",
  アルパインパックがないため圧雪で滑走します: "Skiing on groomed snow because the Alpine pack is unavailable",
  パウダー雪面: "Powder snow",
  "パウダー · Alpine": "Powder · Alpine",
  保存した自分のスキー場: "My saved ski areas",
  "まだ保存したコースはありません。EDITでコースを作って保存できます。": "No saved course yet. Create and save one in Edit.",
  保存した自作コース: "Saved custom courses",
  標高の色分け: "Elevation colors",
  快適パックとアルパインパックの違い: "Comfort Pack and Alpine pack benefits",
  アルパインパック: "Alpine pack",
  "快適パック：広告なし・索道スキップと高速移動・コース保存5枠・写真モード・録画。": "Comfort Pack: no ads, lift skip and fast travel, five course saves, photo mode, and recording.",
  "アルパインパック：大型ジャンプ台と遊具・スノーモービル・救助の演出・天気・パウダー雪面・衣装の追加色。一部は毎日おためしできます。": "Alpine pack: giant jumps and features, the snowmobile, rescue scenes, weather, powder snow, and extra outfit colors. Some can be tried every day.",
  "それぞれ別売りの買い切りです。": "Each is a separate one-time purchase.",
  パウダーラン: "Powder Run",
  "Alpine · エッジで舞う深雪の演出": "Alpine · deep snow that billows under your edges",
  "以前のコースは修正が必要です。{0}": "This older course needs changes: {0}",
  保存したコースを修正してください: "Please revise the saved course",
  "保存枠は全山域共通で、無料版は1枠、快適パックは5枠です。": "Save slots are shared across all mountains: one for free players, five with the Comfort Pack.",
  "▲ 現在地　G ゴール": "▲ You　G Goal",
  "▲ 現在地": "▲ You",
  "G ゴール": "G Goal",
  "{0} · {1} / {2}": "{0} · {1} / {2}",
  "{0} · 空き": "{0} · Empty",
  "保存枠を上書きしますか？": "Overwrite this save slot?",
  "保存枠 {0} の「{1} / {2}」を「{3} / {4}」に上書きします。": "Overwrite slot {0} ({1} / {2}) with {3} / {4}?",
  キャンセル: "Cancel",
  上書きして保存: "Overwrite and save",
  "保存枠 {0} に「{1}」を保存しました。": "Slot {0}: saved {1}.",
  以前の山域別保存を開く: "Open an older mountain save",
  "この枠は {0} のコースです。山を選び直してください。": "This slot belongs to {0}. Select that mountain first.",
  以前の保存データを読み込めません: "Could not load the older save",
  "写真モード · Pro": "Photo Mode · Comfort Pack",
  写真モードは快適パックの特典です: "Photo Mode is a Comfort Pack feature",
  確認用プレビュー: "Debug preview",
  快適パックの購入情報が見つかりませんでした: "No Comfort Pack purchase was found to restore",
  "写真モードを開く（快適パック）": "Open Photo Mode (Comfort Pack)",
  "📷 撮影": "📷 Photo",
  ドラッグで人物の周りを回す: "Drag to orbit around the skier",
  自撮りに切替: "Switch to selfie",
  通常撮影に戻す: "Switch to standard photo",
  "● 撮影": "● Shutter",
  滑走再開: "Resume skiing",
  撮り直す: "Retake",
  "写真を保存・共有": "Save or share photo",
  撮影したスキー場の写真: "Photo taken at the ski resort",
  写真を撮影できませんでした: "Could not take the photo",
  "旗門を通過できませんでした +{0}秒": "Missed a gate +{0}s",
  "（旗門 {0}/{1}・ペナルティ +{2}秒）": " (gates {0}/{1}, penalty +{2}s)",
  このコースの初記録: "First time on this course",
  "自己ベスト更新！ 前回 {0}": "New personal best! Previous {0}",
  "自己ベスト {0}": "Personal best {0}",
  "タイム {0}": "Time {0}",
  "・滑走 {0} m": " · Distance {0} m",
  " · 旗門 {0}/{1}": " · Gates {0}/{1}",
  "コース脇の柵（ネット）": "Safety nets along the piste",
  前転: "Front flip",
  "バック転×{0}": "Back flip ×{0}",
  "前転×{0}": "Front flip ×{0}",
  "{0}、着地成功！": "{0} — landed!",
  ジャンプ: "Jump",
  ビッグキッカー: "Big kicker",
  妄想メガジャンプ: "Daydream mega jump",
  スタート直後とゴール手前には置けません: "Not right after the start or just before the finish",
  "ジャンプ台は{0}個までです": "Up to {0} ramps",
  "ほかのジャンプ台から{0}m以上離してください": "Keep at least {0} m from other ramps",
  妄想ビッグエア: "Daydream Big Air",
  "Alpine · ビッグキッカーから妄想メガジャンプへ": "Alpine · From a big kicker to a daydream mega jump",
  "{0}はアルパインパックの特典です": "{0} is part of the Alpine Pack",
  "ビッグキッカー · Alpine": "Big kicker · Alpine",
  "妄想メガジャンプ · Alpine": "Daydream mega jump · Alpine",
  "先にコースを引いてください。": "Draw the course first.",
  "コースの近くをタップしてください。": "Tap close to the course.",
  "{0}を外しました。残り {1}個": "Removed the {0}. {1} left",
  "{0}をスタートから約{1}mに置きました。全 {2}個": "Placed a {0} about {1} m from the start. {2} in total",
  歩いてコースへ戻る: "Walk back to the course",
  スノーモービルで引き上げ: "Snowmobile tow",
  ヘリで救助: "Helicopter rescue",
  歩いて戻る: "Walk back",
  "歩いてコースへ戻ります（{0}倍速）": "Walking back to the course ({0}× speed)",
  歩いてコースへ戻ります: "Walking back to the course",
  スノーモービルが迎えに来ました: "A snowmobile is here to tow you",
  救助ヘリが到着しました: "The rescue helicopter has arrived",
  コースへ移動中: "Heading back to the course",
  "目線での転倒・バック転": "First-person falls & flips",
  "控えめ（傾くだけ）": "Gentle (tilt only)",
  "ごろごろ回る（酔いやすい）": "Full tumble (may cause motion sickness)",
  その間だけ追いかける視点: "Switch to chase view meanwhile",
  "◈ ドローン視点": "◈ Drone view",
  ドローン視点に切り替え: "Switch to drone view",
  ドローンで追いかける: "Chase drone",
  "快適パックで景色とスキーヤーを好きな角度から撮影したり、滑りを録画したりして共有できます。広告なし、索道の即時スキップと高速移動、全山域共通の保存5枠も利用できます。": "The Comfort Pack lets you frame mountain and skier photos from any angle and record your runs to share. It also removes ads and adds instant lift skip, fast travel, and five shared save slots.",
  録画は快適パックの特典です: "Recording is a Comfort Pack feature",
  "● 録画": "● Record",
  "■ 録画を止める": "■ Stop recording",
  "滑りを録画（快適パック）": "Record your run (Comfort Pack)",
  録画を始められませんでした: "Could not start recording",
  録画を保存できませんでした: "Could not save the recording",
  天気: "Weather",
  晴れ: "Clear",
  雪: "Snowfall",
  吹雪: "Blizzard",
  ナイター: "Night skiing",
  朝焼け: "Sunrise",
  "吹雪（アルパイン）": "Blizzard (Alpine)",
  "ナイター（アルパイン）": "Night skiing (Alpine)",
  "朝焼け（アルパイン）": "Sunrise (Alpine)",
  "トレイン滑走（先導と後続のスキーヤー）": "Train run (a leader ahead, followers behind)",
  "・先導について {0}%": " · Kept up with the leader {0}%",
  赤いジャケットの先導についていきましょう: "Follow the leader in the red jacket",
  "ジャンプ台・遊具を置く": "Place ramps & features",
  置くもの: "What to place",
  妄想ハーフパイプ: "Daydream half-pipe",
  かき氷の山: "Shaved-ice mountain",
  "妄想ハーフパイプ · Alpine": "Daydream half-pipe · Alpine",
  "かき氷の山 · Alpine": "Shaved-ice mountain · Alpine",
  "コースの上をタップしてジャンプ台や遊具を置きます。置いたものをタップすると外せます。": "Tap on the course to place a ramp or feature. Tap a placed one to remove it.",
  ほかの遊具やジャンプ台と重なります: "This overlaps another feature or ramp",
  "ジャンプ台あり（自動で２か所。「ジャンプ台・遊具を置く」で自由に配置）": "Jump ramps (two placed automatically, or use “Place ramps & features”)",
  スノーモービルで自由走行: "Snowmobile free roam",
  降りて滑る: "Get off and ski",
  "🛷 スノーモービル": "🛷 Snowmobile",
  ブースト: "Boost",
  バック: "Reversing",
  巡航: "Cruising",
  "傾けて（左右をタッチして）ハンドル、両側タッチでブレーキ。登りも横移動も自在です。": "Tilt (or touch left/right) to steer, touch both sides to brake. Climb or traverse anywhere.",
  スノーモービルはアルパインパックの特典です: "The snowmobile is part of the Alpine Pack",
  "スノーモービルに乗りました。山のどこへでも行けます": "You're on the snowmobile. Go anywhere on the mountain",
  "スノーモービルを降りました。ここから滑れます": "Off the snowmobile. Ski from here",
  "山域の端です。向きを変えてください": "Edge of the area. Turn around",
  "録画のしかた（快適パック）": "Recording method (Comfort Pack)",
  "画面ごと（表示も写る）": "Whole screen (includes on-screen controls)",
  "3D映像だけ（表示は写らない）": "3D view only (no on-screen controls)",
  この端末では3D映像だけの録画ができません: "3D-only recording isn't available on this device",
  おためし: "Trial",
  広告を見ておためし: "Watch an ad to try",
  アルパインパックを見る: "See the Alpine pack",
  "今日あと{0}回無料": "{0} free today",
  "おためし 今日あと{0}回": "Trial · {0} left today",
  "{0}を無料でおためし中（今日の無料分）": "Trying {0} for free (today's free use)",
  "今日のおためしは終わりました。また明日か、アルパインパックで遊べます。": "You've used today's trials. Come back tomorrow, or get the Alpine pack.",
  "快適パックをお持ちなので広告なしでおためしできます（今日あと{0}回）。": "With the Comfort Pack you can try it without ads ({0} left today).",
  "広告を1本見ると、おためしできます（今日あと{0}回）。": "Watch one ad to try it ({0} left today).",
  "おためしはアプリ版で広告を見ると利用できます。": "Trials are available in the app by watching an ad.",
  おためしする: "Try it",
  "広告を利用できないか、視聴が完了しませんでした": "The ad isn't available or wasn't finished",
  "アルパインのジャンプ台・遊具": "Riding Alpine jumps and features",
  スノーモービルのおためし時間が終わりました: "Your snowmobile trial time is over",
  " · おためし残り{0}秒": " · trial {0}s left",
  "（アルパイン：滑る前におためしできます）": " (Alpine: you can try it before skiing)",
  おためし可: "trial available",
  "アルパインの台・遊具はなしで滑ります。右上の「台・遊具を出す」からおためしできます": "Skiing without the Alpine jumps and features. Tap “Show jumps and features” at the top right to try them.",
  "🔒 台・遊具を出す（おためし）": "🔒 Show jumps and features (trial)",
  "🔒 アルパインの台・遊具なし": "🔒 No Alpine jumps or features",
  "Alpine · 長いハーフパイプを２本。壁を登って空中へ": "Alpine · Two long half-pipes. Climb the walls and fly",
  "Alpine · ３つのかき氷の山を越えて跳ぶ": "Alpine · Jump over three shaved-ice mountains",
  "快適パック（広告なし）": "Comfort Pack (No Ads)",
  志賀高原: "Shiga Kogen",
  "標高2,000m級の高原": "Highlands near 2,000 m",
  "高原に連なる山々の斜面を、ゆったり滑り下りる。": "Cruise down the slopes of a chain of highland peaks.",
  八甲田: "Hakkoda",
  青森: "Aomori",
  北の火山の山並み: "Northern volcanic peaks",
  "八甲田の峰々を見渡しながら、長い斜面を下る。": "Take a long run with the Hakkoda peaks in view.",
  立山: "Tateyama",
  富山: "Toyama",
  "妄想・3,000m級の稜線": "Imaginary 3,000 m ridges",
  "北アルプスの高い稜線から、一気に谷へ。": "Drop from the high ridges of the Northern Alps into the valley.",
  大山: "Daisen",
  鳥取: "Tottori",
  中国地方の最高峰: "Highest peak in Chugoku",
  "西日本の高い山を、雪の斜面に変えて滑る。": "Turn a high peak of western Japan into a snowy run.",
  "コース {0}": "Course {0}",
  "索道 {0}": "Lift {0}",
  接続あり: "Connected",
  接続を確認: "Check connection",
  未完成: "Incomplete",
  "快適パック：コース{0}本・索道{1}本まで": "Comfort Pack: up to {0} courses and {1} lifts",
  "無料版：コース{0}本・索道{1}本まで": "Free: up to {0} courses and {1} lifts",
  選択コースの接続: "Selected course connections",
  "コースの始点と終点を置くと、駅との距離を確認できます。": "Place the course start and finish to check distances to lift stations.",
  ロッジ: "Lodge",
  "索道 {0} の山頂駅": "Lift {0} summit station",
  "索道 {0} の山麓駅": "Lift {0} base station",
  "始点：{0}まで約{1}m": "Start: {0}, about {1} m away",
  "始点：山頂駅を置いてください。": "Start: place a summit station.",
  "終点：{0}まで約{1}m": "Finish: {0}, about {1} m away",
  "終点：山麓駅を置いてください。": "Finish: place a base station.",
  "どちらも{0}m以内です。": "Both are within {0} m.",
  "駅またはロッジから{0}m以内につなぐ目安です。離れていても保存できます。": "Aim to connect within {0} m of a station or lodge. You can still save if it is farther away.",
  "「{0}」を編集中の配置から削除します。保存するまで、保存済みの配置は変わりません。": "Remove “{0}” from this draft. Your saved layout stays unchanged until you save.",
  "一覧か地図の線を選んで、編集する配置を切り替えます。": "Select a row or a line on the map to change what you edit.",
  "コースの通過点を、山頂から順番に置きます。「引き直す」で選択中の点を消せます。": "Place course points downhill from the summit. Redraw clears the selected course’s points.",
  "コースの上をタップして台や遊具を置きます。置いたものをタップすると外せます。": "Tap the course to place a jump or feature. Tap an existing one to remove it.",
  "コースか索道の線を選んでください。": "Select a course or lift line.",
  "接続を確認するコースが{0}本あります。": "Check the connections for {0} courses.",
  "保存した配置を開きました。「選んだコースで試す」で反映します。": "Saved layout opened. Choose “Try selected course” to apply it.",
  "{0}：{1}": "{0}: {1}",
  "これ以上追加できません。上限はコース{0}本・索道{1}本です。": "Cannot add more. The limit is {0} courses and {1} lifts.",
  "コースと索道はそれぞれ1本以上必要です。": "Keep at least one course and one lift.",
  スキー場をつくる: "Build a ski resort",
  山域: "Mountain",
  スキー場名: "Resort name",
  スキー場の名前: "Name your resort",
  保存枠: "Save slot",
  "2 · 快適パック": "2 · Comfort Pack",
  "3 · 快適パック": "3 · Comfort Pack",
  "4 · 快適パック": "4 · Comfort Pack",
  "5 · 快適パック": "5 · Comfort Pack",
  編集するコース: "Course to edit",
  "＋ コースを追加": "+ Add course",
  編集する索道: "Lift to edit",
  "＋ 索道を追加": "+ Add lift",
  "保存した配置・初期配置": "Saved and default layouts",
  保存した配置を開く: "Open saved layout",
  初期配置に戻す: "Reset to default layout",
  "保存するまで、保存済みの配置は変わりません。": "Your saved layout stays unchanged until you save.",
  地図で編集: "Edit on the map",
  地図の操作: "Map action",
  配置を選ぶ: "Select a layout",
  コースを描く: "Draw course",
  索道の駅を置く: "Place lift stations",
  "台・遊具を置く": "Place jumps or features",
  "コースと索道を選択・配置する実標高地図": "Elevation map for selecting and placing courses and lifts",
  "S 始点　G 終点": "S Start   G Finish",
  地図の使い方: "How to use the map",
  "地図は上が北です。明るい場所ほど標高が高く、等高線が密な場所ほど急斜面です。コースは山頂から下り方向へ、2〜30個の通過点を置きます。索道は山麓駅、山頂駅の順に置きます。": "North is up. Brighter areas are higher; closely spaced contour lines indicate steeper slopes. Place 2–30 course points downhill from the summit. For lifts, place the base station first, then the summit station.",
  "矢印キーで地点を移動し、Enterで選択・配置できます。Shiftと矢印キーで大きく移動します。": "Move the cursor with arrow keys and press Enter to select or place. Hold Shift with an arrow key for larger steps.",
  "コースと索道は実在するスキー場の再現ではありません。": "Courses and lifts are your own designs, not replicas of real ski resorts.",
  選択中のコース: "Selected course",
  コースの名前: "Course name",
  ジャンプ台を自動で置く: "Place jumps automatically",
  "160mを超えるコースに2か所置きます。地図で台を置くと個別の配置に切り替わります。": "Places two jumps on courses longer than 160 m. Placing a jump on the map switches to a custom layout.",
  ターンの旗門を置く: "Place slalom gates",
  選択コースを引き直す: "Redraw selected course",
  選択コースを削除: "Delete selected course",
  選択中の索道: "Selected lift",
  選択索道を削除: "Delete selected lift",
  保存と試走は別の操作です: "Saving and trying a course are separate actions",
  保存する: "Save",
  選んだコースで試す: "Try selected course",
  "配置を削除しますか？": "Delete this layout?",
  削除する: "Delete",
  快適パック: "Comfort Pack",
  "台・遊具を{0}個、個別に配置しています。": "{0} jumps or features have been placed individually.",
  滑るコースを選ぶ: "Choose a ski course",
  次の索道を選ぶ: "Choose your next lift",
  配置を編集: "Edit the layout",
  コースと索道の実標高地図: "Elevation map of courses and lifts",
  "▲ 現在の駅・ゴール": "▲ Current station or finish",
  "{0} 山頂駅": "{0} summit station",
  "{0} 山麓駅": "{0} base station",
  "「{0}」のゴール": "Finish of “{0}”",
  "「{0}」の始点へ移動しました": "Moved to the start of “{0}”",
  "選ぶとコースの始点へ移動します。滑走はボタンで始められます。": "Choose a course to move to its start, then press the ski button to begin.",
  "この山頂から滑れるコースがありません。始点と終点の接続を編集してください。": "No ski courses connect to this summit. Edit the connections at the course start and finish.",
  "ゴールから150m以内の山麓駅です。選ぶと駅へ移動して出発します。": "Base stations within 150 m of the finish. Choose one to move there and depart.",
  "ゴールから150m以内に山麓駅がありません。配置を編集するか、ホームで別のコースを選べます。": "No base stations are within 150 m of the finish. Edit the layout or choose another course from Home.",
  "コース長（水平）{0}m ／ 高低差 {1}m": "Course length (horizontal) {0} m / vertical drop {1} m",
  "ゴール: {0}": "Finish: {0}",
  "ゴールから {0}m": "{0} m from the finish",
  "山頂の滑走候補 {0}本": "Ski courses at the summit: {0}",
  "志賀高原・回遊の見本": "Shiga Kogen circuit",
  尾根から麓へ: "Ridge to base",
  中腹リフトへ: "To the mid-mountain lift",
  中腹から麓へ: "Mid-mountain to base",
  "2索道・3コースの見本": "2 lifts and 3 courses",
  "2本の索道と3本のコースを乗り継ぐ、高原の回遊。": "Explore the plateau on two lifts and three connecting courses.",
  "{0} ／ {1} — 3コース・2索道（代表コース 約{2}km・標高差{3}m）": "{0} / {1} — 3 courses and 2 lifts (main course: about {2} km, {3} m vertical drop)",
  共有データの形式を確認してください: "Check the shared data format.",
  "共有データが上限を超えています。配置を減らしてください。": "The shared data exceeds the limit. Reduce the layout size.",
  共有コースと同じ山域の標高データが必要です: "Elevation data for the shared course’s mountain region is required.",
  "共有コースの下り・範囲・索道の配置を確認してください": "Check the shared course’s downhill route, bounds, and lift layout.",
  この共有形式には対応していません: "This share format is not supported.",
  "この環境では共有データの圧縮・展開を利用できません": "Compression and decompression are unavailable in this environment.",
  "共有データが壊れているか、途中で切れています": "The shared data is damaged or incomplete.",
  "1m単位に丸めると配置が不正になります。通過点や駅を調整してください。": "Rounding the layout to whole metres makes it invalid. Adjust the waypoints or stations.",
  リンクを受け取る: "Receive a link",
  受け取ったスキー場: "Received resorts",
  この配置のリンクを作成: "Create a link to this layout",
  編集中の配置を共有: "Share this draft",
  選んだ配置を共有: "Share selected layout",
  スキー場を受け取る: "Receive a resort",
  共有リンク: "Shared link",
  共有リンクを貼り付けてください: "Paste a shared link",
  配置を確認: "Check layout",
  受け取るコースと索道の地図: "Map of received courses and lifts",
  "実標高の色分け · 実線：コース / 破線：索道": "Elevation shading · Solid: courses / Dashed: lifts",
  "受け取りは無料です。10件まで、自分の保存枠とは別に保存できます。編集した配置は、自分の保存枠に保存します。": "Receiving is free. Keep up to 10 received resorts separately from your own save slots. Save edited copies in your own slots.",
  一覧に保存: "Save to received resorts",
  受け取って滑る: "Receive and ski",
  "受け取った配置を削除しますか？": "Delete this received layout?",
  スキー場のリンクを作成: "Create a resort link",
  共有するコースと索道の地図: "Map of courses and lifts to share",
  "作成時のコースと索道を共有します。あとで編集しても、このリンクの配置は変わりません。名前に個人情報を入れないでください。": "Shares a snapshot of your courses and lifts. Later edits do not change this link. Keep personal information out of names.",
  リンクをコピー: "Copy link",
  共有先を選ぶ: "Choose where to share",
  "快適パックでは、広告なし・索道スキップと高速移動・保存5枠・写真・録画・スキー場のリンク作成を利用できます。リンクの受け取りと滑走は無料です。": "Comfort Pack includes no ads, lift skip and fast travel, 5 save slots, photos, recording, and resort link creation. Receiving links and skiing received resorts are free.",
  "受け取り一覧を読み込めません。元のデータは変更していません。": "Could not read received resorts. Your existing data has not been changed.",
  受け取った配置が見つかりません: "Received layout not found",
  "受け取り一覧が更新されました。開き直してください。": "Received resorts have changed. Please reopen the list.",
  "受け取り一覧は10件までです。不要な配置を削除してから受け取ってください。": "You can keep up to 10 received resorts. Delete an unwanted layout before receiving another.",
  "配置を確認しています…": "Checking layout…",
  "{0} · コース{1}本・索道{2}本": "{0} · {1} courses / {2} lifts",
  "コース {0} · 約{1}m": "Course {0} · about {1}m",
  "コース {0} の名前": "Course {0} name",
  "保存済みのリンクです。名前を変更できます。": "This link is already saved. You can change its names.",
  "標高データで配置を確認しました。名前を変更して保存できます。": "Layout checked against elevation data. You can change the names before saving.",
  受け取り一覧に保存しました: "Saved to received resorts",
  "{0} / 10件 · 自分の保存枠とは別です": "{0} / 10 resorts · separate from your own save slots",
  "受け取ったスキー場はまだありません。リンクを入力して受け取れます。": "No received resorts yet. Enter a shared link to receive one.",
  名前なしのスキー場: "Unnamed resort",
  滑る: "Ski",
  名前を変える: "Rename",
  自分のコピーを編集: "Edit your own copy",
  削除: "Delete",
  "受け取り一覧から「{0}」を削除します。自分の保存枠は変わりません。": "Delete “{0}” from received resorts? Your own save slots will stay unchanged.",
  "リンクを作成しています…": "Creating link…",
  リンク作成には快適パックが必要です: "Creating links requires Comfort Pack",
  "受け取る人は無料で保存・滑走できます。リンクにはこの配置だけが含まれます。": "Recipients can save and ski for free. The link contains only this layout.",
  リンクを作成してから共有してください: "Create a link before sharing",
  リンクをコピーしました: "Link copied",
  "リンクを選択しました。コピーの操作をしてください。": "Link selected. Use the Copy command.",
  スキー場のリンクを共有: "Share a resort link",
  リンク作成は快適パックの特典です: "Link creation is a Comfort Pack feature",
  "受け取った配置のコピーです。自分の保存枠に保存できます。": "This is a copy of a received layout. You can save it in your own save slots.",
  名前は24文字以内で入力してください: "Enter names of up to 24 characters",
  "共有リンクを入力・変更": "Enter or change shared link",
  "快適パック：広告なし・索道スキップと高速移動・コース保存5枠・写真モード・録画・スキー場のリンク作成。": "Comfort Pack: no ads, lift skip and fast travel, 5 save slots, Photo Mode, recording, and resort link creation.",
  "広告なし、索道の即時スキップと高速移動、保存枠5つ、写真モード、録画、スキー場のリンク作成。コース8本・索道5本まで配置できます。買い切りでずっと使えます。": "No ads, instant lift skips and fast travel, 5 save slots, Photo Mode, recording, and resort link creation. Build up to 8 courses and 5 lifts. One-time purchase.",
  "共有リンクには配置と名前が含まれます。リンク作成・コピー・共有は利用者の操作で行い、配置を開発者のサーバーへ送信しません。共有先の相手やサービスは内容を読めます。受信一覧は自分の保存枠と別に端末内へ保存し、一覧から削除できます。": "Shared links contain layout data and names. Links are created, copied or shared only when requested; layouts are not sent to a developer server. Recipients and sharing services can read the contents. Received resorts are stored separately from your own save slots on the device and can be deleted from their list.",
  "駅につながるコースがありません。一覧に保存し、自分のコピーを編集して接続できます。": "No course connects to the stations. Save to the list, then edit your own copy to connect it.",
  "駅につながるコースがありません。始点と終点の接続を編集してください。": "No course connects to the stations. Edit the start and goal connections."
};
/*! Capacitor: https://capacitorjs.com/ - MIT License */
var $;
(function(t) {
  t.Unimplemented = "UNIMPLEMENTED", t.Unavailable = "UNAVAILABLE";
})($ || ($ = {}));
class ue extends Error {
  constructor(a, e, o) {
    super(a), this.message = a, this.code = e, this.data = o;
  }
}
const xt = (t) => {
  var a, e;
  return t?.androidBridge ? "android" : !((e = (a = t?.webkit) === null || a === void 0 ? void 0 : a.messageHandlers) === null || e === void 0) && e.bridge ? "ios" : "web";
}, Et = (t) => {
  const a = t.CapacitorCustomPlatform || null, e = t.Capacitor || {}, o = e.Plugins = e.Plugins || {}, i = () => a !== null ? a.name : xt(t), r = () => i() !== "web", u = (v) => {
    const f = n.get(v);
    return !!(f?.platforms.has(i()) || l(v));
  }, l = (v) => {
    var f;
    return (f = e.PluginHeaders) === null || f === void 0 ? void 0 : f.find((c) => c.name === v);
  }, k = (v) => t.console.error(v), n = /* @__PURE__ */ new Map(), s = (v, f = {}) => {
    const c = n.get(v);
    if (c)
      return console.warn(`Capacitor plugin "${v}" already registered. Cannot register plugins twice.`), c.proxy;
    const T = i(), x = l(v);
    let S;
    const p = async () => (!S && T in f ? S = typeof f[T] == "function" ? S = await f[T]() : S = f[T] : a !== null && !S && "web" in f && (S = typeof f.web == "function" ? S = await f.web() : S = f.web), S), g = (A, m) => {
      var b, E;
      if (x) {
        const D = x?.methods.find((M) => m === M.name);
        if (D)
          return D.rtype === "promise" ? (M) => e.nativePromise(v, m.toString(), M) : (M, z) => e.nativeCallback(v, m.toString(), M, z);
        if (A)
          return (b = A[m]) === null || b === void 0 ? void 0 : b.bind(A);
      } else {
        if (A)
          return (E = A[m]) === null || E === void 0 ? void 0 : E.bind(A);
        throw new ue(`"${v}" plugin is not implemented on ${T}`, $.Unimplemented);
      }
    }, d = (A) => {
      let m;
      const b = (...E) => {
        const D = p().then((M) => {
          const z = g(M, A);
          if (z) {
            const U = z(...E);
            return m = U?.remove, U;
          } else
            throw new ue(`"${v}.${A}()" is not implemented on ${T}`, $.Unimplemented);
        });
        return A === "addListener" && (D.remove = async () => m()), D;
      };
      return b.toString = () => `${A.toString()}() { [capacitor code] }`, Object.defineProperty(b, "name", {
        value: A,
        writable: !1,
        configurable: !1
      }), b;
    }, w = d("addListener"), P = d("removeListener"), C = (A, m) => {
      const b = w({ eventName: A }, m), E = async () => {
        const M = await b;
        P({
          eventName: A,
          callbackId: M
        }, m);
      }, D = new Promise((M) => b.then(() => M({ remove: E })));
      return D.remove = async () => {
        console.warn("Using addListener() without 'await' is deprecated."), await E();
      }, D;
    }, y = new Proxy({}, {
      get(A, m) {
        switch (m) {
          // https://github.com/facebook/react/issues/20030
          case "$$typeof":
            return;
          case "toJSON":
            return () => ({});
          case "addListener":
            return x ? C : w;
          case "removeListener":
            return P;
          default:
            return d(m);
        }
      }
    });
    return o[v] = y, n.set(v, {
      name: v,
      proxy: y,
      platforms: /* @__PURE__ */ new Set([...Object.keys(f), ...x ? [T] : []])
    }), y;
  };
  return e.convertFileSrc || (e.convertFileSrc = (v) => v), e.getPlatform = i, e.handleError = k, e.isNativePlatform = r, e.isPluginAvailable = u, e.registerPlugin = s, e.Exception = ue, e.DEBUG = !!e.DEBUG, e.isLoggingEnabled = !!e.isLoggingEnabled, e;
}, _t = (t) => t.Capacitor = Et(t), ae = /* @__PURE__ */ _t(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {}), le = ae.registerPlugin;
class Ae {
  constructor() {
    this.listeners = {}, this.retainedEventArguments = {}, this.windowListeners = {};
  }
  addListener(a, e) {
    let o = !1;
    this.listeners[a] || (this.listeners[a] = [], o = !0), this.listeners[a].push(e);
    const r = this.windowListeners[a];
    r && !r.registered && this.addWindowListener(r), o && this.sendRetainedArgumentsForEvent(a);
    const u = async () => this.removeListener(a, e);
    return Promise.resolve({ remove: u });
  }
  async removeAllListeners() {
    this.listeners = {};
    for (const a in this.windowListeners)
      this.removeWindowListener(this.windowListeners[a]);
    this.windowListeners = {};
  }
  notifyListeners(a, e, o) {
    const i = this.listeners[a];
    if (!i) {
      if (o) {
        let r = this.retainedEventArguments[a];
        r || (r = []), r.push(e), this.retainedEventArguments[a] = r;
      }
      return;
    }
    i.forEach((r) => r(e));
  }
  hasListeners(a) {
    var e;
    return !!(!((e = this.listeners[a]) === null || e === void 0) && e.length);
  }
  registerWindowListener(a, e) {
    this.windowListeners[e] = {
      registered: !1,
      windowEventName: a,
      pluginEventName: e,
      handler: (o) => {
        this.notifyListeners(e, o);
      }
    };
  }
  unimplemented(a = "not implemented") {
    return new ae.Exception(a, $.Unimplemented);
  }
  unavailable(a = "not available") {
    return new ae.Exception(a, $.Unavailable);
  }
  async removeListener(a, e) {
    const o = this.listeners[a];
    if (!o)
      return;
    const i = o.indexOf(e);
    i !== -1 && this.listeners[a].splice(i, 1), this.listeners[a].length || this.removeWindowListener(this.windowListeners[a]);
  }
  addWindowListener(a) {
    window.addEventListener(a.windowEventName, a.handler), a.registered = !0;
  }
  removeWindowListener(a) {
    a && (window.removeEventListener(a.windowEventName, a.handler), a.registered = !1);
  }
  sendRetainedArgumentsForEvent(a) {
    const e = this.retainedEventArguments[a];
    e && (delete this.retainedEventArguments[a], e.forEach((o) => {
      this.notifyListeners(a, o);
    }));
  }
}
const Pe = (t) => encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape), Te = (t) => t.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
class Lt extends Ae {
  async getCookies() {
    const a = document.cookie, e = {};
    return a.split(";").forEach((o) => {
      if (o.length <= 0)
        return;
      let [i, r] = o.replace(/=/, "CAP_COOKIE").split("CAP_COOKIE");
      i = Te(i).trim(), r = Te(r).trim(), e[i] = r;
    }), e;
  }
  async setCookie(a) {
    try {
      const e = Pe(a.key), o = Pe(a.value), i = a.expires ? `; expires=${a.expires.replace("expires=", "")}` : "", r = (a.path || "/").replace("path=", ""), u = a.url != null && a.url.length > 0 ? `domain=${a.url}` : "";
      document.cookie = `${e}=${o || ""}${i}; path=${r}; ${u};`;
    } catch (e) {
      return Promise.reject(e);
    }
  }
  async deleteCookie(a) {
    try {
      document.cookie = `${a.key}=; Max-Age=0`;
    } catch (e) {
      return Promise.reject(e);
    }
  }
  async clearCookies() {
    try {
      const a = document.cookie.split(";") || [];
      for (const e of a)
        document.cookie = e.replace(/^ +/, "").replace(/=.*/, `=;expires=${(/* @__PURE__ */ new Date()).toUTCString()};path=/`);
    } catch (a) {
      return Promise.reject(a);
    }
  }
  async clearAllCookies() {
    try {
      await this.clearCookies();
    } catch (a) {
      return Promise.reject(a);
    }
  }
}
le("CapacitorCookies", {
  web: () => new Lt()
});
const Rt = async (t) => new Promise((a, e) => {
  const o = new FileReader();
  o.onload = () => {
    const i = o.result;
    a(i.indexOf(",") >= 0 ? i.split(",")[1] : i);
  }, o.onerror = (i) => e(i), o.readAsDataURL(t);
}), Dt = (t = {}) => {
  const a = Object.keys(t);
  return Object.keys(t).map((i) => i.toLocaleLowerCase()).reduce((i, r, u) => (i[r] = t[a[u]], i), {});
}, Mt = (t, a = !0) => t ? Object.entries(t).reduce((o, i) => {
  const [r, u] = i;
  let l, k;
  return Array.isArray(u) ? (k = "", u.forEach((n) => {
    l = a ? encodeURIComponent(n) : n, k += `${r}=${l}&`;
  }), k.slice(0, -1)) : (l = a ? encodeURIComponent(u) : u, k = `${r}=${l}`), `${o}&${k}`;
}, "").substr(1) : null, Ot = (t, a = {}) => {
  const e = Object.assign({ method: t.method || "GET", headers: t.headers }, a), i = Dt(t.headers)["content-type"] || "";
  if (typeof t.data == "string")
    e.body = t.data;
  else if (i.includes("application/x-www-form-urlencoded")) {
    const r = new URLSearchParams();
    for (const [u, l] of Object.entries(t.data || {}))
      r.set(u, l);
    e.body = r.toString();
  } else if (i.includes("multipart/form-data") || t.data instanceof FormData) {
    const r = new FormData();
    if (t.data instanceof FormData)
      t.data.forEach((l, k) => {
        r.append(k, l);
      });
    else
      for (const l of Object.keys(t.data))
        r.append(l, t.data[l]);
    e.body = r;
    const u = new Headers(e.headers);
    u.delete("content-type"), e.headers = u;
  } else (i.includes("application/json") || typeof t.data == "object") && (e.body = JSON.stringify(t.data));
  return e;
};
class jt extends Ae {
  /**
   * Perform an Http request given a set of options
   * @param options Options to build the HTTP request
   */
  async request(a) {
    const e = Ot(a, a.webFetchExtra), o = Mt(a.params, a.shouldEncodeUrlParams), i = o ? `${a.url}?${o}` : a.url, r = await fetch(i, e), u = r.headers.get("content-type") || "";
    let { responseType: l = "text" } = r.ok ? a : {};
    u.includes("application/json") && (l = "json");
    let k, n;
    switch (l) {
      case "arraybuffer":
      case "blob":
        n = await r.blob(), k = await Rt(n);
        break;
      case "json":
        k = await r.json();
        break;
      case "document":
      case "text":
      default:
        k = await r.text();
    }
    const s = {};
    return r.headers.forEach((v, f) => {
      s[f] = v;
    }), {
      data: k,
      headers: s,
      status: r.status,
      url: r.url
    };
  }
  /**
   * Perform an Http GET request given a set of options
   * @param options Options to build the HTTP request
   */
  async get(a) {
    return this.request(Object.assign(Object.assign({}, a), { method: "GET" }));
  }
  /**
   * Perform an Http POST request given a set of options
   * @param options Options to build the HTTP request
   */
  async post(a) {
    return this.request(Object.assign(Object.assign({}, a), { method: "POST" }));
  }
  /**
   * Perform an Http PUT request given a set of options
   * @param options Options to build the HTTP request
   */
  async put(a) {
    return this.request(Object.assign(Object.assign({}, a), { method: "PUT" }));
  }
  /**
   * Perform an Http PATCH request given a set of options
   * @param options Options to build the HTTP request
   */
  async patch(a) {
    return this.request(Object.assign(Object.assign({}, a), { method: "PATCH" }));
  }
  /**
   * Perform an Http DELETE request given a set of options
   * @param options Options to build the HTTP request
   */
  async delete(a) {
    return this.request(Object.assign(Object.assign({}, a), { method: "DELETE" }));
  }
}
le("CapacitorHttp", {
  web: () => new jt()
});
var xe;
(function(t) {
  t.Dark = "DARK", t.Light = "LIGHT", t.Default = "DEFAULT";
})(xe || (xe = {}));
var Ee;
(function(t) {
  t.StatusBar = "StatusBar", t.NavigationBar = "NavigationBar";
})(Ee || (Ee = {}));
class Bt extends Ae {
  async setStyle() {
    this.unavailable("not available for web");
  }
  async setAnimation() {
    this.unavailable("not available for web");
  }
  async show() {
    this.unavailable("not available for web");
  }
  async hide() {
    this.unavailable("not available for web");
  }
}
le("SystemBars", {
  web: () => new Bt()
});
const Nt = le("SkiCommerce"), zt = ae.isNativePlatform(), Ut = zt ? await Promise.race([
  Nt.environment().catch(() => ({})),
  new Promise((t) => setTimeout(() => t({}), 3e3))
]) : {};
let Se = "auto";
try {
  Se = localStorage.getItem("ski-language") || "auto";
} catch {
}
const Ft = Ut.language || (typeof document > "u" ? "ja" : navigator.language), It = (Se === "auto" ? Ft : Se)?.startsWith("ja") ? "ja" : "en";
function h(t, ...a) {
  return (It === "en" ? Tt[t] ?? t : t).replace(/\{(\d+)\}/g, (o, i) => String(a[Number(i)] ?? ""));
}
function Y(t) {
  let a = t.length;
  for (; --a >= 0; ) t[a] = 0;
}
var Ht = 29, ht = 30, $t = 512, Gt = new Array(288 * 2);
Y(Gt);
var Yt = new Array(ht * 2);
Y(Yt);
var Wt = new Array($t);
Y(Wt);
var Kt = new Array(256);
Y(Kt);
var qt = new Array(Ht);
Y(qt);
var Jt = new Array(ht);
Y(Jt);
var Ce = (t, a, e, o) => {
  let i = t & 65535 | 0, r = t >>> 16 & 65535 | 0, u = 0;
  for (; e !== 0; ) {
    u = e > 2e3 ? 2e3 : e, e -= u;
    do
      i = i + a[o++] | 0, r = r + i | 0;
    while (--u);
    i %= 65521, r %= 65521;
  }
  return i | r << 16 | 0;
}, Xt = () => {
  const t = new Uint32Array(2048);
  let a;
  for (let e = 0; e < 256; e++) {
    a = e;
    for (let o = 0; o < 8; o++) a = a & 1 ? 3988292384 ^ a >>> 1 : a >>> 1;
    t[e] = a;
  }
  for (let e = 0; e < 256; e++) {
    a = t[e];
    for (let o = 256; o < 256 * 8; o += 256)
      a = t[a & 255] ^ a >>> 8, t[o + e] = a;
  }
  return t;
}, Zt = Xt(), N = (t, a, e, o) => {
  const i = Zt, r = o + e;
  let u = o;
  t ^= -1;
  for (const l = r - 7; u < l; u += 8)
    t ^= a[u] | a[u + 1] << 8 | a[u + 2] << 16 | a[u + 3] << 24, t = i[1792 + (t & 255)] ^ i[1536 + (t >>> 8 & 255)] ^ i[1280 + (t >>> 16 & 255)] ^ i[1024 + (t >>> 24)] ^ i[768 + a[u + 4]] ^ i[512 + a[u + 5]] ^ i[256 + a[u + 6]] ^ i[a[u + 7]];
  for (; u < r; u++) t = t >>> 8 ^ i[(t ^ a[u]) & 255];
  return t ^ -1;
}, he = {
  2: "need dictionary",
  1: "stream end",
  0: "",
  "-1": "file error",
  "-2": "stream error",
  "-3": "data error",
  "-4": "insufficient memory",
  "-5": "buffer error",
  "-6": "incompatible version"
}, Z = 16209, Vt = 16191;
function Qt(t, a) {
  let e, o, i, r, u, l, k, n, s, v, f, c, T, x, S, p, g, d, w, P, C, y, A, m;
  const b = t.state;
  e = t.next_in, A = t.input, o = e + (t.avail_in - 5), i = t.next_out, m = t.output, r = i - (a - t.avail_out), u = i + (t.avail_out - 257), l = b.dmax, k = b.wsize, n = b.whave, s = b.wnext, v = b.window, f = b.hold, c = b.bits, T = b.lencode, x = b.distcode, S = (1 << b.lenbits) - 1, p = (1 << b.distbits) - 1;
  e: do {
    c < 15 && (f += A[e++] << c, c += 8, f += A[e++] << c, c += 8), g = T[f & S];
    t: for (; ; ) {
      if (d = g >>> 24, f >>>= d, c -= d, d = g >>> 16 & 255, d === 0) m[i++] = g & 65535;
      else if (d & 16) {
        w = g & 65535, d &= 15, d && (c < d && (f += A[e++] << c, c += 8), w += f & (1 << d) - 1, f >>>= d, c -= d), c < 15 && (f += A[e++] << c, c += 8, f += A[e++] << c, c += 8), g = x[f & p];
        a: for (; ; ) {
          if (d = g >>> 24, f >>>= d, c -= d, d = g >>> 16 & 255, d & 16) {
            if (P = g & 65535, d &= 15, c < d && (f += A[e++] << c, c += 8, c < d && (f += A[e++] << c, c += 8)), P += f & (1 << d) - 1, P > l) {
              t.msg = "invalid distance too far back", b.mode = Z;
              break e;
            }
            if (f >>>= d, c -= d, d = i - r, P > d) {
              if (d = P - d, d > n && b.sane) {
                t.msg = "invalid distance too far back", b.mode = Z;
                break e;
              }
              if (C = 0, y = v, s === 0) {
                if (C += k - d, d < w) {
                  w -= d;
                  do
                    m[i++] = v[C++];
                  while (--d);
                  C = i - P, y = m;
                }
              } else if (s < d) {
                if (C += k + s - d, d -= s, d < w) {
                  w -= d;
                  do
                    m[i++] = v[C++];
                  while (--d);
                  if (C = 0, s < w) {
                    d = s, w -= d;
                    do
                      m[i++] = v[C++];
                    while (--d);
                    C = i - P, y = m;
                  }
                }
              } else if (C += s - d, d < w) {
                w -= d;
                do
                  m[i++] = v[C++];
                while (--d);
                C = i - P, y = m;
              }
              for (; w > 2; )
                m[i++] = y[C++], m[i++] = y[C++], m[i++] = y[C++], w -= 3;
              w && (m[i++] = y[C++], w > 1 && (m[i++] = y[C++]));
            } else {
              C = i - P;
              do
                m[i++] = m[C++], m[i++] = m[C++], m[i++] = m[C++], w -= 3;
              while (w > 2);
              w && (m[i++] = m[C++], w > 1 && (m[i++] = m[C++]));
            }
          } else if ((d & 64) === 0) {
            g = x[(g & 65535) + (f & (1 << d) - 1)];
            continue a;
          } else {
            t.msg = "invalid distance code", b.mode = Z;
            break e;
          }
          break;
        }
      } else if ((d & 64) === 0) {
        g = T[(g & 65535) + (f & (1 << d) - 1)];
        continue t;
      } else if (d & 32) {
        b.mode = Vt;
        break e;
      } else {
        t.msg = "invalid literal/length code", b.mode = Z;
        break e;
      }
      break;
    }
  } while (e < o && i < u);
  w = c >> 3, e -= w, c -= w << 3, f &= (1 << c) - 1, t.next_in = e, t.next_out = i, t.avail_in = e < o ? 5 + (o - e) : 5 - (e - o), t.avail_out = i < u ? 257 + (u - i) : 257 - (i - u), b.hold = f, b.bits = c;
}
var V = 15, _e = 852, Le = 592, Re = 0, fe = 1, De = 2, ea = new Uint16Array([
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  13,
  15,
  17,
  19,
  23,
  27,
  31,
  35,
  43,
  51,
  59,
  67,
  83,
  99,
  115,
  131,
  163,
  195,
  227,
  258,
  0,
  0
]), ta = new Uint8Array([
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  17,
  17,
  17,
  17,
  18,
  18,
  18,
  18,
  19,
  19,
  19,
  19,
  20,
  20,
  20,
  20,
  21,
  21,
  21,
  21,
  16,
  199,
  75
]), aa = new Uint16Array([
  1,
  2,
  3,
  4,
  5,
  7,
  9,
  13,
  17,
  25,
  33,
  49,
  65,
  97,
  129,
  193,
  257,
  385,
  513,
  769,
  1025,
  1537,
  2049,
  3073,
  4097,
  6145,
  8193,
  12289,
  16385,
  24577,
  0,
  0
]), oa = new Uint8Array([
  16,
  16,
  16,
  16,
  17,
  17,
  18,
  18,
  19,
  19,
  20,
  20,
  21,
  21,
  22,
  22,
  23,
  23,
  24,
  24,
  25,
  25,
  26,
  26,
  27,
  27,
  28,
  28,
  29,
  29,
  64,
  64
]), q = (t, a, e, o, i, r, u, l) => {
  const k = l.bits;
  let n = 0, s = 0, v = 0, f = 0, c = 0, T = 0, x = 0, S = 0, p = 0, g = 0, d, w, P, C, y, A = null, m;
  const b = /* @__PURE__ */ new Uint16Array(16), E = /* @__PURE__ */ new Uint16Array(16);
  let D = null, M, z, U;
  for (n = 0; n <= V; n++) b[n] = 0;
  for (s = 0; s < o; s++) b[a[e + s]]++;
  for (c = k, f = V; f >= 1 && b[f] === 0; f--) ;
  if (c > f && (c = f), f === 0)
    return i[r++] = 20971520, i[r++] = 20971520, l.bits = 1, 0;
  for (v = 1; v < f && b[v] === 0; v++) ;
  for (c < v && (c = v), S = 1, n = 1; n <= V; n++)
    if (S <<= 1, S -= b[n], S < 0) return -1;
  if (S > 0 && (t === Re || f !== 1)) return -1;
  for (E[1] = 0, n = 1; n < V; n++) E[n + 1] = E[n] + b[n];
  for (s = 0; s < o; s++) a[e + s] !== 0 && (u[E[a[e + s]]++] = s);
  if (t === Re ? (A = D = u, m = 20) : t === fe ? (A = ea, D = ta, m = 257) : (A = aa, D = oa, m = 0), g = 0, s = 0, n = v, y = r, T = c, x = 0, P = -1, p = 1 << c, C = p - 1, t === fe && p > _e || t === De && p > Le) return 1;
  for (; ; ) {
    M = n - x, u[s] + 1 < m ? (z = 0, U = u[s]) : u[s] >= m ? (z = D[u[s] - m], U = A[u[s] - m]) : (z = 96, U = 0), d = 1 << n - x, w = 1 << T, v = w;
    do
      w -= d, i[y + (g >> x) + w] = M << 24 | z << 16 | U | 0;
    while (w !== 0);
    for (d = 1 << n - 1; g & d; ) d >>= 1;
    if (d !== 0 ? (g &= d - 1, g += d) : g = 0, s++, --b[n] === 0) {
      if (n === f) break;
      n = a[e + u[s]];
    }
    if (n > c && (g & C) !== P) {
      for (x === 0 && (x = c), y += v, T = n - x, S = 1 << T; T + x < f && (S -= b[T + x], !(S <= 0)); )
        T++, S <<= 1;
      if (p += 1 << T, t === fe && p > _e || t === De && p > Le) return 1;
      P = g & C, i[P] = c << 24 | T << 16 | y - r | 0;
    }
  }
  return g !== 0 && (i[y + g] = n - x << 24 | 4194304), l.bits = c, 0;
}, ia = 0, ft = 1, pt = 2, ce = 16180, Me = 16181, Oe = 16182, je = 16183, Be = 16184, Ne = 16185, ze = 16186, Ue = 16187, Fe = 16188, Ie = 16189, oe = 16190, F = 16191, pe = 16192, He = 16193, me = 16194, $e = 16195, Ge = 16196, Ye = 16197, We = 16198, Q = 16199, ee = 16200, Ke = 16201, qe = 16202, Je = 16203, Xe = 16204, Ze = 16205, ge = 16206, Ve = 16207, Qe = 16208, _ = 16209, mt = 16210, gt = 16211, na = 852, ra = 592, et = (t) => (t >>> 24 & 255) + (t >>> 8 & 65280) + ((t & 65280) << 8) + ((t & 255) << 24), sa = class {
  constructor() {
    this.strm = null, this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = /* @__PURE__ */ new Uint16Array(320), this.work = /* @__PURE__ */ new Uint16Array(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
  }
}, W = (t) => {
  if (!t) return 1;
  const a = t.state;
  return !a || a.strm !== t || a.mode < ce || a.mode > gt ? 1 : 0;
}, la = (t) => {
  if (W(t)) return -2;
  const a = t.state;
  return t.total_in = t.total_out = a.total = 0, t.msg = "", a.wrap && (t.adler = a.wrap & 1), a.mode = ce, a.last = 0, a.havedict = 0, a.flags = -1, a.dmax = 32768, a.head = null, a.hold = 0, a.bits = 0, a.lencode = a.lendyn = new Int32Array(na), a.distcode = a.distdyn = new Int32Array(ra), a.sane = 1, a.back = -1, 0;
}, wt = (t) => {
  if (W(t)) return -2;
  const a = t.state;
  return a.wsize = 0, a.whave = 0, a.wnext = 0, la(t);
}, ca = (t, a) => {
  let e;
  if (W(t)) return -2;
  const o = t.state;
  return a < 0 ? (e = 0, a = -a) : (e = (a >> 4) + 5, a < 48 && (a &= 15)), a && (a < 8 || a > 15) ? -2 : (o.window !== null && o.wbits !== a && (o.window = null), o.wrap = e, o.wbits = a, wt(t));
}, da = (t, a) => {
  if (!t) return -2;
  const e = new sa();
  t.state = e, e.strm = t, e.window = null, e.mode = ce;
  const o = ca(t, a);
  return o !== 0 && (t.state = null), o;
}, tt = !0, we, ke, ua = (t) => {
  if (tt) {
    we = /* @__PURE__ */ new Int32Array(512), ke = /* @__PURE__ */ new Int32Array(32);
    let a = 0;
    for (; a < 144; ) t.lens[a++] = 8;
    for (; a < 256; ) t.lens[a++] = 9;
    for (; a < 280; ) t.lens[a++] = 7;
    for (; a < 288; ) t.lens[a++] = 8;
    for (q(ft, t.lens, 0, 288, we, 0, t.work, { bits: 9 }), a = 0; a < 32; ) t.lens[a++] = 5;
    q(pt, t.lens, 0, 32, ke, 0, t.work, { bits: 5 }), tt = !1;
  }
  t.lencode = we, t.lenbits = 9, t.distcode = ke, t.distbits = 5;
}, kt = (t, a, e, o) => {
  let i;
  const r = t.state;
  return r.window === null && (r.window = new Uint8Array(1 << r.wbits)), r.wsize === 0 && (r.wsize = 1 << r.wbits, r.wnext = 0, r.whave = 0), o >= r.wsize ? (r.window.set(a.subarray(e - r.wsize, e), 0), r.wnext = 0, r.whave = r.wsize) : (i = r.wsize - r.wnext, i > o && (i = o), r.window.set(a.subarray(e - o, e - o + i), r.wnext), o -= i, o ? (r.window.set(a.subarray(e - o, e), 0), r.wnext = o, r.whave = r.wsize) : (r.wnext += i, r.wnext === r.wsize && (r.wnext = 0), r.whave < r.wsize && (r.whave += i))), 0;
}, ve = (t, a) => {
  let e, o, i, r, u, l, k, n, s, v, f, c, T, x, S = 0, p, g, d, w, P, C, y, A;
  const m = /* @__PURE__ */ new Uint8Array(4);
  let b, E;
  const D = new Uint8Array([
    16,
    17,
    18,
    0,
    8,
    7,
    9,
    6,
    10,
    5,
    11,
    4,
    12,
    3,
    13,
    2,
    14,
    1,
    15
  ]);
  if (W(t) || !t.output || !t.input && t.avail_in !== 0) return -2;
  e = t.state, e.mode === F && (e.mode = pe), u = t.next_out, i = t.output, k = t.avail_out, r = t.next_in, o = t.input, l = t.avail_in, n = e.hold, s = e.bits, v = l, f = k, A = 0;
  e: for (; ; ) switch (e.mode) {
    case ce:
      if (e.wrap === 0) {
        e.mode = pe;
        break;
      }
      for (; s < 16; ) {
        if (l === 0) break e;
        l--, n += o[r++] << s, s += 8;
      }
      if (e.wrap & 2 && n === 35615) {
        e.wbits === 0 && (e.wbits = 15), e.check = 0, m[0] = n & 255, m[1] = n >>> 8 & 255, e.check = N(e.check, m, 2, 0), n = 0, s = 0, e.mode = Me;
        break;
      }
      if (e.head && (e.head.done = !1), !(e.wrap & 1) || (((n & 255) << 8) + (n >> 8)) % 31) {
        t.msg = "incorrect header check", e.mode = _;
        break;
      }
      if ((n & 15) !== 8) {
        t.msg = "unknown compression method", e.mode = _;
        break;
      }
      if (n >>>= 4, s -= 4, y = (n & 15) + 8, e.wbits === 0 && (e.wbits = y), y > 15 || y > e.wbits) {
        t.msg = "invalid window size", e.mode = _;
        break;
      }
      e.dmax = 1 << e.wbits, e.flags = 0, t.adler = e.check = 1, e.mode = n & 512 ? Ie : F, n = 0, s = 0;
      break;
    case Me:
      for (; s < 16; ) {
        if (l === 0) break e;
        l--, n += o[r++] << s, s += 8;
      }
      if (e.flags = n, (e.flags & 255) !== 8) {
        t.msg = "unknown compression method", e.mode = _;
        break;
      }
      if (e.flags & 57344) {
        t.msg = "unknown header flags set", e.mode = _;
        break;
      }
      e.head && (e.head.text = n >> 8 & 1), e.flags & 512 && e.wrap & 4 && (m[0] = n & 255, m[1] = n >>> 8 & 255, e.check = N(e.check, m, 2, 0)), n = 0, s = 0, e.mode = Oe;
    case Oe:
      for (; s < 32; ) {
        if (l === 0) break e;
        l--, n += o[r++] << s, s += 8;
      }
      e.head && (e.head.time = n >>> 0), e.flags & 512 && e.wrap & 4 && (m[0] = n & 255, m[1] = n >>> 8 & 255, m[2] = n >>> 16 & 255, m[3] = n >>> 24 & 255, e.check = N(e.check, m, 4, 0)), n = 0, s = 0, e.mode = je;
    case je:
      for (; s < 16; ) {
        if (l === 0) break e;
        l--, n += o[r++] << s, s += 8;
      }
      e.head && (e.head.xflags = n & 255, e.head.os = n >> 8), e.flags & 512 && e.wrap & 4 && (m[0] = n & 255, m[1] = n >>> 8 & 255, e.check = N(e.check, m, 2, 0)), n = 0, s = 0, e.mode = Be;
    case Be:
      if (e.flags & 1024) {
        for (; s < 16; ) {
          if (l === 0) break e;
          l--, n += o[r++] << s, s += 8;
        }
        e.length = n, e.head && (e.head.extra_len = n), e.flags & 512 && e.wrap & 4 && (m[0] = n & 255, m[1] = n >>> 8 & 255, e.check = N(e.check, m, 2, 0)), n = 0, s = 0;
      } else e.head && (e.head.extra = null);
      e.mode = Ne;
    case Ne:
      if (e.flags & 1024 && (c = e.length, c > l && (c = l), c && (e.head && (y = e.head.extra_len - e.length, e.head.extra || (e.head.extra = new Uint8Array(e.head.extra_len)), e.head.extra.set(o.subarray(r, r + c), y)), e.flags & 512 && e.wrap & 4 && (e.check = N(e.check, o, c, r)), l -= c, r += c, e.length -= c), e.length))
        break e;
      e.length = 0, e.mode = ze;
    case ze:
      if (e.flags & 2048) {
        if (l === 0) break e;
        c = 0;
        do
          y = o[r + c++], e.head && y && e.length < 65536 && (e.head.name += String.fromCharCode(y), e.length++);
        while (y && c < l);
        if (e.flags & 512 && e.wrap & 4 && (e.check = N(e.check, o, c, r)), l -= c, r += c, y) break e;
      } else e.head && (e.head.name = null);
      e.length = 0, e.mode = Ue;
    case Ue:
      if (e.flags & 4096) {
        if (l === 0) break e;
        c = 0;
        do
          y = o[r + c++], e.head && y && e.length < 65536 && (e.head.comment += String.fromCharCode(y), e.length++);
        while (y && c < l);
        if (e.flags & 512 && e.wrap & 4 && (e.check = N(e.check, o, c, r)), l -= c, r += c, y) break e;
      } else e.head && (e.head.comment = null);
      e.mode = Fe;
    case Fe:
      if (e.flags & 512) {
        for (; s < 16; ) {
          if (l === 0) break e;
          l--, n += o[r++] << s, s += 8;
        }
        if (e.wrap & 4 && n !== (e.check & 65535)) {
          t.msg = "header crc mismatch", e.mode = _;
          break;
        }
        n = 0, s = 0;
      }
      e.head && (e.head.hcrc = e.flags >> 9 & 1, e.head.done = !0), t.adler = e.check = 0, e.mode = F;
      break;
    case Ie:
      for (; s < 32; ) {
        if (l === 0) break e;
        l--, n += o[r++] << s, s += 8;
      }
      t.adler = e.check = et(n), n = 0, s = 0, e.mode = oe;
    case oe:
      if (e.havedict === 0)
        return t.next_out = u, t.avail_out = k, t.next_in = r, t.avail_in = l, e.hold = n, e.bits = s, 2;
      t.adler = e.check = 1, e.mode = F;
    case F:
      if (a === 5 || a === 6) break e;
    case pe:
      if (e.last) {
        n >>>= s & 7, s -= s & 7, e.mode = ge;
        break;
      }
      for (; s < 3; ) {
        if (l === 0) break e;
        l--, n += o[r++] << s, s += 8;
      }
      switch (e.last = n & 1, n >>>= 1, s -= 1, n & 3) {
        case 0:
          e.mode = He;
          break;
        case 1:
          if (ua(e), e.mode = Q, a === 6) {
            n >>>= 2, s -= 2;
            break e;
          }
          break;
        case 2:
          e.mode = Ge;
          break;
        case 3:
          t.msg = "invalid block type", e.mode = _;
      }
      n >>>= 2, s -= 2;
      break;
    case He:
      for (n >>>= s & 7, s -= s & 7; s < 32; ) {
        if (l === 0) break e;
        l--, n += o[r++] << s, s += 8;
      }
      if ((n & 65535) !== (n >>> 16 ^ 65535)) {
        t.msg = "invalid stored block lengths", e.mode = _;
        break;
      }
      if (e.length = n & 65535, n = 0, s = 0, e.mode = me, a === 6) break e;
    case me:
      e.mode = $e;
    case $e:
      if (c = e.length, c) {
        if (c > l && (c = l), c > k && (c = k), c === 0) break e;
        i.set(o.subarray(r, r + c), u), l -= c, r += c, k -= c, u += c, e.length -= c;
        break;
      }
      e.mode = F;
      break;
    case Ge:
      for (; s < 14; ) {
        if (l === 0) break e;
        l--, n += o[r++] << s, s += 8;
      }
      if (e.nlen = (n & 31) + 257, n >>>= 5, s -= 5, e.ndist = (n & 31) + 1, n >>>= 5, s -= 5, e.ncode = (n & 15) + 4, n >>>= 4, s -= 4, e.nlen > 286 || e.ndist > 30) {
        t.msg = "too many length or distance symbols", e.mode = _;
        break;
      }
      e.have = 0, e.mode = Ye;
    case Ye:
      for (; e.have < e.ncode; ) {
        for (; s < 3; ) {
          if (l === 0) break e;
          l--, n += o[r++] << s, s += 8;
        }
        e.lens[D[e.have++]] = n & 7, n >>>= 3, s -= 3;
      }
      for (; e.have < 19; ) e.lens[D[e.have++]] = 0;
      if (e.lencode = e.lendyn, e.lenbits = 7, b = { bits: e.lenbits }, A = q(ia, e.lens, 0, 19, e.lencode, 0, e.work, b), e.lenbits = b.bits, A) {
        t.msg = "invalid code lengths set", e.mode = _;
        break;
      }
      e.have = 0, e.mode = We;
    case We:
      for (; e.have < e.nlen + e.ndist; ) {
        for (; S = e.lencode[n & (1 << e.lenbits) - 1], p = S >>> 24, g = S >>> 16 & 255, d = S & 65535, !(p <= s); ) {
          if (l === 0) break e;
          l--, n += o[r++] << s, s += 8;
        }
        if (d < 16)
          n >>>= p, s -= p, e.lens[e.have++] = d;
        else {
          if (d === 16) {
            for (E = p + 2; s < E; ) {
              if (l === 0) break e;
              l--, n += o[r++] << s, s += 8;
            }
            if (n >>>= p, s -= p, e.have === 0) {
              t.msg = "invalid bit length repeat", e.mode = _;
              break;
            }
            y = e.lens[e.have - 1], c = 3 + (n & 3), n >>>= 2, s -= 2;
          } else if (d === 17) {
            for (E = p + 3; s < E; ) {
              if (l === 0) break e;
              l--, n += o[r++] << s, s += 8;
            }
            n >>>= p, s -= p, y = 0, c = 3 + (n & 7), n >>>= 3, s -= 3;
          } else {
            for (E = p + 7; s < E; ) {
              if (l === 0) break e;
              l--, n += o[r++] << s, s += 8;
            }
            n >>>= p, s -= p, y = 0, c = 11 + (n & 127), n >>>= 7, s -= 7;
          }
          if (e.have + c > e.nlen + e.ndist) {
            t.msg = "invalid bit length repeat", e.mode = _;
            break;
          }
          for (; c--; ) e.lens[e.have++] = y;
        }
      }
      if (e.mode === _) break;
      if (e.lens[256] === 0) {
        t.msg = "invalid code -- missing end-of-block", e.mode = _;
        break;
      }
      if (e.lenbits = 9, b = { bits: e.lenbits }, A = q(ft, e.lens, 0, e.nlen, e.lencode, 0, e.work, b), e.lenbits = b.bits, A) {
        t.msg = "invalid literal/lengths set", e.mode = _;
        break;
      }
      if (e.distbits = 6, e.distcode = e.distdyn, b = { bits: e.distbits }, A = q(pt, e.lens, e.nlen, e.ndist, e.distcode, 0, e.work, b), e.distbits = b.bits, A) {
        t.msg = "invalid distances set", e.mode = _;
        break;
      }
      if (e.mode = Q, a === 6) break e;
    case Q:
      e.mode = ee;
    case ee:
      if (l >= 6 && k >= 258) {
        t.next_out = u, t.avail_out = k, t.next_in = r, t.avail_in = l, e.hold = n, e.bits = s, Qt(t, f), u = t.next_out, i = t.output, k = t.avail_out, r = t.next_in, o = t.input, l = t.avail_in, n = e.hold, s = e.bits, e.mode === F && (e.back = -1);
        break;
      }
      for (e.back = 0; S = e.lencode[n & (1 << e.lenbits) - 1], p = S >>> 24, g = S >>> 16 & 255, d = S & 65535, !(p <= s); ) {
        if (l === 0) break e;
        l--, n += o[r++] << s, s += 8;
      }
      if (g && (g & 240) === 0) {
        for (w = p, P = g, C = d; S = e.lencode[C + ((n & (1 << w + P) - 1) >> w)], p = S >>> 24, g = S >>> 16 & 255, d = S & 65535, !(w + p <= s); ) {
          if (l === 0) break e;
          l--, n += o[r++] << s, s += 8;
        }
        n >>>= w, s -= w, e.back += w;
      }
      if (n >>>= p, s -= p, e.back += p, e.length = d, g === 0) {
        e.mode = Ze;
        break;
      }
      if (g & 32) {
        e.back = -1, e.mode = F;
        break;
      }
      if (g & 64) {
        t.msg = "invalid literal/length code", e.mode = _;
        break;
      }
      e.extra = g & 15, e.mode = Ke;
    case Ke:
      if (e.extra) {
        for (E = e.extra; s < E; ) {
          if (l === 0) break e;
          l--, n += o[r++] << s, s += 8;
        }
        e.length += n & (1 << e.extra) - 1, n >>>= e.extra, s -= e.extra, e.back += e.extra;
      }
      e.was = e.length, e.mode = qe;
    case qe:
      for (; S = e.distcode[n & (1 << e.distbits) - 1], p = S >>> 24, g = S >>> 16 & 255, d = S & 65535, !(p <= s); ) {
        if (l === 0) break e;
        l--, n += o[r++] << s, s += 8;
      }
      if ((g & 240) === 0) {
        for (w = p, P = g, C = d; S = e.distcode[C + ((n & (1 << w + P) - 1) >> w)], p = S >>> 24, g = S >>> 16 & 255, d = S & 65535, !(w + p <= s); ) {
          if (l === 0) break e;
          l--, n += o[r++] << s, s += 8;
        }
        n >>>= w, s -= w, e.back += w;
      }
      if (n >>>= p, s -= p, e.back += p, g & 64) {
        t.msg = "invalid distance code", e.mode = _;
        break;
      }
      e.offset = d, e.extra = g & 15, e.mode = Je;
    case Je:
      if (e.extra) {
        for (E = e.extra; s < E; ) {
          if (l === 0) break e;
          l--, n += o[r++] << s, s += 8;
        }
        e.offset += n & (1 << e.extra) - 1, n >>>= e.extra, s -= e.extra, e.back += e.extra;
      }
      if (e.offset > e.dmax) {
        t.msg = "invalid distance too far back", e.mode = _;
        break;
      }
      e.mode = Xe;
    case Xe:
      if (k === 0) break e;
      if (c = f - k, e.offset > c) {
        if (c = e.offset - c, c > e.whave && e.sane) {
          t.msg = "invalid distance too far back", e.mode = _;
          break;
        }
        c > e.wnext ? (c -= e.wnext, T = e.wsize - c) : T = e.wnext - c, c > e.length && (c = e.length), x = e.window;
      } else
        x = i, T = u - e.offset, c = e.length;
      c > k && (c = k), k -= c, e.length -= c;
      do
        i[u++] = x[T++];
      while (--c);
      e.length === 0 && (e.mode = ee);
      break;
    case Ze:
      if (k === 0) break e;
      i[u++] = e.length, k--, e.mode = ee;
      break;
    case ge:
      if (e.wrap) {
        for (; s < 32; ) {
          if (l === 0) break e;
          l--, n |= o[r++] << s, s += 8;
        }
        if (f -= k, t.total_out += f, e.total += f, e.wrap & 4 && f && (t.adler = e.check = e.flags ? N(e.check, i, f, u - f) : Ce(e.check, i, f, u - f)), f = k, e.wrap & 4 && (e.flags ? n : et(n)) !== e.check) {
          t.msg = "incorrect data check", e.mode = _;
          break;
        }
        n = 0, s = 0;
      }
      e.mode = Ve;
    case Ve:
      if (e.wrap && e.flags) {
        for (; s < 32; ) {
          if (l === 0) break e;
          l--, n += o[r++] << s, s += 8;
        }
        if (e.wrap & 4 && n !== (e.total & 4294967295)) {
          t.msg = "incorrect length check", e.mode = _;
          break;
        }
        n = 0, s = 0;
      }
      e.mode = Qe;
    case Qe:
      A = 1;
      break e;
    case _:
      A = -3;
      break e;
    case mt:
      return -4;
    case gt:
    default:
      return -2;
  }
  return t.next_out = u, t.avail_out = k, t.next_in = r, t.avail_in = l, e.hold = n, e.bits = s, (e.wsize || f !== t.avail_out && e.mode < _ && (e.mode < ge || a !== 4)) && kt(t, t.output, t.next_out, f - t.avail_out), v -= t.avail_in, f -= t.avail_out, t.total_in += v, t.total_out += f, e.total += f, e.wrap & 4 && f && (t.adler = e.check = e.flags ? N(e.check, i, f, t.next_out - f) : Ce(e.check, i, f, t.next_out - f)), t.data_type = e.bits + (e.last ? 64 : 0) + (e.mode === F ? 128 : 0) + (e.mode === Q || e.mode === me ? 256 : 0), (v === 0 && f === 0 || a === 4) && A === 0 && (A = -5), A;
}, at = (t) => {
  if (W(t)) return -2;
  let a = t.state;
  return a.window && (a.window = null), t.state = null, 0;
}, ot = (t, a) => {
  const e = a.length;
  let o, i, r;
  return W(t) || (o = t.state, o.wrap !== 0 && o.mode !== oe) ? -2 : o.mode === oe && (i = 1, i = Ce(i, a, e, 0), i !== o.check) ? -3 : (r = kt(t, a, e, e), r ? (o.mode = mt, -4) : (o.havedict = 1, 0));
}, ha = class {
  constructor() {
    this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
  }
}, fa = (t) => {
  const a = new Uint8Array(t.reduce((o, i) => o + i.length, 0));
  let e = 0;
  for (const o of t)
    a.set(o, e), e += o.length;
  return a;
}, it = Object.prototype.toString, pa = {
  chunkSize: 1024 * 64,
  windowBits: 15,
  raw: !1,
  dictionary: /* @__PURE__ */ new Uint8Array(0)
}, ma = class {
  options;
  /**
  * Error code after inflate finishes. {@link Z_OK} on success.
  * Should be checked when broken data is possible.
  */
  err;
  /** Error message, if {@link Inflate.err} is not {@link Z_OK}. */
  msg;
  /**
  * `true` once the compressed stream has ended. A stream may end before the
  * caller's data does (trailing bytes), so check this to know when to stop
  * pushing - further {@link Inflate.push} calls are no-ops.
  */
  ended;
  started;
  /**
  * Chunks of output data, if {@link Inflate.onData} not overridden.
  * @internal
  */
  chunks;
  strm;
  /**
  * Uncompressed result, generated by default {@link Inflate.onData}
  * and {@link Inflate.onEnd} handlers. Filled after you push last chunk
  * (call {@link Inflate.push} with {@link Z_FINISH} / `true` param).
  */
  result;
  /**
  * Creates a new inflator instance with the specified params. Throws an
  * exception on bad params. See {@link InflateOptions} for the list of
  * supported options.
  *
  * By default, when no options are set, the deflate/gzip data format is
  * autodetected via the wrapper header.
  *
  * @example
  * ```javascript
  * import { Inflate } from 'pako'
  *
  * const chunk1 = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9])
  * const chunk2 = new Uint8Array([10, 11, 12, 13, 14, 15, 16, 17, 18, 19])
  *
  * const inflate = new Inflate({ level: 3 })
  *
  * inflate.push(chunk1, false)
  * inflate.push(chunk2, true)  // true -> last chunk
  *
  * if (inflate.err) throw new Error(inflate.err)
  *
  * console.log(inflate.result)
  * ```
  */
  constructor(t = {}) {
    this.options = Object.assign({}, pa, t);
    const a = this.options;
    a.raw && a.windowBits >= 0 && a.windowBits < 16 && (a.windowBits = -a.windowBits, a.windowBits === 0 && (a.windowBits = -15)), a.windowBits >= 0 && a.windowBits < 16 && !t.windowBits && (a.windowBits += 32), a.windowBits > 15 && a.windowBits < 48 && (a.windowBits & 15) === 0 && (a.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.started = !1, this.chunks = [], this.result = /* @__PURE__ */ new Uint8Array(0), this.strm = new ha(), this.strm.avail_out = 0;
    let e = da(this.strm, a.windowBits);
    if (e !== 0) throw new Error(he[e]);
    it.call(a.dictionary) === "[object ArrayBuffer]" && (a.dictionary = new Uint8Array(a.dictionary));
    const o = a.dictionary;
    if (a.raw && o.length && (e = ot(this.strm, o), e !== 0))
      throw new Error(he[e]);
  }
  /**
  * Sends input data to the inflate pipe, generating {@link Inflate.onData} calls
  * with new output chunks. Returns `true` on success. If end of stream is
  * detected, {@link Inflate.onEnd} will be called.
  *
  * `flush_mode` is not needed for normal operation, because end of stream
  * is detected automatically. Pass {@link Z_SYNC_FLUSH} to force the decoder
  * to emit all currently available output — handy when you need to decode
  * data frame-by-frame from a long-running stream.
  *
  * On failure, calls {@link Inflate.onEnd} with the error code and returns false.
  *
  * Once the stream has ended (a compressed stream may end before your data
  * does), further `push` calls are no-ops and return whether the decode
  * finished successfully. The final outcome is in {@link Inflate.result},
  * {@link Inflate.err} and {@link Inflate.msg}.
  *
  * @param flush_mode 0..6 for corresponding {@link Z_NO_FLUSH}..{@link Z_TREES}
  *   flush modes. See constants. Skipped or `false` means {@link Z_NO_FLUSH},
  *   `true` means {@link Z_FINISH}.
  *
  * @example
  * ```javascript
  * push(chunk, false) // push one of data chunks
  * ...
  * push(chunk, true)  // push last chunk
  * ```
  */
  push(t, a = !1) {
    const e = this.strm, o = this.options.chunkSize;
    let i, r, u;
    if (this.ended) return this.err === 0;
    for (typeof a == "number" ? r = a : r = a === !0 ? 4 : 0, it.call(t) === "[object ArrayBuffer]" ? e.input = new Uint8Array(t) : e.input = t, e.next_in = 0, e.avail_in = e.input.length, this.started || (this.started = !0, this.onStart(e)); ; ) {
      if (e.avail_out === 0 && (e.output = new Uint8Array(o), e.next_out = 0, e.avail_out = o), i = ve(e, r), i === 2) {
        const l = this.options.dictionary;
        l.length && (i = ot(e, l), i === 0 ? i = ve(e, r) : i === -3 && (i = 2));
      }
      for (; e.avail_in > 0 && i === 1 && e.state.wrap & 2 && e.state.flags !== 0 && e.input[e.next_in] !== 0; )
        wt(e), i = ve(e, r);
      if (i === -2 || i === -3 || i === 2 || i === -4) break;
      if (u = e.avail_out, e.next_out && (e.avail_out === 0 || i === 1 || r > 0) && (this.onData(e.output.length === e.next_out ? e.output : e.output.subarray(0, e.next_out)), e.avail_out = 0, e.next_out = 0), !((i === 0 || i === -5) && u === 0)) {
        if (i === 1) {
          i = at(this.strm);
          break;
        }
        if (e.avail_in === 0) {
          if (r === 4) {
            i = at(this.strm), i === 0 && (i = -5);
            break;
          }
          return !0;
        }
      }
    }
    return this.err = i, this.msg = e.msg || he[i], this.ended = !0, this.onEnd(i), i === 0;
  }
  /**
  * Called once before the first low-level inflate call.
  *
  * Override this handler to attach low-level inflate state, for example to read
  * gzip header metadata:
  *
  * ```javascript
  * import { Inflate, GZheader, zlibInflateGetHeader } from 'pako'
  *
  * const inflator = new Inflate()
  *
  * inflator.onStart = function (strm) {
  *   this.header = new GZheader()
  *   zlibInflateGetHeader(strm, this.header)
  * }
  *
  * inflator.push(data, true)
  * console.log(inflator.header.name)
  * ```
  */
  onStart(t) {
  }
  /**
  * By default, stores data blocks in the {@link Inflate.chunks} property and glues
  * them in {@link Inflate.onEnd}. Override this handler if you need another behaviour.
  *
  * @param chunk output data.
  */
  onData(t) {
    this.chunks.push(t);
  }
  /**
  * Called after you tell inflate that the input stream is
  * complete ({@link Z_FINISH}). By default, joins the collected {@link Inflate.chunks},
  * frees memory and fills the {@link Inflate.result} property.
  *
  * @param status inflate status. {@link Z_OK} on success, other if not.
  */
  onEnd(t) {
    t === 0 && (this.result = fa(this.chunks)), this.chunks = [];
  }
};
const ga = (t) => t === void 0 ? void 0 : typeof structuredClone == "function" ? structuredClone(t) : JSON.parse(JSON.stringify(t)), G = Object.freeze({ courses: 8, lifts: 5 }), ie = ga, ne = () => new Error(h("保存データの形式を確認してください")), wa = (t) => ({ surface: t.surface, jumps: t.jumps, gates: t.gates, ...t.ramps !== void 0 ? { ramps: ie(t.ramps) } : {} }), ka = (t) => ({ bottom: ie(t.bottom), top: ie(t.top), type: t.type, wheels: t.wheels });
function nt(t, a) {
  if (!Array.isArray(t) || t.length < 1 || t.length > a) throw ne();
  const e = /* @__PURE__ */ new Set();
  for (const o of t) {
    if (!o || typeof o.id != "string" || !/^[a-zA-Z0-9_-]{1,64}$/.test(o.id) || e.has(o.id)) throw ne();
    e.add(o.id);
  }
}
function va(t) {
  if (!t || ![1, 2].includes(t.version) || (nt(t.courses, G.courses), nt(t.lifts, G.lifts), t.courses.some((a) => !Array.isArray(a.points)))) throw ne();
  return {
    version: 2,
    stage: t.stage,
    custom: t.custom,
    name: t.name,
    courses: t.courses.map((a) => ({ id: a.id, name: a.name ?? "", points: ie(a.points), ...wa(a) })),
    lifts: t.lifts.map((a) => ({ id: a.id, ...ka(a) }))
  };
}
const rt = (() => {
  const o = 4.5 + 10 * Math.sin(1.05), i = 10 * (1 - Math.cos(1.05));
  return { flat: 4.5, radius: 10, angle: 1.05, lip: o, wall: i, deck: o + 3.5, outer: o + 3.5 + 6 };
})(), ba = {
  kicker: { name: h("ジャンプ台"), length: 12, height: 2.4, width: 14, lift: [5.5, 9], soft: 11, clear: 60, alpine: !1 },
  big: { name: h("ビッグキッカー"), length: 22, height: 5, width: 16, lift: [8, 13], soft: 17, clear: 110, alpine: !0 },
  mega: { name: h("妄想メガジャンプ"), length: 40, height: 12, width: 22, lift: [16, 22], soft: 30, clear: 200, alpine: !0, slow: 0.6 },
  // 遊具（feature）: along は中心。踏み切りではなく地形そのものを作り、壁や頂上から自然に飛ぶ
  pipe: { name: h("妄想ハーフパイプ"), feature: !0, length: 110, height: rt.wall, width: rt.outer, soft: 22, alpine: !0 },
  kakigori: { name: h("かき氷の山"), feature: !0, length: 66, height: 10, width: 22, soft: 18, alpine: !0 }
}, vt = 8, ya = {
  hakuba: { name: h("白馬"), area: h("長野"), tag: h("アルプスの長い斜面"), description: h("稜線を眺めながら、ロッジを目指す。"), file: "terrain" },
  furano: { name: h("富良野"), area: h("北海道"), tag: h("北の山並み"), description: h("北海道の山肌に引いた、長い一本。"), file: "furano" },
  zao: { name: h("蔵王"), area: h("山形・宮城"), tag: h("山から谷へ"), description: h("起伏を読みながら滑る、東北の山。"), file: "zao" },
  fuji: { name: h("富士山"), area: h("山梨・静岡"), tag: h("妄想・火山ダウンヒル"), description: h("大きな標高差を一気に。雪の富士山を遊び場に。"), file: "fuji", imaginary: !0 },
  aso: { name: h("阿蘇"), area: h("熊本"), tag: h("妄想・カルデラの雪山"), description: h("九州の火山を雪景色に変えて滑る。"), file: "aso", imaginary: !0 },
  niseko: { name: h("ニセコ"), area: h("北海道"), tag: h("アンヌプリの雪山"), description: h("ニセコアンヌプリの地形で、自分のラインを描く。"), file: "niseko" },
  nozawa: { name: h("野沢温泉"), area: h("長野"), tag: h("毛無山の長い斜面"), description: h("山頂から麓へ、起伏をつないで滑る。"), file: "nozawa" },
  myoko: { name: h("妙高"), area: h("新潟"), tag: h("火山の大きな斜面"), description: h("妙高山の地形を、自分だけのコースへ。"), file: "myoko" },
  appi: { name: h("安比高原"), area: h("岩手"), tag: h("北東北の広い斜面"), description: h("前森山の地形を見ながら滑り下りる。"), file: "appi" },
  shiga: { name: h("志賀高原"), area: h("長野"), tag: h("2索道・3コースの見本"), description: h("2本の索道と3本のコースを乗り継ぐ、高原の回遊。"), file: "shiga" },
  hakkoda: { name: h("八甲田"), area: h("青森"), tag: h("北の火山の山並み"), description: h("八甲田の峰々を見渡しながら、長い斜面を下る。"), file: "hakkoda" },
  tateyama: { name: h("立山"), area: h("富山"), tag: h("妄想・3,000m級の稜線"), description: h("北アルプスの高い稜線から、一気に谷へ。"), file: "tateyama", imaginary: !0 },
  daisen: { name: h("大山"), area: h("鳥取"), tag: h("中国地方の最高峰"), description: h("西日本の高い山を、雪の斜面に変えて滑る。"), file: "daisen" }
};
h("クルージング"), h("滑らかな斜面で景色とターンを楽しむ"), h("ダウンヒル"), h("こぶなし・旗門つき。直滑降姿勢で加速"), h("ジャンプツアー"), h("２つのジャンプ台をつなぎ、空中でバック転"), h("こぶチャレンジ"), h("凹凸と細かな切り返しを楽しむ"), h("こぶ＋ジャンプ"), h("凹凸のリズムから、大きなジャンプへ"), h("パウダーラン"), h("Alpine · エッジで舞う深雪の演出"), h("妄想ビッグエア"), h("Alpine · ビッグキッカーから妄想メガジャンプへ"), h("妄想ハーフパイプ"), h("Alpine · 長いハーフパイプを２本。壁を登って空中へ"), h("かき氷の山"), h("Alpine · ３つのかき氷の山を越えて跳ぶ");
const Sa = 1, K = Object.freeze({ payloadCharacters: 8e3, inputCharacters: 8192, jsonBytes: 32768, coordinate: 4e3, name: 24 }), bt = "https://thivanao-jp.github.io/app-support/mousou-ski/c/", yt = "mousouski://c";
class H extends Error {
  constructor(a, e) {
    super(e), this.name = "ShareCodecError", this.code = a;
  }
}
const st = (t, a) => Object.prototype.hasOwnProperty.call(t, a), R = () => {
  throw new H("schema", h("共有データの形式を確認してください"));
}, de = () => new H("size", h("共有データが上限を超えています。配置を減らしてください。")), be = (t, a) => t.includes(a) || R(), O = (t, a, e) => ((!Array.isArray(t) || t.length < a || t.length > e) && R(), t), j = (t, a = K.coordinate) => ((!Number.isSafeInteger(t) || Math.abs(t) > a) && R(), t), lt = (t) => ((!Number.isFinite(t) || Math.abs(t) > K.coordinate) && R(), t), ye = (t) => ((!t || typeof t != "object") && R(), { x: lt(t.x), z: lt(t.z) }), ct = (t) => (typeof t != "boolean" && R(), t), re = (t) => ((typeof t != "string" || t.length > K.name || /[\u0000-\u001f\u007f-\u009f]/.test(t)) && R(), new TextDecoder().decode(new TextEncoder().encode(t)) !== t && R(), t.trim());
function Ca(t) {
  let a;
  try {
    a = va(t);
  } catch {
    R();
  }
  (typeof a.stage != "string" || !st(ya, a.stage)) && R(), a.custom = !0, a.name = re(a.name ?? ""), O(a.courses, 1, G.courses), O(a.lifts, 1, G.lifts);
  for (const e of a.courses)
    if (e.name = re(e.name), e.surface === void 0 && (e.surface = "groomed"), e.jumps === void 0 && (e.jumps = !1), e.gates === void 0 && (e.gates = !1), be(["groomed", "moguls", "powder"], e.surface), ct(e.jumps), ct(e.gates), e.points = O(e.points, 2, 30).map(ye), e.ramps != null) {
      let o = 0;
      for (let i = 1; i < e.points.length; i++) o += Math.hypot(e.points[i].x - e.points[i - 1].x, e.points[i].z - e.points[i - 1].z);
      e.ramps = O(e.ramps, 0, vt).map((i) => ((!i || typeof i.kind != "string" || !st(ba, i.kind) || !Number.isFinite(i.along) || i.along < 0 || i.along > Math.ceil(o)) && R(), { kind: i.kind, along: Math.round(i.along) }));
    } else delete e.ramps;
  for (const e of a.lifts)
    e.wheels === void 0 && (e.wheels = 4), be(["gondola", "chair", "quad"], e.type), be(["auto", 4, 6, 8], e.wheels), e.bottom = ye(e.bottom), e.top = ye(e.top);
  return a;
}
function Aa(t) {
  if (O(t, 5, 5), t[0] !== Sa) throw new H("version", h("この共有形式には対応していません"));
  typeof t[1] != "string" && R(), re(t[2]);
  const a = O(t[3], 1, G.courses).map((o) => {
    O(o, 7, 7), re(o[1]);
    const i = O(o[5], 4, 60);
    i.length % 2 && R();
    let r = 0, u = 0;
    const l = [];
    for (let n = 0; n < i.length; n += 2)
      r += j(i[n], 8e3), u += j(i[n + 1], 8e3), l.push({ x: j(r), z: j(u) });
    const k = o[6] === null ? void 0 : O(o[6], 0, vt).map((n) => (O(n, 2, 2), { kind: n[0], along: j(n[1], 4e5) }));
    return { id: o[0], name: o[1], surface: o[2], jumps: o[3], gates: o[4], points: l, ...k === void 0 ? {} : { ramps: k } };
  }), e = O(t[4], 1, G.lifts).map((o) => {
    O(o, 7, 7);
    const i = j(o[3]), r = j(o[4]);
    return { id: o[0], type: o[1], wheels: o[2], bottom: { x: i, z: r }, top: { x: j(i + j(o[5], 8e3)), z: j(r + j(o[6], 8e3)) } };
  });
  return Ca({ version: 2, stage: t[1], name: t[2], custom: !0, courses: a, lifts: e });
}
const Pa = (t) => btoa(String.fromCharCode(...t)).replaceAll("+", "-").replaceAll("/", "_").replace(/=+$/, "");
function Ta(t) {
  let a;
  try {
    a = atob(t.replaceAll("-", "+").replaceAll("_", "/") + "=".repeat((4 - t.length % 4) % 4));
  } catch {
    R();
  }
  const e = Uint8Array.from(a, (o) => o.charCodeAt(0));
  return Pa(e) !== t && R(), e;
}
function te(t) {
  if (typeof t != "string" && R(), t.length > K.payloadCharacters) throw de();
  if (!/^1\.[A-Za-z0-9_-]+$/.test(t)) {
    if (/^\d+\./.test(t) && !t.startsWith("1.")) throw new H("version", h("この共有形式には対応していません"));
    R();
  }
  return t;
}
function St(t) {
  if (typeof t != "string" && R(), t.length > K.inputCharacters) throw de();
  const a = t.trim();
  if (a.startsWith("#")) return te(a.slice(1));
  if (!a.includes("://")) return te(a);
  let e;
  try {
    e = new URL(a);
  } catch {
    R();
  }
  const o = e.href.split("#")[0];
  return (o !== bt && o !== yt || e.username || e.password || e.search) && R(), te(e.hash.slice(1));
}
function dt(t) {
  return te(t), { web: bt + "#" + t, app: yt + "#" + t };
}
async function ut(t, a, e) {
  const o = new ma({ windowBits: 15, chunkSize: 4096 }), i = [];
  let r = 0, u;
  o.onStart = (n) => {
    u = n;
  }, o.onData = (n) => {
    if (r += n.length, r > e) throw de();
    i.push(n);
  };
  try {
    if (!o.push(t, !0) || o.err || !o.ended || a && u?.avail_in !== 0) throw Error("Invalid zlib stream");
  } catch (n) {
    throw n instanceof H ? n : new H("compression", h("共有データが壊れているか、途中で切れています"));
  }
  const l = new Uint8Array(r);
  let k = 0;
  for (const n of i)
    l.set(n, k), k += n.length;
  return l;
}
async function xa(t, a) {
  const e = K.jsonBytes, o = globalThis.DecompressionStream;
  if (typeof o != "function") return ut(t, a, e);
  let i;
  try {
    i = new o("deflate");
  } catch {
    return ut(t, a, e);
  }
  const r = new Blob([t]).stream().pipeThrough(i).getReader(), u = [];
  let l = 0;
  try {
    for (; ; ) {
      const { value: s, done: v } = await r.read();
      if (v) break;
      if (l += s.byteLength, l > e) throw de();
      u.push(s);
    }
  } catch (s) {
    throw s instanceof H ? s : new H("compression", h("共有データが壊れているか、途中で切れています"));
  } finally {
    await r.cancel().catch(() => {
    }), r.releaseLock();
  }
  const k = new Uint8Array(l);
  let n = 0;
  for (const s of u)
    k.set(s, n), n += s.byteLength;
  return k;
}
async function Ea(t) {
  const a = St(t), e = await xa(Ta(a.slice(2)), !0);
  let o;
  try {
    o = JSON.parse(new TextDecoder("utf-8", { fatal: !0 }).decode(e));
  } catch {
    R();
  }
  return Aa(o);
}
function _a(t) {
  return t.slice(1).reduce((a, e, o) => a + Math.hypot(e.x - t[o].x, e.z - t[o].z), 0);
}
function La(t, a, e = null) {
  const o = t.getContext("2d"), i = t.width, r = t.height, u = [...a.courses.flatMap((p) => p.points), ...a.lifts.flatMap((p) => [p.bottom, p.top])], l = Math.min(...u.map((p) => p.x)), k = Math.max(...u.map((p) => p.x)), n = Math.min(...u.map((p) => p.z)), s = Math.max(...u.map((p) => p.z)), v = Math.max(300, k - l, s - n) + 240, f = (l + k) / 2, c = (n + s) / 2;
  if (o.fillStyle = "#edf5f6", o.fillRect(0, 0, i, r), e) {
    const g = [];
    for (let P = 0; P < 64; P++) for (let C = 0; C < 64; C++) g.push(e.height(f + (C / 63 - 0.5) * v, c + (P / 63 - 0.5) * v));
    const d = Math.min(...g), w = Math.max(...g);
    for (let P = 0; P < 64; P++) for (let C = 0; C < 64; C++) {
      const y = (g[P * 64 + C] - d) / (w - d || 1);
      o.fillStyle = `rgb(${Math.round(177 + y * 57)} ${Math.round(205 + y * 31)} ${Math.round(213 + y * 24)})`, o.fillRect(C * i / 64, P * r / 64, Math.ceil(i / 64), Math.ceil(r / 64));
    }
  } else {
    o.strokeStyle = "#c5d7dd", o.lineWidth = 1;
    for (let p = 1; p < 8; p++)
      o.beginPath(), o.moveTo(p * i / 8, 0), o.lineTo(p * i / 8, r), o.moveTo(0, p * r / 8), o.lineTo(i, p * r / 8), o.stroke();
  }
  const T = (p) => [(p.x - f) / v * i + i / 2, (p.z - c) / v * r + r / 2], x = (p, g, d = !1) => {
    o.strokeStyle = g, o.lineWidth = d ? 3 : 4, o.setLineDash(d ? [9, 5] : []), o.beginPath(), p.forEach((w, P) => {
      const [C, y] = T(w);
      P ? o.lineTo(C, y) : o.moveTo(C, y);
    }), o.stroke(), o.setLineDash([]);
  }, S = ["#ec733b", "#b86a29", "#ba465a", "#71579d", "#486f33", "#267981", "#9b542b", "#627098"];
  a.courses.forEach((p, g) => x(p.points, S[g % S.length]));
  for (const p of a.lifts) {
    x([p.bottom, p.top], "#176e86", !0);
    for (const g of [p.bottom, p.top]) {
      const [d, w] = T(g);
      o.fillStyle = "#176e86", o.fillRect(d - 5, w - 5, 10, 10);
    }
  }
  for (const p of a.courses) for (const [g, d] of [[p.points[0], "S"], [p.points.at(-1), "G"]]) {
    const [w, P] = T(g);
    o.fillStyle = "#fff", o.strokeStyle = "#c65c2e", o.lineWidth = 2, o.beginPath(), o.arc(w, P, 9, 0, Math.PI * 2), o.fill(), o.stroke(), o.fillStyle = "#a74a25", o.font = "bold 11px system-ui", o.textAlign = "center", o.textBaseline = "middle", o.fillText(d, w, P);
  }
}
const L = (t) => document.getElementById(t), Ct = { ja: { title: "共有されたスキー場", brand: "妄想スキー場", checking: "配置を確認しています…", empty: "共有リンクを開くと、ここにコースと索道の簡易図が表示されます。", invalid: "この共有リンクを読み込めません。リンク全体をもう一度コピーしてください。新しい形式の場合はアプリの更新も確認してください。", legend: "実線：コース / 破線：索道　S：始点 / G：終点", validation: "このページではデータの形式を確認し、座標から線を描いています。保存・滑走する前に、アプリが実標高で配置を検証します。", open: "アプリで開く", copy: "リンクをコピー", copied: "リンクをコピーしました。", manual: "リンクを選択しました。コピーの操作をしてください。", caption: "共有リンク", receive: "リンクの受け取り・保存・滑走は無料です。アプリが開かない場合は、リンクをコピーし、アプリの「リンクを受け取る」へ貼り付けてください。", store: "App Storeで見る", storeHelp: "受け取り機能に対応したバージョンの妄想スキー場が必要です。インストール後、このページに戻ってリンクを開いてください。", privacy: "プライバシーポリシー", privacyNote: "配置はURLの # 以降に含まれ、このページ内で読み取ります。このページから配置をサーバーに送信したり、アクセス解析に使ったりする処理はありません。リンクを共有した相手や利用する共有サービスは内容を読めます。", fiction: "実地形上の架空のコースです。現地の滑走ルートを示すものではありません。", unnamed: "名前なしのスキー場", course: (t, a, e) => `コース ${t}：${a || "名前なし"} · 約${e}m`, counts: (t, a) => `コース ${t}本 / 索道 ${a}本` }, en: { title: "Shared resort", brand: "Daydream Ski", checking: "Checking layout…", empty: "Open a shared link to see a plan of its courses and lifts here.", invalid: "Could not read this link. Copy the entire link again. For a newer format, also check for an app update.", legend: "Solid: courses / Dashed: lifts · S: start / G: goal", validation: "This page checks the data format and draws lines from its coordinates. Before saving or skiing, the app validates the layout against actual elevation data.", open: "Open in app", copy: "Copy link", copied: "Link copied.", manual: "Link selected. Use the Copy command.", caption: "Shared link", receive: "Receiving, saving, and skiing shared resorts are free. If the app does not open, copy this link and paste it into “Receive a link” in the app.", store: "View on the App Store", storeHelp: "Requires a version of Daydream Ski that supports receiving links. After installing, return to this page to open the link.", privacy: "Privacy policy", privacyNote: "The layout is stored after # in the URL and read on this page. This page does not send the layout to a server or use analytics. People and sharing services that receive the link can read its contents.", fiction: "Fictional courses on real terrain. These are not routes for skiing at the actual location.", unnamed: "Unnamed resort", course: (t, a, e) => `Course ${t}: ${a || "Unnamed"} · about ${e}m`, counts: (t, a) => `${t} courses / ${a} lifts` } }, Ra = { hakuba: ["白馬", "Hakuba"], niseko: ["ニセコ", "Niseko"], furano: ["富良野", "Furano"], zao: ["蔵王", "Zao"], fuji: ["富士山", "Mt. Fuji"], aso: ["阿蘇", "Aso"], appi: ["安比高原", "Appi Kogen"], myoko: ["妙高", "Myoko"], nozawa: ["野沢温泉", "Nozawa Onsen"], shiga: ["志賀高原", "Shiga Kogen"], hakkoda: ["八甲田", "Hakkoda"], tateyama: ["立山", "Tateyama"], daisen: ["大山", "Daisen"] };
let I = navigator.language.startsWith("ja") ? "ja" : "en", B = null, J = null, X = "empty";
function se() {
  const t = Ct[I];
  document.documentElement.lang = I, document.title = t.brand + " · " + t.title, L("locale").value = I;
  for (const [a, e] of [["brand", "brand"], ["title", "title"], ["legend", "legend"], ["validation", "validation"], ["open-app", "open"], ["copy", "copy"], ["link-caption", "caption"], ["receive-help", "receive"], ["store", "store"], ["store-help", "storeHelp"], ["privacy", "privacy"], ["privacy-note", "privacyNote"], ["fiction", "fiction"]]) L(a).textContent = t[e];
  L("language-label").textContent = I === "ja" ? "表示言語" : "Language", L("map").setAttribute("aria-label", I === "ja" ? "コースと索道の簡易図" : "Plan of courses and lifts"), L("status").textContent = X === "ready" ? "" : t[X], L("preview").hidden = !B, B && (L("region").textContent = Ra[B.stage]?.[I === "ja" ? 0 : 1] ?? B.stage, L("name").textContent = B.name || t.unnamed, L("counts").textContent = t.counts(B.courses.length, B.lifts.length), L("courses").replaceChildren(), B.courses.forEach((a, e) => {
    const o = document.createElement("li");
    o.textContent = t.course(e + 1, a.name, Math.round(_a(a.points))), L("courses").append(o);
  }), La(L("map"), B), L("open-app").href = dt(J).app, L("link").value = dt(J).web);
}
L("locale").onchange = () => {
  I = L("locale").value, se();
};
L("copy").onclick = async () => {
  const t = Ct[I];
  try {
    await navigator.clipboard.writeText(L("link").value), L("status").textContent = t.copied;
  } catch {
    L("link").focus(), L("link").select(), L("status").textContent = t.manual;
  }
};
se();
if (location.hash) {
  X = "checking", se();
  try {
    J = St(location.hash), B = await Ea(J), X = "ready";
  } catch {
    B = null, J = null, X = "invalid";
  }
  se();
}
