# 01 - Packages, npm aur package.json

## Packages kya hote hain?
- Ek aisa **reusable code** jo koi aur developer likhta hai, aur hum use apne project me **use** kar sakte hain.
- Ye packages **npmjs.com** website par store hote hain.
- Wahan se unhe apne system me laane ko **package installation** kehte hain.

## Install hone ke baad code kahan jaata hai?
- npm se install karne par jo code humare system me aata hai, wo **`node_modules`** folder ke andar store hota hai.

## package.json kya hota hai?
- Ye file batati hai ki humne jo code likha hai, wo **kaun-kaun se packages par depend** karta hai.
- Ye file in dependencies ko **manage** karti hai.

## Commands
| Command | Kaam |
|---------|------|
| `npm init -y` | Node.js application initiate karta hai (`package.json` banata hai) |
| `npm i <package-name>` | Package install karta hai (e.g. `npm i express`) |



npx nodemon server.js
ka kaam hain ki server.js file ko wps se restart krna bina kisi npm command daale and automatically restart krna...