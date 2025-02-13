# 🚀 Next.js Project with Express API

This is a **Next.js (15+) + TypeScript + Tailwind CSS** project with an **Express API backend**.  
The project includes a **responsive design** that supports both **desktop and mobile layouts** based on a Figma design.  
It features a **carousel with auto-slide functionality, a fixed top menu, and API-driven content**.

---

## 📂 Project Structure

```
my-project/
│── assets/                     # Static assets (carousel images)
│   ├── carousel/
│   │   ├── 01.jpg
│   │   ├── 02.jpg
│   │   ├── 03.jpg
│── node_modules/                # Dependencies (auto-generated)
│── public/                      # Next.js public assets
│── src/
│   ├── app/                     # Next.js App Router (15+)
│   │   ├── components/          # UI Components
│   │   │   ├── Header.tsx       # Fixed top menu
│   │   │   ├── Carousel.tsx     # Image slider (auto & manual)
│   │   │   ├── About.tsx        # About section
│   │   │   ├── Plans.tsx        # Plans section
│   │   ├── page.tsx             # Main page
│   │   ├── layout.tsx           # Global layout
│   │   ├── globals.css          # Global styles
│   │   ├── utils/               # API utility functions
│   │   │   ├── api.ts           # Fetch API data
│── .gitignore                    # Ignore unnecessary files
│── server.js                      # Express API server
│── package.json                   # Project dependencies
│── tailwind.config.ts              # Tailwind CSS configuration
│── tsconfig.json                    # TypeScript configuration
│── next.config.ts                    # Next.js configuration
│── README.md                        # This documentation
```

---

## 🛠️ **How to Set Up & Run the Project from Scratch**

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/<your-username>/<repository-name>.git
cd <repository-name>
```

### **2️⃣ Install Dependencies**
```bash
npm install
```

### **3️⃣ Start the Express API Server**
```bash
node server.js
```
✅ **Check if API is running correctly**:  
Open these links in your browser:
- [http://localhost:8080/carousel](http://localhost:8080/carousel) → Returns carousel images
- [http://localhost:8080/about](http://localhost:8080/about) → Returns "About Us" content
- [http://localhost:8080/plans](http://localhost:8080/plans) → Returns list of plans

### **4️⃣ Start the Next.js Frontend**
```bash
npm run dev
```
✅ Open **[http://localhost:3000](http://localhost:3000)** to view the website.

---

## 🔄 **How to Update & Push Changes to GitHub**
If you make changes to the project, use the following commands:

```bash
git add .
git commit -m "Updated feature XYZ"
git push origin main
```

---

## 🔍 **Troubleshooting & Common Issues**

### **1️⃣ Issue: API Images Not Loading**
**Possible Causes:**
- Express is not correctly serving static files.
- The image paths in `server.js` are incorrect.

**Solution:**
Check if you can open the images manually:
```bash
http://localhost:8080/assets/carousel/01.jpg
```
If not, update `server.js`:
```js
app.use("/assets", express.static(path.join(__dirname, "assets")));
```
Then restart the server:
```bash
node server.js
```

---

### **2️⃣ Issue: `Module not found: Can't resolve './globals.css'`**
**Possible Cause:**  
`globals.css` is not in the correct directory or incorrectly imported.

**Solution:**  
Ensure `globals.css` is inside `src/app/`, then update `layout.tsx`:
```tsx
import "./globals.css";
```
Restart Next.js:
```bash
npm run dev
```

---

### **3️⃣ Issue: Carousel Images Not Changing**
**Possible Cause:**  
`useEffect` is not triggering the image change.

**Solution:**  
Ensure `useEffect` is correctly set:
```tsx
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prev) => (prev + 1) % carousel.length);
  }, 2000);

  return () => clearInterval(interval);
}, [carousel]);
```
Restart the frontend:
```bash
npm run dev
```

---

## ✨ **Project Features**
✅ **Next.js 15+ App Router (New Structure)**  
✅ **TypeScript for Strong Typing**  
✅ **Tailwind CSS for Responsive Design**  
✅ **Fixed Top Menu for Better Navigation**  
✅ **Fully Functional Image Carousel (Auto & Manual Controls)**  
✅ **Express API for Dynamic Content**  

---

## 📜 **License**
This project is licensed under the MIT License.

---

## 📞 **Need Help?**
If you encounter any issues or have questions, feel free to open an **Issue** in this repository or contact me directly! 🚀
