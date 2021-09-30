# This is a temporary script that replaces the `content` directory with a cloned
# copy from the old handbook.

# When it's time to remove this:
# 1. Delete this script
# 2. In package.json, remove `./src/scripts/clone-handbook.sh` from the
#    "netlify-build" command.

echo "Cloning the handbook from sourcegraph/about"
rm -rf content/ about/
git clone https://github.com/sourcegraph/about
mv about/handbook/ content/
rm -rf about
