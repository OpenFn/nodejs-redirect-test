# 🚀 Node.js Redirect Test with Undici

This project contains:
- A simple HTTP server with two endpoints:
  - `/redirect`: responds with a `302` redirect to `/final`
  - `/final`: responds with a `200 OK` and a message
- A custom `undici.Client` with redirect handling logic using `RedirectHandler`

---

## 🧱 Project Structure

<pre lang="markdown"> ## 🧱 Project Structure ``` project-root/ ├── server.js # HTTP server that serves /redirect and /final ├── client.js # Undici client with redirect logic ├── package.json ``` </pre>

---

## 📦 Prerequisites

- **Node.js v18+** (Undici is built-in)
- For Node.js < 18, install `undici` manually:
```bash
  npm install undici
```


---

## ▶️ How to Run

### 1. Start the Server

Open a terminal and run:

```bash
node server.js

```

> This starts the HTTP server on [http://localhost:3000](http://localhost:3000)

You can test it in your browser:

- [http://localhost:3000/redirect](http://localhost:3000/redirect) → Redirects to `/final`
- [http://localhost:3000/final](http://localhost:3000/final) → Shows success message


### 1. Run the Client

In a separate terminal, run:

```bash
node client.js
```



