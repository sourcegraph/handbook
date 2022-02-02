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

let errors = 0

// iterate through features and make sure they point to valid product teams and maturities
for (const feature of Object.values(features)) {
    if (!Object.prototype.hasOwnProperty.call(maturityLevels, feature.maturity)) {
        console.log(`Feature contains unknown maturity level: ${JSON.stringify(feature)}`)
        errors++
    }
    if (!Object.prototype.hasOwnProperty.call(productTeams, feature.product_team)) {
        console.log(`Feature contains unknown team: ${JSON.stringify(feature)}`)
        errors++
    }
    // TODO also validate code hosts
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

if (errors > 0) {
    throw new Error(`${errors} consistency errors found`)
} else {
    console.log('No consistency errors found')
}
