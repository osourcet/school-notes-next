#!/bin/sh

# Build for production
PROJECTNAME=`basename "$PWD" | tr '[:upper:]' '[:lower:]'`
DIR=$PWD

echo '--- Build ${PROJECTNAME}-App for production ---'

echo '\nBuild ${PROJECTNAME}-App for production\n'
cd $DIR/backend; yarn build & PINEST=$!
cd $DIR/frontend; yarn build:production & PIVUE=$!

# Create production bundle
echo '\nCreate production bundle\n'
cd $DIR; mkdir production; mkdir production/dist; mkdir production/dist/static;

wait $PINEST
cp -r $DIR/backend/dist/* $DIR/production/dist
cp $DIR/backend/package.json $DIR/production/

wait $PIVUE
cp -r $DIR/frontend/dist/* $DIR/production/dist/static/

echo '\nProduction bundle ready\n'

# Build Dockerimage

echo '\nBuild Dockerimage\n'

docker build -t ${PROJECTNAME}:latest .

docker save --output ${PROJECTNAME}_dockerimage.tar ${PROJECTNAME}