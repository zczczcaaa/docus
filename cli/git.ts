import { execSync } from 'node:child_process'
import { readGitConfig } from 'pkg-types'
import gitUrlParse from 'git-url-parse'

export interface GitInfo {
  // Repository name
  name: string
  // Repository owner/organization
  owner: string
  // Repository URL
  url: string
}

export function getGitBranch() {
  const envName
      = process.env.CF_PAGES_BRANCH
        || process.env.CI_COMMIT_BRANCH
        || process.env.VERCEL_BRANCH_URL
        || process.env.BRANCH
        || process.env.GITHUB_REF_NAME

  if (envName && envName !== 'HEAD') {
    return envName
  }
  try {
    const branch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim()
    if (branch && branch !== 'HEAD') {
      return branch
    }
  }
  catch {
    return 'main'
  }
}

export async function getLocalGitInfo(rootDir: string): Promise<GitInfo> {
  const remote = await getLocalGitRemote(rootDir)
  if (!remote) {
    return {
      name: '@nuxt-themes/docus',
      owner: 'nuxt-themes',
      url: 'https://github.com/nuxt-themes/docus',
    }
  }

  // https://www.npmjs.com/package/git-url-parse#clipboard-example
  const { name, owner, source } = gitUrlParse(remote)
  const url = `https://${source}/${owner}/${name}`

  return {
    name,
    owner,
    url,
  }
}
async function getLocalGitRemote(dir: string) {
  try {
    const parsed = await readGitConfig(dir)
    if (!parsed) {
      return
    }
    return parsed.remote?.['origin']?.url
  }
  catch {
    // Ignore error
  }
}
