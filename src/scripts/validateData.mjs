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
const productOrgs = await readYamlFile('data/product_orgs.yml')
const teamMembers = await readYamlFile('data/team.yml')
const engineeringOwnership = await readYamlFile('data/engineering_ownership.yml')
const useCases = await readYamlFile('data/use_cases.yml')
const deploymentOptions = await readYamlFile('data/deployment_options.yml')
const guilds = await readYamlFile('data/guilds.yml')

let errors = 0

// iterate through features and make sure they point to valid use cases, product teams, and maturities
for (const feature of Object.values(features)) {
    if (!Object.prototype.hasOwnProperty.call(maturityLevels, feature.maturity)) {
        console.log(`Feature contains unknown maturity level: ${JSON.stringify(feature)}`)
        errors++
    }
    if (!Object.prototype.hasOwnProperty.call(productTeams, feature.product_team)) {
        console.log(`Feature contains unknown team: ${JSON.stringify(feature)}`)
        errors++
    }
    if (feature.use_cases) {
        for (const useCase of Object.values(feature.use_cases)) {
            if (!Object.prototype.hasOwnProperty.call(useCases, useCase)) {
                console.log(`Feature contains unknown use case: ${JSON.stringify(feature)}`)
                errors++
            }
        }
    }
    if (feature.code_hosts) {
        for (const codeHost of Object.values(feature.code_hosts)) {
            if (!Object.prototype.hasOwnProperty.call(codeHosts, codeHost)) {
                console.log(`Feature contains unknown code host: ${JSON.stringify(feature)}`)
                errors++
            }
        }
    }
    if (feature.deployment) {
        for (const deploymentOption of Object.keys(feature.deployment)) {
            if (!Object.prototype.hasOwnProperty.call(deploymentOptions, deploymentOption)) {
                console.log(
                    `Feature contains unknown deployment option ${String(deploymentOption)}: ${JSON.stringify(feature)}`
                )
                errors++
            }
        }
        for (const deploymentOption of Object.values(feature.deployment)) {
            if (!Object.prototype.hasOwnProperty.call(maturityLevels, deploymentOption)) {
                console.log(
                    `Feature contains unknown deployment option ${String(deploymentOption)}: ${JSON.stringify(feature)}`
                )
                errors++
            }
        }
    }
}

// iterate through product teams and make sure they point to valid product orgs and team members
for (const productTeam of Object.values(productTeams)) {
    if (!Object.prototype.hasOwnProperty.call(productOrgs, productTeam.product_org)) {
        console.log(`Product team contains unknown org: ${JSON.stringify(productTeam)}`)
        errors++
    }
    if (productTeam.em) {
        if (!Object.prototype.hasOwnProperty.call(teamMembers, productTeam.em)) {
            console.log(`Product team contains unknown EM: ${JSON.stringify(productTeam)}`)
            errors++
        }
    }
    if (productTeam.pm) {
        if (!Object.prototype.hasOwnProperty.call(teamMembers, productTeam.pm)) {
            console.log(`Product team contains unknown PM: ${JSON.stringify(productTeam)}`)
            errors++
        }
    }
    if (productTeam.design) {
        if (!Object.prototype.hasOwnProperty.call(teamMembers, productTeam.design)) {
            console.log(`Product team contains unknown designer: ${JSON.stringify(productTeam)}`)
            errors++
        }
    }
    if (productTeam.pmm) {
        if (!Object.prototype.hasOwnProperty.call(teamMembers, productTeam.pmm)) {
            console.log(`Product team contains unknown PMM: ${JSON.stringify(productTeam)}`)
            errors++
        }
    }
}

// iterate through product orgs and make sure they point to valid team members
for (const productOrg of Object.values(productOrgs)) {
    if (productOrg.em) {
        if (!Object.prototype.hasOwnProperty.call(teamMembers, productOrg.em)) {
            console.log(`Product org contains unknown EM: ${JSON.stringify(productOrg)}`)
            errors++
        }
    }
    if (productOrg.pm) {
        if (!Object.prototype.hasOwnProperty.call(teamMembers, productOrg.em)) {
            console.log(`Product org contains unknown PM: ${JSON.stringify(productOrg)}`)
            errors++
        }
    }
}

// iterate through team members and make sure their manager exists
for (const teamMember of Object.values(teamMembers)) {
    if (teamMember.reports_to) {
        let manager_exists = false
        for (const potentialManager of Object.values(teamMembers)) {
            if (potentialManager.manager_role_slug) {
                if (teamMember.reports_to === potentialManager.manager_role_slug) {
                    manager_exists = true
                }
            }
        }
        if (manager_exists === false) {
            console.log(`Team member reports to non-existent manager role slug: ${JSON.stringify(teamMember)}`)
        }
    }
}

// iterate through engineering feature list and ensure product org and product team exist
for (const thing of Object.values(engineeringOwnership)) {
    if (thing.product_org) {
        if (!Object.prototype.hasOwnProperty.call(productOrgs, thing.product_org)) {
            console.log(`Engineering ownership item contains unknown product org: ${JSON.stringify(thing)}`)
            errors++
        }
    }
    if (thing.product_team) {
        if (!Object.prototype.hasOwnProperty.call(productTeams, thing.product_team)) {
            console.log(`Engineering ownership item contains unknown product team: ${JSON.stringify(thing)}`)
            errors++
        }
    }
}

for (const guild of Object.values(guilds)) {
    if (guild.leader) {
        if (!Object.prototype.hasOwnProperty.call(teamMembers, guild.leader)) {
            console.log(`Guild ${JSON.stringify(guild.name)} contains unknown leader: ${JSON.stringify(guild.leader)}`)
            errors++
        }
    }
    for (const member of Object.values(guild.members)) {
        if (!Object.prototype.hasOwnProperty.call(teamMembers, member)) {
            console.log(`Guild ${JSON.stringify(guild.name)} contains unknown member: ${JSON.stringify(member)}`)
            errors++
        }
    }
}

if (errors > 0) {
    throw new Error(`${errors} consistency errors found`)
} else {
    console.log('No consistency errors found')
}
