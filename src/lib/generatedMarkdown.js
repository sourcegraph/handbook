import { readFile } from 'fs/promises'

import { load } from 'js-yaml'

/**
 * @param file
 * @returns
 */
async function readYamlFile(file) {
  return load(await readFile(file, 'utf8'))
}

function createValidTeamAnchor(name) {
  return name.toLowerCase().replace(/\s+/g, '-')
}

function createBioLink(name) {
  const bioLinkUrlPrefix = '/team/index.md#'
  return `${bioLinkUrlPrefix}${String(createValidTeamAnchor(name))}`
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
  const teamMembers = await readYamlFile('data/team.yml')
  let pageContent = ''
  for (const [productTeamName, productTeam] of Object.entries(productTeams)) {
    let featureCount = 0
    let areaContent = `\n### ${String(productTeam.title)}\n`
    let notes = ''
    if (productTeam.strategy_link) {
      areaContent += `[${String(productTeam.title)} Strategy](${String(productTeam.strategy_link)})\n`
    }
    if (productTeam.pm) {
      if (!teamMembers[productTeam.pm]) {
        throw new Error(`no team member: ${String(productTeam.pm)}`)
      }
      const bioLink = createBioLink(teamMembers[productTeam.pm].name)
      areaContent += `\nProduct Manager: [${String(teamMembers[productTeam.pm].name)}](${String(bioLink)})`
    }

    areaContent += '\n|Feature|Maturity|\n'
    areaContent += '|-------|--------|\n'
    for (const feature of Object.values(features)) {
      if (feature.product_team === productTeamName) {
        featureCount++
        if (feature.documentation_link) {
          areaContent += `|[${String(feature.title)}](${String(feature.documentation_link)})`
        } else {
          areaContent += `|${String(feature.title)}`
        }
        areaContent += `|${String(maturityLevels[feature.maturity].title)}|\n`
        if (feature.note) {
          notes += `- ${String(feature.note)} \n `
        }
      }
    }
    if (notes) {
      areaContent += `\n Notes: \n ${notes}`
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
  const teamMembers = await readYamlFile('data/team.yml')
  const codeHosts = await readYamlFile('data/code_hosts.yml')
  let pageContent = ''
  for (const [productTeamName, productTeam] of Object.entries(productTeams)) {
    let featureCount = 0
    let areaContent = `\n### ${String(productTeam.title)}\n`
    if (productTeam.strategy_link) {
      areaContent += `[${String(productTeam.title)} Strategy](${String(productTeam.strategy_link)}))\n`
    }
    if (productTeam.pm) {
      const bioLink = createBioLink(teamMembers[productTeam.pm].name)
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
      let incompatibleFeatureCount = 0
      let featureContent = ''
      if (feature.product_team === productTeamName && feature.compatibility !== undefined) {
        if (feature.documentation_link) {
          featureContent += `|[${String(feature.title)}](${String(feature.documentation_link)})`
        } else {
          featureContent += `|${String(feature.title)}`
        }
        featureContent += '|'
        for (const codeHostName of Object.keys(codeHosts)) {
          if (feature.compatibility[codeHostName] === false) {
            incompatibleFeatureCount++
            featureCount++
          }
          if (feature.compatibility === undefined) {
            featureContent += ' |'
          } else if (feature.compatibility[codeHostName]) {
            featureContent += '✔️|'
          } else {
            featureContent += ' |'
          }
        }
        featureContent += '\n'
      }
      if (incompatibleFeatureCount > 0) {
        areaContent += featureContent
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

function getReports(teamMembers, role_slug, indent) {
  let content = ''
  for (const [teamMemberName, teamMember] of Object.entries(teamMembers)) {
    if (teamMember.reports_to === role_slug) {
      const spaces = ' '.repeat(indent * 2)
      content += `${spaces}- [${String(teamMember.name)}](/team/index.md#${String(
        createValidTeamAnchor(teamMember.name)
      )}), ${String(teamMember.role)}\n`
      if (teamMember.manager_role_slug) {
        const reportsIndent = (content += getReports(
          teamMembers,
          teamMember.manager_role_slug,
          parseInt(indent, 10) + 1
        ))
      }
    }
  }
  return content
}

export async function generateReportingStructure(starting_role) {
  const teamMembers = await readYamlFile('data/team.yml')
  let pageContent = ''
  for (const [teamMemberName, teamMember] of Object.entries(teamMembers)) {
    if (teamMember.manager_role_slug === starting_role) {
      pageContent += `- [${String(teamMember.name)}](/team/index.md#${String(
        createValidTeamAnchor(teamMember.name)
      )}), ${String(teamMember.role)}\n`
    }
  }
  pageContent += getReports(teamMembers, starting_role, 1)
  return pageContent
}

export async function generateTeamMembersList() {
  const teamMembers = await readYamlFile('data/team.yml')
  let pageContent = ''
  for (const teamMember of Object.values(teamMembers)) {
    if (teamMember.hide_on_team_page) {
      continue
    }
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

export function generateProductTeamLeads(productTeam, teamMembers) {
  let pageContent = ''
  if (productTeam.strategy_link) {
    pageContent += `- [Strategy Page](${String(productTeam.strategy_link)})\n`
  }
  if (productTeam.pm) {
    const bioLink = createBioLink(teamMembers[productTeam.pm].name)
    pageContent += `- Product Manager: [${String(teamMembers[productTeam.pm].name)}](${String(bioLink)})\n`
  }
  if (productTeam.em) {
    const bioLink = createBioLink(teamMembers[productTeam.em].name)
    pageContent += `- Engineering Manager: [${String(teamMembers[productTeam.em].name)}](${String(bioLink)})\n`
  }
  if (productTeam.tl) {
    const bioLink = createBioLink(teamMembers[productTeam.tl].name)
    pageContent += `- Tech Lead: [${String(teamMembers[productTeam.tl].name)}](${String(bioLink)})\n`
  }
  if (productTeam.design) {
    const bioLink = createBioLink(teamMembers[productTeam.design].name)
    pageContent += `- Product Designer: [${String(teamMembers[productTeam.design].name)}](${String(bioLink)})\n`
  }
  if (productTeam.pmm) {
    const bioLink = createBioLink(teamMembers[productTeam.pmm].name)
    pageContent += `- Product Marketing Manager: [${String(teamMembers[productTeam.pmm].name)}](${String(bioLink)})\n`
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
  return pageContent
}

export async function generateProductTeamsList() {
  const productTeams = await readYamlFile('data/product_teams.yml')
  const teamMembers = await readYamlFile('data/team.yml')
  let pageContent = ''
  for (const productTeam of Object.values(productTeams)) {
    pageContent += `\n\n### ${String(productTeam.title)} team\n`
    pageContent += generateProductTeamLeads(productTeam, teamMembers)
  }
  return pageContent
}

export async function generateProductTeamLeadsList(teamId) {
  const productTeams = await readYamlFile('data/product_teams.yml')
  const teamMembers = await readYamlFile('data/team.yml')
  const productTeam = productTeams[teamId]
  return generateProductTeamLeads(productTeam, teamMembers)
}

export async function generateProductTeamUseCaseList(product_team) {
  const features = await readYamlFile('data/features.yml')
  const useCases = await readYamlFile('data/use_cases.yml')
  let pageContent = ''
  let useCaseCount = 0
  for (const [useCaseName, useCase] of Object.entries(useCases)) {
    let useCaseContent = `### [${String(useCase.title)}](${String(useCase.link)})\n\n`
    let featureCount = 0
    for (const feature of Object.values(features)) {
      if (feature.product_team === product_team) {
        if (!['deprecated', 'not_implemented'].includes(feature.maturity)) {
          if (feature.use_cases) {
            if (feature.use_cases.includes(useCaseName)) {
              useCaseCount++
              featureCount++
              if (feature.documentation_link) {
                useCaseContent += `- [${String(feature.title)}](${String(feature.documentation_link)})\n`
              } else {
                useCaseContent += `- ${String(feature.title)}\n`
              }
            }
          }
        }
      }
    }
    if (featureCount > 0) {
      pageContent += useCaseContent
    }
  }
  if (useCaseCount === 0) {
    pageContent += '- None'
  }
  return pageContent
}

export async function generateUseCaseFeatureList(use_case) {
  const features = await readYamlFile('data/features.yml')
  let pageContent = ''
  let featureCount = 0
  for (const feature of Object.values(features)) {
    if (!['deprecated', 'not_implemented'].includes(feature.maturity)) {
      if (feature.use_cases) {
        if (feature.use_cases.includes(use_case)) {
          featureCount++
          if (feature.documentation_link) {
            pageContent += `- [${String(feature.title)}](${String(feature.documentation_link)})\n`
          } else {
            pageContent += `- ${String(feature.title)}\n`
          }
        }
      }
    }
  }
  if (featureCount === 0) {
    pageContent += '- None'
  }
  return pageContent
}

/**
 * Used in cases where a team in comprised of individuals who report to different
 * people, but work on the same thing.
 */

export async function generateTeamOrgChart(team) {
  const productTeams = await readYamlFile('data/product_teams.yml')
  const teamMembers = await readYamlFile('data/team.yml')
  let pageContent = ''
  const productTeam = productTeams[team]
  if (productTeam.pm) {
    const bioLink = createBioLink(teamMembers[productTeam.pm].name)
    pageContent += `- [${String(teamMembers[productTeam.pm].name)}](${String(bioLink)}), Product Manager\n`
  }
  if (productTeam.em) {
    const bioLink = createBioLink(teamMembers[productTeam.em].name)
    pageContent += await generateReportingStructure(teamMembers[productTeam.em].manager_role_slug)
  }
  if (productTeam.design) {
    const bioLink = createBioLink(teamMembers[productTeam.design].name)
    pageContent += `- [${String(teamMembers[productTeam.design].name)}](${String(bioLink)}), Product Designer\n`
  }
  if (productTeam.pmm) {
    const bioLink = createBioLink(teamMembers[productTeam.pmm].name)
    pageContent += `- [${String(teamMembers[productTeam.pmm].name)}](${String(bioLink)}), Product Marketing Manager\n`
  }
  return pageContent
}

export async function generateGlossary() {
  const glossarySections = await readYamlFile('data/glossary.yml')
  let pageContent = ''

  for (const [sectionName, section] of Object.entries(glossarySections)) {
    pageContent += `## ${String(sectionName.charAt(0).toUpperCase() + sectionName.slice(1))} terms\n\n`
    pageContent += '|Term|Definition|\n|----|----------|\n'
    for (const entry of section) {
      pageContent += `|${String(entry.term)}|${String(entry.definition)}|\n`
    }
    pageContent += '\n'
  }

  return pageContent
}

export async function generateDeploymentOptions() {
  const features = await readYamlFile('data/features.yml')
  const productTeams = await readYamlFile('data/product_teams.yml')
  const teamMembers = await readYamlFile('data/team.yml')
  const deploymentOptions = await readYamlFile('data/deployment_options.yml')
  const maturityLevels = await readYamlFile('data/maturity_levels.yml')
  let pageContent = ''

  for (const [productTeamName, productTeam] of Object.entries(productTeams)) {
    let featureCount = 0
    let areaContent = `\n### ${String(productTeam.title)}\n`
    if (productTeam.strategy_link) {
      areaContent += `[${String(productTeam.title)} Strategy](${String(productTeam.strategy_link)}))\n`
    }
    if (productTeam.pm) {
      const bioLink = createBioLink(teamMembers[productTeam.pm].name)
      areaContent += `\nProduct Manager: [${String(teamMembers[productTeam.pm].name)}](${String(bioLink)})`
    }

    areaContent += '\n|Feature|'
    for (const deploymentOption of Object.values(deploymentOptions)) {
      areaContent += `${String(deploymentOption.title)} |`
    }
    areaContent += '\n|-------|'
    for (let index = 0; index < Object.values(deploymentOptions).length; index++) {
      areaContent += '-|'
    }
    areaContent += '\n'

    for (const feature of Object.values(features)) {
      if (feature.product_team === productTeamName && feature.deployment !== undefined) {
        featureCount++
        if (feature.documentation_link) {
          areaContent += `|[${String(feature.title)}](${String(feature.documentation_link)})`
        } else {
          areaContent += `|${String(feature.title)}`
        }
        areaContent += '|'
        for (const deploymentOption of Object.keys(deploymentOptions)) {
          if (feature.deployment === undefined) {
            areaContent += ' |'
          } else if (feature.deployment[deploymentOption] === 'ga') {
            areaContent += '✔️|'
          } else {
            areaContent += `${String(maturityLevels[feature.deployment[deploymentOption]].title)}|`
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

export async function generateGuildRoster(guildReference) {
  const guilds = await readYamlFile('data/guilds.yml')
  const teamMembers = await readYamlFile('data/team.yml')

  let pageContent = ''
  const guild = guilds[guildReference]

  pageContent += '## Members\n'
  const leaderReference = guild.leader
  if (leaderReference) {
    const name = teamMembers[leaderReference].name
    pageContent += `- [${String(name)}](${String(createBioLink(name))}) - Guild Leader\n`
  }
  for (const memberReference of guild.members) {
    if (memberReference === leaderReference) {
      continue
    }
    const name = teamMembers[memberReference].name
    pageContent += `- [${String(name)}](${String(createBioLink(name))})\n`
  }
  if (guild.leadership_sponsors) {
    pageContent += '### Leadership Sponsor'
    if (guild.leadership_sponsors.length > 1) {
      pageContent += 's'
    }
    pageContent += '\n'

    for (const reference of guild.leadership_sponsors) {
      const name = teamMembers[reference].name
      pageContent += `- [${String(name)}](${String(createBioLink(name))})\n`
    }
  }
  return pageContent
}
