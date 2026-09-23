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
