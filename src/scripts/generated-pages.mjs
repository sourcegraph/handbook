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

async function generateMaturityPage(features, maturityLevels, productAreas, productOrgs) {
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

    for (const [productAreaName, productArea] of Object.entries(productAreas)) {
        pageContent += `\n## ${productArea.title}\n`
        const strategyUrl = createRelativeProductLink(productOrgs[productArea.product_org].strategy_link)
        pageContent += ` ([${productOrgs[productArea.product_org].title} Strategy](${strategyUrl}) | `
        pageContent += `[${productArea.title} Strategy](${createRelativeProductLink(productArea.strategy_link)}))\n`
        if (productArea.pm) {
            const bioLink = `../company/team/index.md#${teamMembers[productArea.pm].name.toLowerCase().replace(/\s+/g, '-')}`
            pageContent += `\nProduct Manager: [${teamMembers[productArea.pm].name}](${bioLink})`
        }

        pageContent += '\n|Feature|Maturity|\n'
        pageContent += '|-------|--------|\n'

        for (const feature of Object.values(features)) {
            if (feature.product_area === productAreaName) {
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

async function generateCompatibilityPage(features, productAreas, productOrgs, codeHosts) {
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

    for (const [productAreaName, productArea] of Object.entries(productAreas)) {
        pageContent += `\n## ${productArea.title}\n`
        const productOrg = productOrgs[productArea.product_org]
        const strategyUrl = createRelativeProductLink(productOrg.strategy_link)
        pageContent += ` ([${productOrgs[productArea.product_org].title} Strategy](${strategyUrl}) | `
        pageContent += `[${productArea.title} Strategy](${createRelativeProductLink(productArea.strategy_link)}))\n`
        if (productArea.pm) {
            const bioLink = `../company/team/index.md#${teamMembers[productArea.pm].name.toLowerCase().replace(/\s+/g, '-')}`
            pageContent += `\nProduct Manager: [${teamMembers[productArea.pm].name}](${bioLink})`
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
            if (feature.product_area === productAreaName) {
                if (feature.documentation_link) {
                    pageContent += `|[${feature.title}](${createRelativeProductLink(feature.documentation_link)})`
                } else {
                    pageContent += `|${feature.title}`
                }
                pageContent += '|'
                for (const codeHostName of Object.keys(codeHosts)) {
                    if (feature.compatibility[codeHostName]) {
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
        if (teamMember.pronouns) {
            pageContent += `- Pronouns: ${teamMember.pronouns}\n`
        }
        if (teamMember.pronunciation) {
            pageContent += `- Pronunciation: ${teamMember.pronunciation}\n`
        }
        if (teamMember.github) {
            pageContent += `- GitHub: ${teamMember.github}\n`
        }
        if (teamMember.links) {
            pageContent += `- Links: ${teamMember.links}\n`
        }
    }
    await writeFile(teamFile, pageContent)
    console.log('  ' + teamFile)
}

console.log('Creating generated pages..')

// Load YAML files
const features = await readYamlFile('data/features.yml')
const maturityLevels = await readYamlFile('data/maturity_levels.yml')
const productAreas = await readYamlFile('data/product_areas.yml')
const productOrgs = await readYamlFile('data/product_orgs.yml')
const codeHosts = await readYamlFile('data/code_hosts.yml')
const teamMembers = await readYamlFile('data/team.yml')

await generateMaturityPage(features, maturityLevels, productAreas, productOrgs, teamMembers)
await generateCompatibilityPage(features, productAreas, productOrgs, codeHosts, teamMembers)
await generateTeamPage(teamMembers)

console.log('Successfully created all generated pages.\n')
