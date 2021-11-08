import { load } from 'js-yaml'
import { readFile } from 'fs/promises'

/**
 * @param {string} file
 * @returns {Promise<any>}
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

export async function generateMaturityDefinitions(): string {
    const maturityLevels = await readYamlFile('data/maturity_levels.yml')
    let pageContent = ''
    for (const maturityLevel of Object.values(maturityLevels)) {
        pageContent += `- ${maturityLevel.title}: ${maturityLevel.definition}\n`
    }
    return pageContent
}

export async function generateFeatureMaturityLevels(): string {
    const features = await readYamlFile('data/features.yml')
    const maturityLevels = await readYamlFile('data/maturity_levels.yml')
    const productTeams = await readYamlFile('data/product_teams.yml')
    const productOrgs = await readYamlFile('data/product_orgs.yml')
    const teamMembers = await readYamlFile('data/team.yml')
    let pageContent = ''
    for (const [productTeamName, productTeam] of Object.entries(productTeams)) {
        let featureCount = 0
        let areaContent = `\n### ${productTeam.title}\n`
        if (productOrgs[productTeam.product_org].strategy_link) {
            const strategyUrl = createRelativeProductLink(productOrgs[productTeam.product_org].strategy_link)
            areaContent += ` ([${productOrgs[productTeam.product_org].title} Strategy](${strategyUrl}) | `
        }
        if (productTeam.strategy_link) {
            areaContent += `[${productTeam.title} Strategy](${createRelativeProductLink(productTeam.strategy_link)}))\n`
        }
        if (productTeam.pm) {
            const bioLink = `../company/team/index.md#${teamMembers[productTeam.pm].name
                .toLowerCase()
                .replace(/\s+/g, '-')}`
            areaContent += `\nProduct Manager: [${teamMembers[productTeam.pm].name}](${bioLink})`
        }

        areaContent += '\n|Feature|Maturity|\n'
        areaContent += '|-------|--------|\n'

        for (const feature of Object.values(features)) {
            if (feature.product_team === productTeamName) {
                featureCount++
                if (feature.documentation_link) {
                    const url = createRelativeProductLink(feature.documentation_link)
                    areaContent += `|[${feature.title}](${url})`
                } else {
                    areaContent += `|${feature.title}`
                }
                areaContent += `|${maturityLevels[feature.maturity].title}|\n`
            }
        }
        if (featureCount > 0) {
            pageContent += areaContent
        }
    }
    return pageContent
}

export async function generateFeatureCodeHostCompatibilities(): string {
    const features = await readYamlFile('data/features.yml')
    const productTeams = await readYamlFile('data/product_teams.yml')
    const productOrgs = await readYamlFile('data/product_orgs.yml')
    const teamMembers = await readYamlFile('data/team.yml')
    const codeHosts = await readYamlFile('data/code_hosts.yml')
    let pageContent = ''
    for (const [productTeamName, productTeam] of Object.entries(productTeams)) {
        let featureCount = 0
        let areaContent = `\n### ${productTeam.title}\n`
        const productOrg = productOrgs[productTeam.product_org]
        if (productOrg.strategy_link) {
            const strategyUrl = createRelativeProductLink(productOrg.strategy_link)
            areaContent += ` ([${productOrgs[productTeam.product_org].title} Strategy](${strategyUrl}) | `
        }
        if (productTeam.strategy_link) {
            areaContent += `[${productTeam.title} Strategy](${createRelativeProductLink(productTeam.strategy_link)}))\n`
        }
        if (productTeam.pm) {
            const bioLink = `../company/team/index.md#${teamMembers[productTeam.pm].name
                .toLowerCase()
                .replace(/\s+/g, '-')}`
            areaContent += `\nProduct Manager: [${teamMembers[productTeam.pm].name}](${bioLink})`
        }

        areaContent += '\n|Feature|'
        for (const codeHost of Object.values(codeHosts)) {
            areaContent += `${codeHost.title} |`
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
                    areaContent += `|[${feature.title}](${createRelativeProductLink(feature.documentation_link)})`
                } else {
                    areaContent += `|${feature.title}`
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

export async function generateCodeHostsList(): string {
    const codeHosts = await readYamlFile('data/code_hosts.yml')
    let pageContent = ''
    for (const codeHost of Object.values(codeHosts)) {
        pageContent += `- [${codeHost.title}](${codeHost.info_link})\n`
    }
    return pageContent
}

export async function generateTeamMembersList() {
    const teamMembers = await readYamlFile('data/team.yml')
    let pageContent = ''
    for (const teamMember of Object.values(teamMembers)) {
        pageContent += `\n## ${teamMember.name}\n`
        if (teamMember.role) {
            pageContent += `${teamMember.role}`
            if (teamMember.location) {
                pageContent += ` (${teamMember.location})`
            }
            pageContent += '\n\n'
        } else if (teamMember.location) {
            pageContent += ` (${teamMember.location})\n\n`
        }
        if (teamMember.description) {
            pageContent += `${teamMember.description}\n`
        }
        if (teamMember.email) {
            pageContent += `- Email: [${teamMember.email}](mailto:${teamMember.email})\n`
        }
        if (teamMember.github) {
            pageContent += `- GitHub: [${teamMember.github}](https://github.com/${teamMember.github})\n`
        }
        if (teamMember.pronouns) {
            pageContent += `- Pronouns: ${teamMember.pronouns}\n`
        }
        if (teamMember.pronunciation) {
            pageContent += `- Pronunciation: ${teamMember.pronunciation}\n`
        }
        if (teamMember.links) {
            pageContent += `- Other links: ${teamMember.links}\n`
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
        pageContent += `\n### ${productOrg.title}\n\n`
        if (productOrg.strategy_link) {
            pageContent += `- [Strategy Page](${createRelativeProductLink(productOrg.strategy_link)})\n`
        }
        if (productOrg.strategy_link) {
            const bioLink = `../company/team/index.md#${teamMembers[productOrg.pm].name
                .toLowerCase()
                .replace(/\s+/g, '-')}`
            pageContent += `- Product Director: [${teamMembers[productOrg.pm].name}](${bioLink})\n`
        }
        for (const productTeam of Object.values(productTeams)) {
            if (productTeam.product_org === productOrgName) {
                pageContent += `\n\n### ${productTeam.title}\n`
                if (productTeam.strategy_link) {
                    pageContent += `- [Strategy Page](${createRelativeProductLink(productTeam.strategy_link)})\n`
                }
                if (productTeam.pm) {
                    const bioLink = `../company/team/index.md#${teamMembers[productTeam.pm].name
                        .toLowerCase()
                        .replace(/\s+/g, '-')}`
                    pageContent += `- Product Manager: [${teamMembers[productTeam.pm].name}](${bioLink})`
                }
                if (productTeam.issue_labels) {
                    for (let index = 0; index < productTeam.issue_labels.length; index++) {
                        if (index === 0) {
                            pageContent += '\n- Issue labels: '
                        }
                        if (index < productTeam.issue_labels.length - 1) {
                            pageContent += `[${productTeam.issue_labels[index]}](https://github.com/sourcegraph/sourcegraph/labels/${productTeam.issue_labels[index]}), `
                        }
                        if (index === productTeam.issue_labels.length - 1) {
                            pageContent += `[${productTeam.issue_labels[index]}](https://github.com/sourcegraph/sourcegraph/labels/${productTeam.issue_labels[index]})`
                            pageContent += '\n'
                        }
                    }
                }
            }
        }
    }
    return pageContent
}
