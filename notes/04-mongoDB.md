# MongoDB Atlas Notes

## 1. MongoDB kya hai?
- NoSQL database hai, data **documents (JSON/BSON jaisa)** mein store hota hai, tables/rows mein nahi.
- Hierarchy: **Cluster → Database → Collection → Document**
- SQL se compare:

| SQL | MongoDB |
|---|---|
| Database | Database |
| Table | Collection |
| Row | Document |
| Column | Field |

---

## 2. Cluster kya hota hai?
- Cluster = servers ka group jahan tumhara database cloud (Atlas) pe rehta hai.
- Usually **3 servers (replica set)** hote hain: 1 **Primary** (read/write) aur 2 **Secondary** (copy rakhte hain). Primary down ho jaye to secondary uski jagah le leta hai, isse data safe rehta hai.
- Free tier **M0 (512 MB)** hota hai, learning aur small projects ke liye kaafi hai.
- Provider/region choose karna padta hai (AWS, GCP, Azure). Region apne users ke paas wala lo.

---

## 3. Atlas setup ke 3 zaroori steps
1. **Cluster banao**
2. **Database Access** mein user banao
3. **Network Access** mein IP allow karo

> Inme se koi ek bhi miss hua to connection fail hoga.

---

## 4. Database Access (Authentication)
- Yahan **database user** banta hai (username + password). Ye tumhara Atlas login nahi hai, sirf database ka user hai.
- Roles:
  - `Atlas admin`: full access
  - `Read and write to any database`: projects ke liye best
  - `Read only`: sirf data padh sakta hai
- Password mein special characters (`@`, `#`, `:`, `/`) hon to connection string mein **URL-encode** karna padta hai (jaise `@` → `%40`). Beginners ke liye simple password rakhna better hai.
- **Password kabhi GitHub pe push mat karo.**

---

## 5. Network Access (IP Whitelist)
- Atlas default mein sabko block karta hai. Sirf allowed IPs hi connect kar sakte hain.
- Options:
  - **Add Current IP Address**: sirf tumhara abhi ka IP (safe)
  - **Allow Access from Anywhere (`0.0.0.0/0`)**: sab allowed (development mein chalta hai, production mein risky)
- Tumhara IP badalta rehta hai (WiFi/hotspot change karne par), isliye achanak error aa sakta hai. Network Access mein naya IP add karo.
- Deploy karte waqt (Render, Vercel etc.) unke IPs dynamic hote hain, isliye usually `0.0.0.0/0` rakhna padta hai.

---

## 6. Connection String
Format:
```
mongodb+srv://<username>:<password>@<cluster-name>.xxxxx.mongodb.net/<dbname>?retryWrites=true&w=majority
```

Parts:
- `mongodb+srv://`: protocol (SRV, Atlas ke liye)
- `username:password`: Database Access wala user
- `cluster-name.xxxxx.mongodb.net`: cluster ka address
- `/dbname`: kaunsa database use karna hai (nahi diya to default `test` ban jata hai)
- `?retryWrites=true&w=majority`: options

Kahan milta hai: Atlas → **Connect** → **Drivers** (code ke liye) ya **Compass** (GUI ke liye).

---

## 7. MongoDB Compass
- Ye **GUI tool** hai database dekhne aur manage karne ke liye.
- Connection string paste karke connect karte ho.
- Isse kar sakte ho:
  - Databases aur collections dekhna
  - Documents add, edit, delete karna
  - Filter se query chalana (`{ name: "Mansi" }`)
  - Indexes aur schema dekhna
- Testing ke liye helpful hai, jaise check karna ki app ka data sahi save hua ya nahi.

---

## 8. Node.js mein connect karna (Mongoose)

`.env` file:
```
MONGO_URI=mongodb+srv://user:password@cluster.xxxxx.mongodb.net/mydb
```

Code:
```js
require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));
```

> `.env` ko `.gitignore` mein zaroor daalo.

---

## 9. Common Errors aur Solution

| Error | Wajah | Solution |
|---|---|---|
| `ECONNREFUSED` / timeout | IP whitelist nahi hai | Network Access mein IP add karo |
| `Authentication failed` | Username/password galat | Database Access check karo, password reset karo |
| `querySrv ENOTFOUND` | Internet/DNS issue ya string galat | Connection string aur internet check karo |
| Special character wala password fail | URL encode nahi kiya | Password simple rakho ya encode karo |

---

## 10. CRUD Quick Revision
- `insertOne / insertMany`: data add karna
- `find / findOne`: data padhna
- `updateOne / updateMany`: data update karna
- `deleteOne / deleteMany`: data delete karna
- `_id`: har document ki unique ID, MongoDB khud banata hai (ObjectId)
assword - @3pa3UfAnJT2.q7assword - @3pa3UfAnJT2.q7