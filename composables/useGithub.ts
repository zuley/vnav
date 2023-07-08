// 通过仓库 name 获取 github 详情
export const useGithubDetail = (name: string) => {
  return useFetch(`https://api.github.com/repos/${name}`)
}
// 通过仓库 name 获取 github readme，返回的是 解密后的内容
export const useGithubReadme = (name: string) => {
  return useFetch(`https://api.github.com/repos/${name}/readme`)
}