export interface TeamMember {
    name: string
    reports: TeamMember[]
}

interface BambooEmployee {
    displayName: string
    preferredName: string
    firstName: string
    lastName: string
    supervisor: string
}

interface BambooEmployeeWithReports extends BambooEmployee {
    reports: BambooEmployeeWithReports[]
}

interface BambooDirectoryResponse {
    employees: BambooEmployee[]
}

export async function fetchTeam(): Promise<BambooEmployee[]> {
    const authorizationHeader = Buffer.from(`${process.env.BAMBOO_API_KEY ?? ''}:x`).toString('base64')
    const response = await fetch('https://api.bamboohr.com/api/gateway.php/sourcegraph/v1/employees/directory', {
        method: 'GET',
        headers: {
            accept: 'application/json',
            authorization: `Basic ${authorizationHeader}`,
        },
    })

    const body = (await response.json()) as BambooDirectoryResponse

    return body.employees
}

export async function getTeamMemberTree(): Promise<TeamMember> {
    const employees = await fetchTeam()
    const rootEmployee = employees.find(employee => employee.supervisor === '')

    if (!rootEmployee) {
        throw new Error('No root employee found')
    }

    const supervisorMap = new Map<string, BambooEmployee>()
    for (const employee of employees) {
        supervisorMap.set(employee.displayName, employee)
    }

    function addReports(employee: BambooEmployee): BambooEmployeeWithReports {
        const reports = employees.filter(e => e.supervisor === employee.displayName)
        return { ...employee, reports: reports.map(addReports) }
    }

    const employeeTreeWithReports = addReports(rootEmployee)

    function convertEmployeeTreeToTeamMembers(employee: BambooEmployeeWithReports): TeamMember {
        return {
            name: `${employee.preferredName ?? employee.firstName} ${employee.lastName}`,
            reports: employee.reports.map(convertEmployeeTreeToTeamMembers),
        }
    }

    return convertEmployeeTreeToTeamMembers(employeeTreeWithReports)
}
