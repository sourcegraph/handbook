import React from 'react'

import { getTeamMemberTree, TeamMember } from '../lib/fetchTeam'

interface Props {
    teamMemberTree: TeamMember
}

function TeamMemberListItem({ teamMember }: { teamMember: TeamMember }): JSX.Element {
    return (
        <li>
            {teamMember.name}
            <ul>
                {teamMember.reports.map(t => (
                    <TeamMemberListItem key={t.name} teamMember={t} />
                ))}
            </ul>
        </li>
    )
}

export default function GeneratedPage({ teamMemberTree }: { teamMemberTree: TeamMember }): JSX.Element {
    return (
        <div className="container">
            <section id="content">
                <h1>Team</h1>
                <ul>
                    <TeamMemberListItem teamMember={teamMemberTree} />
                </ul>
            </section>
        </div>
    )
}

export async function getStaticProps(): Promise<{ props: Props }> {
    const teamMemberTree = await getTeamMemberTree()
    return { props: { teamMemberTree } }
}
