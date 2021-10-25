import { load } from 'js-yaml';
import { readFileSync, writeFile } from 'fs';
import { exit } from 'process';

function yaml_load(file) {
    try {
        return load(readFileSync(file, 'utf8'));
    } catch (e) {
        console.log(e);
        exit(-1);
    }
}

function make_product_link_relative(link) {
    if (link.substring(0, 4) == "http") {
        return link
    } else {
        return ".." + link
    }
}

function generate_maturity_page(features, maturity_levels, product_areas, product_orgs) {
    const tiers_file = 'content/product/features_maturity.md';
    var page_content = "# Product Features by Maturity\n";
    page_content += "This page is intended as a reference of features by maturity level; each item will link you to our documentation,\n"
    page_content += "and you can also see what level of maturity each feature is currently at.\n"
    page_content += "You may also be interested in seeing our [feature compatibility](features_compatibility.md)\n"
    page_content += "or [feature tiers](features_tiers.md) matrices.\n"

    page_content += "\n## Maturity Definitions\n"
    page_content += "\nSee feature documentation for specifics on any limitations/plans for removal.\n"
    Object.keys(maturity_levels).forEach((maturity_level) => {
        page_content += "- " + maturity_levels[maturity_level].title + ": " + maturity_levels[maturity_level].definition + "\n"
    });

    Object.keys(product_areas).forEach((product_area) => {
        page_content += "\n## " + product_areas[product_area].title + "\n"
        if (product_areas[product_area].description) {
            page_content += "\n_" + product_areas[product_area].description + "_"
        }
        page_content += " ([" + product_orgs[product_areas[product_area].product_org].title + " Strategy](" + make_product_link_relative(product_orgs[product_areas[product_area].product_org].strategy_link) + ") | "
        page_content += "[" + product_areas[product_area].title + " Strategy](" + make_product_link_relative(product_areas[product_area].strategy_link) + "))\n"

        page_content += "\n|Feature|Maturity|\n"
        page_content += "|-------|--------|\n"

        Object.keys(features).forEach((feature) => {
            if (features[feature].product_area == product_area) {
                if (features[feature].documentation_link) {
                    page_content += "|[" + features[feature].title + "](" + make_product_link_relative(features[feature].documentation_link) + ")"
                } else {
                    page_content += "|" + features[feature].title
                }
                if (features[feature].description) {
                    page_content += ": _" + features[feature].description + "_"
                }
                page_content += "|" + maturity_levels[features[feature].maturity].title + "|\n"
            };
        });
    });

    writeFile(tiers_file, page_content, function (err) {
        if (err) throw err;
        console.log('Created ' + tiers_file);
    });
}

function generate_tiers_page(features, pricing_tiers, product_areas, product_orgs) {
    const tiers_file = 'content/product/features_tiers.md';
    var page_content = "# Product Features by Tier\n";
    page_content += "The consumer facing pricing page is on our [about site pricing page](https://about.sourcegraph.com/pricing)\n"
    page_content += "and contains a marketing-focused list of features rather than the complete list here.\n"
    page_content += "This page is intended as a reference of features by pricing tier; each item will link you to our documentation,\n"
    page_content += "and you can also see what level of maturity each feature is currently at.\n"
    page_content += "You may also be interested in seeing our [feature compatibility](features_compatibility.md) or\n"
    page_content += "[feature maturity](features_maturity.md) matrices.\n"

    page_content += "\n## Pricing Tiers\n"
    page_content += "\nYou can learn more about our pricing tiers here:\n"
    Object.keys(pricing_tiers).forEach((pricing_tier) => {
        page_content += "- [" + pricing_tiers[pricing_tier].title + "](" + pricing_tiers[pricing_tier].info_link + ")\n"
    });

    Object.keys(product_areas).forEach((product_area) => {
        page_content += "\n## " + product_areas[product_area].title + "\n"
        if (product_areas[product_area].description) {
            page_content += "\n_" + product_areas[product_area].description + "_"
        }
        page_content += " ([" + product_orgs[product_areas[product_area].product_org].title + " Strategy](" + make_product_link_relative(product_orgs[product_areas[product_area].product_org].strategy_link) + ") | "
        page_content += "[" + product_areas[product_area].title + " Strategy](" + make_product_link_relative(product_areas[product_area].strategy_link) + "))\n"

        page_content += "\n|Feature|"
        Object.keys(pricing_tiers).forEach((pricing_tier) => {
            page_content += pricing_tiers[pricing_tier].title + " |"
        });
        page_content += "\n|-------|"
        Object.keys(pricing_tiers).forEach((pricing_tier) => {
            page_content += "-|"
        });
        page_content += "\n"

        Object.keys(features).forEach((feature) => {
            if (features[feature].product_area == product_area) {
                if (features[feature].documentation_link) {
                    page_content += "|[" + features[feature].title + "](" + make_product_link_relative(features[feature].documentation_link) + ")"
                } else {
                    page_content += "|" + features[feature].title
                }
                if (features[feature].description) {
                    page_content += ": _" + features[feature].description + "_"
                }
                page_content += "|"
                Object.keys(pricing_tiers).forEach((pricing_tier) => {
                    if (features[feature].available_in[pricing_tier]) {
                        page_content += "✔️|"
                    } else {
                        page_content += " |"
                    }
                });
                page_content += "\n"
            };
        });
    });

    writeFile(tiers_file, page_content, function (err) {
        if (err) throw err;
        console.log('Created ' + tiers_file);
    });
}

function generate_compatibility_page(features, product_areas, product_orgs, code_hosts) {
    const tiers_file = 'content/product/features_compatibility.md';
    var page_content = "# Product Feature Compatibility\n";
    page_content += "This page is intended as a reference of features by code host compatibility; each item will link you to our documentation.\n"
    page_content += "You may also be interested in seeing our [feature tier](features_tiers.md) or\n"
    page_content += "[feature maturity](features_maturity.md) matrices.\n"

    page_content += "\n## Code Hosts\n"
    page_content += "\nSourcegraph tracks compatibility with a number of external code hosts:\n"
    Object.keys(code_hosts).forEach((code_host) => {
        page_content += "- [" + code_hosts[code_host].title + "](" + code_hosts[code_host].info_link + ")\n"
    });

    Object.keys(product_areas).forEach((product_area) => {
        page_content += "\n## " + product_areas[product_area].title + "\n"
        if (product_areas[product_area].description) {
            page_content += "\n_" + product_areas[product_area].description + "_"
        }
        page_content += " ([" + product_orgs[product_areas[product_area].product_org].title + " Strategy](" + make_product_link_relative(product_orgs[product_areas[product_area].product_org].strategy_link) + ") | "
        page_content += "[" + product_areas[product_area].title + " Strategy](" + make_product_link_relative(product_areas[product_area].strategy_link) + "))\n"

        page_content += "\n|Feature|"
        Object.keys(code_hosts).forEach((code_host) => {
            page_content += code_hosts[code_host].title + " |"
        });
        page_content += "\n|-------|"
        Object.keys(code_hosts).forEach((code_host) => {
            page_content += "-|"
        });
        page_content += "\n"

        Object.keys(features).forEach((feature) => {
            if (features[feature].product_area == product_area) {
                if (features[feature].documentation_link) {
                    page_content += "|[" + features[feature].title + "](" + make_product_link_relative(features[feature].documentation_link) + ")"
                } else {
                    page_content += "|" + features[feature].title
                }
                if (features[feature].description) {
                    page_content += ": _" + features[feature].description + "_"
                }
                page_content += "|"
                Object.keys(code_hosts).forEach((code_host) => {
                    if (features[feature].compatibility[code_host]) {
                        page_content += "✔️|"
                    } else {
                        page_content += " |"
                    }
                });
                page_content += "\n"
            };
        });
    });

    writeFile(tiers_file, page_content, function (err) {
        if (err) throw err;
        console.log('Created ' + tiers_file);
    });
}

// Load YAML files
const features = yaml_load('data/features.yml');
const maturity_levels = yaml_load('data/maturity_levels.yml');
const pricing_tiers = yaml_load('data/pricing_tiers.yml');
const product_areas = yaml_load('data/product_areas.yml');
const product_orgs = yaml_load('data/product_orgs.yml');
const code_hosts = yaml_load('data/code_hosts.yml');

generate_maturity_page(features, maturity_levels, product_areas, product_orgs);
generate_tiers_page(features, pricing_tiers, product_areas, product_orgs);
generate_compatibility_page(features, product_areas, product_orgs, code_hosts)

