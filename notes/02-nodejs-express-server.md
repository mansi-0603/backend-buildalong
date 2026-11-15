# 02 - Node.js, Express.js aur Server

## Node.js kya hai?
- Normally JavaScript **browser** me execute hoti hai.
- **Node.js** ka kaam hai JS ko **browser ke bahar** run karna.

## Express.js kya hai?
- Express.js ek **package / web framework** hai jo Node.js ke upar kaam karta hai.
- Isse hum **bahut jaldi aur achha server** bana sakte hain.
- Node.js ke server aur APIs banana **easy** ho jata hai.

## Server kya hota hai?
- Agar hum JS use karte hain, to jo server create hota hai wo ek **Node.js application** hoti hai.

## Setup steps
```bash
npm init -y        # Node.js application initiate
npm i express      # express package install
```
- `server.js` -> is file me server ka saara code likha hota hai.

## Basic Example
```js
app.get("/", (req, res) => {
    res.send("Hello Server !");
});
```

## req aur res
| | Matlab | Kaam |
|---|--------|------|
| `req` | Request | Frontend se aane wala saara data Express me `req` ke through access hota hai |
| `res` | Response | Backend se frontend ko jo data/response bhejna hai, uske liye `res` use hota hai |
