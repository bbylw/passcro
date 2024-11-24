addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  
  if (url.pathname === '/nodes') {
    const subscribeUrl = 'https://raw.githubusercontent.com/zhangkaiitugithub/passcro/main/speednodes.yaml'
    return new Response(subscribeUrl, {
      headers: {
        'content-type': 'text/plain;charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
      }
    })
  }
  
  return new Response(HTML_CONTENT, {
    headers: {
      'content-type': 'text/html;charset=UTF-8'
    }
  })
}

const HTML_CONTENT = `<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>VLess Share</title>
    <style>
      :root {
        --ph-orange: #ff9000;
        --ph-black: #000000;
        --ph-bg: #1b1b1b;
      }

      body {
        background-color: var(--ph-bg);
        color: #ffffff;
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .header {
        width: 100%;
        background-color: var(--ph-black);
        padding: 20px 0;
        text-align: center;
        margin-bottom: 40px;
      }

      .logo {
        color: #ffffff;
        font-size: 32px;
        font-weight: bold;
      }

      .logo span {
        color: var(--ph-orange);
      }

      .main-content {
        max-width: 800px;
        width: 90%;
        margin: 0 auto;
      }

      .subscribe-button {
        background-color: var(--ph-orange);
        color: #ffffff;
        border: none;
        padding: 15px 40px;
        border-radius: 25px;
        font-size: 18px;
        cursor: pointer;
        margin: 20px 0 40px 0;
        font-weight: bold;
        transition: transform 0.2s ease;
      }

      .subscribe-button:hover {
        transform: scale(1.05);
      }

      .subscribe-button:active {
        transform: scale(0.95);
      }

      .features {
        text-align: center;
        margin-bottom: 40px;
      }

      .features p {
        color: #888;
        font-size: 16px;
      }

      .clients-section {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        margin-top: 40px;
      }

      .client-card {
        background-color: #2a2a2a;
        border-radius: 10px;
        padding: 20px;
        text-align: center;
        transition: transform 0.2s ease;
      }

      .client-card:hover {
        transform: translateY(-5px);
      }

      .client-card h3 {
        color: var(--ph-orange);
        margin-bottom: 15px;
      }

      .client-card p {
        color: #888;
        margin-bottom: 20px;
        font-size: 14px;
      }

      .client-link {
        color: var(--ph-orange);
        text-decoration: none;
        font-weight: bold;
      }

      .client-link:hover {
        text-decoration: underline;
      }

      .copy-success {
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--ph-orange);
        padding: 10px 20px;
        border-radius: 5px;
        display: none;
        animation: fadeInOut 2s ease;
      }

      @keyframes fadeInOut {
        0% { opacity: 0; }
        20% { opacity: 1; }
        80% { opacity: 1; }
        100% { opacity: 0; }
      }
    </style>
  </head>
  <body>
    <div id="copySuccess" class="copy-success">订阅信息已复制到剪贴板！</div>

    <div class="header">
      <div class="logo">VLess<span>Share</span></div>
    </div>

    <div class="main-content">
      <div class="features">
        <button class="subscribe-button" id="subscribeBtn">一键订阅</button>
        <p>50个高速节点 | 定时更新 | 支持多客户端</p>
      </div>

      <div class="clients-section">
        <div class="client-card">
          <h3>v2rayN</h3>
          <p>Windows平台最受欢迎的代理工具，界面简洁，功能强大。支持多种协议，可自定义路由规则。</p>
          <a href="https://github.com/2dust/v2rayN" class="client-link" target="_blank">项目主页</a>
        </div>

        <div class="client-card">
          <h3>Hiddify</h3>
          <p>跨平台客户端，支持 Windows/MacOS/Linux/Android/iOS，界面美观，使用简单。</p>
          <a href="https://github.com/hiddify/hiddify-next" class="client-link" target="_blank">项目主页</a>
        </div>

        <div class="client-card">
          <h3>Karing</h3>
          <p>iOS平台优秀的代理工具，支持多种协议，可通过TestFlight安装。</p>
          <a href="#" class="client-link" target="_blank">项目主页</a>
        </div>

        <div class="client-card">
          <h3>FClash</h3>
          <p>基于 Clash 内核的代理工具，支持策略分组，界面美观，规则丰富。</p>
          <a href="#" class="client-link" target="_blank">项目主页</a>
        </div>
      </div>
    </div>

    <script>
      document.getElementById("subscribeBtn").addEventListener("click", async () => {
        try {
          const response = await fetch("/nodes");
          if (!response.ok) throw new Error("Failed to fetch nodes");
          const config = await response.text();
          
          await navigator.clipboard.writeText(config);
          
          const successEl = document.getElementById("copySuccess");
          successEl.style.display = "block";
          setTimeout(() => {
            successEl.style.display = "none";
          }, 2000);
        } catch (error) {
          console.error("Error:", error);
          alert("获取订阅信息失败，请稍后重试！");
        }
      });
    </script>
  </body>
</html>` 