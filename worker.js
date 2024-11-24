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

const HTML_CONTENT = `你的完整index.html内容` 