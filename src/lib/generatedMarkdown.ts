import { readFile } from 'fs/promises'

import { load } from 'js-yaml'

/**
 * @param file
 * @returns
 */
async function readYamlFile(file: string): Promise<any> {
    return load(await readFile(file, 'utf8'))
}

function createRelativeProductLink(link: string): string {
    if (link.startsWith('http')) {
        return link
    }
    return `..${link}`
}

export async function generateMaturityDefinitions(): Promise<string> {
    const maturityLevels = await readYamlFile('data/maturity_levels.yml')
    let pageContent = ''
    for (const maturityLevel of Object.values(maturityLevels)) {
        pageContent += `- ${String(maturityLevel.title)}: ${String(maturityLevel.definition)}\n`
    }
    return pageContent
}

export async function generateFeatureMaturityLevels(): Promise<string> {
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
            areaContent += ` ([${String(productOrgs[productTeam.product_org].title)} Strategy](${String(
                strategyUrl
            )}) | `
        }
        if (productTeam.strategy_link) {
            areaContent += `[${String(productTeam.title)} Strategy](${createRelativeProductLink(
                productTeam.strategy_link
            )}))\n`
        }
        if (productTeam.pm) {
            const bioLink = `../company/team/index.md#${String(
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

export async function generateFeatureCodeHostCompatibilities(): Promise<string> {
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
            areaContent += ` ([${String(productOrgs[productTeam.product_org].title)} Strategy](${String(
                strategyUrl
            )}) | `
        }
        if (productTeam.strategy_link) {
            areaContent += `[${String(productTeam.title)} Strategy](${createRelativeProductLink(
                productTeam.strategy_link
            )}))\n`
        }
        if (productTeam.pm) {
            const bioLink = `../company/team/index.md#${String(
                teamMembers[productTeam.pm].name.toLowerCase().replace(/\s+/g, '-')
            )}`
            areaContent += `\nProduct Manager: [${String(teamMembers[productTeam.pm].name)}](${String(bioLink)})`
        }

        areaContent += '\n|Feature|'
        for (const codeHost of Object.values(codeHosts)) {
            areaContent += `${String(codeHost.title)} |`
        }
        areaContent += '\n|-------|'
        for (const codeHost of Object.values(codeHosts)) {
            areaContent += '-|'
        }
        areaContent += '\n'

        for (const feature of Object.values(features)) {
            if (feature.product_team === productTeamName) {
                featureCount++
                if (feature.documentation_link) {
                    areaContent += `|[${String(feature.title)}](${createRelativeProductLink(
                        feature.documentation_link
                    )})`
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

export async function generateCodeHostsList(): Promise<string> {
    const codeHosts = await readYamlFile('data/code_hosts.yml')
    let pageContent = ''
    for (const codeHost of Object.values(codeHosts)) {
        pageContent += `- [${String(codeHost.title)}](${String(codeHost.info_link)})\n`
    }
    return pageContent
}

export async function generateTeamMembersList(): Promise<string> {
    const teamMembers = await readYamlFile('data/team.yml')
    let pageContent = ''
    for (const teamMember of Object.values(teamMembers)) {
        pageContent += `\n## ${String(teamMember.name)}\n`
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

export async function generateProductTeamsList(): Promise<string> {
    const productTeams = await readYamlFile('data/product_teams.yml')
    const productOrgs = await readYamlFile('data/product_orgs.yml')
    const teamMembers = await readYamlFile('data/team.yml')
    let pageContent = ''
    for (const [productOrgName, productOrg] of Object.entries(productOrgs)) {
        pageContent += `\n### ${String(productOrg.title)}\n\n`
        if (productOrg.strategy_link) {
            pageContent += `- [Strategy Page](${createRelativeProductLink(productOrg.strategy_link)})\n`
        }
        if (productOrg.strategy_link) {
            const bioLink = `../company/team/index.md#${String(
                teamMembers[productOrg.pm].name.toLowerCase().replace(/\s+/g, '-')
            )}`
            pageContent += `- Product Director: [${String(teamMembers[productOrg.pm].name)}](${String(bioLink)})\n`
        }
        for (const productTeam of Object.values(productTeams)) {
            if (productTeam.product_org === productOrgName) {
                pageContent += `\n\n### ${String(productTeam.title)}\n`
                if (productTeam.strategy_link) {
                    pageContent += `- [Strategy Page](${createRelativeProductLink(productTeam.strategy_link)})\n`
                }
                if (productTeam.pm) {
                    const bioLink = `../company/team/index.md#${String(
                        teamMembers[productTeam.pm].name.toLowerCase().replace(/\s+/g, '-')
                    )}`
                    pageContent += `- Product Manager: [${String(teamMembers[productTeam.pm].name)}](${String(
                        bioLink
                    )})`
                }
                if (productTeam.issue_labels) {
                    for (let index = 0; index < productTeam.issue_labels.length; index++) {
                        if (index === 0) {
                            pageContent += '\n- Issue labels: '
                        }
                        if (index < productTeam.issue_labels.length - 1) {
                            pageContent += `[${String(
                                productTeam.issue_labels[index]
                            )}](https://github.com/sourcegraph/sourcegraph/labels/${String(
                                productTeam.issue_labels[index]
                            )}), `
                        }
                        if (index === productTeam.issue_labels.length - 1) {
                            pageContent += `[${String(
                                productTeam.issue_labels[index]
                            )}](https://github.com/sourcegraph/sourcegraph/labels/${String(
                                productTeam.issue_labels[index]
                            )})`
                            pageContent += '\n'
                        }
                    }
                }
            }
        }
    }
    return pageContent
}
