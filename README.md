# LUXE - חנות מקוונת

פרויקט חנות מקוונת מקצועי בנוי עם React + TypeScript + Tailwind CSS + Vite.

## טכנולוגיות
- **React 18** + **TypeScript**
- **Tailwind CSS** לעיצוב
- **React Router** לניווט
- **Vite** לבנייה מהירה

## הרצה מקומית

```bash
npm install
npm run dev
```

## Build לפרודקשן

```bash
npm run build
```

## העלאה ל-EC2

### 1. שכפול הפרויקט
```bash
git clone https://github.com/<YOUR_USERNAME>/shop-app.git ~/shop-app
cd ~/shop-app
npm install
npm run build
sudo cp -r dist/* /var/www/html/
```

### 2. הגדרת CI/CD - Secrets בגיטהאב
Settings → Secrets → Actions:

| שם | ערך |
|---|---|
| `HOST` | ה-IP של ה-EC2 |
| `USERNAME` | `ubuntu` |
| `KEY` | המפתח הפרטי SSH |
