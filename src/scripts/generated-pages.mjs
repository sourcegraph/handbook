/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { readFile, writeFile } from 'fs/promises'

import { load } from 'js-yaml'

/**
 * @param {string} file
 * @returns {Promise<any>}
 */
async function readYamlFile(file) {
    return load(await readFile(file, 'utf8'))
}

/**
 * @param {string} link
 * @returns {string}
 */
function createRelativeProductLink(link) {
    if (link.startsWith('http')) {
        return link
    }
    return `..${link}`
}

async function generateMaturityPage(features, maturityLevels, productTeams, productOrgs) {
    const tiersFilePath = 'content/product/feature_maturity.md'
    let pageContent = '# Product Features by Maturity\n'
    pageContent +=
        'This page is intended as a reference of features by maturity level; each item will link you to our documentation,\n'
    pageContent += 'and you can also see what level of maturity each feature is currently at.\n'
    pageContent +=
        'You may also be interested in seeing our [feature compatibility](feature_compatibility.md) matrix.\n'

    pageContent += '\n## Maturity Definitions\n'
    pageContent += '\nSee feature documentation for specifics on any limitations/plans for removal.\n'
    for (const maturityLevel of Object.values(maturityLevels)) {
        pageContent += `- ${maturityLevel.title}: ${maturityLevel.definition}\n`
    }

    for (const [productTeamName, productTeam] of Object.entries(productTeams)) {
        pageContent += `\n## ${productTeam.title}\n`
        if (productOrgs[productTeam.product_org].strategy_link) {
            const strategyUrl = createRelativeProductLink(productOrgs[productTeam.product_org].strategy_link)
            pageContent += ` ([${productOrgs[productTeam.product_org].title} Strategy](${strategyUrl}) | `
        }
        if (productTeam.strategy_link) {
            pageContent += `[${productTeam.title} Strategy](${createRelativeProductLink(productTeam.strategy_link)}))\n`
        }
        if (productTeam.pm) {
            const bioLink = `../company/team/index.md#${teamMembers[productTeam.pm].name
                .toLowerCase()
                .replace(/\s+/g, '-')}`
            pageContent += `\nProduct Manager: [${teamMembers[productTeam.pm].name}](${bioLink})`
        }

        pageContent += '\n|Feature|Maturity|\n'
        pageContent += '|-------|--------|\n'

        for (const feature of Object.values(features)) {
            if (feature.product_team === productTeamName) {
                if (feature.documentation_link) {
                    const url = createRelativeProductLink(feature.documentation_link)
                    pageContent += `|[${feature.title}](${url})`
                } else {
                    pageContent += `|${feature.title}`
                }
                pageContent += `|${maturityLevels[feature.maturity].title}|\n`
            }
        }
    }

    await writeFile(tiersFilePath, pageContent)
    console.log('  ' + tiersFilePath)
}

async function generateCompatibilityPage(features, productTeams, productOrgs, codeHosts) {
    const tiersFile = 'content/product/feature_compatibility.md'
    let pageContent = '# Product Feature Compatibility\n'
    pageContent +=
        'This page is intended as a reference of features by code host compatibility; each item will link you to our documentation.\n'
    pageContent += 'You may also be interested in seeing our [feature maturity](feature_maturity.md) matrix.\n'

    pageContent += '\n## Code Hosts\n'
    pageContent += '\nSourcegraph tracks compatibility with a number of external code hosts:\n'
    for (const codeHost of Object.values(codeHosts)) {
        pageContent += `- [${codeHost.title}](${codeHost.info_link})\n`
    }

    for (const [productTeamName, productTeam] of Object.entries(productTeams)) {
        pageContent += `\n## ${productTeam.title}\n`
        const productOrg = productOrgs[productTeam.product_org]
        if (productOrg.strategy_link) {
            const strategyUrl = createRelativeProductLink(productOrg.strategy_link)
            pageContent += ` ([${productOrgs[productTeam.product_org].title} Strategy](${strategyUrl}) | `
        }
        if (productTeam.strategy_link) {
            pageContent += `[${productTeam.title} Strategy](${createRelativeProductLink(productTeam.strategy_link)}))\n`
        }
        if (productTeam.pm) {
            const bioLink = `../company/team/index.md#${teamMembers[productTeam.pm].name
                .toLowerCase()
                .replace(/\s+/g, '-')}`
            pageContent += `\nProduct Manager: [${teamMembers[productTeam.pm].name}](${bioLink})`
        }

        pageContent += '\n|Feature|'
        for (const codeHost of Object.values(codeHosts)) {
            pageContent += `${codeHost.title} |`
        }
        pageContent += '\n|-------|'
        for (const codeHost of Object.values(codeHosts)) {
            pageContent += '-|'
        }
        pageContent += '\n'

        for (const feature of Object.values(features)) {
            if (feature.product_team === productTeamName) {
                if (feature.documentation_link) {
                    pageContent += `|[${feature.title}](${createRelativeProductLink(feature.documentation_link)})`
                } else {
                    pageContent += `|${feature.title}`
                }
                pageContent += '|'
                for (const codeHostName of Object.keys(codeHosts)) {
                    if (feature.compatibility === undefined) {
                        pageContent += ' |'
                    } else if (feature.compatibility[codeHostName]) {
                        pageContent += '✔️|'
                    } else {
                        pageContent += ' |'
                    }
                }
                pageContent += '\n'
            }
        }
    }

    await writeFile(tiersFile, pageContent)
    console.log('  ' + tiersFile)
}

async function generateTeamPage(teamMembers) {
    const teamFile = 'content/company/team/index.md'
    let pageContent = '# Sourcegraph team\n'
    pageContent +=
        'This page contains brief bios of our team. Teammates may also have a personal documentation page in this directory that is named according to their Sourcegraph email address(e.g.you@sourcegraph.com -> you.md).\n'
    pageContent +=
        'For help adding yourself to this page, check out [these instructions](../../editing/add-yourself-to-team-page.md).\n'

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
    await writeFile(teamFile, pageContent)
    console.log('  ' + teamFile)
}

async function generateProductTeamsPage(teamMembers, productTeams, productOrgs) {
    const productTeamsFilePath = 'content/product/product_teams.md'
    let pageContent = '# Sourcegraph product teams\n'
    pageContent +=
        'This page contains a list of the product orgs and teams at Sourcegraph, and important information about them.\n'
    pageContent += 'You may also be interested in seeing our [feature maturity](feature_maturity.md) or\n'
    pageContent += '[feature code host compatibility](feature_compatibility.md) matrices.\n'

    for (const [productOrgName, productOrg] of Object.entries(productOrgs)) {
        pageContent += `\n## ${productOrg.title}\n\n`
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

    await writeFile(productTeamsFilePath, pageContent)
    console.log('  ' + productTeamsFilePath)
}

console.log('Creating generated pages..')

// Load YAML files
const features = await readYamlFile('data/features.yml')
const maturityLevels = await readYamlFile('data/maturity_levels.yml')
const productTeams = await readYamlFile('data/product_teams.yml')
const productOrgs = await readYamlFile('data/product_orgs.yml')
const codeHosts = await readYamlFile('data/code_hosts.yml')
const teamMembers = await readYamlFile('data/team.yml')

await generateMaturityPage(features, maturityLevels, productTeams, productOrgs, teamMembers)
await generateCompatibilityPage(features, productTeams, productOrgs, codeHosts, teamMembers)
await generateTeamPage(teamMembers)
await generateProductTeamsPage(teamMembers, productTeams, productOrgs)

console.log('Successfully created all generated pages.\n')
