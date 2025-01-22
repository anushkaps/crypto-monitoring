# **Real-Time Cryptocurrency Price Monitoring & Alerting System**

A full-stack application to **fetch real-time crypto prices**, **set alerts** when prices cross certain thresholds, and **cache** price data for efficiency using **Redis**. Built with **Node.js (TypeScript)**, **MongoDB**, **Redis**, and **React** (TypeScript) on the frontend. 

---

## **Features**

1. **Real-Time Monitoring**
   - Fetches crypto prices from [CoinGecko](https://coingecko.com).
   - Includes a **cron job** to automatically update prices at regular intervals.

2. **Alerting System**
   - Users can create alerts for specific coins when the price goes above or below a target.
   - Alerts are stored in **MongoDB**.
   - When triggered, an alert is logged (could be extended to email, SMS, etc.).

3. **Caching Mechanism**
   - **Redis** caches recently fetched prices, reducing the load on external APIs.
   - Fast responses for subsequent requests.

4. **React Frontend**
   - Minimal UI to fetch prices, display them, and create alerts.

---

## **Technologies Used**

- **Backend**:  
  - **Node.js (TypeScript)**
  - **Express.js** for API routes
  - **Mongoose** for MongoDB
  - **Redis** for caching
  - **Axios** for external API calls
  - **Node-cron** for scheduled tasks

- **Frontend**:
  - **React** (TypeScript)
  - **Axios** for HTTP requests

- **Database**:  
  - **MongoDB** (Alerts are stored here)

- **Caching**:  
  - **Redis** (Stores recent price data)

- **(Optional) Docker**:  
  - Dockerfiles & `docker-compose.yml` for containerized deployment.

---

## **Project Structure**

```
crypto-monitoring/
  ├─ backend/
  │   ├─ src/
  │   │   ├─ config/
  │   │   │   ├─ db.ts
  │   │   │   ├─ redisClient.ts
  │   │   │   └─ index.ts
  │   │   ├─ controllers/
  │   │   │   ├─ cryptoController.ts
  │   │   │   └─ alertController.ts
  │   │   ├─ models/
  │   │   │   └─ Alert.ts
  │   │   ├─ routes/
  │   │   │   ├─ cryptoRoutes.ts
  │   │   │   └─ alertRoutes.ts
  │   │   ├─ services/
  │   │   │   ├─ cryptoService.ts
  │   │   │   ├─ cacheService.ts
  │   │   │   └─ alertService.ts
  │   │   ├─ jobs/
  │   │   │   └─ priceUpdater.ts
  │   │   ├─ app.ts
  │   │   └─ server.ts
  │   ├─ .env
  │   ├─ package.json
  │   ├─ tsconfig.json
  │   └─ Dockerfile
  ├─ frontend/
  │   ├─ public/
  │   │   └─ index.html
  │   ├─ src/
  │   │   ├─ App.tsx
  │   │   ├─ index.tsx
  │   │   ├─ components/
  │   │   │   ├─ Navbar.tsx
  │   │   │   └─ AlertCornerIcon.tsx
  │   │   └─ styles/
  │   │       └─ App.css
  │   ├─ package.json
  │   ├─ tsconfig.json
  │   └─ Dockerfile
  └─ docker-compose.yml
```

---

## **Getting Started**

### **Prerequisites**

1. **Node.js** (v14+ recommended)  
2. **MongoDB** (installed locally or Docker container)
3. **Redis** (installed locally or Docker container)
4. (Optional) **Docker** & **docker-compose** if you want to containerize

### **1. Clone the Repository**

```bash
git clone https://github.com/your-username/crypto-monitoring.git
cd crypto-monitoring
```

### **2. Environment Variables**

- Create a **`.env`** file in **`backend/`**:

  ```
  PORT=4000
  MONGO_URI=mongodb://localhost:27017/crypto_monitoring
  REDIS_HOST=127.0.0.1
  REDIS_PORT=6379
  COINGECKO_API_KEY=YOUR_KEY (optional)
  ```

- If you have environment variables for the frontend, add them as needed (e.g., `.env` in `frontend/`).

### **3. Start MongoDB & Redis**

- **Locally**:  
  - MongoDB on `mongodb://localhost:27017`
  - Redis on `127.0.0.1:6379`

- **Via Docker** (example):
  ```bash
  docker run -d -p 27017:27017 --name mongodb mongo
  docker run -d -p 6379:6379 --name redis redis
  ```

### **4. Install & Run (Backend)**

```bash
cd backend
npm install
npm run dev  # starts server at http://localhost:4000
```

### **5. Install & Run (Frontend)**

```bash
cd ../frontend
npm install
npm start  # opens React app at http://localhost:3000
```

---

## **Usage**

1. **Fetch Price**:  
   - URL: `GET /crypto/price/:coinId` (e.g. `bitcoin`, `ethereum`)  
   - Returns JSON: `{ coinId: "bitcoin", price: 27000 }`

2. **Create Alert**:  
   - URL: `POST /alerts`  
   - Body (JSON):
     ```json
     {
       "coinId": "bitcoin",
       "targetPrice": 30000,
       "direction": "above",
       "userId": "user123"
     }
     ```
   - Response: `201 Created` with the newly saved alert.

3. **Retrieve Alerts**:  
   - URL: `GET /alerts`  
   - Returns an array of all alerts in MongoDB.

4. **Check Logs** for triggered alerts (cron runs in background every minute).

---

## **Docker (Optional)**

1. Ensure you have a **Dockerfile** in both **`backend/`** and **`frontend/`** and a **`docker-compose.yml`** in the project root.
2. Build and run:

   ```bash
   docker-compose up --build
   ```

3. Access:
   - **Backend**: <http://localhost:4000>
   - **Frontend**: <http://localhost:3000>

---

## **Contributing**

1. **Fork** this repository.
2. Create a **feature branch** (`git checkout -b feature/my-feature`).
3. **Commit** your changes (`git commit -m 'Add some feature'`).
4. **Push** to your branch (`git push origin feature/my-feature`).
5. Create a **pull request**.

---

## **License**

```
MIT License
Copyright (c) 2023
Permission is hereby granted...
```

---

## **Contact**

- **Anushka PS**: [LinkedIn](http://www.linkedin.com/in/anushka-pratap-singh)
- [Twitter handle](https://x.com/anushkapspsps)
- If you have any questions or issues, please open an **issue** or submit a **pull request**. 

---

**Happy coding!** Feel free to explore, customize, and extend this real-time crypto monitoring system.  
