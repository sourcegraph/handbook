import { readFile } from 'fs/promises'

import { load } from 'js-yaml'

/**
 * @param file
 * @returns
 */
async function readYamlFile(file) {
    return load(await readFile(file, 'utf8'))
}

const codeHosts = await readYamlFile('data/code_hosts.yml')
const features = await readYamlFile('data/features.yml')
const maturityLevels = await readYamlFile('data/maturity_levels.yml')
const productTeams = await readYamlFile('data/product_teams.yml')
const teamMembers = await readYamlFile('data/team.yml')
const useCases = await readYamlFile('data/use_cases.yml')
const deploymentOptions = await readYamlFile('data/deployment_options.yml')
const guilds = await readYamlFile('data/guilds.yml')

let errors = ''

// iterate through features and make sure they point to valid use cases, product teams, and maturities
for (const feature of Object.values(features)) {
    if (!Object.prototype.hasOwnProperty.call(maturityLevels, feature.maturity)) {
        errors += `Feature contains unknown maturity level: ${JSON.stringify(feature)}\n\n`
    }
    if (!Object.prototype.hasOwnProperty.call(productTeams, feature.product_team)) {
        errors += `Feature contains unknown team: ${JSON.stringify(feature)}\n\n`
    }
    if (feature.use_cases) {
        for (const useCase of Object.values(feature.use_cases)) {
            if (!Object.prototype.hasOwnProperty.call(useCases, useCase)) {
                errors += `Feature contains unknown use case: ${JSON.stringify(feature)}\n\n`
            }
        }
    }
    if (feature.code_hosts) {
        for (const codeHost of Object.values(feature.code_hosts)) {
            if (!Object.prototype.hasOwnProperty.call(codeHosts, codeHost)) {
                errors += `Feature contains unknown code host: ${JSON.stringify(feature)}\n\n`
            }
        }
    }
    if (feature.deployment) {
        for (const deploymentOption of Object.keys(feature.deployment)) {
            if (!Object.prototype.hasOwnProperty.call(deploymentOptions, deploymentOption)) {
                errors += `Feature contains unknown deployment option ${String(deploymentOption)}: ${JSON.stringify(
                    feature
                )}\n\n`
            }
        }
        for (const deploymentOption of Object.values(feature.deployment)) {
            if (!Object.prototype.hasOwnProperty.call(maturityLevels, deploymentOption)) {
                errors += `Feature contains unknown deployment option ${String(deploymentOption)}: ${JSON.stringify(
                    feature
                )}\n\n`
            }
        }
    }
}

// iterate through product teams and make sure they point to valid team members
for (const productTeam of Object.values(productTeams)) {
    if (productTeam.em) {
        if (!Object.prototype.hasOwnProperty.call(teamMembers, productTeam.em)) {
            errors += `Product team contains unknown EM: ${JSON.stringify(productTeam)}\n\n`
        }
    }
    if (productTeam.pm) {
        if (!Object.prototype.hasOwnProperty.call(teamMembers, productTeam.pm)) {
            errors += `Product team contains unknown PM: ${JSON.stringify(productTeam)}\n\n`
        }
    }
    if (productTeam.design) {
        if (!Object.prototype.hasOwnProperty.call(teamMembers, productTeam.design)) {
            errors += `Product team contains unknown designer: ${JSON.stringify(productTeam)}\n\n`
        }
    }
    if (productTeam.pmm) {
        if (!Object.prototype.hasOwnProperty.call(teamMembers, productTeam.pmm)) {
            errors += `Product team contains unknown PMM: ${JSON.stringify(productTeam)}\n\n`
        }
    }
}

// iterate through use cases and make sure they point to valid team members
for (const useCase of Object.values(useCases)) {
    if (useCase.sponsors) {
        if (useCase.sponsors.engineering) {
            if (!Object.prototype.hasOwnProperty.call(teamMembers, useCase.sponsors.engineering)) {
                errors += `Use case contains unknown engineering sponsor: ${JSON.stringify(useCase)}`
            }
        }
        if (useCase.sponsors.product) {
            if (!Object.prototype.hasOwnProperty.call(teamMembers, useCase.sponsors.product)) {
                errors += `Use case contains unknown product sponsor: ${JSON.stringify(useCase)}`
            }
        }
        if (useCase.sponsors.design) {
            if (!Object.prototype.hasOwnProperty.call(teamMembers, useCase.sponsors.design)) {
                errors += `Use case contains unknown design sponsor: ${JSON.stringify(useCase)}`
            }
        }
        if (useCase.sponsors.marketing) {
            if (!Object.prototype.hasOwnProperty.call(teamMembers, useCase.sponsors.marketing)) {
                errors += `Use case contains unknown marketing sponsor: ${JSON.stringify(useCase)}`
            }
        }
    }
}

// iterate through team members and make sure their manager exists
for (const teamMember of Object.values(teamMembers)) {
    if (teamMember.reports_to) {
        if (teamMember.reports_to !== 'none') {
            let manager_exists = false
            for (const potentialManager of Object.values(teamMembers)) {
                if (potentialManager.manager_role_slug) {
                    if (teamMember.reports_to === potentialManager.manager_role_slug) {
                        manager_exists = true
                    }
                }
            }
            if (manager_exists === false) {
                errors += `Team member reports to non-existent manager role slug: ${JSON.stringify(teamMember)}\n\n`
            }
        }
    }
}

for (const guild of Object.values(guilds)) {
    if (guild.leader) {
        if (!Object.prototype.hasOwnProperty.call(teamMembers, guild.leader)) {
            errors += `Guild ${JSON.stringify(guild.name)} contains unknown leader: ${JSON.stringify(guild.leader)}\n\n`
        }
    }
    for (const member of Object.values(guild.members)) {
        if (!Object.prototype.hasOwnProperty.call(teamMembers, member)) {
            errors += `Guild ${JSON.stringify(guild.name)} contains unknown member: ${JSON.stringify(member)}\n\n`
        }
    }
}

if (errors) {
    throw new Error(errors)
} else {
    console.log('No consistency errors found')
}
