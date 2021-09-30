echo "Cloning the handbook from sourcegraph/about"
rm -rf content/ about/
git clone https://github.com/sourcegraph/about
mv about/handbook/ content/
rm -rf about