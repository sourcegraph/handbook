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

function make_maturity_link_relative(link) {
    if (link.substring(0, 4) == "http") {
        return link
    } else {
        return ".." + link
    }
}

function generate_maturity(features, maturity_levels, pricing_tiers, product_areas, product_orgs) {
    const maturity_file = 'content/product/maturity.md';
    var maturity_content = "# Product Features & Maturity\n";

    Object.keys(product_areas).forEach((product_area) => {
        maturity_content += "\n## " + product_areas[product_area].title + "\n"
        maturity_content += "[" + product_orgs[product_areas[product_area].product_org].title + " Strategy](" + make_maturity_link_relative(product_orgs[product_areas[product_area].product_org].strategy_link) + ") | "
        maturity_content += "[" + product_areas[product_area].title + " Strategy](" + make_maturity_link_relative(product_areas[product_area].strategy_link) + ")\n"
        if (product_areas[product_area].description) {
            maturity_content += "\n__" + product_areas[product_area].description + "__\n"
        }
        if (product_areas[product_area].limitations_link) {
            maturity_content += "\n- Limitations: " + make_maturity_link_relative(product_areas[product_area].limitations_link) + "\n"
        }

        Object.keys(features).forEach((feature) => {
            if (features[feature].product_area == product_area) {
                maturity_content += "\n### " + features[feature].title + "\n"
                if (features[feature].documentation_link) {
                    maturity_content += "[Documentation](" + make_maturity_link_relative(features[feature].documentation_link) + ")\n"
                }
                if (features[feature].description) {
                    maturity_content += "__" + features[feature].description + "__\n"
                }
                maturity_content += "\n- Maturity: " + maturity_levels[features[feature].maturity].title + "\n"
                if (features[feature].available_in) {
                    maturity_content += "- Available in: " + features[feature].available_in + "\n" //TODO render this properly
                }
                if (features[feature].limitations_link) {
                    maturity_content += "- Limitations: " + features[feature].limitations_link + "\n" //TODO render as links
                }
                //TODO render compatibility matrix
            }
        });
    });
    writeFile(maturity_file, maturity_content, function (err) {
        if (err) throw err;
        console.log('Created ' + maturity_file);
    });
}

// Load YAML files
const features = yaml_load('data/features.yml');
const maturity_levels = yaml_load('data/maturity_levels.yml');
const pricing_tiers = yaml_load('data/pricing_tiers.yml');
const product_areas = yaml_load('data/product_areas.yml');
const product_orgs = yaml_load('data/product_orgs.yml');

generate_maturity(features, maturity_levels, pricing_tiers, product_areas, product_orgs);

