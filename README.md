# 🩺 衛生福利部彰化醫院 - 醫師值班及 On-Call 表查詢系統
> Doctor On-Call Schedule & Duty Query System (CHW)

專為衛生福利部彰化醫院臨床同仁、急診室、各病房護理站、專科護理師、值班醫師及總機轉診中心設計之**全院醫師值班、各專科 On-Call 與腸胃科會診即時速查系統**。

---

## 🌐 線上系統網址 (Online Access)

- **系統入口 (GitHub Pages)**：  
  👉 **[https://daidai082340.github.io/Doctor-On-Call-Schedule/](https://daidai082340.github.io/Doctor-On-Call-Schedule/)**
- **GitHub 專案倉庫**：  
  [https://github.com/DAIDAI082340/Doctor-On-Call-Schedule](https://github.com/DAIDAI082340/Doctor-On-Call-Schedule)

---

## 🔒 系統存取密碼 (Access Passcode)

為確保院內醫療排班資訊安全，本系統設有存取授權鎖：
- **預設存取密碼**：`0000`
- 首次開啟時輸入密碼即可進入；預設勾選「在此裝置保持登入」，同仁日後使用免重複輸入。
- 點擊網頁右上角「**🔒 鎖定系統**」按鈕可隨時恢復安全鎖定防護。

---

## 📋 系統核心功能特點 (Feature Highlights)

1. **🩺 全院醫師值班及 On-Call 即時查詢**：
   - **值班類別**：內科、外科、精神科值班。
   - **On-Call 專科**：一般外科、創傷骨科、泌尿科、骨科、神經外科、腎臟內科、心臟內科、神經內科、復健科、婦產科、胸腔外科、兒科。
   - **專科照會**：胸腔內科、風濕免疫科、安寧緩和醫療（分上午/下午專責）。
   - **日期快速導航**：今日一鍵跳轉、前後日切換、日曆選擇器、中文星期與假日標示。
2. **🫄 腸胃科會診排班專頁**：
   - 頂部導航一鍵切換專頁，中文姓名呈現（王棋新、蔡安順、楊智超）。
   - 週五上午單週（王棋新）／雙週（楊智超）會診排班自動辨識與顯示。
   - 全月會診日曆卡片總覽，今日排班高亮標示。
3. **📋 三合一晶片速查與一鍵複製**：
   - 每位值班與 On-Call 醫師完整串接：**【科別代碼】** ➔ **【醫師代碼】** ➔ **【PBX 簡碼】**。
   - 點擊任一標籤晶片即可秒級複製至剪貼簿，附帶右下角浮動提示。
4. **🎨 舒適視覺與 100% 零卷軸設計**：
   - 採用月石藍導航列（`#74A8C7`）與經典深海藍（`#002D62`）微軟正黑粗體排版。
   - 徹底封鎖水平卷軸（`overflow-x: hidden !important`），桌機、手機、平板皆能整齊單行滿版顯示。

---

## 📂 專案檔案結構 (Project Structure)

```text
Doctor-On-Call-Schedule/
├── PROJECT_RECORD.md                  # 專案詳細規格、架構設計與完整變更紀錄
├── README.md                          # 快速入門與功能說明文件
├── .gitignore                         # Git 版本控制忽略檔
├── index.html                         # 正式生產環境首頁 (包含密碼安全鎖 0000)
├── DEMO_預覽_醫師值班及OnCall表查詢.html # 本機預覽備份檔
├── DEMO_預覽_腸胃科會診排班.html       # 腸胃科專頁預覽檔
└── DEMO_預覽說明.txt                  # 離線預覽操作說明
```

---

## 🛠️ GitHub Pages 發布設定說明

若需確認或重新配置 GitHub Pages：
1. 進入 GitHub 專案倉庫：`Settings` ➔ 左側選單點擊 `Pages`。
2. 在 **Build and deployment** 區塊：
   - **Source**：選擇 `Deploy from a branch`。
   - **Branch**：選擇 `main` 分支，資料夾選擇 `/ (root)`。
   - 點擊 **Save**。
3. 約 1~2 分鐘後即可透過 GitHub Pages 網址連線使用。
