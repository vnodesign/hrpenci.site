import { siteConfig } from '@data/siteConfig'
import axios from 'axios'
import useSWR from 'swr'

interface RepositoryData {
  stargazers_count: number
}

const fetcher = (url: string) =>
  axios.get<RepositoryData>(url).then(res => res.data)
const repositoryUrl = `https://api.github.com/repos/${siteConfig.githubRepoFullName}`
const REFRESH_INTERVAL_IN_MS = 3500
const useRepositoryStars = (): number | undefined => {
  const { data } = useSWR<RepositoryData>(repositoryUrl, fetcher, {
    refreshInterval: REFRESH_INTERVAL_IN_MS
  })

  return data?.stargazers_count
}

export default useRepositoryStars