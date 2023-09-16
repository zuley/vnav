export function toThirdPartyUrl(url: string) {
  window.open(url, '_blank')
}

// 转换 markdown 为 html
export function base64Decode(encodedString: string) {
  if (typeof window !== 'undefined' && typeof window.atob === 'function') {
    // 在浏览器端使用 window.atob
    return window.atob(encodedString);
  } else if (typeof Buffer !== 'undefined' && typeof Buffer.from === 'function') {
    // 在 Node.js 环境中使用 Buffer.from
    return Buffer.from(encodedString, 'base64').toString('utf-8');
  } else {
    throw new Error('当前环境不支持 Base64 解码。');
  }
}