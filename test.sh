#!/bin/sh

# Build for testing
PROJECTNAME=`basename "$PWD" | tr '[:upper:]' '[:lower:]'`
DIR=$PWD

echo '--- Build ${PROJECTNAME}-App for testing ---'

echo '\nBuild ${PROJECTNAME}-App for testing\n'
cd $DIR/backend; yarn build & PINEST=$!
cd $DIR/frontend; yarn build:production & PIVUE=$!

# Create test bundle
echo '\nCreate test bundle'
cd $DIR; mkdir test/; mkdir test/dist; mkdir test/dist/static;

wait $PINEST
cp -r $DIR/backend/dist/* $DIR/test/dist
cp $DIR/backend/package.json $DIR/test/

wait $PIVUE
cp -r $DIR/frontend/dist/* $DIR/test/dist/static/

echo '\ntest bundle ready\n'

# Build Dockerimage

echo '\nBuild Dockerimage\n'

docker build -t $PROJECTNAME:test -f test.dockerfile .

rm -dr test/

if [ $1 ] && [ $1 -gt 1000 ]
then
    PORT=$1
else
    PORT=8080
fi

# Run Dockerimage

docker run --name ${PROJECTNAME}_test -p $PORT:3000 --env-file .env $PROJECTNAME:test