import { readFile } from 'fs/promises'

import { load } from 'js-yaml'

/**
 * @param file
 * @returns
 */
async function readYamlFile(file) {
  return load(await readFile(file, 'utf8'))
}

function createRelativeProductLink(link) {
  if (link.startsWith('http')) {
    return link
  }
  return `../..${String(link)}`
}

export async function generateMaturityDefinitions() {
  const maturityLevels = await readYamlFile('data/maturity_levels.yml')
  let pageContent = ''
  for (const maturityLevel of Object.values(maturityLevels)) {
    pageContent += `- ${String(maturityLevel.title)}: ${String(maturityLevel.definition)}\n`
  }
  return pageContent
}

export async function generateFeatureMaturityLevels() {
  const features = await readYamlFile('data/features.yml')
  const maturityLevels = await readYamlFile('data/maturity_levels.yml')
  const productTeams = await readYamlFile('data/product_teams.yml')
  const productOrgs = await readYamlFile('data/product_orgs.yml')
  const teamMembers = await readYamlFile('data/team.yml')
  let pageContent = ''
  for (const [productTeamName, productTeam] of Object.entries(productTeams)) {
    let featureCount = 0
    let areaContent = `\n### ${String(productTeam.title)}\n`
    if (productOrgs[productTeam.product_org].strategy_link) {
      const strategyUrl = createRelativeProductLink(productOrgs[productTeam.product_org].strategy_link)
      areaContent += ` ([${String(productOrgs[productTeam.product_org].title)} Strategy](${String(strategyUrl)}) | `
    }
    if (productTeam.strategy_link) {
      areaContent += `[${String(productTeam.title)} Strategy](${String(
        createRelativeProductLink(productTeam.strategy_link)
      )}))\n`
    }
    if (productTeam.pm) {
      const bioLink = `../../company/team/index.md#${String(
        teamMembers[productTeam.pm].name.toLowerCase().replace(/\s+/g, '-')
      )}`
      areaContent += `\nProduct Manager: [${String(teamMembers[productTeam.pm].name)}](${String(bioLink)})`
    }

    areaContent += '\n|Feature|Maturity|\n'
    areaContent += '|-------|--------|\n'

    for (const feature of Object.values(features)) {
      if (feature.product_team === productTeamName) {
        featureCount++
        if (feature.documentation_link) {
          const url = createRelativeProductLink(feature.documentation_link)
          areaContent += `|[${String(feature.title)}](${String(url)})`
        } else {
          areaContent += `|${String(feature.title)}`
        }
        areaContent += `|${String(maturityLevels[feature.maturity].title)}|\n`
      }
    }
    if (featureCount > 0) {
      pageContent += areaContent
    }
  }
  return pageContent
}

export async function generateFeatureCodeHostCompatibilities() {
  const features = await readYamlFile('data/features.yml')
  const productTeams = await readYamlFile('data/product_teams.yml')
  const productOrgs = await readYamlFile('data/product_orgs.yml')
  const teamMembers = await readYamlFile('data/team.yml')
  const codeHosts = await readYamlFile('data/code_hosts.yml')
  let pageContent = ''
  for (const [productTeamName, productTeam] of Object.entries(productTeams)) {
    let featureCount = 0
    let areaContent = `\n### ${String(productTeam.title)}\n`
    const productOrg = productOrgs[productTeam.product_org]
    if (productOrg.strategy_link) {
      const strategyUrl = createRelativeProductLink(productOrg.strategy_link)
      areaContent += ` ([${String(productOrgs[productTeam.product_org].title)} Strategy](${String(strategyUrl)}) | `
    }
    if (productTeam.strategy_link) {
      areaContent += `[${String(productTeam.title)} Strategy](${String(
        createRelativeProductLink(productTeam.strategy_link)
      )}))\n`
    }
    if (productTeam.pm) {
      const bioLink = `../../company/team/index.md#${String(
        teamMembers[productTeam.pm].name.toLowerCase().replace(/\s+/g, '-')
      )}`
      areaContent += `\nProduct Manager: [${String(teamMembers[productTeam.pm].name)}](${String(bioLink)})`
    }

    areaContent += '\n|Feature|'
    for (const codeHost of Object.values(codeHosts)) {
      areaContent += `${String(codeHost.title)} |`
    }
    areaContent += '\n|-------|'
    for (let index = 0; index < Object.values(codeHosts).length; index++) {
      areaContent += '-|'
    }
    areaContent += '\n'

    for (const feature of Object.values(features)) {
      if (feature.product_team === productTeamName) {
        featureCount++
        if (feature.documentation_link) {
          areaContent += `|[${String(feature.title)}](${String(createRelativeProductLink(feature.documentation_link))})`
        } else {
          areaContent += `|${String(feature.title)}`
        }
        areaContent += '|'
        for (const codeHostName of Object.keys(codeHosts)) {
          if (feature.compatibility === undefined) {
            areaContent += ' |'
          } else if (feature.compatibility[codeHostName]) {
            areaContent += '✔️|'
          } else {
            areaContent += ' |'
          }
        }
        areaContent += '\n'
      }
    }
    if (featureCount > 0) {
      pageContent += areaContent
    }
  }
  return pageContent
}

export async function generateCodeHostsList() {
  const codeHosts = await readYamlFile('data/code_hosts.yml')
  let pageContent = ''
  for (const codeHost of Object.values(codeHosts)) {
    pageContent += `- [${String(codeHost.title)}](${String(codeHost.info_link)})\n`
  }
  return pageContent
}

export async function generateTeamMembersList() {
  const teamMembers = await readYamlFile('data/team.yml')
  let pageContent = ''
  for (const teamMember of Object.values(teamMembers)) {
    pageContent += `\n### ${String(teamMember.name)}\n`
    if (teamMember.role) {
      pageContent += `${String(teamMember.role)}`
      if (teamMember.location) {
        pageContent += ` (${String(teamMember.location)})`
      }
      pageContent += '\n\n'
    } else if (teamMember.location) {
      pageContent += ` (${String(teamMember.location)})\n\n`
    }
    if (teamMember.description) {
      pageContent += `${String(teamMember.description)}\n`
    }
    if (teamMember.email) {
      pageContent += `- Email: [${String(teamMember.email)}](mailto:${String(teamMember.email)})\n`
    }
    if (teamMember.github) {
      pageContent += `- GitHub: [${String(teamMember.github)}](https://github.com/${String(teamMember.github)})\n`
    }
    if (teamMember.pronouns) {
      pageContent += `- Pronouns: ${String(teamMember.pronouns)}\n`
    }
    if (teamMember.pronunciation) {
      pageContent += `- Pronunciation: ${String(teamMember.pronunciation)}\n`
    }
    if (teamMember.links) {
      pageContent += `- Other links: ${String(teamMember.links)}\n`
    }
  }
  return pageContent
}

export async function generateProductTeamsList() {
  const productTeams = await readYamlFile('data/product_teams.yml')
  const productOrgs = await readYamlFile('data/product_orgs.yml')
  const teamMembers = await readYamlFile('data/team.yml')
  let pageContent = ''
  for (const [productOrgName, productOrg] of Object.entries(productOrgs)) {
    pageContent += `\n### ${String(productOrg.title)} org\n\n`
    if (productOrg.strategy_link) {
      pageContent += `- [Strategy Page](${String(createRelativeProductLink(productOrg.strategy_link))})\n`
    }
    if (productOrg.strategy_link) {
      const bioLink = `../../company/team/index.md#${String(
        teamMembers[productOrg.pm].name.toLowerCase().replace(/\s+/g, '-')
      )}`
      pageContent += `- Product Director: [${String(teamMembers[productOrg.pm].name)}](${String(bioLink)})\n`
      pageContent += `- Engineering Director: [${String(teamMembers[productOrg.em].name)}](${String(bioLink)})\n`
    }
    for (const productTeam of Object.values(productTeams)) {
      if (productTeam.product_org === productOrgName) {
        pageContent += `\n\n#### ${String(productTeam.title)} team\n`
        if (productTeam.strategy_link) {
          pageContent += `- [Strategy Page](${String(createRelativeProductLink(productTeam.strategy_link))})\n`
        }
        if (productTeam.pm) {
          const bioLink = `../../company/team/index.md#${String(
            teamMembers[productTeam.pm].name.toLowerCase().replace(/\s+/g, '-')
          )}`
          pageContent += `- Product Manager: [${String(teamMembers[productTeam.pm].name)}](${String(bioLink)})\n`
        }
        if (productTeam.em) {
          const bioLink = `../../company/team/index.md#${String(
            teamMembers[productTeam.em].name.toLowerCase().replace(/\s+/g, '-')
          )}`
          pageContent += `- Engineering Manager: [${String(teamMembers[productTeam.em].name)}](${String(bioLink)})\n`
        }
        if (productTeam.design) {
          const bioLink = `../../company/team/index.md#${String(
            teamMembers[productTeam.design].name.toLowerCase().replace(/\s+/g, '-')
          )}`
          pageContent += `- Product Designer: [${String(teamMembers[productTeam.design].name)}](${String(bioLink)})\n`
        }
        if (productTeam.pmm) {
          const bioLink = `../../company/team/index.md#${String(
            teamMembers[productTeam.pmm].name.toLowerCase().replace(/\s+/g, '-')
          )}`
          pageContent += `- Product Marketing Manager: [${String(teamMembers[productTeam.pmm].name)}](${String(
            bioLink
          )})\n`
        }
        if (productTeam.issue_labels) {
          for (let index = 0; index < productTeam.issue_labels.length; index++) {
            if (index === 0) {
              pageContent += '- Issue labels: '
            }
            if (index < productTeam.issue_labels.length - 1) {
              pageContent += `[${String(
                productTeam.issue_labels[index]
              )}](https://github.com/sourcegraph/sourcegraph/labels/${String(productTeam.issue_labels[index])}), `
            }
            if (index === productTeam.issue_labels.length - 1) {
              pageContent += `[${String(
                productTeam.issue_labels[index]
              )}](https://github.com/sourcegraph/sourcegraph/labels/${String(productTeam.issue_labels[index])})`
              pageContent += '\n'
            }
          }
        }
      }
    }
  }
  return pageContent
}
