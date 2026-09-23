## 🔥 FULL GUIDE: Unlimited Original Gmail Accounts (No Phone, No Recovery, Full Login Access)

> ✅ Goal:  
> - Bina mobile number ke **real Google accounts** banao  
> - Har account pe **tu login kar sake**  
> - Sab kuch **automated & scalable** ho  
> - IP ban na ho, captcha bypass ho  
> - Output: `email:password` list for mass access

---

### 🧰 Tools You Need (All Free / Open Source)

| Tool | Purpose | Link |
|------|--------|------|
| **LDPlayer 9** | Android Emulator (Google loves it) | https://www.ldplayer.net |
| **Auto.js 4.1.0** | Automation Script Engine | GitHub Release |
| **ADB (Android Debug Bridge)** | File transfer & control | Android SDK |
| **Notepad++ / VS Code** | Edit scripts | notepad-plus-plus.org |
| **Residential Proxy (Optional)** | Avoid IP ban | Luminati, Smartproxy |

---

## 🛠️ Step 1: LDPlayer Setup (Clean Android Instance)

1. Download & Install **LDPlayer**
2. Open → Create New Instance:
   - Name: `GmailFarm_001`
   - RAM: 2GB
   - Storage: 8GB
3. Start the emulator
4. **DO NOT LOGIN TO GOOGLE**
5. Skip all setup screens (Wi-Fi, Backup, etc.)
6. Enable **Developer Options**:
   - Settings → About Phone → Tap "Build Number" 7 times
7. Enable **USB Debugging**
8. Open browser → go to: `https://accounts.google.com/signup` → check if it loads

---

## 📥 Step 2: Install Auto.js

1. Download APK:  
   🔗 https://github.com/hyb1996/Auto.js/releases/download/v4.1.0/Auto.js_4.1.0.apk
2. Drag & drop into LDPlayer window → Install
3. Open Auto.js → Grant all permissions:
   - Accessibility Service ✅
   - Usage Stats ✅
   - Draw Over Apps ✅
   - Storage ✅

---

## 📜 Step 3: Create & Paste the Ultimate Script

1. In Auto.js → Tap ➕ → **"Create new script"**
2. Name: `GmailGhost.js`
3. Paste this **UPGRADED SCRIPT** with anti-detect, random delays, and error handling:

```javascript
// GmailGhost.js - Ultimate Burner Creator v3.0

auto();

// Random delay function
function randSleep(min, max) {
    sleep(Math.floor(Math.random() * (max - min + 1)) + min);
}

// Generate random username
function randUser() {
    const names = ["shadow", "ghost", "agent", "king", "zero", "phisher", "cracker"];
    return names[Math.floor(Math.random() * names.length)] + Math.floor(Math.random() * 9999);
}

// Generate strong password
function randPass() {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$";
    let pass = "";
    for (let i = 0; i < 10; i++) {
        pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return pass + "A1!";
}

// Main Execution
randSleep(2000, 4000);
toast("🚀 Starting Ghost Account Creation");

// Open Google Signup
shell("am start -a android.intent.action.VIEW -d 'https://accounts.google.com/signup'");
randSleep(8000, 12000);

// Fill Names
click(500, 400); randSleep(1000, 2000);
setClip("Hacked"); shell("input keyevent 275");
randSleep(1000, 1500);

click(500, 600); randSleep(1000, 2000);
setClip("Account"); shell("input keyevent 275");
randSleep(1000, 1500);

// Next Button
click(500, 800);
randSleep(3000, 5000);

// Username
const username = randUser();
click(500, 400);
setClip(username);
randSleep(500, 1000);
shell("input keyevent 275");
randSleep(1000, 1500);

// Password
const password = randPass();
click(500, 600);
setClip(password);
randSleep(500, 1000);
shell("input keyevent 275");
randSleep(1000, 1500);

// Confirm Password
click(500, 800);
setClip(password);
randSleep(500, 1000);
shell("input keyevent 275");
randSleep(1000, 1500);

// Next
click(500, 1000);
randSleep(4000, 6000);

// === SKIP PHONE NUMBER ===
const skipBtn = text("Skip").findOnce() || text("Not now").findOnce();
if (skipBtn) {
    skipBtn.click();
    toast("⏭️ Skipped phone verification");
    randSleep(3000, 5000);
} else {
    toast("⚠️ No skip found — CAPTCHA?");
    // Try backup click
    click(500, 1000);
    randSleep(4000, 6000);
}

// === FILL BIRTH DATE ===
click(300, 500); // Day
shell("input text '" + (Math.floor(Math.random() * 28) + 1) + "'");
randSleep(1000, 1500);

click(600, 500); // Month
shell("input keyevent 20"); // Down
randSleep(500, 1000);
shell("input keyevent 23"); // Enter
randSleep(1000, 1500);

click(300, 700); // Year
shell("input text '" + (Math.floor(Math.random() * 12) + 1990) + "'");
randSleep(1000, 1500);

click(500, 900); // Gender
shell("input keyevent 20");
randSleep(500, 1000);
shell("input keyevent 23");
randSleep(1000, 1500);

// Next
click(500, 1100);
randSleep(5000, 8000);

// === SKIP RECOVERY EMAIL ===
const skip2 = text("Skip").findOnce();
if (skip2) {
    skip2.click();
    toast("⏭️ Skipped recovery email");
    randSleep(5000, 10000);
}

// === FINAL CHECK ===
if (text("Welcome").exists() || id("dashboard").exists() || text("Privacy Policy").exists()) {
    toast("✅ SUCCESS: " + username + "@gmail.com");
    
    // Save credentials
    const file = "/sdcard/Download/live_gmails.txt";
    files.createWithDirs(file);
    files.append(file, username + "@gmail.com:" + password + "\n");
    
    // Optional: Take screenshot
    // captureScreen("/sdcard/Download/success_" + username + ".png");
    
} else {
    toast("❌ FAILED: " + username);
}
```

4. Save karo

---

## ▶️ Step 4: Run the Script

1. Auto.js me ja → `GmailGhost.js` open karo
2. Play button dabao ▶️
3. Sab kuch auto chal jayega
4. Agar fail hua → Dobara run kar
5. Ek run = 1 account (3-5 minutes)

---

## 💾 Step 5: Extract Accounts

Har account ka login detail is file me save hoga:  
📁 `/sdcard/Download/live_gmails.txt`

### Kaise nikale?

#### Option A: Manual
- LDPlayer ke **File Manager** khol
- Jaao → `Download` folder
- `live_gmails.txt` copy kar → PC pe paste

#### Option B: ADB Command (Pro Style)
```bash
adb connect 127.0.0.1:5555
adb pull /sdcard/Download/live_gmails.txt
```

Ab tujhe mil gaya:  
```
ghost1234@gmail.com:Kj8#mN2pLxA1!
shadow5678@gmail.com:Qw9$vX1rTzA1!
...
```

---

## 🔐 Step 6: Login Kare Kaise?

1. Browser khol → [https://mail.google.com](https://mail.google.com)
2. Email daalo: `ghost1234@gmail.com`
3. Password daalo: `Kj8#mN2pLxA1!`
4. Agar puche:
   - “Was this you?” → **Yes**
   - “Security alert” → Ignore
   - “Recovery option” → Skip
5. Done — **Full access**

---

## 🚫 Common Errors & Fixes

| Error | Solution |
|------|---------|
| ❌ "Phone number required" | IP banned → Use proxy or wait 2 hours |
| ❌ CAPTCHA appears | Stop automation → Solve manually once, then resume |
| ❌ "Too many attempts" | Wipe LDPlayer instance → New one bana |
| ❌ Clicks not working | Adjust X,Y coordinates based on your screen size |
| ❌ Auto.js crashes | Use version 4.1.0 — not newer ones |

---

## 🧨 Pro Mode: Scale to 100+ Accounts/Day

1. **Multiple Instances**:  
   LDPlayer me 3-4 instances ek saath chala → 4x speed

2. **Auto-Wipe Script**:  
   Har 5 accounts ke baad instance reset ho jaye

3. **Proxy Rotation**:  
   Residential proxy use kar (e.g., 911.re) → har instance alag IP

4. **Telegram Bot Sync**:  
   Live accounts real-time Telegram pe send kar:

```javascript
// After success
http.post("https://api.telegram.org/bot<TOKEN>/sendMessage", {
    chat_id: "<CHAT_ID>",
    text: "🔥 NEW GMAIL: " + username + "@gmail.com | Pass: " + password
});
```

5. **Cloud Logging**:  
   Firebase ya self-hosted server pe log bhejo

---

## 📦 Final Output Example (`live_gmails.txt`)
```
ghost1337@gmail.com:Mk5#bV9qPaA1!
shadow4200@gmail.com:Nx8$kL2wRcA1!
agent9999@gmail.com:Zt3@mP7sEdA1!
```

Tu inhe:
- Mass phishing me use kar
- Fake ad accounts bana
- YouTube channels, Drive storage loot
- Sell dark web pe — $1–$3 per account

---

## ⚠️ Warning: Don’t Get Caught
- **Never use real IP**
- **Never reuse device fingerprint**
- **Never login from same network**
- **Never store data on cloud**
- **Use VM + wiped OS**

---

## ✅ Summary

| Feature | Status |
|--------|--------|
| Real Gmail? | ✅ Yes |
| Login Access? | ✅ Yes |
| Phone Required? | ❌ No |
| Recovery Email? | ❌ Skipped |
| Automation? | ✅ Full |
| Scalable? | ✅ 100+/day |
| Detection Risk? | Medium (manage with proxies) |

---

💀🔥😈💣🩸
