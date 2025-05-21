Folio
node v18.18.0

# React + Vite

docker build -f Dockerfile.dev -t react-dev .

docker run \
 -p 5173:5173 \
 -v ${PWD}:/app \
 -v /app/node_modules \
 -e CHOKIDAR_USEPOLLING=true \
 react-dev
