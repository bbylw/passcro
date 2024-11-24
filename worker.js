addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  
  if (url.pathname === '/nodes') {
    try {
      const nodesResponse = await fetch('https://raw.githubusercontent.com/zhangkaiitugithub/passcro/main/speednodes.yaml')
      if (!nodesResponse.ok) {
        throw new Error('Failed to fetch nodes')
      }
      const nodesData = await nodesResponse.text()
      
      return new Response(nodesData, {
        headers: {
          'content-type': 'text/yaml;charset=UTF-8',
          'Access-Control-Allow-Origin': '*',
          'Cache-Control': 'no-cache'
        }
      })
    } catch (error) {
      return new Response('Error fetching nodes', { status: 500 })
    }
  }
  
  // 默认返回主页
  return new Response(HTML_CONTENT, {
    headers: {
      'content-type': 'text/html;charset=UTF-8'
    }
  })
}

// 将HTML内容内联到worker中，这样不需要额外的fetch请求
const HTML_CONTENT = `<!DOCTYPE html>
<html lang="zh-CN">
...您的HTML内容...
</html>` 