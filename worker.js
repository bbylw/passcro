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
        min-height: 100vh;
        display: flex;
        flex-direction: column;
      }

      .header {
        background-color: var(--ph-black);
        padding: 15px 0;
        position: sticky;
        top: 0;
        z-index: 100;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
      }

      .header-content {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .logo {
        color: #ffffff;
        font-size: 36px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      .logo span {
        color: var(--ph-orange);
      }

      .main-content {
        flex: 1;
        max-width: 1200px;
        width: 90%;
        margin: 40px auto;
        padding: 0 20px;
      }

      .hero-section {
        text-align: center;
        margin: 60px 0;
      }

      .subscribe-button {
        background-color: var(--ph-orange);
        color: #ffffff;
        border: none;
        padding: 18px 50px;
        border-radius: 30px;
        font-size: 20px;
        cursor: pointer;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 1px;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(255, 144, 0, 0.3);
      }

      .subscribe-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(255, 144, 0, 0.4);
      }

      .subscribe-button:active {
        transform: translateY(1px);
      }

      .features {
        text-align: center;
        margin: 30px 0 60px;
      }

      .features p {
        color: #999;
        font-size: 18px;
        margin: 0;
        line-height: 1.6;
      }

      .section-title {
        color: var(--ph-orange);
        font-size: 24px;
        margin-bottom: 30px;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 2px;
      }

      .clients-section {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 25px;
        margin-top: 20px;
      }

      .client-card {
        background-color: #2a2a2a;
        border-radius: 15px;
        padding: 25px;
        text-align: center;
        transition: all 0.3s ease;
        border: 1px solid #333;
      }

      .client-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        border-color: var(--ph-orange);
      }

      .client-card h3 {
        color: var(--ph-orange);
        font-size: 22px;
        margin-bottom: 15px;
      }

      .client-card p {
        color: #999;
        margin-bottom: 25px;
        font-size: 15px;
        line-height: 1.6;
      }

      .client-link {
        color: var(--ph-orange);
        text-decoration: none;
        font-weight: bold;
        padding: 8px 20px;
        border: 2px solid var(--ph-orange);
        border-radius: 20px;
        transition: all 0.3s ease;
        display: inline-block;
      }

      .client-link:hover {
        background-color: var(--ph-orange);
        color: #ffffff;
      }

      .copy-success {
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--ph-orange);
        color: #ffffff;
        padding: 12px 30px;
        border-radius: 8px;
        font-weight: bold;
        display: none;
        animation: fadeInOut 2s ease;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
      }

      @keyframes fadeInOut {
        0% { opacity: 0; transform: translate(-50%, -20px); }
        20% { opacity: 1; transform: translate(-50%, 0); }
        80% { opacity: 1; transform: translate(-50%, 0); }
        100% { opacity: 0; transform: translate(-50%, -20px); }
      }

      @media (max-width: 768px) {
        .logo {
          font-size: 28px;
        }
        .subscribe-button {
          padding: 15px 40px;
          font-size: 18px;
        }
        .features p {
          font-size: 16px;
        }
      }
    </style>
  </head>
  <body>
    <div id="copySuccess" class="copy-success">订阅地址已复制到剪贴板！</div>

    <div class="header">
      <div class="header-content">
        <div class="logo">VLess<span>Share</span></div>
      </div>
    </div>

    <div class="main-content">
      <div class="hero-section">
        <button class="subscribe-button" id="subscribeBtn">一键订阅</button>
        <div class="features">
          <p>100+ 优质节点 | 24H 实时更新 | 全平台客户端支持</p>
        </div>
      </div>

      <h2 class="section-title">推荐客户端</h2>
      <div class="clients-section">
        <div class="client-card">
          <h3>v2rayN</h3>
          <p>Windows 平台最受欢迎的代理工具，界面简洁，功能强大。支持多种协议，可自定义路由规则。</p>
          <a href="https://github.com/2dust/v2rayN" class="client-link" target="_blank">下载地址</a>
        </div>

        <div class="client-card">
          <h3>Hiddify</h3>
          <p>跨平台客户端，支持 Windows/MacOS/Linux/Android/iOS，界面美观，使用简单。</p>
          <a href="https://github.com/hiddify/hiddify-next" class="client-link" target="_blank">下载地址</a>
        </div>

        <div class="client-card">
          <h3>Karing</h3>
          <p>强大的代理工具，支持多平台，兼容多种协议配置。完美支持 Clash/Sing-box 配置。</p>
          <a href="https://github.com/KaringX/karing" class="client-link" target="_blank">下载地址</a>
        </div>

        <div class="client-card">
          <h3>FClash</h3>
          <p>基于 ClashMeta 内核的代理工具，界面精美，功能丰富，支持多平台。</p>
          <a href="https://github.com/chen08209/FlClash" class="client-link" target="_blank">下载地址</a>
        </div>
      </div>
    </div>

    <script>
      document.getElementById("subscribeBtn").addEventListener("click", async () => {
        try {
          const subscribeUrl = "https://raw.githubusercontent.com/zhangkaiitugithub/passcro/main/speednodes.yaml";
          await navigator.clipboard.writeText(subscribeUrl);
          
          const successEl = document.getElementById("copySuccess");
          successEl.style.display = "block";
          setTimeout(() => {
            successEl.style.display = "none";
          }, 2000);
        } catch (error) {
          console.error("Error:", error);
          alert("复制订阅地址失败，请稍后重试！");
        }
      });
    </script>
  </body>
</html>` 