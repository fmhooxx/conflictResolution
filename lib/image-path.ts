// 处理GitHub Pages部署时的图片路径
export function getImagePath(imagePath: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/conflictResolution' : ''
  return `${basePath}${imagePath}`
} 