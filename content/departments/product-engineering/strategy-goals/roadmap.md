# Roadmap

This roadmap is designed for communication and planning purposes and is subject to change.

## FY23

See the [prod/eng strategy page](index.md) for more context on the themes for this year: 5 use cases and improving the admin experience.

<table>
   <tr>
      <th>Quarter</th>
      <th>5 use cases</th>
      <th>Admin experience</th>
   </tr>
   <tr>
      <th>Q1</th>
      <td>
         <p>Focus: learn how to do use case driven development</p>
         <ul>
            <li>🚀 <a href="https://about.sourcegraph.com/code-insights">Code insights GA</a></li>
            <li>🚀 <a href="https://sourcegraph.com/notebooks?tab=getting-started">Search notebooks GA</a></li>
            <li>Dependency search for Go and NPM</li>
            <li>Batch changes on Bitbucket Cloud</li>
         </ul>
         <div><a href="https://about.sourcegraph.com/blog/release/3.37/">Feb - 3.37: Code insights GA, code intel performance</a></div>
         <div><a href="https://about.sourcegraph.com/blog/release/3.38/">Mar - 3.38: Search notebooks, NPM dependency search</a></div>
         <div>Apr - 3.39: Coming soon on April 22nd</a></div>
      </td>
      <td>
        <p></p>
        <ul>
           <li>🚀 <a href="https://docs.sourcegraph.com/admin/install/kubernetes/helm">Helm Charts</a></li>
           <li>SOC2 Type1</li>
           <li>Improved performance for monorepos up to 15 GB</li>
           <li>Sub-repo permissions for Perforce</li>
        </ul>
      </td>
   </tr>
   <tr>
      <th>Q2</th>
      <td>
         <p>Focus: Finding and fixing vulnerabilities</p>
         <ul>
            <li>Code insights commit trends, change heatmaps, new charting options</li>
            <li>99% accurate symbol rename using batch changes</li>
            <li>Batch changes library</li>
            <li>Dependency search for PyPi and JVM</li>
         </ul>
      </td>
      <td>
         <ul>
            <li>Bitbucket Cloud permissions</li>
            <li>CVS permissions</li>
            <li>Gerrit permissions</li>
         </ul>
      </td>
   </tr>
   <tr>
      <th>Q3</th>
      <td>
         <p>Focus: TBD</p>
         <ul>
            <li>Code insights integrates 3rd party data</li>
            <li>Code insights monitoring/alerting/recurring reports</li>
         </ul>
      </td>
      <td>
         <p></p>
         <ul>
            <li>SOC2 Type 2</li>
         </ul>
      </td>
   </tr>
   <tr>
      <th>Q4</th>
      <td>
        <p>Focus: TBD</p>
        <ul>
          <li>Code insights and batch changes integration</li>
          <li>Server-side batch changes GA</li>
          <li>Auto-indexing for precise code intelligence GA</li>
        </ul>
      </td>
      <td>
         <p></p>
         <ul>
            <li>WCAG 2.1 AA Accessibility</li>
         </ul>
      </td>
   </tr>
</table>

### Use case roadmap

<table>
   <tr>
      <th>Use case</th>
      <th>Q1</th>
      <th>Q2</th>
      <th>Q3</th>
      <th>Q4</th>
   </tr>
   <tr>
      <td>
         <strong>Finding and fixing vulnerabilities</strong>
         <p><em>Sourcegraph is the security remediation tool that CISOs and security teams use to assess, implement, and verify security patches across their code. (Many other tools focus on alerting, but Sourcegraph is used to close the loop.)</em></p>
      </td>
      <td>
        <ul>
           <li>Search notebooks GA allows you to provide a step by step search guide to your teams on how to find the vulnerable code that they own.</li>
           <li>Code insights GA makes it so you can verify that a vulnerability has been remediated at the source of truth - the code</li>
           <li>Dependency search means you can understand if libraries you are dependent on are vulnerable to a CVE</li>
        </ul>
      </td>
      <td>
         <ul>
            <li>Understanding which areas of the code may be stale and haven't changed in a long time can surface potential audit/review efforts that catch vulnerabilities before they go live.</li>
         </ul>
      </td>
      <td></td>
      <td></td>
   </tr>
   <tr>
      <td>
         <strong>Dev onboarding</strong>
         <p><em>Sourcegraph anchors technical onboarding inside the engineering organization and enables engineers to dive into unfamiliar code and get to "first bug fix or feature" quickly.</em></p>
      </td>
      <td>
         <ul>
            <li>Search Notebooks help create focused onboarding docs that stay up to date.</li>
         </ul>
      </td>
      <td>
         <ul>
            <li>Seeing change heatmaps can help someone understand which areas of the codebase they should focus on learning, and commit patterns (from a high level POV, not focused on individual performance) can help indicate how successful onboarding efforts are.</li>
         </ul>
      </td>
      <td></td>
      <td></td>
   </tr>
   <tr>
      <td>
         <strong>Incident response</strong>
         <p><em>Sourcegraph is the primary “step 2” incident response tool that devs turn to immediately after the first-line response tool (e.g., PagerDuty, Grafana) to locate the source of the issue and understand what needs to be patched to resolve it.</em></p>
      </td>
      <td>
         <ul>
            <li>Search notebooks allow on call devs to quickly track their debugging and document complex issues for others to understand.</li>
            <li>Dependency search helps to make sure the full breadth of </li>
         </ul>
      </td>
      <td>
         <ul>
            <li>Commit behavior helps you understand how fast/slow your response was, as well as how long after an incident you had to continue responding.</li>
         </ul>
      </td>
      <td></td>
      <td></td>
   </tr>
   <tr>
      <td>
         <strong>Code reuse</strong>
         <p><em>Sourcegraph is the way that devs discover libraries and learn how to reuse them. It's also how library maintainers monitor and understand usage.</em></p>
      </td>
      <td>
         <ul>
            <li>Code insights allows you to track adoption and deprecation of libraries.</li>
         </ul>
      </td>
      <td>
         <ul>
            <li>Seeing the frequency of various topics or APIs in commit messages, or frequent updating of key library files, can indicate high or low code reuse, so a customer can actually measure their efforts to increase code reuse more.</li>
         </ul>
      </td>
      <td></td>
      <td></td>
   </tr>
   <tr>
      <td>
         <strong>Code health</strong>
         <p><em>Sourcegraph provides a dashboard source of truth for overall code structure and health. It makes visible the impact of changes on health and provides interventions for improving code health.</em></p>
      </td>
      <td>
         <ul>
            <li>Code insights is the lens into your code, helping you track code smells and health</li>
         </ul>
      </td>
      <td>
         <ul>
            <li>Change heatmaps let customers understand which areas of the code change often, which can indicate brittle code or healthy code, depending on the use of a file</li>
         </ul>
      </td>
      <td></td>
      <td></td>
   </tr>
</table>
